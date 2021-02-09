const helpers = require("../helpers");

/**
 * will overwrite or create a new eslintrc.js file
 *
 * @param {string} configFileNameStr path to eslintrc file
 * @param {object} eslintrcJsObj object representing a new eslintrc to write
 */
function writeEslintrcJsonFile(configFileNameStr, eslintrcJsObj) {
  const jsonStr = JSON.stringify(eslintrcJsObj, null, " ");
  helpers.writeFileOut(configFileNameStr, jsonStr);
}

module.exports = {
  writeEslintrcJsonFile,
};
