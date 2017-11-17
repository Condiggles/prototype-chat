var path = require('path');
var webpack = require('webpack');

module.exports = {
   entry: './index.js',
   output: {
       path: path.resolve(__dirname, 'build'),
       filename: 'index.bundle.js'
   },
   module: {
       loaders: [
           {
               test: /\.js$/,
               loader: 'babel-loader',
               query: {
                   presets: ['es2015', 'react']
               }
           },
           {
             test: /\.css$/,
             loader: 'style-loader'
           },
           {
             test: /\.css$/,
             loader: 'css-loader',
             query: {
               modules: true,
               localIdentName: '[name]__[local]___[hash:base64:5]'
             }
           }
       ]
   },
   stats: {
       colors: true
   },
   devtool: 'source-map'
};
