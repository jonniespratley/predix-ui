const path = require('path');

module.exports = {
  devServer: {
    contentBase: [
      path.join(__dirname, "../public"),
      path.join(__dirname, "../dist"),
      path.join(__dirname, "../demo")
    ]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
};
