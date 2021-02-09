const { writeEslintrcJsFile } = require("./writeEslintrcJsFile");
const { writeEslintrcYmlFile } = require("./writeEslintrcYmlFile");
const { writeEslintrcJsonFile } = require("./writeEslintrcJsonFile");

module.exports = {
  ".eslintrc.js": writeEslintrcJsFile,
  ".eslintrc.json": writeEslintrcJsonFile,
  ".eslintrc.yml": writeEslintrcYmlFile,
};
