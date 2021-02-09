const yaml = require("js-yaml");
const helpers = require("../helpers");

/**
 * will overwrite or create a new eslintrc.js file
 *
 * @param {string} configFileNameStr path to eslintrc file
 * @param {object} eslintrcJsObj object representing a new eslintrc to write
 */
function writeEslintrcYmlFile(configFileNameStr, eslintrcJsObj) {
  helpers.writeFileOut(configFileNameStr, yaml.dump(eslintrcJsObj));
}

module.exports = {
  writeEslintrcYmlFile,
};
