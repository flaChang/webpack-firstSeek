const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js', //入口，默认为main.js
    output: {
        filename: '[name].[contenthash].js', //http 缓存。便于添加缓存，http协议中规定的
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'fla has a wife', //此名字为新建的html的title
            template: 'src/index.html'
        })
    ],
};