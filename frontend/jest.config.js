/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '.(ts|tsx)': 'ts-jest',
    '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  modulePaths: ['<rootDir>/src'],
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  watchPathIgnorePatterns: ['node_modules'],
};
