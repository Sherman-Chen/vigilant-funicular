const path = require('path');

module.exports = {
  entry: [
    './src/client/Components/Entry.jsx'
  ],
  output: {
    path: path.join(__dirname, 'src/client'),
          filename: 'build.js',
  },
  resolve: {
    extensions: [
      '','.js','.jsx'
    ],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
