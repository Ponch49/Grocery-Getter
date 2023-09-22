const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s[cs]s?/,
                exclude: /node_modules/,
                use: {
                    loader: ['style-loader', 'css-loader']
                }
            }
        ]
    },
    devServer: {
        static: {
            publicPath: '/',
            directory: path.resolve(__dirname)
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: 'index.html'
        })
    ]
}