const REQUIRED_DEPENDENCIES = ["eslint", "prettier", "eslint-config-prettier"];

/**
 * determines if eslint, prettier, or eslint-config-prettier is missing
 *
 * @param {string[]} dependencyStrArray array of dependencies already in package.json
 * @returns {string[]} array of packages not found
 */
function findMissingDependencies(dependencyStrArray) {
  return REQUIRED_DEPENDENCIES.filter(
    (dependency) => !dependencyStrArray.includes(dependency)
  );
}

module.exports = {
  findMissingDependencies,
};
