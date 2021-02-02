const { pluginsToExtends } = require("./config");
/**
 * adds to last position of extends, prettier
 * @param {Object} eslintrcObj represents the eslintrc file
 * @param {string[]} eslintrcObj.extendsStrArr array of extends
 * @param {string[]} extendsToAddArr extends to add to the eslintrc
 * @returns {Object} a new version of eslintrc, not mutated
 */

function addPrettierToConfig(eslintrcObj, extendsToAddArr) {
  const newEslintrcObj = { ...eslintrcObj };
  const { extends: oldExtendsStrArr } = newEslintrcObj;
  const cleanOldExtendsStrArr = oldExtendsStrArr.filter(
    (extendStr) =>
      ![...Object.values(pluginsToExtends), "prettier"].includes(extendStr)
  );
  const filteredExtendsToAddArr = extendsToAddArr.filter(
    (extendStr) => !cleanOldExtendsStrArr.includes(extendStr)
  );
  newEslintrcObj.extends = [
    ...cleanOldExtendsStrArr,
    ...filteredExtendsToAddArr,
  ];
  return newEslintrcObj;
}

module.exports = { addPrettierToConfig };
