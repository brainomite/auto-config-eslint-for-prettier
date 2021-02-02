const fs = require("fs");
const stringifyObject = require("stringify-object");

/**
 * will overwrite or create a new eslintrc.js file
 * @param {string} configFileNameStr path to eslintrc file
 * @param {Object} eslintrcJsObj object representing a new eslintrc to write
 */
function writeEslintrcJsFile(configFileNameStr, eslintrcJsObj) {
  const objString = stringifyObject(eslintrcJsObj, {
    indent: "  ",
    singleQuotes: false,
  });
  fs.writeFileSync(configFileNameStr, `module.exports = ${objString}`, {
    encoding: "utf-8",
    flag: "w",
  });
}

module.exports = { writeEslintrcJsFile };
