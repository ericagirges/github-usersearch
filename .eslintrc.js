module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
  plugins: [],
  rules: {
    // make prop-types a warning if they are not present
    "react/prop-types": "warn",
  },
};
