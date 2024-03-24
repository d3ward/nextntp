const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('./config')
const pages = config.pages
const webpack = require('webpack');
const packageJson = require('../package.json');

module.exports = {
    context: config.src,
    entry: {
        ...pages.reduce((acc, page) => {
            acc[page] = `./js/${page}.js`
            return acc
        }, {})
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
                },
                {
                    from: './themes',
                    to: 'themes'
                }
            ]
        }),

        new MiniCssExtractPlugin({
            filename: './css/[name].css',
            chunkFilename: '[name].css'
        }),
        ...pages.map(
            (page) =>
                new HTMLWebpackPlugin({
                    template: `./${page}.ejs`,
                    filename: `${page}.html`,
                    chunks: [page],
                    minify: false,
                    sources: false
                })
        ),
        new webpack.DefinePlugin({
          __VERSION__: JSON.stringify(packageJson.version),
      }),
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
