module.exports = {
 entry: './server/app/server.ts',
 output: {
   filename: 'server.js',
   path: __dirname + '/build/'
 },
 target: 'node', // Server side  trans Complie 시에 정상적인 빌드가 되지 위해서는 이 설정이 필요하다. 
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
       test: /\.tsx?$/,
       loader: 'ts-loader',
       exclude: /node_modules/,
     }
   ]
 },
 resolve: {
   extensions: [".tsx", ".ts", ".js"]
 },
 devtool: 'inline-source-map',
};