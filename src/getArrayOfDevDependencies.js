const path = require("path");
const fs = require("fs");

/**
 * finds all dev dependencies
 * @returns {string[]} array of dev dependencies
 */

function getArrayOfDevDependencies() {
  const packageJsonPath = path.resolve("./", "package.json");
  const projectJson = fs.readFileSync(packageJsonPath, {
    encoding: "utf-8",
  });
  const projectJsObj = JSON.parse(projectJson);

  const { devDependencies = {} } = projectJsObj;
  return Object.keys(devDependencies);
}

module.exports = { getArrayOfDevDependencies };
