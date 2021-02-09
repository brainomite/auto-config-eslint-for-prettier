const path = require("path");
const fs = require("fs");

/**
 * finds all dev dependencies
 *
 * @returns {string[]} array of dev dependencies
 */
function getStrArrayOfDevDependencies() {
  const packageJsonPathStr = path.resolve("./", "package.json");
  const projectJson = fs.readFileSync(packageJsonPathStr, {
    encoding: "utf-8",
  });
  const projectJsObj = JSON.parse(projectJson);

  const { devDependencies = {} } = projectJsObj;
  return Object.keys(devDependencies);
}

module.exports = { getStrArrayOfDevDependencies };
