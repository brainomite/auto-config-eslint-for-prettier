# auto-config-eslint-for-prettier

<h4 align="center">A cli tool to setup correct prettier extends in the .eslintrc.js file.</h4>

<p align="center">
  <a href="https://badge.fury.io/js/auto-config-eslint-for-prettier">
    <img src="https://badge.fury.io/js/auto-config-eslint-for-prettier.svg"
         alt="Gitter">
  </a>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

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

## How To Use

1. If you haven't already, create a `.eslintrc.js` file manually or run
   `npx eslint --init`
2. run `npx auto-config-eslint-for-prettier`

## Credits

This software uses the following open source packages:

### Dependencies

- [stringify-object](https://www.npmjs.com/package/stringify-object)

### Development Dependencies

- [Chai](https://www.npmjs.com/package/chai)
- [ESLint](https://www.npmjs.com/package/eslint)
- [Generate Changelog](https://www.npmjs.com/package/generate-changelog)
- [Husky](https://www.npmjs.com/package/husky)
- [Mocha](https://www.npmjs.com/package/mocha)
- [Node.js](https://nodejs.org/)
- [nyc](https://www.npmjs.com/package/nyc)
- [pinst](https://www.npmjs.com/package/pinst)
- [Prettier](https://www.npmjs.com/package/prettier)
- [Sinon.js](https://www.npmjs.com/package/sinon)

## License

MIT

---

> [aaronyoung.dev](https://aaronyoung.dev) &nbsp;&middot;&nbsp; GitHub
> [@brainomite](https://github.com/brainomite)
