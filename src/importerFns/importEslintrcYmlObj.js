const yaml = require("js-yaml");
const fs = require("fs");
/**
 * returns an object represented by a yml file
 *
 * @param {string} eslintrcPath path to yml file
 * @returns {object} object from yml file
 */
function importEslintrcYmlObj(eslintrcPath) {
  const fileContentsStr = fs.readFileSync(eslintrcPath, "utf-8");
  return yaml.load(fileContentsStr);
}
module.exports = {
  importEslintrcYmlObj,
};
