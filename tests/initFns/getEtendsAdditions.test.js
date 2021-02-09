/* eslint-disable no-undef */
const { expect } = require("chai");
const {
  getExtendsAdditionStrArr,
} = require("../../src/initFns/getExtendsAdditionStrArr");

describe("getExtendsAdditions", () => {
  describe("When called with an empty array", () => {
    it("Returns an array with just prettier", () => {
      const expected = ["prettier"];
      const actual = getExtendsAdditionStrArr();
      expect(actual).to.eql(expected);
    });
    it("When called with no matching eslint plugins returns just an array of 'prettier'", () => {
      const expected = ["prettier"];
      const actual = getExtendsAdditionStrArr(["something"]);
      expect(actual).to.eql(expected);
    });
    describe("When provided specified eslint plugin returns correct extend in array", () => {
      it("Adds typescript extends to array", () => {
        const expected = ["prettier", "prettier/@typescript-eslint"];
        const actual = getExtendsAdditionStrArr([
          "@typescript-eslint/eslint-plugin",
        ]);
        expect(actual).to.eql(expected);
      });
      it("Adds babel extends to array", () => {
        const expected = ["prettier", "prettier/babel"];
        const actual = getExtendsAdditionStrArr(["eslint-plugin-babel"]);
        expect(actual).to.eql(expected);
      });
      it("Adds flowtype extends to array", () => {
        const expected = ["prettier", "prettier/flowtype"];
        const actual = getExtendsAdditionStrArr(["eslint-plugin-flowtype"]);
        expect(actual).to.eql(expected);
      });
      it("Adds prettier extends to array", () => {
        const expected = ["prettier", "prettier/prettier"];
        const actual = getExtendsAdditionStrArr(["eslint-plugin-prettier"]);
        expect(actual).to.eql(expected);
      });
      it("Adds react extends to array", () => {
        const expected = ["prettier", "prettier/react"];
        const actual = getExtendsAdditionStrArr(["eslint-plugin-react"]);
        expect(actual).to.eql(expected);
      });
      it("Adds standard extends to array", () => {
        const expected = ["prettier", "prettier/standard"];
        const actual = getExtendsAdditionStrArr(["eslint-plugin-standard"]);
        expect(actual).to.eql(expected);
      });
      it("Adds unicorn extends to array", () => {
        const expected = ["prettier", "prettier/unicorn"];
        const actual = getExtendsAdditionStrArr(["eslint-plugin-unicorn"]);
        expect(actual).to.eql(expected);
      });
      it("Adds vue extends to array", () => {
        const expected = ["prettier", "prettier/vue"];
        const actual = getExtendsAdditionStrArr(["eslint-plugin-vue"]);
        expect(actual).to.eql(expected);
      });
      it("Adds multiple extends", () => {
        const expected = [
          "prettier",
          "prettier/vue",
          "prettier/@typescript-eslint",
        ];
        const actual = getExtendsAdditionStrArr([
          "eslint-plugin-vue",
          "@typescript-eslint/eslint-plugin",
        ]);
        expect(actual[0]).to.equal(expected[0]); // prettier is first
        expect(actual.sort()).to.eql(expected.sort());
      });
    });
  });
});
