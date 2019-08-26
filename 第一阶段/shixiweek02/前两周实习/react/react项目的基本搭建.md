## react项目的基本搭建

## webpack.config.js

```js
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //自动创建html文件

// const CleanWebpackPlugin = require("clean-webpack-plugin"); //清除多余文件 

module.exports = {
  mode: "development",
  devtool: "cheap-module-eval-source-map", // 用于开发调试，方便清楚是那个文件出错 (共有7种)
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "bundle.js", // 输出的文件名
    path: path.resolve(__dirname, "dist") //
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
        // 加载时顺序从右向左
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: [
              // '@babel/plugin-proposal-class-properties'  解析class
              // 上边边解析  @log
              "@babel/plugin-proposal-class-properties"
            ]
          }
        },
        exclude: /node_modules/
     }
    ]
  },
  // 开启一个虚拟服务器
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  plugins: [
    // new CleanWebpackPlugin(["dist"]),
    //每次编译都会把dist下的文件清除，我们
    //可以在合适的时候打开这行代码，例如我们打包的时候，
    //开发过程中这段代码关闭比较好
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html" //使用一个模板
    })
  ]
};

```

# Package.json

```json
{
  "name": "shixi03",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "webpack --watch",
    "dev": "webpack-dev-server --open --port 3000 --hot ",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.5.4",
    "@babel/plugin-proposal-class-properties": "^7.5.0",
    "@babel/preset-env": "^7.5.4",
    "@babel/preset-react": "^7.0.0",
    "babel-loader": "^8.0.6",
    "clean-webpack-plugin": "^3.0.0",
    "html-webpack-plugin": "^3.2.0",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "webpack": "^4.35.3",
    "webpack-cli": "^3.3.5",
    "webpack-dev-server": "^3.7.2"
  }
}
```

> ps 
>
> > 1. shift + option + f 是 prettier的快捷键（修改格式。。）
> > 2. shift + command + f 是 网页全屏显示