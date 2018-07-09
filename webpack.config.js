var webpack = require('webpack');
var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: ['./src/index.js'],
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
                test: /\.(css|sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoader: 2
                        }
                    },
                    "sass-loader"
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        inline: true,
        host: '0.0.0.0',
        port: 4000,
        contentBase: path.join(__dirname, '/public/'),
        publicPath: "/public/"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "/css/concat.css"
        })
    ]
};
