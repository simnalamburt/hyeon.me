'use strict'

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

//
// Common configs
//
const commonConfigs = {
  entry: './src/index.js',
  output: {
    filename: '[hash].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.md$/, use: [
          { loader: 'html-loader' },
          { loader: 'markdown-loader' },
        ]
      },
      { test: /\.html$/, use: 'html-loader' },
      {
        test: /\.(?:jpg|png|(?:woff2?|ttf|eot|svg)(?:\?v=[0-9]\.[0-9]\.[0-9])?)$/,
        use: 'file-loader?name=[hash].[ext]'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(['css-loader', 'postcss-loader'])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[hash].css'),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
  ],
}

//
// Development-mode configs
//
const devConfigs = {
  devtool: 'source-map'
}

//
// Production-mode configs
//
const productionConfigs = {
  plugins: [
    new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    new CompressionPlugin({ test: /\.(?:css|js|svg|eot|ttf|html)$/ }),
  ]
}

module.exports = env => env === 'production' ?
  merge(commonConfigs, productionConfigs) :
  merge(commonConfigs, devConfigs)
