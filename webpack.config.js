   /* 
    import baseConfig from './webpack.base';
    var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
    var entry = require('./index.js');
    export default _.extend({},baseConfig, {
        plugins: [
            commonsPlugin
        ],
        entry : entry,
        output: {
            path: path.join(__dirname, 'dist/js/'),
            filename: '[name].js',
            publicPath: '/dist/js/'
        },
        module: {
            loaders: [
                { test: /\.js$/, loaders: ['jsx-loader?harmony','react-hot'] },
                { test: /\.jsx?$/,exclude: /(node_modules|bower_components)/,include: path.join(__dirname, 'src'),loaders: ['babel','react-hot']}
            ]
        },
        externals: [
            {
              'react': {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
              }
            }
        ]
    });
    */

    var webpack = require('webpack');
    var path = require('path');
    var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
    //var ExtractTextPlugin = require("extract-text-webpack-plugin");
    var entry = require('./index.js');
    module.exports = {
        plugins: [
             new webpack.DefinePlugin({
                'process.env.NODE_ENV': 'JSON.stringify("development")'
            }),
            commonsPlugin
        ],

        entry : entry
        ,
        output: {
            path: path.join(__dirname, 'dist/js/'),
            filename: '[name].js',
            publicPath: '/dist/js/'
        },

        module: {
            loaders: [
                { test: /\.css$/, loader: 'style-loader!css-loader' },
                { test: /\.js$/, loaders: ['jsx-loader?harmony'] },
                { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
                { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
                { test: /\.jsx?$/,exclude: /(node_modules|bower_components)/,include: path.join(__dirname, 'src'),loaders: ['babel']}
            ]
        },
        resolve: {
            root: '',
            extensions: ['', '.js', '.json', '.scss'],
            alias: {
                
            }
        }
          
    };

