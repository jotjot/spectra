import FS from 'fs';

import SD from 'spectra-data';

const logger = require('../logger');

function loadFile(filename) {
  return FS.readFileSync(filename).toString();
}

function createSpectraData(filename) {
  let spectrum = SD.NMR.fromJcamp(FS.readFileSync(filename).toString());
  return spectrum;
}

export function load(path, datasetName, options) {
  let OCLE = options.OCLE;
  // var keepMolfile = false || options.keepMolfile;
  // var keepMolecule = false || options.keepMolecule;
  let filter = { filter: '.id' };
  if (typeof options.filter === 'object') {
    filter = options.filter;
  }

  // var datasetName = "learningDataSet";
  // var path = "/Research/NMR/AutoAssign/data/"+datasetName;
  let molFiles = FS.readdirSync(`${path}/structure`).filter((line) => {
    return line.endsWith(filter.filter);
  });

  let max = molFiles.length;

  logger(max);

  let result = []; // new Array(max);
  // we could now loop on the sdf to add the int index
  for (let i = 0; i < max; i++) {
    try {
      let molfile = loadFile(`${path}/structure/${molFiles[i]}`);
      let molecule = OCLE.Molecule.fromIDCode(molfile);
      // logger(molecule)
      molecule.addImplicitHydrogens();
      let nH =
        molecule.getMolecularFormula().formula.replace(/.*H([0-9]+).*/, '$1') *
        1;
      let diaIDs = molecule.getGroupedDiastereotopicAtomIDs();
      diaIDs.sort(function(a, b) {
        if (a.atomLabel === b.atomLabel) {
          return b.counter - a.counter;
        }
        return a.atomLabel < b.atomLabel ? 1 : -1;
      });

      // const diaIdsH = molecule.getGroupedDiastereotopicAtomIDs("H");
      const linksOH = molecule.getAllPaths({
        fromLabel: 'H',
        toLabel: 'O',
        minLength: 1,
        maxLength: 1,
      });
      const linksNH = molecule.getAllPaths({
        fromLabel: 'H',
        toLabel: 'N',
        minLength: 1,
        maxLength: 1,
      });
      const linksClH = molecule.getAllPaths({
        fromLabel: 'H',
        toLabel: 'Cl',
        minLength: 1,
        maxLength: 1,
      });
      const atoms = {};
      const levels = [6, 5, 4, 3];
      let hasLabile = false;
      for (const diaId of diaIDs) {
        delete diaId._highlight;
        diaId.hose = OCLE.Util.getHoseCodesFromDiastereotopicID(diaId.oclID, {
          maxSphereSize: levels[0],
          type: 0,
        });

        for (const atomID of diaId.atoms) {
          atoms[atomID] = diaId.oclID;
        }

        diaId.isLabile = false;

        for (const linkOH of linksOH) {
          if (diaId.oclID === linkOH.fromDiaID) {
            diaId.isLabile = true;
            break;
          }
        }
        for (const linkNH of linksNH) {
          if (diaId.oclID === linkNH.fromDiaID) {
            diaId.isLabile = true;
            break;
          }
        }
        for (const linkClH of linksClH) {
          if (diaId.oclID === linkClH.fromDiaID) {
            diaId.isLabile = true;
            hasLabile = true;
            break;
          }
        }
      }
      // let ocl = {value: molecule};
      // ocl.diaIDs = diaIDs;
      // ocl.diaID = molecule.getIDCode();
      // ocl.nH = nH;
      logger(nH);
      // Simulate and process the 1H-NMR spectrum at 400MHz
      let jcampFile = molFiles[i].replace('.id', '.jdx');
      let spectraData1H = createSpectraData(`${path}/jdx/${jcampFile}`);

      let signals = spectraData1H.getRanges({
        nH: nH,
        realTop: true,
        thresholdFactor: 1,
        // minMaxRatio:0.001,
        clean: true,
        compile: true,
        format: 'new',
      });

      let sum = 0;
      for (var j = signals.length - 1; j >= 0; j--) {
        if (signals[j].from < 0 || signals[j].from > 11.8) {
          signals.splice(j, 1);
        } else {
          if (signals[j].from > 2.48 && signals[j].to < 2.59) {
            // && signals[j].signal[0].multiplicity === 'quint') {
            signals.splice(j, 1);
          } else if (
            signals[j].from > 7.1 &&
            signals[j].to < 7.3 &&
            signals[j].signal[0].multiplicity === 's'
          ) {
            signals.splice(j, 1);
          } else {
            sum += signals[j].integral;
          }
        }
      }
      // Restore the integral to nH
      for (j = signals.length - 1; j >= 0; j--) {
        signals[j].integral *= nH / sum;
      }
      // It seems that the compiler makes crazy things some times. We need to join the signals in the same range
      for (j = signals.length - 2; j >= 0; j--) {
        if (
          Math.abs(
            signals[j].to +
              signals[j].from -
              (signals[j + 1].to + signals[j + 1].from),
          ) <
          Math.abs(signals[j].to - signals[j].from) +
            Math.abs(signals[j + 1].to - signals[j + 1].from)
        ) {
          signals[j].from = Math.min(signals[j].from, signals[j + 1].from);
          signals[j].to = Math.max(signals[j].to, signals[j + 1].to);
          signals[j].integral += signals[j + 1].integral;
          signals[j].signal[0].multiplicity = 'm';
          signals[j].signal[0].delta = (signals[j].from + signals[j].to) / 2;
          signals.splice(j + 1, 1);
        }
      }

      signals.forEach((range, index) => {
        range.signalID = `1H_${index}`;
      });

      // logger(JSON.stringify(signals));
      let sample = {
        general: {
          ocl: {
            id: molecule.getIDCode(),
            atom: atoms,
            diaId: diaIDs,
            nH: nH,
            hasLabile,
          },
        }, // {ocl: ocl, molfile: molecule.toMolfileV3()},
        spectra: {
          nmr: [
            {
              nucleus: 'H',
              experiment: '1d',
              range: signals,
              solvent: spectraData1H.getParamString('.SOLVENT NAME', 'unknown'),
            },
          ],
        },
      };
      // {nucleus: ["H", "H"],  experiment: "cosy", region: cosyZones, solvent: cosy.getParamString(".SOLVENT NAME", "unknown")}
      result.push(sample);
    } catch (e) {
      logger(`Could not load the entry ${i} ${e}`);
    }
  }
  return result;
}
