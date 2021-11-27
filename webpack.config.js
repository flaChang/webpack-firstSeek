const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require('./webpack.config.base.js')

module.exports = {
    ...base,
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, "public/")
        }
    },
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"], //任何以css结尾的文件用css-loader读到css文件、然后再放到style标签中。放入head里
            }
        ]
    },
};