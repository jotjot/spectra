import * as spectraData from 'spectra-data';
import { toBeDeepCloseTo, toMatchCloseTo } from 'jest-matcher-deep-close-to';

import Ranges from '../Ranges';

expect.extend({ toBeDeepCloseTo, toMatchCloseTo });

const peakPicking2 = [
  {
    from: 7.259567221753428,
    to: 7.318545497368789,
    integral: 1.9354480567186667,
    signal: [
      {
        nbAtoms: 0,
        diaID: [],
        multiplicity: 'm',
        peak: [
          {
            x: 7.264130150992702,
            intensity: 10230595.662001802,
            width: 0.0010795192414810183,
          },
          {
            x: 7.267313269758635,
            intensity: 33830239.744481005,
            width: 0.002582016001735651,
          },
          {
            x: 7.26915887487899,
            intensity: 82842584.92520925,
            width: 0.002831119711738281,
          },
          {
            x: 7.273582340794764,
            intensity: 29798402.62598269,
            width: 0.00197833093929646,
          },
          {
            x: 7.284598930303681,
            intensity: 30099807.38175221,
            width: 0.0031866232630691554,
          },
          {
            x: 7.286958822678864,
            intensity: 66104668.47609334,
            width: 0.0035257997357362627,
          },
          {
            x: 7.289039920055485,
            intensity: 58519280.47353261,
            width: 0.003000134376496613,
          },
          {
            x: 7.291170191411284,
            intensity: 14480250.493152825,
            width: 0.0025091519251745353,
          },
          {
            x: 7.293641097230771,
            intensity: 8278900.5697652325,
            width: 0.0031820690118580454,
          },
          {
            x: 7.30152839351497,
            intensity: 15145910.483957706,
            width: 0.0019963935165487135,
          },
          {
            x: 7.305576289271226,
            intensity: 38131210.12845494,
            width: 0.0023476840828383755,
          },
          {
            x: 7.307908197807933,
            intensity: 25620798.16253616,
            width: 0.003545766520285404,
          },
          {
            x: 7.309979324097105,
            intensity: 4639884.618023942,
            width: 0.0012545759625872677,
          },
        ],
        kind: '',
        remark: '',
        delta: 7.281479631718677,
      },
    ],
    signalID: '1',
    _highlight: ['1'],
  },
  {
    from: 7.149356845570731,
    to: 7.2314606693769035,
    integral: 2.8240965777687363,
    signal: [
      {
        nbAtoms: 0,
        diaID: [],
        multiplicity: 'm',
        peak: [
          {
            x: 7.1557887955935335,
            intensity: 5591680.186319249,
            width: 0.002143983340934377,
          },
          {
            x: 7.159469858143075,
            intensity: 18194664.865576517,
            width: 0.003206621599091567,
          },
          {
            x: 7.163074680296583,
            intensity: 8734475.204383057,
            width: 0.0022902243740416527,
          },
          {
            x: 7.1719298367846065,
            intensity: 5867700.939903316,
            width: 0.0010622327426390327,
          },
          {
            x: 7.177658370833152,
            intensity: 49708018.7511056,
            width: 0.004497924513508678,
          },
          {
            x: 7.182381741636994,
            intensity: 12907733.461250288,
            width: 0.002611763777352804,
          },
          {
            x: 7.190781909815829,
            intensity: 14013841.007286621,
            width: 0.001211836685952854,
          },
          {
            x: 7.192430352894496,
            intensity: 40047672.01104146,
            width: 0.0022742805669493994,
          },
          {
            x: 7.1942017788834685,
            intensity: 40387216.06066982,
            width: 0.0013146284156119487,
          },
          {
            x: 7.195902878552174,
            intensity: 61011461.64297504,
            width: 0.0030458533265566236,
          },
          {
            x: 7.198894055941731,
            intensity: 59031580.620660655,
            width: 0.0038901614350218302,
          },
          {
            x: 7.207277187409929,
            intensity: 14661986.778724607,
            width: 0.0002352329929851127,
          },
          {
            x: 7.213523088729353,
            intensity: 104871095.16688126,
            width: 0.005979193549183313,
          },
          {
            x: 7.217091276272375,
            intensity: 42365900.12659337,
            width: 0.002180679813589456,
          },
          {
            x: 7.218789923237918,
            intensity: 31214482.933312647,
            width: 0.001983192406815838,
          },
        ],
        kind: '',
        remark: '',
        delta: 7.211614113016371,
      },
    ],
    signalID: '2',
    _highlight: ['2'],
  },
  {
    from: 2.564358774124853,
    to: 2.6431905494415817,
    integral: 2.0493177070712,
    signal: [
      {
        nbAtoms: 0,
        diaID: [],
        multiplicity: 'q',
        peak: [
          {
            x: 2.5750490227771476,
            intensity: 40619298.65746296,
            width: 0.0036159870976937266,
          },
          {
            x: 2.59429216955914,
            intensity: 112490198.10727261,
            width: 0.004077989137599807,
          },
          {
            x: 2.61335814788463,
            intensity: 114474308.45558706,
            width: 0.004165081710460176,
          },
          {
            x: 2.632184875507714,
            intensity: 41588694.77344821,
            width: 0.0039023019038913003,
          },
        ],
        kind: '',
        remark: '',
        j: [{ coupling: 7.615544704807007, multiplicity: 'q' }],
        delta: 2.6037746617832176,
      },
    ],
    signalID: '3',
    _highlight: ['3'],
  },
  {
    from: 1.1657135299531254,
    to: 1.2155098993618774,
    integral: 2.7832580799857283,
    signal: [
      {
        nbAtoms: 0,
        diaID: [],
        multiplicity: 't',
        peak: [
          {
            x: 1.1714037638969903,
            intensity: 197967954.85361427,
            width: 0.0019407860113447894,
          },
          {
            x: 1.1907356875556923,
            intensity: 331323347.4982505,
            width: 0.0025208458640416805,
          },
          {
            x: 1.2095554172376735,
            intensity: 219470527.98865104,
            width: 0.0021462827409901896,
          },
        ],
        kind: '',
        remark: '',
        j: [{ coupling: 7.631903864109688, multiplicity: 't' }],
        delta: 1.1906117146575015,
      },
    ],
    signalID: '4',
    _highlight: ['4'],
  },
];
const prediction = [
  {
    atomIDs: ['8'],
    diaIDs: ['did@`@fTfYea`H`@GzP`HeT'],
    delta: 6.853,
    atomLabel: 'H',
    multiplicity: 't',
    j: [
      {
        assignment: ['9'],
        diaID: 'did@`@f\\bbbQ[hBB@A~dHBIU@',
        coupling: 1.564,
        multiplicity: 'd',
      },
      {
        assignment: ['10'],
        diaID: 'did@`@fTfUff`@h@GzP`HeT',
        coupling: 0.519,
        multiplicity: 't',
      },
      {
        assignment: ['11'],
        diaID: 'did@`@f\\bbbQ[hBB@A~dHBIU@',
        coupling: 1.564,
        multiplicity: 'd',
      },
    ],
    nbAtoms: 1,
  },
  {
    atomIDs: ['9'],
    diaIDs: ['did@`@f\\bbbQ[hBB@A~dHBIU@'],
    delta: 6.962,
    atomLabel: 'H',
    multiplicity: 'd',
    j: [
      {
        assignment: ['8'],
        diaID: 'did@`@fTfYea`H`@GzP`HeT',
        coupling: 1.564,
        multiplicity: 't',
      },
      {
        assignment: ['10'],
        diaID: 'did@`@fTfUff`@h@GzP`HeT',
        coupling: 7.869,
        multiplicity: 't',
      },
    ],
    nbAtoms: 1,
  },
  {
    atomIDs: ['10'],
    diaIDs: ['did@`@fTfUff`@h@GzP`HeT'],
    delta: 7.173,
    atomLabel: 'H',
    multiplicity: 't',
    j: [
      {
        assignment: ['8'],
        diaID: 'did@`@fTfYea`H`@GzP`HeT',
        coupling: 0.519,
        multiplicity: 't',
      },
      {
        assignment: ['9'],
        diaID: 'did@`@f\\bbbQ[hBB@A~dHBIU@',
        coupling: 7.869,
        multiplicity: 'd',
      },
      {
        assignment: ['11'],
        diaID: 'did@`@f\\bbbQ[hBB@A~dHBIU@',
        coupling: 7.869,
        multiplicity: 'd',
      },
    ],
    nbAtoms: 1,
  },
  {
    atomIDs: ['11'],
    diaIDs: ['did@`@f\\bbbQ[hBB@A~dHBIU@'],
    delta: 6.962,
    atomLabel: 'H',
    multiplicity: 'd',
    j: [
      {
        assignment: ['8'],
        diaID: 'did@`@fTfYea`H`@GzP`HeT',
        coupling: 1.564,
        multiplicity: 't',
      },
      {
        assignment: ['10'],
        diaID: 'did@`@fTfUff`@h@GzP`HeT',
        coupling: 7.869,
        multiplicity: 't',
      },
    ],
    nbAtoms: 1,
  },
  {
    atomIDs: ['12'],
    diaIDs: ['did@`@fTeeYnh@H@GzP`HeT'],
    delta: 2.237,
    atomLabel: 'H',
    multiplicity: 'm',
    j: [],
    nbAtoms: 1,
  },
  {
    atomIDs: ['13'],
    diaIDs: ['did@`@fTeeYnh@H@GzP`HeT'],
    delta: 2.237,
    atomLabel: 'H',
    multiplicity: 'm',
    j: [],
    nbAtoms: 1,
  },
  {
    atomIDs: ['14'],
    diaIDs: ['did@`@fTeeYnh@H@GzP`HeT'],
    delta: 2.237,
    atomLabel: 'H',
    multiplicity: 'm',
    j: [],
    nbAtoms: 1,
  },
  {
    atomIDs: ['15'],
    diaIDs: ['did@`@fTeeYnh@H@GzP`HeT'],
    delta: 2.237,
    atomLabel: 'H',
    multiplicity: 'm',
    j: [],
    nbAtoms: 1,
  },
  {
    atomIDs: ['16'],
    diaIDs: ['did@`@fTeeYnh@H@GzP`HeT'],
    delta: 2.237,
    atomLabel: 'H',
    multiplicity: 'm',
    j: [],
    nbAtoms: 1,
  },
  {
    atomIDs: ['17'],
    diaIDs: ['did@`@fTeeYnh@H@GzP`HeT'],
    delta: 2.237,
    atomLabel: 'H',
    multiplicity: 'm',
    j: [],
    nbAtoms: 1,
  },
];
const signalsGrouped = [
  {
    atomIDs: ['15', '16', '17'],
    diaIDs: ['did@`@fTeYWaj@@@GzP`HeT'],
    nbAtoms: 3,
    delta: 0.992,
    atomLabel: 'H',
    j: [
      {
        assignment: ['11', '12'],
        diaID: 'did@`@fTf[Waj@@bJ@_iB@bUP',
        coupling: 7.392,
        multiplicity: 't',
        distance: 3,
      },
    ],
  },
  {
    atomIDs: ['9'],
    diaIDs: ['did@`@fTfUvf`@h@GzP`HeT'],
    nbAtoms: 1,
    delta: 7.196,
    atomLabel: 'H',
    j: [
      {
        assignment: ['8', '14'],
        diaID: 'did@`@f\\bbRaih@J@A~dHBIU@',
        coupling: 7.718,
        multiplicity: 't',
        distance: 3,
      },
      {
        assignment: ['10'],
        diaID: 'did@`@fTfYUn`HH@GzP`HeT',
        coupling: 1.292,
        multiplicity: 'd',
        distance: 4,
      },
      {
        assignment: ['13'],
        diaID: 'did@`@fTfYUn`HH@GzP`HeT',
        coupling: 1.293,
        multiplicity: 'd',
        distance: 4,
      },
    ],
  },
  {
    atomIDs: ['10', '13'],
    diaIDs: ['did@`@fTfYUn`HH@GzP`HeT'],
    nbAtoms: 2,
    delta: 7.162,
    atomLabel: 'H',
    j: [
      {
        assignment: ['8'],
        diaID: 'did@`@f\\bbRaih@J@A~dHBIU@',
        coupling: 7.758,
        multiplicity: 'd',
        distance: 3,
      },
      {
        assignment: ['9'],
        diaID: 'did@`@fTfUvf`@h@GzP`HeT',
        coupling: 1.292,
        multiplicity: 'd',
        distance: 4,
      },
      {
        assignment: ['13'],
        diaID: 'did@`@fTfYUn`HH@GzP`HeT',
        coupling: 0.985,
        multiplicity: 'd',
        distance: 4,
      },
      {
        assignment: ['14'],
        diaID: 'did@`@f\\bbRaih@J@A~dHBIU@',
        coupling: 0.507,
        multiplicity: 'd',
        distance: 5,
      },
    ],
  },
  {
    atomIDs: ['11', '12'],
    diaIDs: ['did@`@fTf[Waj@@bJ@_iB@bUP'],
    nbAtoms: 2,
    delta: 2.653,
    atomLabel: 'H',
    j: [
      {
        assignment: ['15', '16', '17'],
        diaID: 'did@`@fTeYWaj@@@GzP`HeT',
        coupling: 7.392,
        multiplicity: 'q',
        distance: 3,
      },
    ],
  },
  {
    atomIDs: ['8', '14'],
    diaIDs: ['did@`@f\\bbRaih@J@A~dHBIU@'],
    nbAtoms: 2,
    delta: 7.26,
    atomLabel: 'H',
    j: [
      {
        assignment: ['9'],
        diaID: 'did@`@fTfUvf`@h@GzP`HeT',
        coupling: 7.718,
        multiplicity: 'd',
        distance: 3,
      },
      {
        assignment: ['10'],
        diaID: 'did@`@fTfYUn`HH@GzP`HeT',
        coupling: 7.758,
        multiplicity: 'd',
        distance: 3,
      },
      {
        assignment: ['13'],
        diaID: 'did@`@fTfYUn`HH@GzP`HeT',
        coupling: 0.507,
        multiplicity: 'd',
        distance: 5,
      },
      {
        assignment: ['14'],
        diaID: 'did@`@f\\bbRaih@J@A~dHBIU@',
        coupling: 1.596,
        multiplicity: 'd',
        distance: 4,
      },
    ],
  },
];
const signals = [
  {
    atomIDs: ['8'],
    diaIDs: ['did@`@f\\bbRaih@J@A~dHBIU@'],
    nbAtoms: 1,
    delta: 7.26,
    atomLabel: 'H',
    j: [
      {
        assignment: ['9'],
        diaID: 'did@`@fTfUvf`@h@GzP`HeT',
        coupling: 7.718,
        multiplicity: 'd',
        distance: 3,
      },
      {
        assignment: ['10'],
        diaID: 'did@`@fTfYUn`HH@GzP`HeT',
        coupling: 7.758,
        multiplicity: 'd',
        distance: 3,
      },
      {
        assignment: ['13'],
        diaID: 'did@`@fTfYUn`HH@GzP`HeT',
        coupling: 0.507,
        multiplicity: 'd',
        distance: 5,
      },
      {
        assignment: ['14'],
        diaID: 'did@`@f\\bbRaih@J@A~dHBIU@',
        coupling: 1.596,
        multiplicity: 'd',
        distance: 4,
      },
    ],
  },
  {
    atomIDs: ['9'],
    diaIDs: ['did@`@fTfUvf`@h@GzP`HeT'],
    nbAtoms: 1,
    delta: 7.196,
    atomLabel: 'H',
    j: [
      {
        assignment: ['8'],
        diaID: 'did@`@f\\bbRaih@J@A~dHBIU@',
        coupling: 7.718,
        multiplicity: 'd',
        distance: 3,
      },
      {
        assignment: ['10'],
        diaID: 'did@`@fTfYUn`HH@GzP`HeT',
        coupling: 1.292,
        multiplicity: 'd',
        distance: 4,
      },
      {
        assignment: ['13'],
        diaID: 'did@`@fTfYUn`HH@GzP`HeT',
        coupling: 1.293,
        multiplicity: 'd',
        distance: 4,
      },
      {
        assignment: ['14'],
        diaID: 'did@`@f\\bbRaih@J@A~dHBIU@',
        coupling: 7.718,
        multiplicity: 'd',
        distance: 3,
      },
    ],
  },
  {
    atomIDs: ['10'],
    diaIDs: ['did@`@fTfYUn`HH@GzP`HeT'],
    nbAtoms: 1,
    delta: 7.162,
    atomLabel: 'H',
    j: [
      {
        assignment: ['8'],
        diaID: 'did@`@f\\bbRaih@J@A~dHBIU@',
        coupling: 7.758,
        multiplicity: 'd',
        distance: 3,
      },
      {
        assignment: ['9'],
        diaID: 'did@`@fTfUvf`@h@GzP`HeT',
        coupling: 1.292,
        multiplicity: 'd',
        distance: 4,
      },
      {
        assignment: ['13'],
        diaID: 'did@`@fTfYUn`HH@GzP`HeT',
        coupling: 0.985,
        multiplicity: 'd',
        distance: 4,
      },
      {
        assignment: ['14'],
        diaID: 'did@`@f\\bbRaih@J@A~dHBIU@',
        coupling: 0.507,
        multiplicity: 'd',
        distance: 5,
      },
    ],
  },
  {
    atomIDs: ['11'],
    diaIDs: ['did@`@fTf[Waj@@bJ@_iB@bUP'],
    nbAtoms: 1,
    delta: 2.653,
    atomLabel: 'H',
    j: [
      {
        assignment: ['15'],
        diaID: 'did@`@fTeYWaj@@@GzP`HeT',
        coupling: 7.392,
        multiplicity: 'd',
        distance: 3,
      },
      {
        assignment: ['16'],
        diaID: 'did@`@fTeYWaj@@@GzP`HeT',
        coupling: 7.392,
        multiplicity: 'd',
        distance: 3,
      },
      {
        assignment: ['17'],
        diaID: 'did@`@fTeYWaj@@@GzP`HeT',
        coupling: 7.392,
        multiplicity: 'd',
        distance: 3,
      },
    ],
  },
  {
    atomIDs: ['12'],
    diaIDs: ['did@`@fTf[Waj@@bJ@_iB@bUP'],
    nbAtoms: 1,
    delta: 2.653,
    atomLabel: 'H',
    j: [
      {
        assignment: ['15'],
        diaID: 'did@`@fTeYWaj@@@GzP`HeT',
        coupling: 7.392,
        multiplicity: 'd',
        distance: 3,
      },
      {
        assignment: ['16'],
        diaID: 'did@`@fTeYWaj@@@GzP`HeT',
        coupling: 7.392,
        multiplicity: 'd',
        distance: 3,
      },
      {
        assignment: ['17'],
        diaID: 'did@`@fTeYWaj@@@GzP`HeT',
        coupling: 7.392,
        multiplicity: 'd',
        distance: 3,
      },
    ],
  },
  {
    atomIDs: ['13'],
    diaIDs: ['did@`@fTfYUn`HH@GzP`HeT'],
    nbAtoms: 1,
    delta: 7.162,
    atomLabel: 'H',
    j: [
      {
        assignment: ['8'],
        diaID: 'did@`@f\\bbRaih@J@A~dHBIU@',
        coupling: 0.507,
        multiplicity: 'd',
        distance: 5,
      },
      {
        assignment: ['9'],
        diaID: 'did@`@fTfUvf`@h@GzP`HeT',
        coupling: 1.293,
        multiplicity: 'd',
        distance: 4,
      },
      {
        assignment: ['10'],
        diaID: 'did@`@fTfYUn`HH@GzP`HeT',
        coupling: 0.985,
        multiplicity: 'd',
        distance: 4,
      },
      {
        assignment: ['14'],
        diaID: 'did@`@f\\bbRaih@J@A~dHBIU@',
        coupling: 7.758,
        multiplicity: 'd',
        distance: 3,
      },
    ],
  },
  {
    atomIDs: ['14'],
    diaIDs: ['did@`@f\\bbRaih@J@A~dHBIU@'],
    nbAtoms: 1,
    delta: 7.26,
    atomLabel: 'H',
    j: [
      {
        assignment: ['8'],
        diaID: 'did@`@f\\bbRaih@J@A~dHBIU@',
        coupling: 1.596,
        multiplicity: 'd',
        distance: 4,
      },
      {
        assignment: ['9'],
        diaID: 'did@`@fTfUvf`@h@GzP`HeT',
        coupling: 7.718,
        multiplicity: 'd',
        distance: 3,
      },
      {
        assignment: ['10'],
        diaID: 'did@`@fTfYUn`HH@GzP`HeT',
        coupling: 0.507,
        multiplicity: 'd',
        distance: 5,
      },
      {
        assignment: ['13'],
        diaID: 'did@`@fTfYUn`HH@GzP`HeT',
        coupling: 7.758,
        multiplicity: 'd',
        distance: 3,
      },
    ],
  },
  {
    atomIDs: ['15'],
    diaIDs: ['did@`@fTeYWaj@@@GzP`HeT'],
    nbAtoms: 1,
    delta: 0.992,
    atomLabel: 'H',
    j: [
      {
        assignment: ['11'],
        diaID: 'did@`@fTf[Waj@@bJ@_iB@bUP',
        coupling: 7.392,
        multiplicity: 'd',
        distance: 3,
      },
      {
        assignment: ['12'],
        diaID: 'did@`@fTf[Waj@@bJ@_iB@bUP',
        coupling: 7.392,
        multiplicity: 'd',
        distance: 3,
      },
    ],
  },
  {
    atomIDs: ['16'],
    diaIDs: ['did@`@fTeYWaj@@@GzP`HeT'],
    nbAtoms: 1,
    delta: 0.992,
    atomLabel: 'H',
    j: [
      {
        assignment: ['11'],
        diaID: 'did@`@fTf[Waj@@bJ@_iB@bUP',
        coupling: 7.392,
        multiplicity: 'd',
        distance: 3,
      },
      {
        assignment: ['12'],
        diaID: 'did@`@fTf[Waj@@bJ@_iB@bUP',
        coupling: 7.392,
        multiplicity: 'd',
        distance: 3,
      },
    ],
  },
  {
    atomIDs: ['17'],
    diaIDs: ['did@`@fTeYWaj@@@GzP`HeT'],
    nbAtoms: 1,
    delta: 0.992,
    atomLabel: 'H',
    j: [
      {
        assignment: ['11'],
        diaID: 'did@`@fTf[Waj@@bJ@_iB@bUP',
        coupling: 7.392,
        multiplicity: 'd',
        distance: 3,
      },
      {
        assignment: ['12'],
        diaID: 'did@`@fTf[Waj@@bJ@_iB@bUP',
        coupling: 7.392,
        multiplicity: 'd',
        distance: 3,
      },
    ],
  },
];

