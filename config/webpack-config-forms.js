const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    mode: 'development',
    devtool: false,
    entry: {
        'demo': path.join(__dirname, '../src/index.js')
    },

    output: {
        pathinfo: true,
        filename: 'js/[name].js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'html-template.ejs'),
            title: 'DEMO',
            filename: `demo.html`,
            xhtml: true,
        }),
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader?cacheDirectory=true',
                include: [
                    path.join(__dirname, '../src'),
                ],
            },
        ],
    },
};

module.exports = config;
