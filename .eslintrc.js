module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    "airbnb-base",
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    "id-length": [
      "error",
      {
        min: 2,
        exceptions: [
          "_"
        ]
      }
    ]
  }
}