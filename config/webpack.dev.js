const config = require("./webpack.config");
const {merge} = require("webpack-merge");
const paths = require("./paths");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(config, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader, // extract css from commonjs
          "css-loader"
        ],
      },
    ],
  },
 
  devServer: {static: {
    directory: paths.dist,
  },
    compress: true,
    port: 3000,
    hot: true,
    open: true
  }
});