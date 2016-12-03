# webpack

$npm init -y

$npm install --save-dev webpack

ここまででwebpackがインツトールされるので、
app.js,
app1.js,
app2.js,
app3.js...
などを作成していく。

■webpack.config.jsというファイルの作成

module.exports = {
  entry: "./app.js",
  output: {
    filename: "bundle.js"
  }
};

これでapp.jsを起点にして、webpackにてbundle.jsが作成される。
作成コードは、
$npm run build

※ただし、package.jsonに、
"scripts": {
　　"test": "echo \"Error: no test specified\" && exit 1",
　　"build": "webpack"
},

buildを通しておかないと実行できない(err)

# このサンプルはnodeサーバー上でreact.jsをサーバーサイドレンダリングするものです。

![material](https://cloud.githubusercontent.com/assets/22278305/20858637/ef2a63ae-b98c-11e6-9af9-5667b2327fb8.png)

nodeサーバーをexpressで立てて、
その中でReact.jsをサーバーサイドレンダリング。

nom startにて呼びだし。
