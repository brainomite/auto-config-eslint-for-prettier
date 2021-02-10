/* eslint-disable no-undef */
const { expect } = require("chai");
const sinon = require("sinon");
const prompts = require("prompts");
const spawn = require("cross-spawn");
const {
  installPrettierExtensions,
} = require("../../src/initFns/installPrettierExtensions");

describe("installPrettierExtensions", () => {
  let syncStub = sinon.stub();
  let errorStub = sinon.stub();
  let infoStub = sinon.stub();
  beforeEach(() => {
    infoStub = sinon.stub(console, "info");
    errorStub = sinon.stub(console, "error");
    syncStub = sinon.stub(spawn, "sync");
  });
  afterEach(() => {
    infoStub.restore();
    errorStub.restore();
    syncStub.restore();
  });
  it("doesn't invoke anything when passed in array is empty", async () => {
    const expected = false;

    await installPrettierExtensions([
      "eslint",
      "prettier",
      "eslint-plugin-prettier",
    ]);
    const actual = syncStub.called;

    expect(actual).to.equal(expected);
  });
  it("only installs prettier extensions", async () => {
    const expected = [
      "npm",
      ["i", "-D", "prettier", "eslint-plugin-prettier"],
      { stdio: "inherit" },
    ];
    syncStub.returns({});
    prompts.inject([true]);

    await installPrettierExtensions([]);
    const actual = syncStub.firstCall.args;

    expect(actual).to.deep.eql(expected);
  });
  it("When answer is not Yes, don't install and send message to user", async () => {
    prompts.inject([false]);
    const extensions = [];

    await installPrettierExtensions(extensions);
    let expected = false;
    let actual = syncStub.called;
    expect(actual).to.equal(expected);
    expected =
      "Packages not installed. Please install the following packages with a package manager of your choice: prettier eslint-plugin-prettier";
    actual = infoStub.firstCall.firstArg;
    expect(actual).to.equal(expected);
  });
  it("When 'npm i' fails, let user know", async () => {
    prompts.inject([true]);
    const extensions = ["prettier"];
    const expected =
      "Could not execute npm. Please install the following package with a package manager of your choice: eslint-plugin-prettier";
    syncStub.returns({ error: { code: "ENOENT" } });
    await installPrettierExtensions(extensions);
    const actual = errorStub.firstCall.firstArg;
    expect(actual).to.equal(expected);
  });
});