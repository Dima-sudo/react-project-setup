/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.svg$': '<rootDir>/src/tests/transformers/svgTransform.ts',
    },
};
