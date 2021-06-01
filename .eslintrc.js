module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "eslint-plugin-jest",
    "eslint-plugin-react",
    "eslint-plugin-react-hooks",
    "eslint-plugin-prettier",
  ],
  extends: [
    // "eslint-config-airbnb-typescript"
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "prettier/prettier": "error",
  },
  env: {
    node: true,
  },
};
