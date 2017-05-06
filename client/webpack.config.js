'use strict';
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const failPlugin = require('webpack-fail-plugin');


// Always enabled plugins
let plugins = [
  // Extract CSS files to the 'bundle.css'.
  new ExtractTextPlugin('_bundle.css'),
  // This plugin should be always required. See https://github.com/webpack/webpack/issues/708
  failPlugin,
];

// Production only plugins
if (process.env.NODE_ENV === 'production') {
  plugins = plugins.concat([
    // Pass the 'NODE_ENV=production' environment variable to the child processes.
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    // Minimize the output
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
  ]);
}


module.exports = {
  entry: './main.js',
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: '_bundle.js',
    path: `${__dirname}/public/build`,
    publicPath: '/build/',
  },
  module: {
    loaders: [
      { test: /\.md$/, loader: 'html!markdown' },
      { test: /\.(?:png|jpg|(?:woff2?|ttf|eot|svg)(?:\?v=[0-9]\.[0-9]\.[0-9])?)$/, loader: 'file?name=static/[hash].[ext]' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
      { test: /\.styl$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!stylus') },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: ['latest'] }
      }
    ]
  },
  plugins,
  devtool: 'source-map',
  postcss: _ => [autoprefixer]
};
