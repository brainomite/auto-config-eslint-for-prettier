const initFns = require("./initFns");

/**
 * main function
 */
function init() {
  const eslintrcPath = initFns.getEslintrcPathStr();

  const eslintrcObj = initFns.getEslintObj(eslintrcPath);

  const devDependenciesArr = initFns.getStrArrayOfDevDependencies();
  const extendsToAddArr = initFns.getExtendsAdditionStrArr(devDependenciesArr);
  const newEslintrcFileObj = initFns.addPrettierToConfig(
    eslintrcObj,
    extendsToAddArr
  );
  initFns.writeEslintrcFile(eslintrcPath, newEslintrcFileObj);
}

module.exports = { init };
