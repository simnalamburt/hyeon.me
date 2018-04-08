'use strict'

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const cssnext = require('postcss-cssnext')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ZopfliPlugin = require('zopfli-webpack-plugin')
const BrotliPlugin = require('brotli-webpack-plugin')

//
// Common configs
//
const commonConfigs = {
  entry: './src/index.js',
  output: {
    filename: 'static-[hash].js',
    path: path.resolve(__dirname, '../public')
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
        use: 'file-loader?name=static-[hash].[ext]'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            { loader: 'postcss-loader', options: { plugins: [cssnext] } }
          ]
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['../public/static-*'], { allowExternal: true }),
    new ExtractTextPlugin('static-[hash].css'),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
  ],
}

//
// Development-mode configs
//
const development = {
  devtool: 'source-map',
  devServer: { compress: true }
}

//
// Production-mode configs
//
const test = /\.(?:css|js|svg|eot|ttf|html)$/;
const production = {
  plugins: [
    new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
    new ZopfliPlugin({ test, minRatio: 1 }),
    new BrotliPlugin({ test, minRatio: 1 }),
  ]
}


// Export configs
module.exports = (_, { mode }) => merge(
  commonConfigs,
  mode === 'production' ? production : development)
