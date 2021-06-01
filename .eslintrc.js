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
  extends: [
    //TODO invest the time to meet airbnb linting standards
    //"eslint-config-airbnb-typescript"
    "eslint-config-standard-typescript",
    "eslint-config-prettier",
  ],
  env: {
    node: true,
  },
};
