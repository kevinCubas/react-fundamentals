const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool:  'eval-source-map',
  devServer: {
    static: path.resolve(__dirname, 'public')
  },
});