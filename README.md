<h1 align="center">auto-config-eslint-for-prettier</h1>
<h4 align="center">A cli tool to correctly configure ESLint to work with Prettier.</h4>

<p align="center">
  <a href="https://badge.fury.io/js/auto-config-eslint-for-prettier">
    <img src="https://badge.fury.io/js/auto-config-eslint-for-prettier.svg"
         alt="npm version">
  </a>
  <a href="https://coveralls.io/github/brainomite/auto-config-eslint-for-prettier?branch=main">
    <img src="https://coveralls.io/repos/github/brainomite/auto-config-eslint-for-prettier/badge.svg?branch=main"
         alt="Coverage Status">
  </a>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a> •
  <a href="features-under-development">Features Under Development</a> •
  <a href="#license">License</a>
</p>

## Motivation

There is a lot of confusion about how to get [Prettier](https://prettier.io/)
and [ESLint](https://eslint.org/) to work together. I wanted to create a tool
that will automagically implement the recommended configurations of ESLint to
work with Prettier. I also wanted it to work similar to `eslint --init`

To start with, the only mention ESLint makes of Prettier is on their GitHub
page's
[FAQ Section](https://github.com/eslint/eslint#does-prettier-replace-eslint),
but no further directions.

Prettier makes
[two methodologies](https://prettier.io/docs/en/integrating-with-linters.html)
available to integrate with ESLint, but one
[isn't recommended](https://prettier.io/docs/en/integrating-with-linters.html#notes).
Furthermore, the suggested
[additional package](https://github.com/prettier/eslint-config-prettier)
requires configurations of the `.eslintrc.*` file mentioned in the
[instructions](https://github.com/prettier/eslint-config-prettier#installation)!

This is a bunch of steps that can and now is automated.

## Key Features

- Updates .eslintrc.js file with correct prettier extends for known plugins
  - supports the following plugins
    - `@typescript-eslint/eslint-plugin`
    - `eslint-plugin-babel`
    - `eslint-plugin-flowtype`
    - `eslint-plugin-prettier`
    - `eslint-plugin-react`
    - `eslint-plugin-standard`
    - `eslint-plugin-unicorn`
    - `eslint-plugin-vue`
- Determines and installs missing npm packages for the configuration of ESLint
  - prettier
  - eslint-config-prettier

## How To Use

1. If you haven't already, create a `.eslintrc.js` file manually or run
   `npx eslint --init`
2. run `npx auto-config-eslint-for-prettier`

## Credits

This software uses the following open source packages:

### Dependencies

- [axios](https://www.npmjs.com/package/axios)
- [cross-spawn](https://www.npmjs.com/package/cross-spawn)
- [js-yaml](https://www.npmjs.com/package/js-yaml)
- [Prompts](https://www.npmjs.com/package/prompts)
- [stringify-object](https://www.npmjs.com/package/stringify-object)

### Development Dependencies

- [Chai](https://www.npmjs.com/package/chai)
- [ESLint](https://www.npmjs.com/package/eslint)
- [chai-as-promised](https://www.npmjs.com/package/chai-as-promised)
- [coveralls](https://www.npmjs.com/package/coveralls)
- [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)
- [Generate Changelog](https://www.npmjs.com/package/generate-changelog)
- [Husky](https://www.npmjs.com/package/husky)
- [Mocha](https://www.npmjs.com/package/mocha)
- [Node.js](https://nodejs.org/)
- [nyc](https://www.npmjs.com/package/nyc)
- [Prettier](https://www.npmjs.com/package/prettier)
- [Sinon.js](https://www.npmjs.com/package/sinon)

## Features Under Development

- [x] Detect if ESLint isn't setup yet
- [x] Support eslintrc in YAML format
- [x] Support eslintrc in JSON format
- [x] Optionally auto install of Prettier and/or eslint-config-prettier
- [x] Add ability to download json(c) rules, from pre-defined keywords
- [ ] Add ability to download json(c) rules, from arbitrary URLs
- [ ] Add ability to read json(c) rules, from a local path

## License

MIT

---

> [aaronyoung.dev](https://aaronyoung.dev) &nbsp;&middot;&nbsp; GitHub
> [@brainomite](https://github.com/brainomite)
