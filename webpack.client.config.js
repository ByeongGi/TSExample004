/**
 * Webpack client bulid 설정
 */
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './client/client.ts',
  output: {
    filename: 'client.js',
    path: __dirname +'/build/'
  },
   devServer: {
      inline: true,
      port: 7777,
      contentBase: __dirname + '/build/'
  },
  devtool: 'source-map',
  module: {
    rules: [{
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
        options: {
          appendTsSuffixTo: [/\.vue$/]  
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
           loaders :{
             sass: ExtractTextPlugin.extract({ 
                   fallback: 'vue-style-loader',
                  //resolve-url-loader may be chained before sass-loader if necessary
                   use: ['css-loader', 'sass-loader']
                })
           }, 
          esModule: true
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    },
    extensions: [".tsx", ".ts", ".js", ".vue"]
  },
   plugins:[
       new ExtractTextPlugin({
         filename : 'style.css'
       })
   ]
};