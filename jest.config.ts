import type { Config } from 'jest';

const config: Config = {
  moduleNameMapper: {
    '^~/shared/(.*)$': '<rootDir>/src/shared/$1',
    '^~/services/(.*)$': '<rootDir>/src/services/$1',
    '^~/features/(.*)$': '<rootDir>/src/features/$1'
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '<rootDir>/src/**/*.tsx'],
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  clearMocks: true
};

export default config;
