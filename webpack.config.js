const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootDir = __dirname;

module.exports = {
    entry:{
        main: path.resolve(rootDir,'./src/index.jsx'),
    },
    output:{
        path:path.resolve(rootDir,'./dist'),
        clean: true,
        publicPath:'/'
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test:/\.(css)$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'homepage',
            filename:'index.html',
            template: path.resolve(rootDir,'./public/index.html'),
        })
    ],
    devServer: {
        static: path.resolve(__dirname, './dist/'),
        hot: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    devtool:"eval-source-map",
}