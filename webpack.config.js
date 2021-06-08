const Dotenv = require('dotenv-webpack');
const defaultConfig = require('./node_modules/@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
  mode: defaultConfig.mode,
  entry: {
    index: './src/index',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  resolve: defaultConfig.resolve,
  module: {
    ...defaultConfig.module,

    rules: [...defaultConfig.module.rules],
  },
  plugins: [...defaultConfig.plugins, new Dotenv()],
  stats: defaultConfig.stats,
  devtool: defaultConfig.devtool,
};
