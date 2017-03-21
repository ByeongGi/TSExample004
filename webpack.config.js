/**
 * Webpack client bulid 설정
 */
module.exports = {
  entry: './client/client.ts',
  output: {
    filename: 'client.js',
    path: __dirname +/build/
  },
   devServer: {
      port: 7779,
      contentBase: __dirname+ '/build'
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
        exclude: /node_modules|vue\/src/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          esModule: true
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    },
    extensions: [".tsx", ".ts", ".js",".vue"]
  },
};