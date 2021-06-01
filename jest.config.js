module.exports = {
  verbose: true,
  projects: ["<rootDir>"],
  roots: ["<rootDir>/src", "<rootDir>/test"],
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.jest.json",
    },
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testRegex: "(/test/.*.(test|spec)).(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  // collectCoverage: true,
  // coveragePathIgnorePatterns: ["(test/.*.mock).(jsx?|tsx?)$"],
  // coverageDirectory: "<rootDir>/coverage/",
};
