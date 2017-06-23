var path = require('path');
var webpack = require("webpack");
var glob = require("glob");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var entries = function() {
    var jsDir = path.resolve(__dirname, 'js/pages')
    var entryFiles = glob.sync(jsDir + '/*.{js,jsx}')
    var map = {};

    for (var i = 0; i < entryFiles.length; i++) {
        var filePath = entryFiles[i];
        var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
        map[filename] = filePath;
    }
    return map;
}
module.exports = {
    entry: entries(),
    output: {
        filename: "js/[name].js",
        path: __dirname + '/build',
    },
    module: {
        // rules: [{
        //     test: /\.css$/,
        //     use: ExtractTextPlugin.extract({
        //         fallback: "style-loader",
        //         use: "css-loader"
        //     })
        // }],
        loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader', //在webpack的module部分的loaders里进行配置即可
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                // loader: 'style-loader!css-loader'
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                // loader: 'url-loader?limit=10240&name=../images/[hash:8].[name].[ext]'
                loader: 'url-loader?limit=10240&name=../images/[name].[ext]'
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "js/commons.js",
            minChunks: 6
        }),
        //    new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("css/[name].css"),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    resolve: {
        alias: {
            jquery: "../libs/jquery-3.1.0.min.js"
        }
    },
    devServer: {
        contentBase: "./build", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    }
}