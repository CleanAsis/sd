const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// custom devHost
const devHostFile = './dev-host.js';
fs.existsSync(devHostFile) && require(devHostFile);
global.devHost && console.log(`Custom dev host specified in ${devHostFile}: ${global.devHost}`);

// HtmlWebpackPlugin is used to inject our created bundles into this html file so // we need to create it.
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body',
});

module.exports = {
    target: 'web', 
    devServer: {
        port: 3000,
        contentBase: './dist',
        host: global.devHost || 'localhost'
    },
    entry: {
        app: ['./src/App.jsx'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: ['babel-loader'], // we use this to transpile es6 code on the web
              },
              {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader", "postcss-loader",
                  ],
                },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css",
            chunkFilename: "styles.css"
        }),
        HtmlWebpackPluginConfig,
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    mode: 'development',
}