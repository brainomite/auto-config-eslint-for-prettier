/* eslint-disable no-undef */
const { expect } = require("chai");
const sinon = require("sinon");
const { init } = require("../src/init");

const initFns = require("../src/initFns");

describe("init", () => {
  let addPrettierToConfigStub = sinon.stub();
  let getExtendsAdditionStrArrStub = sinon.stub();
  let getStrArrayOfDevDependenciesStub = sinon.stub();
  let getEslintrcPathStrStub = sinon.stub();
  let getEslintObjStub = sinon.stub();
  let writeEslintrcFileStub = sinon.stub();

  beforeEach(() => {
    addPrettierToConfigStub = sinon.stub(initFns, "addPrettierToConfig");
    getExtendsAdditionStrArrStub = sinon.stub(
      initFns,
      "getExtendsAdditionStrArr"
    );
    getStrArrayOfDevDependenciesStub = sinon.stub(
      initFns,
      "getStrArrayOfDevDependencies"
    );
    getEslintrcPathStrStub = sinon.stub(initFns, "getEslintrcPathStr");
    getEslintObjStub = sinon.stub(initFns, "getEslintObj");
    writeEslintrcFileStub = sinon.stub(initFns, "writeEslintrcFile");
  });

  afterEach(() => {
    addPrettierToConfigStub.restore();
    getExtendsAdditionStrArrStub.restore();
    getStrArrayOfDevDependenciesStub.restore();
    getEslintrcPathStrStub.restore();
    getEslintObjStub.restore();
    writeEslintrcFileStub.restore();
  });
  it("Runs all the functions", () => {
    const devDependenciesArr = [];
    getStrArrayOfDevDependenciesStub.returns(devDependenciesArr);

    const newEslintConfigFile = {};
    addPrettierToConfigStub.returns(newEslintConfigFile);

    const extendsArr = [];
    getExtendsAdditionStrArrStub.returns(extendsArr);

    const returnedPath = "testing.test";
    getEslintrcPathStrStub.returns(returnedPath);

    const eslintObj = {};
    getEslintObjStub.returns(eslintObj);

    init();

    expect(getEslintObjStub.firstCall.firstArg).to.equal(returnedPath);
    expect(getExtendsAdditionStrArrStub.firstCall.firstArg).to.equal(
      devDependenciesArr
    );
    expect(addPrettierToConfigStub.firstCall.args[0]).to.equal(eslintObj);
    expect(addPrettierToConfigStub.firstCall.args[1]).to.equal(extendsArr);
    expect(writeEslintrcFileStub.firstCall.args[0]).to.equal(returnedPath);
    expect(writeEslintrcFileStub.firstCall.args[1]).to.equal(
      newEslintConfigFile
    );
  });
});
