const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = require('./webpack.config.base')({
  mode: 'production',

  entry: [path.join(process.cwd(), 'src/scripts/main.js')],

  output: {
    filename: 'scripts/[name].js',
  },

  optimization: {
    minimize: true,
    nodeEnv: 'production',
    sideEffects: true,
    concatenateModules: true,
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
      }),

      new OptimizeCSSAssetsPlugin({}),
    ],
  },

  devtool: 'eval-source-map',

  performance: {
    assetFilter: assetFilename => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
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
      },
      inject: true,
    }),

    new WebpackPwaManifest({
      name: 'Gulp Purr',
      short_name: 'Gulp Purr',
      description: 'A modern Gulp starter kit fueled with Webpack',
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
  ],
});
