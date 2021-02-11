const { addPrettierToConfig } = require("./addPrettierToConfig");
const { getStrArrayOfDependencies } = require("./getStrArrayOfDependencies");
const { getExtendsAdditionStrArr } = require("./getExtendsAdditionStrArr");
const { writeEslintrcFile } = require("./writeEslintrcFile.js");
const { getEslintObj } = require("./getEslintObj");
const { getEslintrcPathStr } = require("./getEslintrcPathStr");
const { findMissingDependencies } = require("./findMissingDependencies");
const { installPrettierExtensions } = require("./installPrettierExtensions");

module.exports = {
  addPrettierToConfig,
  getStrArrayOfDependencies,
  getExtendsAdditionStrArr,
  writeEslintrcFile,
  getEslintObj,
  getEslintrcPathStr,
  findMissingDependencies,
  installPrettierExtensions,
};
