var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: ['./src/index.js'] ,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: 'public'
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
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "sass-loader"}
                ]
            }
        ]
    },
    devServer: {
        //hot: true,
        inline: true,
        host: '0.0.0.0',
        port: 4000,
        contentBase: path.join(__dirname, '/public/'),
        publicPath: "/public/"
    },
    plugins: [

    ]
};
