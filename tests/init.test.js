/* eslint-disable no-undef */
const { expect } = require("chai");
const sinon = require("sinon");
const { init } = require("../src/init");

const initFns = require("../src/initFns");

const OOPS_MESSAGE = "Oops! Something went wrong! :(";
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
  describe("when an error is thrown", () => {
    let consoleErrorStub = sinon.stub();
    beforeEach(() => {
      consoleErrorStub = sinon.stub(console, "error");
    });
    afterEach(() => {
      consoleErrorStub.restore();
    });
    it("exits gracefully with a message and no zero exit code if packages don't install right", async () => {
      installPrettierExtensionsStub.throws(new Error());
      try {
        await init();
        // eslint-disable-next-line id-length, no-empty
      } catch (e) {}

      let expected = OOPS_MESSAGE;
      let actual = consoleErrorStub.firstCall.firstArg;
      expect(actual).to.equal(expected);

      expected = 1;
      actual = processExitStub.firstCall.firstArg;
      expect(actual).to.equal(expected);
    });
    it("suggest eslint --init to be run if missing files", async () => {
      getEslintrcPathStrStub.throws(new Error("No .eslintrc.* detected"));
      const eslintMsg = `No .eslintrc.* files located please run:
npx eslint --init
`;
      const expected = [eslintMsg, OOPS_MESSAGE];
      await init();
      const actual = consoleErrorStub.getCalls().map((call) => call.firstArg);
      expect(actual).to.eql(expected);

      expect(processExitStub.firstCall.firstArg).to.equal(1);
    });
  });
});