let ranges = new Ranges(peakPicking2);

let singleRange = [{ from: 0.9, to: 1.1, integral: 1 }];
singleRange[0].signal = [
  {
    nbAtoms: 0,
    diaID: '',
    multiplicity: '',
    peak: [{ x: 1, intensity: 0, width: 0 }],
    delta: 1,
    remark: '',
    j: [],
  },
];

describe('Range tests: formating and parsing', () => {
  it('ranges to vector', () => {
    let fn = ranges.getVector();
    expect(fn.x[0]).toBeDeepCloseTo(1.1657135299531254, 2);
    expect(fn.x[fn.x.length - 1]).toBeDeepCloseTo(7.318545497368789, 2);
    expect(fn.y[0]).toBeGreaterThan(0);
    expect(fn.y).toHaveLength(1024);
    fn = ranges.getVector({
      from: 10,
      to: 0,
      functionName: 'Lorentzian',
      nbPoints: 101,
    });
    expect(fn.x[0]).toBe(10);
    expect(fn.x[fn.x.length - 1]).toBe(0);
    expect(fn.x).toHaveLength(101);
  });

  it('ranges to peaks', () => {
    let fn = ranges.getPeakList();
    expect(fn[0].x).toBeGreaterThan(0);
    expect(fn[0].intensity).toBeGreaterThan(0);
    expect(fn[0].width).toBeGreaterThan(0);
  });
});

