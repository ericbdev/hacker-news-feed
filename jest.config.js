module.exports = {
  roots: ['<rootDir>/src'],
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  setupTestFrameworkScriptFile: '<rootDir>/src/setupEnzyme.ts',
};
