/* eslint-disable no-undef */
const { expect } = require("chai");
const sinon = require("sinon");
const { getEslintObj } = require("../../src/initFns/getEslintObj");
const importerFns = require("../../src/importerFns");

describe("getEslintObj", () => {
  let eslintJsStub = sinon.stub();
  let eslintJsonStub = sinon.stub();
  beforeEach(() => {
    eslintJsonStub = sinon.stub(importerFns, ".eslintrc.json");
    eslintJsStub = sinon.stub(importerFns, ".eslintrc.js");
  });
  afterEach(() => {
    eslintJsonStub.restore();
    eslintJsStub.restore();
  });

  it("will execute the correct function for .eslintrc.js", () => {
    const expected = {};
    eslintJsStub.returns(expected);
    const actual = getEslintObj("/abc/.eslintrc.js");
    expect(actual).to.equal(expected);
  });
  it("will execute the correct function for .eslintrc.json", () => {
    const expected = {};
    eslintJsonStub.returns(expected);
    const actual = getEslintObj("/abc/.eslintrc.json");
    expect(actual).to.equal(expected);
  });
  it("will pass in the path to the found function", () => {
    const expected = {};
    const pathStr = "/abc/.eslintrc.js";
    eslintJsStub.withArgs(pathStr).returns(expected);
    const actual = getEslintObj(pathStr);
    expect(actual).to.equal(expected);
  });
  it("will throw an error for an undefined file type", () => {
    expect(() => getEslintObj("/.abc")).to.throw("isn't defined");
  });
});
