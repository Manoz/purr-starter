<p align="center">
  <img src="https://i.imgur.com/Wcx8so9.png" align="center" alt="purr starter banner"/>
</p>
<br />
<div align="center">

[![tests][tests]][tests-url]
[![builds][builds]][builds-url]
[![deps][deps]][deps-url]
[![deps-dev][deps-dev]][deps-dev-url]
[![cover][cover]][cover-url]

**Current version:** `1.0.4`
</div>

## 🤖 Introduction

**purr starter** is a simple front-end starter kit built with modern web technologies.

It was designed to make the process of creating simple projects easier. For example to create a simple html page with modern technologies like Babel, Eslint, Webpack or Jest to test your application.

## ☕️ Quick start

1. Clone this repo using `git clone https://github.com/Manoz/purr-starter.git` and move to the directory: `cd purr-starter`
2. Run `yarn setup` or `npm run setup` to start the setup process and install dependencies
3. Run `yarn start` or `npm run start` to see the demo app at *`http://localhost:3000`*
4. Run `yarn remove-demo` or `npm run remove-demo` to delete the demo app

If you don't want to use the setup script you can run `yarn` or `npm install` after cloning the repo and keep everything in place.

Here is some additional commands you can also use:

* `yarn build` or `npm run build`: to build the production app inside the `*./dist*` folder.
* `yarn test` or `npm run test` to test the built app

More information about the npm scripts can be found [here](https://github.com/Manoz/purr-starter/tree/master/docs#npm-scripts).

## 📖 Documentation

The documentation for this project is not perfect for now but I'll add more content in the future and maybe a Wiki.

You can learn more about purr-starter [here](./docs/README.md).

## 🚎 Features

1. **Easy as pie** - run one of the easiest webpack starter kit without much knowledge
2. **Instant feedback** - hot reload your browser each time you save a file
3. **Automated production build** - `yarn build` or `npm run build` to build your app. You don't even need a node.js server since it's almost pure html.
4. **One page ready** - this starter kit was meant to build single page app as simple as possible
5. **Continuous Integration** - AppVeyor and TravisCI are ready to catch problems and will test everything on Unix and Windows.

This app also uses some good technologies:

* Babel
* ESlint (with the badass airbnb config)
* Jest
* npm scripts
* SASS / PostCSS
* Webpack

# License
Released under the [MIT](./LICENSE) license.

[deps]: https://david-dm.org/manoz/purr-starter/status.svg
[deps-url]: https://david-dm.org/manoz/purr-starter

[deps-dev]: https://david-dm.org/manoz/purr-starter/dev-status.svg
[deps-dev-url]: https://david-dm.org/manoz/purr-starter?type=dev

[tests]: https://travis-ci.com/Manoz/purr-starter.svg?token=fV1pgutnXPjejYrLnsBw&branch=master
[tests-url]: https://travis-ci.com/Manoz/purr-starter

[builds-url]: https://ci.appveyor.com/project/Manoz/purr-starter
[builds]: https://ci.appveyor.com/api/projects/status/ddqbl7ts07ly5go0?svg=true

[licenses-url]: https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fwebpack%2Fwebpack?ref=badge_shield
[licenses]: https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fwebpack%2Fwebpack.svg?type=shield

[cover]: https://coveralls.io/repos/github/Manoz/purr-starter/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/Manoz/purr-starter?branch=master