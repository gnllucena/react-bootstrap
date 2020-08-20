const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

module.exports = (args, environment) => merge({
  entry: path.resolve(__dirname, 'src/Index'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: [
      '.js',
      '.jsx',
      '.json',
      '.ts', 
      '.tsx'
    ]
  },
  module: {
    rules: [
      { 
        test: /\.(t|j)sx?$/, 
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', 
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: `$urlimage: "${process.env.URL_IMAGES}";`,
            }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: ['src/assets/styles/Theme.scss']
            }
          }
        ]
      }
    ]
  },
  plugins: [
    environment,
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public/manifest.json', to: '' },
        { from: 'public/robots.txt', to: '' },
        { from: 'public/logo192.png', to: '' },
        { from: 'public/logo512.png', to: '' },
      ],
    })
  ],
  devtool: 'source-map'
}, args);