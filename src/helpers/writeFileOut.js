const fs = require("fs");

/**
 * writes the file out to the file system
 *
 * @param {string} configFilePathStr path to output file
 * @param {string} dataString data to write out
 */
function writeFileOut(configFilePathStr, dataString) {
  fs.writeFileSync(configFilePathStr, dataString, {
    encoding: "utf-8",
    flag: "w",
  });
}
exports.writeFileOut = writeFileOut;
