/* global __dirname, require */

process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const demoConfig = require('../config/webpack-config-forms');

const compiler = webpack([demoConfig]);

compiler.plugin('done', stats => {
    console.log(stats.toString({
        chunks: false,
        colors: true,
        cached: false,
    }));
});

const devServer = new WebpackDevServer(compiler, {
    clientLogLevel: 'none',
    hot: true,
    quiet: true,
    watchOptions: {
        ignored: /node_modules/,
    },
    https: false,
    host: 'localhost',
});

// Launch WebpackDevServer.
devServer.listen(8080, (err, result) => {
    if (err) {
        return console.log(err);
    }

    console.log('Starting the development server on localhost:8080...\r\n');
});
