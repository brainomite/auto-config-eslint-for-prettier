/**
 * returns an object exported by a module
 *
 * @param {string} eslintrcPath path to module
 * @returns {object} object from module
 */
function requireEslintJsObj(eslintrcPath) {
  // eslint-disable-next-line import/no-dynamic-require, global-require
  return require(eslintrcPath);
}
exports.requireEslintJsObj = requireEslintJsObj;
