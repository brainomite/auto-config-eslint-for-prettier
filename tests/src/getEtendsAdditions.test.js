/* eslint-disable no-undef */
const { expect } = require("chai");
const { getExtendsAdditions } = require("../../src/getExtendsAdditions");

describe("getExtendsAdditions", () => {
  describe("When called with an empty array", () => {
    it("Returns an array with just prettier", () => {
      const expected = ["prettier"];
      const actual = getExtendsAdditions();
      expect(expected).to.eql(actual);
    });
    it("When called with no matching eslint plugins returns just an array of 'prettier'", () => {
      const expected = ["prettier"];
      const actual = getExtendsAdditions(["something"]);
      expect(expected).to.eql(actual);
    });
    describe("When provided specified eslint plugin returns correct extend in array", () => {
      it("Adds typescript extends to array", () => {
        const expected = ["prettier", "prettier/@typescript-eslint"];
        const actual = getExtendsAdditions([
          "@typescript-eslint/eslint-plugin",
        ]);
        expect(expected).to.eql(actual);
      });
      it("Adds babel extends to array", () => {
        const expected = ["prettier", "prettier/babel"];
        const actual = getExtendsAdditions(["eslint-plugin-babel"]);
        expect(expected).to.eql(actual);
      });
      it("Adds flowtype extends to array", () => {
        const expected = ["prettier", "prettier/flowtype"];
        const actual = getExtendsAdditions(["eslint-plugin-flowtype"]);
        expect(expected).to.eql(actual);
      });
      it("Adds prettier extends to array", () => {
        const expected = ["prettier", "prettier/prettier"];
        const actual = getExtendsAdditions(["eslint-plugin-prettier"]);
        expect(expected).to.eql(actual);
      });
      it("Adds react extends to array", () => {
        const expected = ["prettier", "prettier/react"];
        const actual = getExtendsAdditions(["eslint-plugin-react"]);
        expect(expected).to.eql(actual);
      });
      it("Adds standard extends to array", () => {
        const expected = ["prettier", "prettier/standard"];
        const actual = getExtendsAdditions(["eslint-plugin-standard"]);
        expect(expected).to.eql(actual);
      });
      it("Adds unicorn extends to array", () => {
        const expected = ["prettier", "prettier/unicorn"];
        const actual = getExtendsAdditions(["eslint-plugin-unicorn"]);
        expect(expected).to.eql(actual);
      });
      it("Adds vue extends to array", () => {
        const expected = ["prettier", "prettier/vue"];
        const actual = getExtendsAdditions(["eslint-plugin-vue"]);
        expect(expected).to.eql(actual);
      });
      it("Adds multiple extends", () => {
        const expected = [
          "prettier",
          "prettier/vue",
          "prettier/@typescript-eslint",
        ];
        const actual = getExtendsAdditions([
          "eslint-plugin-vue",
          "@typescript-eslint/eslint-plugin",
        ]);
        expect(expected[0]).to.equal(actual[0]); // prettier is first
        expect(expected.sort()).to.eql(actual.sort());
      });
    });
  });
});
