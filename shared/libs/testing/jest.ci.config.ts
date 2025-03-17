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
        suiteName: 'IFX.UFE-FE.SHARED.LIB.APP-COMMON testing tests',
        outputDirectory: '<rootDir>/../../../test-results/libs/testing',
        outputName: 'test-result.xml'
      }
    ]
  ]
};

export default jestCiConfig;
