const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const DotenvPlugin = require('webpack-dotenv-plugin');
const common = require('./webpack.common.js');

const environement = new DotenvPlugin({
  sample: './.env',
  path: './.env'
});

module.exports = common({
  mode: 'production'
}, environement);
