/* eslint-disable no-undef */
const { expect } = require("chai");
const { addPrettierToConfig } = require("../../src/addPrettierToConfig");

const EXPECTED = {
  env: { browser: true, commonjs: true, es2021: true },
  extends: ["airbnb-base", "prettier"],
  parserOptions: { ecmaVersion: 12 },
  rules: {},
};

describe("addPrettierToConfig", () => {
  it("will add to the array, prettier as last position", () => {
    const eslintrc = {
      env: { browser: true, commonjs: true, es2021: true },
      extends: ["airbnb-base"],
      parserOptions: { ecmaVersion: 12 },
      rules: {},
    };
    const actual = addPrettierToConfig(eslintrc, ["prettier"]);
    expect(EXPECTED).to.eql(actual);
  });
  it("will only add missing extends", () => {
    const eslintrc = {
      env: { browser: true, commonjs: true, es2021: true },
      extends: ["airbnb-base", "prettier"],
      parserOptions: { ecmaVersion: 12 },
      rules: {},
    };
    const actual = addPrettierToConfig(eslintrc, ["prettier"]);
    expect(EXPECTED).to.eql(actual);
  });
  it("Will fix order if prettier and related is in wrong location", () => {
    const eslintrc = {
      env: { browser: true, commonjs: true, es2021: true },
      extends: ["prettier", "airbnb-base"],
      parserOptions: { ecmaVersion: 12 },
      rules: {},
    };

    const actual = addPrettierToConfig(eslintrc, ["prettier"]);
    expect(EXPECTED).to.eql(actual);
  });
});
