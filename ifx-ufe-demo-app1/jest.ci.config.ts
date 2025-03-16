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
        suiteName: 'IFX.UFE-FE.DEMO.APP1 demo app1 tests',
        outputDirectory: '<rootDir>/../../test-results/projects/ifx-ufe-demo-app1',
        outputName: 'test-result.xml'
      }
    ]
  ]
};

export default jestCiConfig;