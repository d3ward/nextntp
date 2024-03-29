
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const config = require('./config')
module.exports = {
  context: config.src,
  mode: 'production',
  entry: {
    nextntp: './js/index.js',
  },
  output: {
    filename: './[name].js',
    path: config.ext,
    clean: false,
    assetModuleFilename: '[path][name][ext]'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: config.public + '/index.html',
      filename: 'blank.html',
      sources: false,
      minify: false,
      chunks: ['nextntp'],
    }),
    new MiniCssExtractPlugin({
      filename: './[name].css',
      chunkFilename: '[name].css'
  }),
    new CopyPlugin({
      patterns: [
        { from: "png", to: "png" },
      ],
    }),
    new CopyPlugin({
      patterns: [
        { from: "assets", to: "assets" },
      ],
    }),
    new CopyPlugin({
      patterns: [
        { from: "manifest.json", to: "manifest.json" },
      ],
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader, // extract css from commonjs
          'css-loader', // turn css into commonjs
          'sass-loader' // turn scss into css
        ]
      }
    ],
  },
  performance: {
    hints: false,
  },
  optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				test: /\.js(\?.*)?$/i
			})
		]
	}
};
