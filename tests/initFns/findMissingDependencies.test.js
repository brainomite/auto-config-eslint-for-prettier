/* eslint-disable no-undef */
const { expect } = require("chai");
const {
  findMissingDependencies,
} = require("../../src/initFns/findMissingDependencies");

describe("findMissingDependencies", () => {
  it("returns an array of missing packages for prettier", () => {
    const dependencies = [];
    const expected = ["eslint", "prettier", "eslint-config-prettier"];
    const actual = findMissingDependencies(dependencies);

    expect(actual).to.eql(expected);
  });
  it("returns an array of missing packages for prettier, selectively", () => {
    const dependencies = ["prettier"];
    const expected = ["eslint", "eslint-config-prettier"];
    const actual = findMissingDependencies(dependencies);

    expect(actual).to.eql(expected);
  });
});
