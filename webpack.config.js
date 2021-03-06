module.exports = {
  entry: './src/client.js',
  output: {
    path: './assets',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.json'],
  },
};
