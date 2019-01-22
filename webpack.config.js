const path = require("path");

module.exports = {
  entry: ["babel-polyfill", "./js/menu.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/main.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
