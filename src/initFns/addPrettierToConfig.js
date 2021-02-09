const { pluginsToExtendsObj, prettierStr } = require("../config");
/**
 * adds to last position of extends, prettier
 *
 * @param {object} eslintrcObj represents the eslintrc file
 * @param {string[]} eslintrcObj.extendsStrArr array of extends
 * @param {string[]} extendsToAddStrArr extends to add to the eslintrc
 * @returns {object} a new version of eslintrc, not mutated
 */
function addPrettierToConfig(eslintrcObj, extendsToAddStrArr) {
  const newEslintrcObj = { ...eslintrcObj };
  const { extends: oldExtendsStrArr } = newEslintrcObj;
  const cleanOldExtendsStrArr = oldExtendsStrArr.filter(
    (extendStr) =>
      ![...Object.values(pluginsToExtendsObj), prettierStr].includes(extendStr)
  );
  const filteredExtendsToAddStrArr = extendsToAddStrArr.filter(
    (extendStr) => !cleanOldExtendsStrArr.includes(extendStr)
  );
  newEslintrcObj.extends = [
    ...cleanOldExtendsStrArr,
    ...filteredExtendsToAddStrArr,
  ];
  return newEslintrcObj;
}

module.exports = { addPrettierToConfig };
