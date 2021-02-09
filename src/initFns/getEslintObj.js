const path = require("path");
const importerFns = require("../importerFns");

/**
 * opens the file and returns an object representing
 *
 * @param {string} pathStr represents full path to the file
 * @returns {object} represents the parsed eslintrc file
 */
function getEslintObj(pathStr) {
  const fileNameStr = path.basename(pathStr);
  if (!importerFns[fileNameStr]) {
    throw new Error(`Function for ${fileNameStr} isn't defined yet`);
  }
  return importerFns[fileNameStr](pathStr);
}

module.exports = { getEslintObj };
