
const common = require('./webpack.common.js')
const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const DotenvPlugin = require('webpack-dotenv-plugin')

const environement = new DotenvPlugin({
  sample: './.env',
  path: './.env',
});

module.exports = common({
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true
      }
    )],
    splitChunks: {
      chunks: 'all'
    },
  }
}, environement);