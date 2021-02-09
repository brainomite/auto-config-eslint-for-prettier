const path = require("path");
const writerFns = require("../writerFns");

/**
 * invokes the correct function to write out the eslintrc file
 *
 * @param {string} filePathStr  path to output eslintrc file
 * @param {object} eslintObj the object to write out
 */
function writeEslintrcFile(filePathStr, eslintObj) {
  const fileNameStr = path.basename(filePathStr);
  const writerFn = writerFns[fileNameStr];
  if (!writerFn) {
    throw new Error(`Function for ${fileNameStr} isn't defined yet`);
  }
  writerFn(filePathStr, eslintObj);
}

module.exports = {
  writeEslintrcFile,
};
