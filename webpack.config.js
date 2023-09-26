const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
       src: './client/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /.jsx?/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/,
                use:[
                    'style-loader', 
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        static: {
            publicPath: '/dist',
            directory: path.resolve(__dirname, '/dist')
        },
        proxy: {
            '/api': 'http://localhost:3000/'
        },
    },
   
}