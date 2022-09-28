/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleDirectories: ["node_modules", __dirname],
  rootDir: __dirname,
  moduleNameMapper: {
    "^@core/(.*)$": "<rootDir>/core/$1",
    "^@nodes/(.*)$": "<rootDir>/nodes/$1",
  },
  coverageReporters: ["lcov"],
  globals: {
    "ts-config": {
      tsConfig: "./tsconfig.json",
    },
  },
};