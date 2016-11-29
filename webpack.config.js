var path = require('path');
 var webpack = require('webpack');
     
 module.exports = {
     entry: './js/app.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'app.bundle.js'
     },
     module: {
         loaders: [
             {
                  exclude: /(node_modules|bower_components)/,
                    test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015', 'react'],
                    plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"]
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };