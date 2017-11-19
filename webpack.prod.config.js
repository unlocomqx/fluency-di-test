var config = require('./webpack.config');
var webpack = require('webpack');
var fs = require("fs");

let prod_config = {
    devtool: false
};

Object.assign(prod_config, config);

prod_config.plugins = [
    new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false, comments: false, minify: true})
];

module.exports = prod_config;