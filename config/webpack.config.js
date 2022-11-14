const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const paths = require("./paths");
module.exports = {
  context: paths.src,
  entry: {
    "nextntp": './js/nextntp.js',
  },
  output: {
    filename: './js/[name].js',
    path: paths.build,
    clean: false,
    assetModuleFilename: '[path][name][ext]'
  },
 
  plugins: [
    // Copies all the files from public to assets except css, html and js
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.src+"/assets",
          to: "assets",
          globOptions: {
            ignore: [ "*.DS_Store","**/css/*.css", "**/js/*.js", "**/*.html"],
            //ignore: [],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "./css/[name].css",
      chunkFilename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      template: paths.public+'/nextntp.html',
      filename: 'index.html',
      sources: false,
      minify: false,
      chunks: ["nextntp"]
    })
  ]
};