describe('Prediction to ranges', () => {
  it('10 spines with 4 ranges', () => {
    let ranges = Ranges.fromSignals(signals, { lineWidth: 1 });
    expect(ranges).toHaveLength(3);
  });
});

describe('Update ranges', () => {
  let sum = 3;
  it('change sum', () => {
    let ranges = new Ranges([{ integral: 1 }, { integral: 2 }]);
    ranges = ranges.updateIntegrals({ sum: sum * 2 });
    expect(ranges).toStrictEqual(
      new Ranges([{ integral: 2 }, { integral: 4 }]),
    );
  });

  it('change sum to 3, ignore solvent', () => {
    let ranges = new Ranges([
      { integral: 1 },
      { integral: 2, kind: 'solvent' },
    ]);
    ranges = ranges.updateIntegrals({ sum });
    expect(ranges).toStrictEqual(
      new Ranges([{ integral: 3 }, { integral: 6, kind: 'solvent' }]),
    );
  });

  it('add an integral', () => {
    let ranges = new Ranges([{ integral: 1 }, { integral: 2 }]);
    ranges.push({ integral: 3 });
    ranges = ranges.updateIntegrals({ sum: sum });
    expect(ranges).toStrictEqual(
      new Ranges([{ integral: 0.5 }, { integral: 1 }, { integral: 1.5 }]),
    );
  });
  it('check sum', () => {
    let ranges = new Ranges([{ integral: 1 }, { integral: 2 }]);
    expect(ranges.sumOfIntegrals()).toBe(3);
  });

  it('check sum with a reference', () => {
    let ranges = new Ranges([
      { integral: 1, kind: 'reference' },
      { integral: 2 },
    ]);
    expect(ranges.sumOfIntegrals()).toBe(2);
  });

  it('check sum with a reference but sum all', () => {
    let ranges = new Ranges([
      { integral: 1, kind: 'reference' },
      { integral: 2 },
    ]);
    expect(ranges.sumOfIntegrals({ sumAll: true })).toBe(3);
  });

  it('delete an integral', () => {
    let ranges = new Ranges([{ integral: 1 }]);
    ranges = ranges.updateIntegrals({ sum: sum });
    expect(ranges).toStrictEqual(new Ranges([{ integral: 3 }]));
  });
  it('change an integral', () => {
    let ranges = new Ranges([{ integral: 1 }, { integral: 2 }]);
    ranges = ranges.updateIntegrals({ factor: 2 });
    expect(ranges).toStrictEqual(
      new Ranges([{ integral: 2 }, { integral: 4 }]),
    );
  });
  it('update multiplicity', () => {
    let range = Ranges.fromSignals(signalsGrouped, { lineWidth: 1 });
    range.updateMultiplicity();
    expect(range[0].signal[0].multiplicity).toBe('t');
    expect(range[2].signal[0].multiplicity).toBe('m');
  });
});

