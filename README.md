<p align="center">
  <img src="https://i.imgur.com/Wcx8so9.png" align="center" alt="purr starter banner"/>
</p>

<br />

<div align="center">
  <strong><span style="color: #cf4647;">purr</span> starter is a modern Webpack starter kit fueled with a lot of cool stuff.</strong>

  <p>🚧 WIP 🚧 : It's a beta, it works fine but I need to improve a lot of things. Use it, test it, play with it, share it, do what you want ❤️</p>
</div>

<div align="center">

[![Build Status](https://travis-ci.com/Manoz/purr-starter.svg?token=fV1pgutnXPjejYrLnsBw&branch=master)](https://travis-ci.com/Manoz/purr-starter)
[![Build status](https://ci.appveyor.com/api/projects/status/ddqbl7ts07ly5go0?svg=true)](https://ci.appveyor.com/project/Manoz/purr-starter)
[![dependencies Status](https://david-dm.org/manoz/purr-starter/status.svg)](https://david-dm.org/manoz/purr-starter)
[![devDependencies Status](https://david-dm.org/manoz/purr-starter/dev-status.svg)](https://david-dm.org/manoz/purr-starter?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/Manoz/purr-starter/badge.svg?branch=master)](https://coveralls.io/github/Manoz/purr-starter?branch=master)

**Current version:** `0.1.1`
</div>

## ☕️ Quick start

1. Clone and install dependencies
```
git clone git@github.com:Manoz/purr-starter.git
cd purr-starter
yarn install
```

2. Run the app
```
yarn start
```

It will start the dev server (browserSync feat webpack).

3. Build everything
```
yarn build
```

It will serve all files in the `/dist` folder and run the tests.

4. Test the app
```
yarn test
```

Here is some commands you can also use instead:

* `yarn clean-dist`: clean the './dist' folder

## 📖 Documentation

The documentation for this project is not perfect for now but I'll add more content in the future and maybe a Wiki.

You can learn more about purr-starter [here](./docs/README.md).

## 🚎 Technos

This app uses some good technologies:

* Babel
* Browsersync
* ESlint (with the badass airbnb config)
* SASS
* Webpack


## TODO

  * [x] <span style="color: #f92672;">Maybe add some kind of watcher when adding images in the `./src/assets/images` folder.</span>
  * [x] <span style="color: #9cce3b;">Add Jest or Mocha tests</span>
  * [x] <span style="color: #9cce3b;">More webpack (or maybe Gulp) tasks to handle fonts or iconfonts (cancelled)</span>
  * [x] <span style="color: #9cce3b;">Add CI</span>
  * [ ] Handle iconfont svg
  * [ ] Better readme and documentation

# License
Released under the [MIT](./LICENSE) license.