const path = require('path');
const merge = require('webpack-merge');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { HashedModuleIdsPlugin } = require('webpack');

const webpackBase = require('./webpack.config.base');

module.exports = merge(webpackBase, {
  mode: 'production',

  entry: [path.join(process.cwd(), 'src/scripts/main.js')],

  output: {
    filename: 'scripts/[name].[hash].js',
    chunkFilename: 'scripts/[name].[hash].chunk.js',
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            comparisons: false,
          },
          mangle: true,
          output: {
            ascii_only: true,
          },
        },
        cache: true,
        parallel: true,
        sourceMap: false,
      }),

      new OptimizeCSSAssetsPlugin({}),
    ],
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
    },
    runtimeChunk: true,
  },

  devtool: 'eval-source-map',

  performance: {
    assetFilter: (assetFilename) => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),

    new WebpackPwaManifest({
      name: 'Purr Starter',
      short_name: 'Purr Starter',
      description: 'A front-end starter kit built with modern web technologies',
      background_color: '#ffffff',
      theme_color: '#cf4647',
      filename: 'manifest.json',
      fingerprints: false,
      icons: [
        {
          src: path.resolve('public/images/favicon/icon-512x512.png'),
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