describe('toIndex Test Case from differents sources', () => {
  it('from ranges', () => {
    let range = new Ranges(peakPicking2);
    let index = range.toIndex({ tolerance: 0.05 });
    expect(index[0].delta).toBeGreaterThan(7.2);
    expect(index[0].multiplicity).toBe('m');
  });

  it('from Spectrum', () => {
    let NbPoints = 101;
    let cs1 = 2;
    let intensity = 1;
    let w = 0.1;
    let cs2 = 8;
    let intensity2 = intensity * 2;
    let w2 = w;

    let line = new Array(NbPoints);
    let x = xRange(0, 10, NbPoints);

    for (let i = 0; i < NbPoints; i++) {
      line[i] =
        (((2 * intensity) / Math.PI) * w) /
          (4 * Math.pow(cs1 - x[i], 2) + Math.pow(w, 2)) +
        (((2 * intensity2) / Math.PI) * w2) /
          (4 * Math.pow(cs2 - x[i], 2) + Math.pow(w2, 2));
    }
    let spectrum = spectraData.NMR.fromXY(x, line, {});

    let range = Ranges.fromSpectrum(spectrum, {});
    let index = range.toIndex({ tolerance: 0.05, joinCouplings: false });
    expect(index[0].delta).toBeGreaterThan(7.5);
    expect(index[0].multiplicity).toBe('br s');
    index = range.toIndex({ tolerance: 0.05, joinCouplings: true });
    expect(index[0].multiplicity).toBe('s'); // because inside of peakPicking information don't exist a j array for this signal and there is not information in signal object about that.
  });

  it('from Signals', () => {
    let range = Ranges.fromSignals(prediction, { lineWidth: 1 });
    let index = range.toIndex({});
    expect(index).toHaveLength(4);
    expect(index[0].delta).toBe(2.237);
    expect(index[0].multiplicity).toBe('s');
  });
});

