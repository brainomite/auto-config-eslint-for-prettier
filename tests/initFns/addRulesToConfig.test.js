/* eslint-disable no-undef */
const axios = require("axios");
const chaiAsPromised = require("chai-as-promised");
const chai = require("chai");
const prompts = require("prompts");
const sinon = require("sinon");

chai.use(chaiAsPromised);
const { expect } = chai;
const { addRulesToConfig } = require("../../src/initFns/addRulesToConfig");

describe("addRulesToConfig", () => {
  let getStub = sinon.stub();
  beforeEach(() => {
    getStub = sinon.stub(axios, "get");
  });
  afterEach(() => {
    getStub.restore();
  });
  it("It raises an abort when a user selects no", async () => {
    prompts.inject([false]);
    await expect(addRulesToConfig({})).to.be.rejectedWith("aborted");
    expect(getStub.called).to.equal(false);
  });
  it("It raises an abort when a cancels", async () => {
    prompts.inject(new Error());
    await expect(addRulesToConfig({})).to.be.rejectedWith("aborted");
    expect(getStub.called).to.equal(false);
  });
  describe("Downloads and Updates the rules", () => {
    const jsonc = `{
      "rules": {
        "no-plusplus": "off"
        // https://eslint.org/docs/rules/no-plusplus
      }
    }`;
    it("Handles eslintrc with rules", async () => {
      getStub.returns({ data: jsonc });
      const expected = { rules: { "no-plusplus": "off" } };
      const actual = await addRulesToConfig({ rules: {} });
      expect(actual).to.eql(expected);
    });
    it("Handles eslintrc without rules", async () => {
      getStub.returns({ data: jsonc });
      const expected = { rules: { "no-plusplus": "off" } };
      const actual = await addRulesToConfig({});
      expect(actual).to.eql(expected);
    });
  });
});
