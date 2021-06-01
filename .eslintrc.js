module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: [
    "@typescript-eslint",
    "eslint-plugin-jest",
    "eslint-plugin-react",
    "eslint-plugin-react-hooks",
    "eslint-plugin-prettier",
  ],
  extends: ["eslint-config-airbnb-typescript"],
  rules: {
    "prettier/prettier": "error",
  },
  env: {
    node: true,
  },
};
