
    var webpack = require('webpack');
    var path = require('path');
    var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
    //var ExtractTextPlugin = require("extract-text-webpack-plugin");
    var entry = require('./index.js');
    module.exports = {
        //plugins: [commonsPlugin, new ExtractTextPlugin("[name].css")],
       // plugins: [commonsPlugin],
        plugins: [
             new webpack.DefinePlugin({
                'process.env.NODE_ENV': 'JSON.stringify("development")'
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
            commonsPlugin
        ],

        entry: [
              //  entry
              'webpack-dev-server/client?http://127.0.0.1:3000',// WebpackDevServer host and port
              'webpack/hot/only-dev-server',
              './src/js/page/app.js',
              './src/js/component/tag.js',
              './index.js'
               ]
        ,
        output: {
            path: path.join(__dirname, 'dist/js/'),
            filename: '[name].js',
            publicPath: '/dist/'
        },

        module: {
            loaders: [
                { test: /\.css$/, loader: 'style-loader!css-loader' },
                { test: /\.js$/, loaders: ['jsx-loader?harmony','react-hot'] },
                { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
                { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
                { test: /\.jsx?$/,exclude: /(node_modules|bower_components)/,include: path.join(__dirname, 'src'),loaders: ['babel','react-hot']}
            ]
        },
        resolve: {
            root: '',
            extensions: ['', '.js', '.json', '.scss'],
            alias: {
                
            }
        }
    };
