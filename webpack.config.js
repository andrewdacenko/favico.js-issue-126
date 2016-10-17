const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const loaders = [
    {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            presets: [
                'es2015',
                'react',
                'stage-0'
            ],
            plugins: []
        }
    }
];

module.exports = {
    devtool: 'source-map',
    entry: path.resolve('src', 'main.js'),
    output: {
        path: path.resolve('dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'index.tpl.html'),
            favicon: path.resolve('src', 'favicon.ico'),
            inject: 'body',
            title: 'A',
            filename: 'index.html'
        })
    ],
    module: {
        loaders: loaders
    }
};
