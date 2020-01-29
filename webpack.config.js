const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: "index_handle.js",
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['raw-loader']

            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']

            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['css-loader', 'style-loader']
            },
            {
                exclude: /node_modules/,
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                exclude: /node_modules/,
                test: /\.js$/,
                loader: 'babel-loader'
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src/index.html'),
    })
    ]
}