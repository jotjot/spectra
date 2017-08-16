/**
 * Created by acastillo on 7/5/16.
 */
const SpinSystem = require('./SpinSystem');
const AutoAssigner = require('./AutoAssigner');
const getOcleFromOptions = require('./getOcleFromOptions');
const nmrUtilities = require('spectra-nmr-utilities');
let OCLE;

function autoAssign(entry, options) {
    if (entry && entry.spectra && entry.spectra.nmr && entry.spectra.nmr[0].range || entry.spectra.nmr[0].region) {
        return assignmentFromPeakPicking(entry, options);
    }
    else {
        return assignmentFromRaw(entry, options);
    }
}

function assignmentFromRaw(entry, options) {
    //TODO Implement this method
    /*var molfile = entry.molfile;
     var spectra = entry.spectra;

     var molecule =  OCLE.Molecule.fromMolfile(molfile);

     molecule.addImplicitHydrogens();

     entry.molecule = molecule;
     entry.diaIDs = molecule.getGroupedDiastereotopicAtomIDs();

     //Simulate and process the 1H-NMR spectrum at 400MHz
     var jcampFile = molFiles[i].replace("mol_","h1_").replace(".mol",".jdx");
     var spectraData1H = SD.load(spectra.h1);//


     var signals = spectraData1H.nmrPeakDetection({nStddev:3, baselineRejoin:5, compute:false});
     spectra.solvent = spectraData1H.getParamString(".SOLVENT NAME", "unknown");
     entry.diaID = molecule.toIDCode();

     signals = integration(signals, molecule.countAtom("H"));

     for(var j=0;j< signals.length;j++){
     signals[j]._highlight=[-(j+1)];
     }

     spectra.h1PeakList = signals;

     return assignmentFromPeakPicking(entry,options);
     */
}

function assignmentFromPeakPicking(entry, options) {
    const predictor = options.predictor;
    var molecule, diaIDs, molfile;
    OCLE = getOcleFromOptions(options);
    var spectra = entry.spectra;
    if (!entry.general.ocl) {
        molecule = OCLE.Molecule.fromMolfile(entry.general.molfile);
        molecule.addImplicitHydrogens();
        diaIDs = molecule.getGroupedDiastereotopicAtomIDs();

        diaIDs.sort(function (a, b) {
            if (a.atomLabel == b.atomLabel) {
                return b.counter - a.counter;
            }
            return a.atomLabel < b.atomLabel ? 1 : -1;
        });
        entry.general.ocl = {value: molecule};
        entry.general.ocl.diaIDs = diaIDs;
        entry.general.ocl.diaID = molecule.getIDCode();
    }
    else {
        molecule = entry.general.ocl.value;
        diaIDs = entry.general.ocl.diaIDs;
    }

    let prediction = [];
    if(let nmr in entry.spectra.nmr) {
        prediction.push(predictByExperiment(molecule, nmr, options))
    }
    //H1 prediction

    if (!h1pred || h1pred.length === 0)
        return null;

    nmrUtilities.group(h1pred);


    var optionsError = {iteration: options.iteration || 1, learningRatio: options.learningRatio || 1};

    for (var j = 0; j < h1pred.length; j++) {
        h1pred[j].error = getError(h1pred[j], optionsError);
    }

    h1pred.sort(function (a, b) {
        if (a.atomLabel === b.atomLabel) {
            return b.nbAtoms - a.nbAtoms;
        }
        return a.atomLabel < b.atomLabel ? 1 : -1;
    });

    for(let nmr in spectra.nmr) {
        if(nmr.experiment === "1d") {
            nmr.range.sort(function (a, b) {
                return b.integral - a.integral
            });
        }
    }

    const spinSystem = new SpinSystem(spectra, prediction, options);
    const autoAssigner = new AutoAssigner(spinSystem, options);
    return autoAssigner.getAssignments();
}

function predictByExperiment(molecule, nmr, options) {
    if(nmr.experiment === "1d") {
        if(nmr.nucleus === "1H") {
            return options.predictor.proton(molecule, Object.assign({}, options, {ignoreLabile: false}));
        }

        if(nmr.nucleus === "13C") {
            return options.predictor.carbon(molecule, Object.assign({}, options, {ignoreLabile: false}));
        }
    }
    else {
        if(nmr.experiment === "cosy")
            return options.predictor.twoD();
    }
}

function getError(prediction, param) {
    //console.log(prediction)
    //Never use predictions with less than 3 votes
    if (prediction.std === 0 || prediction.ncs < 3) {
        return 20;
    }
    else {
        //factor is between 1 and +inf
        //console.log(prediction.ncs+" "+(param.iteration+1)+" "+param.learningRatio);
        var factor = 3 * prediction.std /
            (Math.pow(prediction.ncs, (param.iteration + 1) * param.learningRatio));//(param.iteration+1)*param.learningRatio*h1pred[indexSignal].ncs;
        return 3 * prediction.std + factor;
    }
    return 20;
}

module.exports = autoAssign;