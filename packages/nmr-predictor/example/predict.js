const Predictor = require('../src/index.js');

var molfile = `
Actelion Java MolfileCreator 1.0

 18 18  0  0  0  0  0  0  0  0999 V2000
    1.2205    2.7698   -0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    2.4412    2.0643   -0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.0226    2.0643   -0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    1.2093    4.2033   -0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    2.4300    0.6532   -0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.0338    0.6532   -0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    2.4300    4.9313   -0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    1.1869   -0.0523   -0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    3.0571    2.4171   -0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0
   -0.6386    2.4171   -0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0
    0.7067    5.0669   -0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0
    0.2101    4.1999   -0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0
    3.0459    0.3004   -0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0
   -0.6498    0.3004   -0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0
    3.2845    5.4408   -0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0
    2.9395    4.0768   -0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0
    1.9204    5.7858   -0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0
    1.1757   -0.7579   -0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0
  1  2  2  0  0  0  0
  1  3  1  0  0  0  0
  1  4  1  0  0  0  0
  2  5  1  0  0  0  0
  3  6  2  0  0  0  0
  4  7  1  0  0  0  0
  5  8  2  0  0  0  0
  6  8  1  0  0  0  0
  2  9  1  0  0  0  0
  3 10  1  0  0  0  0
  4 11  1  1  0  0  0
  4 12  1  0  0  0  0
  5 13  1  0  0  0  0
  6 14  1  0  0  0  0
  7 15  1  0  0  0  0
  7 16  1  0  0  0  0
  7 17  1  0  0  0  0
  8 18  1  0  0  0  0
M  END
`;

const db1H = JSON.parse(fs.readFileSync(__dirname + '/../data/h1.json', 'utf8'));

predictor.spinus(molfile, {group: false}).then(prediction => {
    console.log(JSON.stringify(prediction))
    //var a = simule2DNmrSpectrum(prediction, {nbPointsX: 100, nbPointsY: 100});
    //console.log(prediction)
    //API.createData("data", a.to2DArray());
}).catch(reason => {return new Error(reason)});

/*predictor.fetchProton().then(value => {
    const prediction = predictor.proton(molfile, {group: false});
    console.log(prediction.length);
    console.log(JSON.stringify(prediction))
});*/


const prediction = predictor.proton(molfile, {group: false, db: db1H});
console.log(prediction.length);
console.log(JSON.stringify(prediction))



