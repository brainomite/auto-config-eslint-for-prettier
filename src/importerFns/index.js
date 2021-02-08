const { requireEslintJsObj } = require("./requireEslintJsObj");
const { importEslintrcJsonObj } = require("./importEslintJsonObj");
const { importEslintrcYmlObj } = require("./importEslintrcYmlObj");

module.exports = {
  ".eslintrc.js": requireEslintJsObj,
  ".eslintrc.json": importEslintrcJsonObj,
  ".eslintrc.yml": importEslintrcYmlObj,
};
