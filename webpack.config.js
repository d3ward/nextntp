var path = require("path"),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin,
  CopyWebpackPlugin = require("copy-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin");
WriteFilePlugin = require("write-file-webpack-plugin");

module.exports = {
  mode: "production",
  context: path.resolve(__dirname, './src'),
  entry: {
    local_ntp: "./js/local_ntp.js"
  },
  output: {
    filename: './[name].js',
    path: path.resolve(__dirname, './dist'),
    clean: false
  },
  module: {
    rules: [{
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "./[name].css",
      chunkFilename: "[name].css",
    }),
    

    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "html", "local_ntp.html"),
      filename: "local_ntp.html",
      sources: false,
      minify: false,
      chunks: ["local_ntp"]
    }),
  ]
};