var webpack = require('webpack');

module.exports = {
  entry: {
    client: "./src/App.js",
  },
  output: {
    filename: "./dist/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules'],
  },
};
