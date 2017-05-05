var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './components/Index.jsx',
  output: {
    path: path.resolve(__dirname, 'public/bundles'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['latest', 'react']
          }
        }
      }
    ]
  }
}