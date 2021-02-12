/* eslint-disable no-console */
const prompts = require("prompts");
const axios = require("axios");

const AARON_YOUNG_THINKFUL_RULES =
  "https://gist.github.com/brainomite/f3424fbef409849f8233f226100b6227/raw/thinkful-rules.jsonc";

/**
 * Will remove comments from a JSONc file
 *
 * @param {string} data a string representing JSONc data
 * @returns {string} JSON string
 */
function stripJSONComments(data) {
  const re = new RegExp("//(.*)", "g");
  return data.replace(re, "");
}

/**
 * this function will mutate it's input adding rules downloaded
 *
 * @param {object} configObject represents an eslintrcObject
 * @returns {object} the mutated object
 */
async function addRulesToConfig(configObject) {
  const message =
    "Please be aware these rules are made by Aaron Young and this is not made or endorsed by Thinkful. Ok to proceed?";
  const { value: okToProceed = null } = await prompts({
    type: "toggle",
    name: "value",
    message,
    initial: true,
    active: "Yes",
    inactive: "no",
  });
  if (!okToProceed) {
    // TODO ???????
    throw new Error("aborted");
  }
  const response = await axios.get(AARON_YOUNG_THINKFUL_RULES, {
    responseType: "text",
  });

  const { rules: rulesObj } = JSON.parse(stripJSONComments(response.data));
  if (!configObject.rules) {
    // eslint-disable-next-line no-param-reassign
    configObject.rules = {};
  }
  Object.keys(rulesObj).forEach((ruleName) => {
    // eslint-disable-next-line no-param-reassign
    configObject.rules[ruleName] = rulesObj[ruleName];
  });
  return configObject;
}

module.exports = {
  addRulesToConfig,
};
