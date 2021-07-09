'use strict'

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    filename: 'static/[contenthash].js',
    assetModuleFilename: 'static/[contenthash][ext][query]',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/i, use: 'ts-loader' },
      { test: /\.md$/i, use: ['html-loader', 'markdown-loader'] },
      {
        test: /\.(jpg|png|woff2?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        type: 'asset/resource',
      },
      { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/[contenthash].css',
    }),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
  ],
}
