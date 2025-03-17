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
        suiteName: 'IFX.UFE-FE.SHARED.LIB.APP-COMMON app-common tests',
        outputDirectory: '<rootDir>/../../../test-results/libs/app-common',
        outputName: 'test-result.xml'
      }
    ]
  ]
};

export default jestCiConfig;