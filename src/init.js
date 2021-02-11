/* eslint-disable no-console */
const initFns = require("./initFns");

/**
 * This will exit in a nice manner
 */
function exitGracefully() {
  console.error("Oops! Something went wrong! :(");
  process.exit(1);
}

/**
 * main function
 */
async function init() {
  let eslintrcPath;
  try {
    eslintrcPath = initFns.getEslintrcPathStr();
  } catch (error) {
    console.error(
      "No .eslintrc.* files located please run:\nnpx eslint --init\n"
    );
    exitGracefully();
  }

  const eslintrcObj = initFns.getEslintObj(eslintrcPath);

  const dependenciesArr = initFns.getStrArrayOfDependencies();
  const extendsToAddArr = initFns.getExtendsAdditionStrArr(dependenciesArr);

  if (process.argv.includes("rules=thinkful")) {
    try {
      await initFns.addRulesToConfig(eslintrcObj);
    } catch (error) {
      console.error("There was a problem downloading the rules!");
      exitGracefully();
    }
  }

  const newEslintrcFileObj = initFns.addPrettierToConfig(
    eslintrcObj,
    extendsToAddArr
  );
  initFns.writeEslintrcFile(eslintrcPath, newEslintrcFileObj);

  try {
    await initFns.installPrettierExtensions(dependenciesArr);
  } catch (error) {
    exitGracefully();
  }
}

module.exports = { init };
