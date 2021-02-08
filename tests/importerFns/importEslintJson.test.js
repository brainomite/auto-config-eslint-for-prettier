/* eslint-disable no-undef */
const { expect } = require("chai");
const sinon = require("sinon");
const fs = require("fs");
const path = require("path");

const {
  importEslintrcJsonObj,
} = require("../../src/importerFns/importEslintJsonObj");

describe("importEslintJsonObj", () => {
  let fsReadFileSyncStub = sinon.stub();
  beforeEach(() => {
    fsReadFileSyncStub = sinon.stub(fs, "readFileSync");
  });
  afterEach(() => {
    fsReadFileSyncStub.restore();
  });
  it("returns the object from read json file", () => {
    const expected = { test: true };
    const testFilePathStr = path.resolve("tests", "initFns", ".eslintrc.json");
    fsReadFileSyncStub.withArgs(testFilePathStr).returns('{"test": true}');
    const actual = importEslintrcJsonObj(testFilePathStr);
    expect(actual).to.eql(expected);
  });
});