describe('join couplings', () => {
  it('joinCouplings with grouped signals', () => {
    let range = Ranges.fromSignals(signalsGrouped, { lineWidth: 1 });
    expect(range).toHaveLength(3);
    range.joinCouplings({ tolerance: 0.05 });
    expect(range[0].signal[0].multiplicity).toBe('t');
    expect(range[0].integral).toBe(3);
    expect(range[0].signal).toHaveLength(1);
    expect(range[1].signal[0].multiplicity).toBe('q');
    expect(range[1].integral).toBe(2);
    expect(range[1].signal).toHaveLength(1);
    expect(range[2].signal[0].multiplicity).toBe('tt');
    expect(range[2].integral).toBe(5);
    expect(range[2].signal).toHaveLength(3);
  });
  it('joinCouplings with ungrouped signals', () => {
    let range = Ranges.fromSignals(signals, { lineWidth: 1 });
    expect(range).toHaveLength(3);
    range.joinCouplings({ tolerance: 0.05 });
    expect(range[0].signal[0].multiplicity).toBe('t');
    expect(range[0].integral).toBe(3);
    expect(range[0].signal).toHaveLength(1);
    expect(range[1].signal[0].multiplicity).toBe('q');
    expect(range[1].integral).toBe(2);
    expect(range[1].signal).toHaveLength(1);
    expect(range[2].signal[0].multiplicity).toBe('tt');
    expect(range[2].integral).toBe(5);
    expect(range[2].signal).toHaveLength(3);
  });
});

function xRange(start, end, nbPoints) {
  let a = new Array(nbPoints);
  let jump = (end - start) / (nbPoints - 1);
  for (let i = 0; i < nbPoints; i++) {
    a[i] = start + jump * i;
  }
  return a;
}
