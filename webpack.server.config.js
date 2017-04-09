
const webpack = require("webpack");

module.exports = {
 entry: './server/app/server.ts',
 output: {
   filename: 'server.js',
   path: __dirname + '/build/'
 },
 target: 'node', // Server side  trans Complie 시에 정상적인 빌드가 되기 위해서는 이 설정이 필요하다. 
 module: {
   rules: [
     {
       enforce: 'pre',
       test: /\.js$/,
       loader: "source-map-loader"
     },
     {
       enforce: 'pre',
       test: /\.tsx?$/,
       use: "source-map-loader"
     },
     {
       test: /\.ts?$/,
       loader: 'ts-loader',
       exclude: /node_modules|vue\/client/,
     }
   ]
 },
 resolve: {
   extensions: [".tsx", ".ts", ".js"]
 },
 devtool: 'inline-source-map'
//  plugins: [
//       new webpack.optimize.CommonsChunkPlugin({
//       name: "server",        
//       filename :'server.min.[chunkhash].js',
//       minChunks: Infinity,
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//        beautify: false,
//        mangle: {
//         screw_ie8: true,
//         keep_fnames: true
//       },
//       compress: {
//         screw_ie8: true
//       },
//       comments: false
//     })


//  ]
};