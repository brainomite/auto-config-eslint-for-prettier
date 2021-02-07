/* eslint-disable no-undef */
const { expect } = require("chai");
const path = require("path");

const { requireEslintJsObj } = require("../../src/requireEslintJsObj");

describe("requireEslintJsObj", () => {
  it("returns the module.exports from a js file", () => {
    const expected = {};
    const testFilePathStr = path.resolve("tests", "src", ".eslintrc.test.js");
    const actual = requireEslintJsObj(testFilePathStr);
    expect(expected).to.eql(actual);
  });
});
