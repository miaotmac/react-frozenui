    import webpack from 'webpack';
    import path from 'path';
    import entry from './index.js';

    const baseConfig = {
        plugins: [
             new webpack.DefinePlugin({
                'process.env.NODE_ENV': 'JSON.stringify("development")'
            }),
        ],

        entry: undefined,
        output: undefined,
        module: {
            loaders: [
                { test: /\.css$/, loader: 'style-loader!css-loader' },
                { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
                { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            ]
        },
        resolve: {
            root: '',
            extensions: ['', '.js', '.json', '.scss'],
            alias: {
                
            }
        }
    };
