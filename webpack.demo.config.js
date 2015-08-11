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
            new webpack.NoErrorsPlugin()
           // commonsPlugin
        ],

      //  entry : entry
        entry: [
              //  entry
              'webpack-dev-server/client?http://127.0.0.1:3000',// WebpackDevServer host and port
              'webpack/hot/only-dev-server',
              './docs/demo/app.js'
               ]
        ,
        output: {
            path: path.join(__dirname, 'dist/demo/'),
            filename: 'bundle.js',
            publicPath: '/dist/demo'
        },

        module: {
            loaders: [
                { test: /\.css$/, loader: 'style-loader!css-loader' },
                { test: /\.js$/, loaders: ['jsx-loader?harmony','react-hot'] },
                { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
                { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
                { test: /\.jsx?$/,exclude: /(node_modules|bower_components)/,loaders: ['babel','react-hot']}
            ]
        },
        resolve: {
            root: '',
            extensions: ['', '.js', '.json', '.scss'],
            alias: {
                
            }
        }
    };
