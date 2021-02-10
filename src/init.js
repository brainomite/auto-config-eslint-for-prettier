const initFns = require("./initFns");

/**
 * main function
 */
async function init() {
  const eslintrcPath = initFns.getEslintrcPathStr();

  const eslintrcObj = initFns.getEslintObj(eslintrcPath);

  const dependenciesArr = initFns.getStrArrayOfDependencies();
  const extendsToAddArr = initFns.getExtendsAdditionStrArr(dependenciesArr);
  try {
    await initFns.installPrettierExtensions(dependenciesArr);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Oops! Something went wrong! :(");
    process.exit(1);
  }

  const newEslintrcFileObj = initFns.addPrettierToConfig(
    eslintrcObj,
    extendsToAddArr
  );
  initFns.writeEslintrcFile(eslintrcPath, newEslintrcFileObj);
}

module.exports = { init };
