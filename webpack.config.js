var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: ['react-hot-loader/patch', './src/index.js'] ,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react'],
                    plugins: ["react-hot-loader/babel"]
                }
            }
        ]
    },
    devServer: {
        hot: true,
        inline: true,
        host: '0.0.0.0',
        port: 4000,
        contentBase: path.join(__dirname, '/app/'),
        publicPath: "/dist/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
