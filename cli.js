#!/usr/bin/env node
const path = require("path");
const { addPrettierToConfig } = require("./src/addPrettierToConfig");
const {
  getArrayOfDevDependencies,
} = require("./src/getArrayOfDevDependencies");
const { getExtendsAdditions } = require("./src/getExtendsAdditions");
const { writeEslintrcJsFile } = require("./src/writeEslintrcJsFile.js");

const eslintrcPath = path.resolve("./", ".eslintrc.js");
// eslint-disable-next-line import/no-dynamic-require
const eslintrcObj = require(eslintrcPath);

const devDependenciesArr = getArrayOfDevDependencies();
const extendsToAddArr = getExtendsAdditions(devDependenciesArr);
const newEslintrcFileObj = addPrettierToConfig(eslintrcObj, extendsToAddArr);
writeEslintrcJsFile(eslintrcPath, newEslintrcFileObj);
