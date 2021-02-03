const { pluginsToExtendsObj, prettierStr } = require("./config");

/**
 * returns an array of items to be added to the current extends
 * @param {string[]} [currentDependenciesStrArr = []] represents dependencies found
 * in the package.json
 * @returns {string[]} array of extends additions
 */

function getExtendsAdditionStrArr(currentDependenciesStrArr = []) {
  const newDependenciesStrArr = [...currentDependenciesStrArr];
  const pluginsStrArr = Object.keys(pluginsToExtendsObj);
  return newDependenciesStrArr.reduce(
    (dependencyArr, dependencyStr) =>
      pluginsStrArr.includes(dependencyStr)
        ? [...dependencyArr, pluginsToExtendsObj[dependencyStr]]
        : dependencyArr,
    // init reduce with an array and prettier is always added as the first item
    [prettierStr]
  );
}

module.exports = { getExtendsAdditionStrArr };
