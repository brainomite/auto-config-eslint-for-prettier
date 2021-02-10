/* eslint-disable no-undef */
const { expect } = require("chai");
const sinon = require("sinon");
const { init } = require("../src/init");

const initFns = require("../src/initFns");

describe("init", () => {
  let addPrettierToConfigStub = sinon.stub();
  let getExtendsAdditionStrArrStub = sinon.stub();
  let getStrArrayOfDependenciesStub = sinon.stub();
  let getEslintrcPathStrStub = sinon.stub();
  let getEslintObjStub = sinon.stub();
  let writeEslintrcFileStub = sinon.stub();
  let installPrettierExtensionsStub = sinon.stub();
  let processExitStub = sinon.stub();

  beforeEach(() => {
    processExitStub = sinon.stub(process, "exit");
    installPrettierExtensionsStub = sinon.stub(
      initFns,
      "installPrettierExtensions"
    );
    addPrettierToConfigStub = sinon.stub(initFns, "addPrettierToConfig");
    getExtendsAdditionStrArrStub = sinon.stub(
      initFns,
      "getExtendsAdditionStrArr"
    );
    getStrArrayOfDependenciesStub = sinon.stub(
      initFns,
      "getStrArrayOfDependencies"
    );
    getEslintrcPathStrStub = sinon.stub(initFns, "getEslintrcPathStr");
    getEslintObjStub = sinon.stub(initFns, "getEslintObj");
    writeEslintrcFileStub = sinon.stub(initFns, "writeEslintrcFile");
  });

  afterEach(() => {
    processExitStub.restore();
    installPrettierExtensionsStub.restore();
    addPrettierToConfigStub.restore();
    getExtendsAdditionStrArrStub.restore();
    getStrArrayOfDependenciesStub.restore();
    getEslintrcPathStrStub.restore();
    getEslintObjStub.restore();
    writeEslintrcFileStub.restore();
  });
  it("Runs all the functions", async () => {
    const dependenciesArr = [];
    getStrArrayOfDependenciesStub.returns(dependenciesArr);

    const newEslintConfigFile = {};
    addPrettierToConfigStub.returns(newEslintConfigFile);

    const extendsArr = [];
    getExtendsAdditionStrArrStub.returns(extendsArr);

    const returnedPath = "testing.test";
    getEslintrcPathStrStub.returns(returnedPath);

    const eslintObj = {};
    getEslintObjStub.returns(eslintObj);

    await init();

    expect(getEslintObjStub.firstCall.firstArg).to.equal(returnedPath);
    expect(getExtendsAdditionStrArrStub.firstCall.firstArg).to.equal(
      dependenciesArr
    );
    expect(addPrettierToConfigStub.firstCall.args[0]).to.equal(eslintObj);
    expect(addPrettierToConfigStub.firstCall.args[1]).to.equal(extendsArr);
    expect(writeEslintrcFileStub.firstCall.args[0]).to.equal(returnedPath);
    expect(writeEslintrcFileStub.firstCall.args[1]).to.equal(
      newEslintConfigFile
    );
    expect(installPrettierExtensionsStub.firstCall.firstArg).to.equal(
      dependenciesArr
    );
  });
  it("exits gracefully with a message and no zero exit code if packages don't install right", async () => {
    const consoleLogStub = sinon.stub(console, "log");
    installPrettierExtensionsStub.throws(new Error());
    try {
      await init();
      // eslint-disable-next-line id-length, no-empty
    } catch (e) {}
    consoleLogStub.restore();

    let expected = "Oops! Something went wrong! :(";
    let actual = consoleLogStub.firstCall.firstArg;
    expect(actual).to.equal(expected);

    expected = 1;
    actual = processExitStub.firstCall.firstArg;
    expect(actual).to.equal(expected);
  });
});
