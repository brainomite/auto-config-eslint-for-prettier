module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["airbnb-base", "plugin:jsdoc/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ["jsdoc"],
  rules: {
    "id-length": [
      "error",
      {
        min: 2,
        exceptions: ["_"],
      },
    ],
    "jsdoc/require-description": ["error"],
  },
};
