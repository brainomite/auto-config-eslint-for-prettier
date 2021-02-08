/* eslint-disable no-undef */
const { expect } = require("chai");
const sinon = require("sinon");
const fs = require("fs");
const path = require("path");

const {
  importEslintrcYmlObj,
} = require("../../src/importerFns/importEslintrcYmlObj");

describe("importEslintrcYmlObj", () => {
  let fsReadFileSyncStub = sinon.stub();
  beforeEach(() => {
    fsReadFileSyncStub = sinon.stub(fs, "readFileSync");
  });
  afterEach(() => {
    fsReadFileSyncStub.restore();
  });
  it("returns the object from read json file", () => {
    const expected = {
      env: {
        browser: true,
        es2021: true,
      },
      extends: ["airbnb-base"],
      parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
      },
      rules: {},
    };
    const testFilePathStr = path.resolve("tests", "initFns", ".eslintrc.json");
    const ymlStr = `env:
  browser: true
  es2021: true
extends:
  - airbnb-base
parserOptions:
  ecmaVersion: 12
  sourceType: module
rules: {}
`;
    fsReadFileSyncStub.withArgs(testFilePathStr).returns(ymlStr);
    const actual = importEslintrcYmlObj(testFilePathStr);
    expect(actual).to.eql(expected);
  });
});
