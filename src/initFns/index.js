const { addPrettierToConfig } = require("./addPrettierToConfig");
const {
  getStrArrayOfDevDependencies,
} = require("./getStrArrayOfDevDependencies");
const { getExtendsAdditionStrArr } = require("./getExtendsAdditionStrArr");
const { writeEslintrcFile } = require("./writeEslintrcFile.js");
const { getEslintObj } = require("./getEslintObj");
const { getEslintrcPathStr } = require("./getEslintrcPathStr");

module.exports = {
  addPrettierToConfig,
  getStrArrayOfDevDependencies,
  getExtendsAdditionStrArr,
  writeEslintrcFile,
  getEslintObj,
  getEslintrcPathStr,
};
