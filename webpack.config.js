
    var webpack = require('webpack');
    var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
    //var ExtractTextPlugin = require("extract-text-webpack-plugin");

    module.exports = {
        //plugins: [commonsPlugin, new ExtractTextPlugin("[name].css")],
        plugins: [commonsPlugin],
        entry: {
            tab : './src/js/page/tab.js',
            loading : './src/js/page/loading.js',
            button : './src/js/page/button.js',
            tab : './src/js/page/tab.js',
            tag : './src/js/page/tag.js',
            searchbar : './src/js/page/searchbar.js'
        },
        output: {
            path: 'dist/js/page',
            filename: '[name].js'
        },
        module: {
            loaders: [
                { test: /\.css$/, loader: 'style-loader!css-loader' },
                //{ test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
                { test: /\.js$/, loader: 'jsx-loader?harmony' },
                { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
                { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
                { test: /\.jsx?$/,exclude: /(node_modules|bower_components)/,loader: 'babel?optional[]=runtime&stage=0'}
            ]
        },
        resolve: {
            root: 'E:/github/webpack/src',
            extensions: ['', '.js', '.json', '.scss'],
            alias: {
                
            }
        }
    };
