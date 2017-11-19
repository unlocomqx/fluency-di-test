const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: 'inline-source-map',
    entry: {
        "main": "./main.ts"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [],
    watch: false
};