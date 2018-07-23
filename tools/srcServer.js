// This file configures the development web server
// which supports hot reloading and synchronized testing.

import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import options from '../tasks/webpack.config.base';

const bundler = webpack(options);

browserSync({
  logPrefix: 'gulp-purr',
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
        publicPath: options.output.publicPath,

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
