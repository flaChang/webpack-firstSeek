const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require('./webpack.config.base.js')

module.exports = {
    ...base,
    mode: 'production', //切换模式，development为开发者模式   production为无注释的给用户的模式
    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css",
            ignoreOrder: false, 
        })
    ],
    module: {
        rules: [{
            test: /\.css$/i,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: "../",
                    },
                },
                "css-loader",
            ],
        }, ],
    },
};