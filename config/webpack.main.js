const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('./config')
module.exports = {
    context: config.src,
    entry: {
        index: './js/index.js'
    },
    output: {
        filename: './js/[name].js',
        path: config.build,
        clean: false,
        assetModuleFilename: '[path][name][ext]'
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './assets',
                    to: 'assets',
                    globOptions: {
                        ignore: [
                            '*.DS_Store',
                            '**/css/*.css',
                            '**/js/*.js',
                            '**/*.html'
                        ]
                    },
                    noErrorOnMissing: true
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: './css/[name].css',
            chunkFilename: '[name].css'
        }),
        new HTMLWebpackPlugin({
            template: config.public + '/index.html',
            filename: 'index.html',
            sources: false,
            minify: false,
            chunks: ['index']
        })
    ],
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource'
        },
        {
          test: /\.ejs$/i,
          use: ['html-loader', 'template-ejs-loader']
        },
  
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader, // extract css from commonjs
            'css-loader', // turn css into commonjs
            'sass-loader' // turn scss into css
          ]
        }
      ]
    }
}
