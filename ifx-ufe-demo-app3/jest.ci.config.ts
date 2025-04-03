import jestConfig from './jest.config';
// prettier-ignore
const jestCiConfig = {
  ...jestConfig,

  reporters: [
    ['jest-silent-reporter', { showWarnings: true, useDots: false }],
    'summary',
    [
      'jest-junit',
      {
        suiteName: 'IFX.UFE-FE.DEMO.app3 demo app3 tests',
        outputDirectory: '<rootDir>/../../test-results/projects/ifx-ufe-demo-app3',
        outputName: 'test-result.xml'
      }
    ]
  ]
};

export default jestCiConfig;