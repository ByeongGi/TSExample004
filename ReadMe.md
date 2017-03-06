# 1. Typescript instll 

    npm install -g typescript
    npm install -g typings


### The TypeScript Definition Manager.
Typings is the simple way to manage and install TypeScript definitions.
It uses typings.json, which can resolve to the Typings Registry, GitHub, NPM, Bower, HTTP and local files. 
Packages can use type definitions from various sources and different versions, knowing they will never conflict for users.




# 2. Create  a tsconfig.json
    tsc --init // Create tsconfig.json


# 3. Create a typings.json file

    typings init

# 4. Typescript Definitions File Download 
##  Typescript Definition 파일을 관리하는 Tyyping 설정파일이다.
    typings install dt~node --save --global
    typings install dt~es6-shim --save --global
    typings install dt~express --save
    typings install dt~serve-static --save
    typings install dt~express-serve-static-core --save
    typings install dt~mime --save

# 5.tsc 를 통한 빌드 

    tsc // tsconfig.json에 지정된 설정으로 *.ts -> *.js 
    tsc --watch // 실시간으로 변경분에 대해서 빌드시킴 



---
--- 



# Webpack 을 이용한 빌드 


	`webpack.server.config.js` 파일 설정 설명  

    module.exports = {
    entry: './app/server.ts', // 컴파일 시작 파일 
    output: {
    filename: './build/bundle.js', // 컴파일 출력 파일
    path: __dirname
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
        exclude: /node_modules/, // ts-loader 는 ts 파일을 javascript로 변환하는 모듈 
        }
    ]
    },
    resolve: {
    extensions: [".tsx", ".ts", ".js"] // 자동으로 확장자를 엮어주는 설정
    },
    devtool: 'inline-source-map',
    };


# Webpack-dev-server (클라이언트 버전)
    npm run build 빌드 -> start:dev 개발 서버 시작 

