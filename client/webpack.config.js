'use strict'

const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'static-[hash].js',
    path: path.resolve(__dirname, '../public'),
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [{ loader: 'html-loader' }, { loader: 'markdown-loader' }],
      },
      { test: /\.html$/, use: 'html-loader' },
      {
        test: /\.(?:jpg|png|(?:woff2?|ttf|eot|svg)(?:\?v=[0-9]\.[0-9]\.[0-9])?)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static-[hash].[ext]',
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['static-*'],
    }),
    new MiniCssExtractPlugin({
      filename: 'static-[hash].css',
    }),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
  ],
}
