
    var webpack = require('webpack');
    var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
    //var ExtractTextPlugin = require("extract-text-webpack-plugin");
    var entry = require('./index.js');
    module.exports = {
        //plugins: [commonsPlugin, new ExtractTextPlugin("[name].css")],
        plugins: [commonsPlugin],
        entry: entry,
        output: {
            path: 'dist/js/page',
            filename: '[name].js'
        },

        module: {
            loaders: [
                { test: /\.css$/, loader: 'style-loader!css-loader' },
                { test: /\.js$/, loader: 'jsx-loader?harmony' },
                { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
                { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
                { test: /\.jsx?$/,exclude: /(node_modules|bower_components)/,loader: 'babel'}
            ]
        },
        resolve: {
            root: '',
            extensions: ['', '.js', '.json', '.scss'],
            alias: {
                
            }
        }
    };
