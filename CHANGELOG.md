# Changelog

## 1.0.2

Jsdom has been recently updated and causes issues with localStorage support.
See: https://github.com/facebook/jest/issues/6766

- fix jest localStorage issue

## 1.0.1

Had an issue with appveyor cache. I had to cleanup the cache but looks like the issue was related to the `nodeVersionCheck` script since chalk is not installed before this script runs.

I've decided to remove chalk from this script file and re build Appveyor cache.

- remove chalk in `nodeVersionCheck` script
- rebuild Appveyor cache

## 1.0.0

Version 1.0 is finally released. It's been a lot of work for me and I learned so much. 

Next step is to work on the contributing workflow and also create a `purr-react-starter` version fueled with... react o/

- Update dependencies
  - Upgrade *autoprefixer* to v9.0.2
  - Upgrade *jest* to v23.4.2
  - Upgrade *webpack* to v4.16.3
  - Upgrade *webpack-hot-middleware* to v2.22.3
  - Upgrade *webpack-pwa-manifest* to v3.6.3
- Removed dependencies
  - *browser-sync*
  - *webpack-dev-middleware*
  - *webpack-hot-middleware*
- typo
- Update documentation
- Removed Browsersync > replaced with webpack-dev-server