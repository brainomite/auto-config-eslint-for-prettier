/* eslint-disable no-console */
const initFns = require("./initFns");

/**
 * helpers
 */

/**
 * This will write out the new eslintrc file
 *
 * @param {object} eslintrcObj eslintrc to modify
 * @param {string[]} extendsToAddArr array of extends to add to the eslintrc
 * @param {string} eslintrcPath path for writing out the file
 */
function updateEslintrc(eslintrcObj, extendsToAddArr, eslintrcPath) {
  const newEslintrcFileObj = initFns.addPrettierToConfig(
    eslintrcObj,
    extendsToAddArr
  );
  initFns.writeEslintrcFile(eslintrcPath, newEslintrcFileObj);
}

/**
 * This will exit in a nice manner
 */
function exitGracefully() {
  console.error("Oops! Something went wrong! :(");
  process.exit(1);
}

/**
 * returns the path of eslintrc if found
 *
 * @returns {string} found path
 */
// eslint-disable-next-line consistent-return
function tryToGetEslintrcPath() {
  try {
    return initFns.getEslintrcPathStr();
  } catch (error) {
    console.error(
      "No .eslintrc.* files located please run:\nnpx eslint --init\n"
    );
    exitGracefully();
  }
}

/** will attempt to obtain rules
 *
 * @param {object} eslintrcObj object to add rules to
 */
async function tryToAddRules(eslintrcObj) {
  try {
    await initFns.addRulesToConfig(eslintrcObj);
  } catch (error) {
    console.error("There was a problem downloading the rules!");
    exitGracefully();
  }
}

/**
 * attempts to install packages
 *
 * @param {string} dependenciesArr string of packages to install
 */
async function tryInstallPrettierExtensions(dependenciesArr) {
  try {
    await initFns.installPrettierExtensions(dependenciesArr);
  } catch (error) {
    exitGracefully();
  }
}

/**
 * main function
 */
async function init() {
  const eslintrcPath = tryToGetEslintrcPath();
  const eslintrcObj = initFns.getEslintObj(eslintrcPath);
  const dependenciesArr = initFns.getStrArrayOfDependencies();
  const extendsToAddArr = initFns.getExtendsAdditionStrArr(dependenciesArr);

  if (process.argv.includes("rules=thinkful")) {
    await tryToAddRules(eslintrcObj);
  }

  updateEslintrc(eslintrcObj, extendsToAddArr, eslintrcPath);

  await tryInstallPrettierExtensions(dependenciesArr);
}

module.exports = { init };
