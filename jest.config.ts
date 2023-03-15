/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
import type { Config } from '@jest/types';

const jestConfig: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  verbose: true,
  testPathIgnorePatterns: ['/node_modules/']
};

export default jestConfig;
