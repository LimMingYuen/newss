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
        suiteName: 'IFX.UFE-FE.DEMO.app2 demo app2 tests',
        outputDirectory: '<rootDir>/../../test-results/projects/ifx-ufe-demo-app2',
        outputName: 'test-result.xml'
      }
    ]
  ]
};

export default jestCiConfig;