var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {
        index:"./src/index.js",
        components:"./src/components/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        libraryTarget: 'commonjs2',
        publicPath: './src/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|js|tsx|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }, {
                test: /\.*css$/,
                use : ExtractTextPlugin.extract({
                    fallback : 'style-loader',
                    use : [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            },
        ]
    },
    externals: {
        'react': 'commonjs react'
    }
};