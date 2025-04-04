 export default {
  displayName: 'ifx-ufe-demo-app3',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts', '<rootDir>/src/config/config.js'],
  coverageDirectory: '../../coverage/projects/ifx-ufe-demo-app3',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],

  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/testing/**/*.ts',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/**/*.stories.ts',
  ],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'IFX.UFE-FE.DEMO.app3 demo app3 tests',
        outputDirectory: '<rootDir>/../../test-results/projects/ifx-ufe-demo-app3',
        outputName: 'test-result.xml',
      },
    ],
  ],
};

