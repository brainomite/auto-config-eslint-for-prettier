/* eslint-disable no-undef */
const { expect } = require("chai");
const sinon = require("sinon");
const yaml = require("js-yaml");
const {
  writeEslintrcYmlFile,
} = require("../../src/writerFns/writeEslintrcYmlFile");
const helpers = require("../../src/helpers");

describe("writeEslintrcYmlFile", () => {
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
    const expectedArgs = [path, yaml.dump(obj)];
    writeEslintrcYmlFile(path, obj);
    const actualArgs = writeFileOutStub.firstCall.args;
    expect(actualArgs).to.eql(expectedArgs);
  });
});
