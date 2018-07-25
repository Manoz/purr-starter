// This file configures the development web server
// which supports hot reloading and synchronized testing.

const webpack = require('webpack');
const browserSync = require('browser-sync');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const historyApiFallback = require('connect-history-api-fallback');

const webpackConfigDev = require('../tasks/webpack.config.dev');

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  browserSync({
    logPrefix: 'PURR',
    port: 4000,
    ui: {
      port: 4001,
    },
    server: {
      baseDir: 'dist',
    },

    files: [
      'src/*.html',
    ],

    middleware: [historyApiFallback()],
  });
} else {
  const bundler = webpack(webpackConfigDev);
  browserSync({
    logPrefix: 'PURR',
    port: 3000,
    ui: {
      port: 3001,
    },
    server: {
      baseDir: 'src',

      middleware: [
        historyApiFallback(),

        webpackDevMiddleware(bundler, {
          // Dev middleware can't access config, so we provide publicPath
          publicPath: '/',

          // Suppress noisy webpack output so only errors are displayed to the console.
          noInfo: true,
          quiet: false,
          stats: {
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false,
          },
        }),
        webpackHotMiddleware(bundler),
      ],
    },

    files: [
      'src/*.html',
    ],
  });
}
