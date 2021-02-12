/* eslint-disable no-console */
const spawn = require("cross-spawn");
const prompts = require("prompts");

const PRETTIER_PACKAGES = ["prettier", "eslint-config-prettier"];
/**
 * this will attempt, with the user's permission to install the missing
 * dependencies using npm
 *
 * @param {string[]} missingDependenciesArr arr of dependencies to install
 * @returns {undefined} always returns undefined
 */
async function installPrettierExtensions(missingDependenciesArr) {
  const packagesToInstallArr = PRETTIER_PACKAGES.filter(
    (dependency) => !missingDependenciesArr.includes(dependency)
  );

  if (!packagesToInstallArr.length) return undefined;
  const packageStr = packagesToInstallArr.join(" ");
  const message = `The following packages are missing: ${packageStr}. OK to Install?`;
  const { value: okToProceed = null } = await prompts({
    type: "toggle",
    name: "value",
    message,
    initial: true,
    active: "Yes",
    inactive: "no",
  });
  const pluralS = packagesToInstallArr.length > 1 ? "s" : "";
  if (!okToProceed) {
    console.info(
      `Package${pluralS} not installed. Please install the following package${pluralS} with a package manager of your choice: ${packageStr}`
    );
    if (okToProceed === null) {
      throw new Error("aborted");
    }
    return undefined;
  }
  const result = spawn.sync("npm", ["i", "-D", ...packagesToInstallArr], {
    stdio: "inherit",
  });
  if (result.error && result.error.code === "ENOENT") {
    console.error(
      `Could not execute npm. Please install the following package${pluralS} with a package manager of your choice: ${packageStr}`
    );
  }
  return undefined;
}

module.exports = {
  installPrettierExtensions,
};
