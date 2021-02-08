/* eslint-disable no-undef */
const { expect } = require("chai");
const sinon = require("sinon");
const {
  writeEslintrcJsonFile,
} = require("../../src/writerFns/writeEslintrcJsonFile");
const helpers = require("../../src/helpers");

describe("writeEslintrcJsonFile", () => {
  let writeFileOutStub = sinon.stub();
  beforeEach(() => {
    writeFileOutStub = sinon.stub(helpers, "writeFileOut");
  });
  afterEach(() => {
    writeFileOutStub.restore();
  });
  it("will invoke writeFileOut correctly with json as a string", () => {
    const obj = { testing: true };
    const path = "path";
    const expectedArgs = [path, JSON.stringify(obj, null, " ")];
    writeEslintrcJsonFile(path, obj);
    const actualArgs = writeFileOutStub.firstCall.args;
    expect(actualArgs).to.eql(expectedArgs);
  });
});
