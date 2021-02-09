/* eslint-disable no-undef */
const { expect } = require("chai");
const sinon = require("sinon");
const { writeEslintrcFile } = require("../../src/initFns/writeEslintrcFile");
const writerFns = require("../../src/writerFns/index");

/**
 * tests the specific file
 *
 * @param {string} fileNameStr fake path
 * @param {Function} eslintrcStub stub of eslintrcStub
 * @returns {object} contains 'expected' and 'actual' keys
 */
function testFile(fileNameStr, eslintrcStub) {
  writeEslintrcFile(`/abc/${fileNameStr}`, {});
  const expected = true;
  const actual = eslintrcStub.called;
  return { expected, actual };
}

describe("writeEslintRcFile", () => {
  let eslintJsStub = sinon.stub();
  let eslintJsonStub = sinon.stub();
  let eslintYmlStub = sinon.stub();
  beforeEach(() => {
    eslintYmlStub = sinon.stub(writerFns, ".eslintrc.yml");
    eslintJsonStub = sinon.stub(writerFns, ".eslintrc.json");
    eslintJsStub = sinon.stub(writerFns, ".eslintrc.js");
  });
  afterEach(() => {
    eslintYmlStub.restore();
    eslintJsonStub.restore();
    eslintJsStub.restore();
  });

  it("will execute the correct function for .eslintrc.js", () => {
    const fileNameStr = ".eslintrc.js";
    const { expected, actual } = testFile(fileNameStr, eslintJsStub);
    expect(actual).to.equal(expected);
  });
  it("will execute the correct function for .eslintrc.json", () => {
    const fileNameStr = ".eslintrc.json";
    const { expected, actual } = testFile(fileNameStr, eslintJsonStub);
    expect(actual).to.equal(expected);
  });
  it("will execute the correct function for .eslintrc.yml", () => {
    const fileNameStr = ".eslintrc.yml";
    const { expected, actual } = testFile(fileNameStr, eslintYmlStub);
    expect(actual).to.equal(expected);
  });
  it("will pass in the path and object to the found function", () => {
    const expectedObj = {};
    const expectedPath = "/abc/.eslintrc.js";
    writeEslintrcFile(expectedPath, expectedObj);
    const [actualPath, actualObj] = eslintJsStub.firstCall.args;
    expect(actualObj).to.equal(expectedObj);
    expect(actualPath).to.equal(expectedPath);
  });
  it("will throw an error for an undefined file type", () => {
    expect(() => writeEslintrcFile("/.abc")).to.throw("isn't defined");
  });
});
