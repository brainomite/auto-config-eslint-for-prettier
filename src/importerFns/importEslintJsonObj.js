const fs = require("fs");

/**
 * returns an object represented by a json file
 *
 * @param {string} eslintrcPath path to json file
 * @returns {object} object from json file
 */
function importEslintrcJsonObj(eslintrcPath) {
  const fileContentsStr = fs.readFileSync(eslintrcPath, "utf-8");
  return JSON.parse(fileContentsStr);
}
module.exports = {
  importEslintrcJsonObj,
};
