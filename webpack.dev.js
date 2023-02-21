const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool:  'eval-source-map',
  devServer: {
    static: path.resolve(__dirname, 'public')
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              require.resolve('react-refresh/babel')
            ]
          }
        }
      },
    ]
  }
});