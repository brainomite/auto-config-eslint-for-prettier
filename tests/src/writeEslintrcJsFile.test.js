/* eslint-disable no-undef */
const { expect } = require("chai");
const fs = require("fs");
const sinon = require("sinon");
const { writeEslintrcJsFile } = require("../../src/writeEslintrcJsFile");

describe("writeEslintrcJsFile", () => {
  let fsWriteFileSyncStub = sinon.stub();
  beforeEach(() => {
    fsWriteFileSyncStub = sinon.stub(fs, "writeFileSync");
  });
  afterEach(() => {
    fsWriteFileSyncStub.restore();
  });
  it("Overwrites the existing config file", () => {
    const fileName = "dumb name";
    const eslintRcObjString = { abc: "123" };
    const expectedArg0 = fileName;
    const expectedArg1 = `module.exports = {
  abc: "123"
}`;
    const expectedArg2 = { encoding: "utf-8", flag: "w" };
    writeEslintrcJsFile(fileName, eslintRcObjString);
    expect(fsWriteFileSyncStub.called).to.equal(true);
    expect(fsWriteFileSyncStub.args[0][0]).to.equal(expectedArg0);
    expect(fsWriteFileSyncStub.args[0][1]).to.equal(expectedArg1);
    expect(fsWriteFileSyncStub.args[0][2]).to.eql(expectedArg2);
  });
});
