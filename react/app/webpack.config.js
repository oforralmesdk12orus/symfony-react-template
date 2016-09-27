/* eslint-disable */
const path = require('path');

module.exports = {
  entry: './src/dev.js',
  output: {
    path: path.join(__dirname, '../../web/react/app'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: __dirname
    }]
  }
}
