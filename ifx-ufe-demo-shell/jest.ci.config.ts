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
        suiteName: 'IFX.UFE-FE.DEMO.SHELL demo shell tests',
        outputDirectory: '<rootDir>/../../test-results/projects/ifx-ufe-demo-shell',
        outputName: 'test-result.xml'
      }
    ]
  ]
};

export default jestCiConfig;