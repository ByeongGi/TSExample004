/**
 * Webpack client bulid 설정
 */
const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './client/client.ts',
  output: {
    filename: 'client.js',
    path: __dirname + /build/
  },
  devServer: {
    port: 7779,
    contentBase: __dirname + '/build'
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
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules|vue\/client/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.s[a|c]ss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // sass: ExtractTextPlugin.extract({
            //   fallback: 'vue-style-loader',
            //   //resolve-url-loader may be chained before sass-loader if necessary
            //   use: ['css-loader', 'sass-loader']
            // }),
            scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
            scss: ExtractTextPlugin.extract({
              fallback: 'vue-style-loader',
              //resolve-url-loader may be chained before sass-loader if necessary
              use: ['css-loader', 'sass-loader']
            })
          },
          esModule: true
        }
      },
      // font 파일을 로딩하는 로더 BootStap 쓸려고 했는데 이게 없어서 ...
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    },
    extensions: [".tsx", ".ts", ".js", ".vue"]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "client",        
    //   filename :'client.min.js',
    //   // filename: "vendor.js"
    //   // (Give the chunk a different name)

    //   minChunks: Infinity,
    //   // (with more entries, this ensures that no other module
    //   //  goes into the vendor chunk)
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //    beautify: false,
    //    mangle: {
    //     screw_ie8: true,
    //     keep_fnames: true
    //   },
    //   compress: {
    //     screw_ie8: true
    //   },
    //   comments: false
    // })
  ]
};