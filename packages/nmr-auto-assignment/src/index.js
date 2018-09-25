/**
 * Created by acastillo on 7/5/16.
 */
const nmrUtilities = require('spectra-nmr-utilities');

const SpinSystem = require('./SpinSystem2');
const AutoAssigner = require('./AutoAssigner2');
const getOcleFromOptions = require('./getOcleFromOptions');

let OCLE;

async function autoAssign(entry, options) {
  if (entry && entry.spectra && entry.spectra.nmr && entry.spectra.nmr[0].range || entry.spectra.nmr[0].region) {
    return await assignmentFromPeakPicking(entry, options);
  } else {
    return await assignmentFromRaw(entry, options);
  }
}

async function assignmentFromRaw(entry, options) {
  // TODO Implement this method
  if (entry !== null && options !== null) {
    return null;
  }
  return null;
}

async function assignmentFromPeakPicking(entry, options) {
  // const predictor = options.predictor;
  var molecule, diaIDs;
  OCLE = getOcleFromOptions(options);
  var spectra = entry.spectra;
  if (!entry.general.ocl) {
    molecule = OCLE.Molecule.fromMolfile(entry.general.molfile);
    molecule.addImplicitHydrogens();
    diaIDs = molecule.getGroupedDiastereotopicAtomIDs();
    diaIDs.sort(function (a, b) {
      if (a.atomLabel === b.atomLabel) {
        return b.counter - a.counter;
      }
      return a.atomLabel < b.atomLabel ? 1 : -1;
    });

    entry.general.ocl = { value: molecule };
    entry.general.ocl.diaId = diaIDs;
    entry.general.ocl.diaID = molecule.getIDCode();
  } else {
    molecule = entry.general.ocl;
    diaIDs = entry.general.ocl.diaId;
  }

  // console.log(diaIDs);

  let prediction = [];
  // entry.spectra.nmr.forEach(nmr => {
  for (let i = 0; i < entry.spectra.nmr.length; i++) {
    let nmr = entry.spectra.nmr[i];
    let aa = await predictByExperiment(molecule, nmr, options);
    prediction.push(aa);
    if (nmr.experiment === '1d') {
      nmr.range.sort(function (a, b) {
        return b.integral - a.integral;
      });
    }
  }

  // console.log(JSON.stringify(prediction[0].length))
  const spinSystem = new SpinSystem(spectra, prediction, options);

  // console.log(JSON.stringify(spinSystem));

  const autoAssigner = new AutoAssigner(spinSystem, options);
  autoAssigner.buildAssignments();
  return autoAssigner;
}

async function predictByExperiment(molecule, nmr, options) {
  if (nmr.experiment === '1d') {
    let pred;
    if (nmr.nucleus === 'H') {
      try {
        pred = await options.predictor.proton(molecule, Object.assign({}, options));
      } catch (e) {
        pred = await options.predictor.spinus(molecule, Object.assign({}, options));
      }
      // pred = options.predictor.spinus(molecule, Object.assign({}, options, {ignoreLabile: false})).then(value => {console.log(value)});
    }

    if (nmr.nucleus === 'C') {
      pred = await options.predictor.carbon(molecule, Object.assign({}, options));
    }
    // console.log(pred.length)
    pred = nmrUtilities.group(pred);
    // console.log(pred.length)

    var optionsError = { iteration: options.iteration || 1, learningRatio: options.learningRatio || 1 };

    for (var j = 0; j < pred.length; j++) {
      pred[j].error = getError(pred[j], optionsError);
    }

    pred.sort(function (a, b) {
      if (a.atomLabel === b.atomLabel) {
        return b.atomIDs.length - a.atomIDs.length;
      }
      return a.atomLabel < b.atomLabel ? 1 : -1;
    });

    return pred;
  } else {
    if (nmr.experiment === 'cosy') {
      return molecule.getAllPaths({ fromLabel: 'H', toLabel: 'H', minLength: 0, maxLength: 3 });
    }
    return null;
    // TODO Add other 2D experiments
  }
}

function getError(prediction, param) {
  // console.log(prediction)
  // Never use predictions with less than 3 votes
  if (prediction.std === 0 || prediction.ncs < 5) {
    return 5;
  } else {
    // factor is between 1 and +inf
    // console.log(prediction.ncs+" "+(param.iteration+1)+" "+param.learningRatio);
    var factor = 3 * prediction.std /
            (Math.pow(prediction.ncs, (param.iteration + 1) * param.learningRatio));// (param.iteration+1)*param.learningRatio*h1pred[indexSignal].ncs;
    return 2*prediction.std;
  }
}

// /function getError(prediction, param) {
// console.log(prediction)
// Never use predictions with less than 3 votes
// let error = Math.abs(prediction.min - prediction.max) * 1.05;
// if(error < 0.1)
//    error = 0.1;
/* if(error === )
    if (prediction.std === 0 || prediction.ncs < 5) {
        return 1;
    } else {
        //factor is between 1 and +inf
        //console.log(prediction.ncs+" "+(param.iteration+1)+" "+param.learningRatio);
        var factor = 3 * prediction.std /
            (Math.pow(prediction.ncs, (param.iteration + 1) * param.learningRatio));//(param.iteration+1)*param.learningRatio*h1pred[indexSignal].ncs;
        return 2 * prediction.std + factor;
    }*/
// }

module.exports = autoAssign;
