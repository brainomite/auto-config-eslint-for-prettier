const stringifyObject = require("stringify-object");
const helpers = require("../helpers");

/**
 * will overwrite or create a new eslintrc.js file
 *
 * @param {string} configFileNameStr path to eslintrc file
 * @param {object} eslintrcJsObj object representing a new eslintrc to write
 */
function writeEslintrcJsFile(configFileNameStr, eslintrcJsObj) {
  const objString = stringifyObject(eslintrcJsObj, {
    indent: "  ",
    singleQuotes: false,
  });
  helpers.writeFileOut(configFileNameStr, `module.exports = ${objString}`);
}

module.exports = { writeEslintrcJsFile };
