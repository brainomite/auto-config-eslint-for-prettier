const { pluginsToExtends } = require("./config");

/**
 * returns an array of items to be added to the current extends
 * @param {string[]} [currentDependenciesArr = []] represents dependencies found
 * in the package.json
 * @returns {string[]} array of extends additions
 */

function getExtendsAdditions(currentDependenciesArr = []) {
  const newDependencies = [...currentDependenciesArr];
  const pluginsArr = Object.keys(pluginsToExtends);
  return newDependencies.reduce(
    (dependencyArr, dependencyStr) =>
      pluginsArr.includes(dependencyStr)
        ? [...dependencyArr, pluginsToExtends[dependencyStr]]
        : dependencyArr,
    ["prettier"] // prettier is always added as the first item
  );
}

module.exports = { getExtendsAdditions };
