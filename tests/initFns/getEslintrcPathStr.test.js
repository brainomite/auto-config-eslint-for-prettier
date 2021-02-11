/* eslint-disable no-undef */
const { expect } = require("chai");
const fs = require("fs");
const path = require("path");
const sinon = require("sinon");
const { getEslintrcPathStr } = require("../../src/initFns/getEslintrcPathStr");

const CUR_FOLDER_STR = "./";

/**
 * runs the test for each file type
 *
 * @param {string} fileNameStr file name
 * @param {Function} existSyncStub stubbed existSync function
 * @returns {object} contains two keys, 'expected' and 'actual'
 */
function runTest(fileNameStr, existSyncStub) {
  const expected = path.resolve(CUR_FOLDER_STR, fileNameStr);

  existSyncStub.withArgs(expected).returns(true);

  const actual = getEslintrcPathStr();
  return { expected, actual };
}

describe("getEslintrcPathStr", () => {
  let existSyncStub;
  beforeEach(() => {
    existSyncStub = sinon.stub(fs, "existsSync");
    existSyncStub.returns(false);
  });
  afterEach(() => {
    existSyncStub.restore();
  });
  it("finds the eslintrc.js path", () => {
    const eslintStr = ".eslintrc.js";
    const { expected, actual } = runTest(eslintStr, existSyncStub);
    expect(actual).to.equal(expected);
  });
  it("finds the eslintrc.yml path", () => {
    const eslintStr = ".eslintrc.yml";
    const { expected, actual } = runTest(eslintStr, existSyncStub);
    expect(actual).to.equal(expected);
  });
  it("finds the eslintrc.json path", () => {
    const eslintStr = ".eslintrc.json";
    const { expected, actual } = runTest(eslintStr, existSyncStub);
    expect(actual).to.equal(expected);
  });
  it("throws error when no paths found", () => {
    expect(() => getEslintrcPathStr()).to.throw("No .eslintrc.* detected");
  });
});
