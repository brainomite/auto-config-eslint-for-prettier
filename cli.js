#!/usr/bin/env node

const path = require("path");
const { addPrettierToConfig } = require("./src/addPrettierToConfig");
const {
  getStrArrayOfDevDependencies,
} = require("./src/getStrArrayOfDevDependencies");
const { getExtendsAdditionStrArr } = require("./src/getExtendsAdditionStrArr");
const { writeEslintrcJsFile } = require("./src/writeEslintrcJsFile.js");

function init(
  addPrettierToConfigFn = addPrettierToConfig,
  getStrArrayOfDevDependenciesFn = getStrArrayOfDevDependencies,
  getExtendsAdditionStrArrFn = getExtendsAdditionStrArr,
  writeEslintrcJsFileFn = writeEslintrcJsFile
) {
  const eslintrcPath = path.resolve("./", ".eslintrc.js");

  // eslint-disable-next-line import/no-dynamic-require, global-require
  const eslintrcObj = require(eslintrcPath);

  const devDependenciesArr = getStrArrayOfDevDependenciesFn();
  const extendsToAddArr = getExtendsAdditionStrArrFn(devDependenciesArr);
  const newEslintrcFileObj = addPrettierToConfigFn(
    eslintrcObj,
    extendsToAddArr
  );
  writeEslintrcJsFileFn(eslintrcPath, newEslintrcFileObj);
}

init();

// for testing
module.exports = { init };
