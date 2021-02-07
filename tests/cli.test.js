/* eslint-disable no-undef */
const { expect } = require("chai");
const sinon = require("sinon");
const { init } = require("../cli");

describe("init", () => {
  it("Runs all the functions", () => {
    const addPrettierToConfigStub = sinon.stub();
    const getExtendsAdditionStrArrStub = sinon.stub();
    const getStrArrayOfDevDependenciesStub = sinon.stub();
    const pathStub = { resolve: sinon.stub() };
    const requireStub = sinon.stub();
    const writeEslintrcJsFileStub = sinon.stub();

    const devDependenciesArr = [];
    getStrArrayOfDevDependenciesStub.returns(devDependenciesArr);

    const newEslintConfigFile = {};
    addPrettierToConfigStub.returns(newEslintConfigFile);

    const extendsArr = [];
    getExtendsAdditionStrArrStub.returns(extendsArr);

    const returnedPath = "testing.test";
    pathStub.resolve.returns(returnedPath);

    const eslintObj = {};
    requireStub.returns(eslintObj);

    init(
      addPrettierToConfigStub,
      getStrArrayOfDevDependenciesStub,
      getExtendsAdditionStrArrStub,
      writeEslintrcJsFileStub,
      requireStub,
      pathStub
    );

    expect(pathStub.resolve.firstCall.args[0]).to.equal("./");
    expect(pathStub.resolve.firstCall.args[1]).to.equal(".eslintrc.js");
    expect(requireStub.firstCall.firstArg).to.equal(returnedPath);
    expect(getExtendsAdditionStrArrStub.firstCall.firstArg).to.equal(
      devDependenciesArr
    );
    expect(addPrettierToConfigStub.firstCall.args[0]).to.equal(eslintObj);
    expect(addPrettierToConfigStub.firstCall.args[1]).to.equal(extendsArr);
    expect(writeEslintrcJsFileStub.firstCall.args[0]).to.equal(returnedPath);
    expect(writeEslintrcJsFileStub.firstCall.args[1]).to.equal(
      newEslintConfigFile
    );
  });
});
