/* eslint-disable no-undef */
const { expect } = require("chai");
const fs = require("fs");
const sinon = require("sinon");
const helpers = require("../../src/helpers");

describe("writeFileOut", () => {
  let writeFileSyncStub = sinon.stub();
  beforeEach(() => {
    writeFileSyncStub = sinon.stub(fs, "writeFileSync");
  });
  afterEach(() => {
    writeFileSyncStub.restore();
  });
  it("Invokes fs.writeFileSync the given data to specified path", () => {
    const data = "data";
    const path = "path";
    const expected = [
      path,
      data,
      {
        encoding: "utf-8",
        flag: "w",
      },
    ];
    helpers.writeFileOut(path, data);
    const actual = writeFileSyncStub.firstCall.args;
    expect(actual).to.deep.eql(expected);
  });
});
