/* eslint-disable no-undef */
const { expect } = require("chai");
const path = require("path");

const {
  requireEslintJsObj,
} = require("../../src/importerFns/requireEslintJsObj");

describe("requireEslintJsObj", () => {
  it("returns the module.exports from a js file", () => {
    const expected = {};
    const testFilePathStr = path.resolve(
      "tests",
      "initFns",
      ".eslintrc.test.js"
    );
    const actual = requireEslintJsObj(testFilePathStr);
    expect(actual).to.eql(expected);
  });
});
