const path = require('path');
const DotenvPlugin = require('webpack-dotenv-plugin');
const common = require('./webpack.common.js');

const environement = new DotenvPlugin({
  sample: './.env',
  path: './.env'
});

module.exports = common({
  mode: 'development',
  stats: {
    children: false,
    maxModules: 0
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    compress: true,
    port: 9000
  }
}, environement);
