const path = require("path");
const fs = require("fs");
const { eslintrcFileNamesStrArr } = require("../config");

/**
 * determines the correct config file path
 *
 * @returns {string} path to eslintrc file
 */
function getEslintrcPathStr() {
  const eslintrcObjArr = eslintrcFileNamesStrArr.map((eslintrcFileNameStr) => {
    const eslintrcObj = {
      filePathStr: path.resolve("./", eslintrcFileNameStr),
    };
    eslintrcObj.fileFoundBool = fs.existsSync(eslintrcObj.filePathStr);
    return eslintrcObj;
  });

  const numOfFoundFiles = eslintrcObjArr.reduce(
    (countNum, eslintrcObj) =>
      eslintrcObj.fileFoundBool ? countNum + 1 : countNum,
    0
  );

  if (numOfFoundFiles > 1) {
    throw new Error("There were multiple eslintrc files found");
  }

  const foundEslintrcFileObj = eslintrcObjArr.find(
    (eslintrcObj) => eslintrcObj.fileFoundBool
  );

  if (foundEslintrcFileObj) {
    return foundEslintrcFileObj.filePathStr;
  }
  throw new Error("No .eslintrc.* detected");
}
exports.getEslintrcPathStr = getEslintrcPathStr;
