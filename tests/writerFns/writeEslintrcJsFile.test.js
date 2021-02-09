/* eslint-disable no-undef */
const { expect } = require("chai");
const sinon = require("sinon");
const helpers = require("../../src/helpers");
const {
  writeEslintrcJsFile,
} = require("../../src/writerFns/writeEslintrcJsFile");

describe("writeEslintrcJsFile", () => {
  let writeFileOutStub = sinon.stub();
  beforeEach(() => {
    writeFileOutStub = sinon.stub(helpers, "writeFileOut");
  });
  afterEach(() => {
    writeFileOutStub.restore();
  });
  it("Overwrites the existing config file", () => {
    const fileName = "dumb name";
    const eslintRcObjString = { abc: "123" };
    const expectedArgs = [
      fileName,
      `module.exports = {
  abc: "123"
}`,
    ];
    writeEslintrcJsFile(fileName, eslintRcObjString);
    const actualArgs = writeFileOutStub.firstCall.args;
    expect(actualArgs).to.eql(expectedArgs);
  });
});
