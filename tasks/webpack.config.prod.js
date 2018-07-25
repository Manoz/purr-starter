const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlMinifierPlugin = require('html-minifier-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { HashedModuleIdsPlugin } = require('webpack');

module.exports = require('./webpack.config.base')({
  mode: 'production',

  entry: [path.join(process.cwd(), 'src/scripts/main.js')],

  output: {
    filename: 'scripts/[name].[hash].js',
    chunkFilename: 'scripts/[name].[hash].chunk.js',
  },

  optimization: {
    minimize: true,
    nodeEnv: 'production',
    sideEffects: true,
    concatenateModules: true,
    splitChunks: { chunks: 'all' },
    runtimeChunk: true,
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
      }),

      new HtmlMinifierPlugin({
        removeComments: true,
        collapseWhitespace: false,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      }),

      new OptimizeCSSAssetsPlugin({}),
    ],
  },

  devtool: 'eval-source-map',

  performance: {
    assetFilter: assetFilename => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },

  plugins: [
    new webpack.ExtendedAPIPlugin(),

    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      favicon: 'src/assets/images/favicon/favicon.ico',
      inject: true,
    }),

    new WebpackPwaManifest({
      name: 'Purr Starter',
      short_name: 'Purr Starter',
      description: 'A modern Webpack starter kit fueled with a lot of cool stuff',
      background_color: '#ffffff',
      theme_color: '#cf4647',
      filename: 'manifest.json',
      fingerprints: false,
      icons: [
        {
          src: path.resolve('src/assets/images/favicon/icon-512x512.png'),
          sizes: [72, 96, 120, 128, 144, 152, 167, 180, 192, 384, 512],
          destination: path.join('images', 'favicon'),
        },
      ],
    }),

    new HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20,
    }),
  ],
});
