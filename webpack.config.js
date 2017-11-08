const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  // Generate sourcemaps for better error messages
  devtool: 'source-map',
  // Ignore everything in the node_modules folder
  externals: [nodeExternals()],
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: 'handler.js', // this should match the first part of function handler in serverless.yml
  },
  // Run babel on all .js files and skip those in node_modules
  module: {
    rules: [{
      test: /\.js?$/,
      loaders: ["babel-loader"],
      include: __dirname,
      exclude: /node_modules/,
    }]
  }
};