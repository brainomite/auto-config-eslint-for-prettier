/* eslint-disable no-undef */
const { expect } = require("chai");
const sinon = require("sinon");
const fs = require("fs");

const {
  getStrArrayOfDevDependencies,
} = require("../../src/initFns/getStrArrayOfDevDependencies");

describe("getArrayOfDevDependencies", () => {
  let readFileSyncStub = sinon.stub;
  beforeEach(() => {
    readFileSyncStub = sinon.stub(fs, "readFileSync");
  });
  afterEach(() => readFileSyncStub.restore());
  it("generates an array of dependencies from package.json", () => {
    const expected = [
      "chai",
      "eslint",
      "eslint-config-airbnb-base",
      "eslint-plugin-import",
      "mocha",
      "prettier",
      "sinon",
    ];
    readFileSyncStub.returns(`{
      "name": "auto-config-eslint-for-prettier",
      "version": "0.0.1",
      "description": "Will configure eslintrc to use prettier",
      "main": "src/index.js",
      "scripts": {
        "test": "mocha tests"
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/brainomite/auto-config-eslint-for-prettier.git"
      },
      "preview": true,
      "keywords": [
        "eslint",
        "prettier",
        "config",
        "automatic",
        "auto"
      ],
      "author": "Aaron Young",
      "license": "MIT",
      "bugs": {
        "url": "https://github.com/brainomite/auto-config-eslint-for-prettier/issues"
      },
      "homepage": "https://github.com/brainomite/auto-config-eslint-for-prettier#readme",
      "devDependencies": {
        "chai": "^4.2.0",
        "eslint": "^7.19.0",
        "eslint-config-airbnb-base": "^14.2.1",
        "eslint-plugin-import": "^2.22.1",
        "mocha": "^8.2.1",
        "prettier": "^2.2.1",
        "sinon": "^9.2.4"
      },
      "dependencies": {
        "prompts": "^2.4.0",
        "stringify-object": "^3.3.0"
      }
    }`);
    const actual = getStrArrayOfDevDependencies();
    expect(actual.sort()).to.eql(expected.sort());
  });
  it("Handle if there is no devDependencies key", () => {
    readFileSyncStub.returns("{}");
    const expected = [];
    const actual = getStrArrayOfDevDependencies();
    expect(actual).to.eql(expected);
  });
});
