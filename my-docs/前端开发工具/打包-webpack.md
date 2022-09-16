> Create by **fall** on:2020-12-07
> Recently revised in:2022-02-17

## webpack

> webpack 是一个前端项目构建工具，为 web 开发中的面临的问题——更好的构建大型 SPA 提供方案。
>
> webpack 可以：代码打包；代码分割；代码预处理

五个基本概念

- 入口(entry)：就是构建开始的地方，可以是多个
- 出口(output)：就是构建好后，内容存放的地方
- loader：配置后可以处理除去 `.js` 之外的文件，`.less`、`.sass`、`.vue`
- 插件(plugins)：从打包优化和压缩，到重新定义环境中的变量。功能极其强大。
- 模式(mode)：不同的模式配置，会对应不同的场景（development，production）



在使用 webpack 构建的应用程序或站点中，有三类代码：

- 个人或者团队编写的代码。
- 这些代码依赖的任何第三方的 library 或者 "vendor" 代码（node_modules）。
- webpack 的 runtime 和 manifest 管理所有模块的交互

> - runtime：在模块交互时，连接模块所需的加载和解析逻辑；包括浏览器中的已加载模块的连接，以及懒加载模块的执行逻辑。
> - manifest：当编译器(compiler)开始执行、解析、映射应用程序时，它会保留所有模块的详细要点，这个数据集合称为 "Manifest"。当完成打包并发送到浏览器时，会在运行时通过 manifest 来解析、加载模块。
> - runtime 和 manifest 之间的交互：浏览器在运行时，runtime 和 manifest 用来连接应用模块化的所有代码。无论是使用哪一种模块语法，那些 import 或者 require 语句都已经转化为 `__webpack_require__` 方法，此方法指向模块标识符(module identifier)，在使用 manifest 中的数据时，runtime 能够查询模块标识符，检索出背后对应的模块。

### 使用

- 搭建 webpack 环境 `npm install webpack webpack-cli -D`

- 使用 `npm init -y` 初始化环境
- 新建 `src` 作为源代码库
- 在 `src` 中创建主页 `index.html`
- 初始化首页基本的结构
- `npm install jQuery -S` 安装 `jQuery`
- 进行开发 

### webpack的设置

webpack 的默认入口为：src 中的 index.js

webpack 的默认出口文件是：dist 中的 main.js

```js
// 最简单的 webpack 配置
module.export = {
  mode:'development' // 设置使用开发模式，也可以改为production:生产模式
}
```

**两种模式的区别**

```js
// development ：开发者模式（开发环境），会将 process.env.NODE_ENV 的值设为 development。启用  NamedChunksPlugin 和 NamedModulesPlugin
// production :生产环境，会将 process.env.NODE_ENV 的值设为 production。 启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin,  NoEmitOnErrorsPlugin, OccurrenceOrderPlugin,   SideEffectsFlagPlugin 和 UglifyJsPlugin
if(process.env.NODE_ENV === 'development'){
  //开发环境 do something
}else{
  //生产环境 do something
}
```

**为 webpack 设置入口和出口**

```js
const path =require('path') // 导入node 自带模块，path
module.exports = {
  entry:path.join(__dirname,'./src/index.js'), // entry 接受字符串
  // 告诉 webpack 将从那个文件开始构建，这个文件将作为 webpack 关系依赖图的起点
  output:{
    path:path.join(__dirname,"./dist"),// 输出文件存放路径
    filename:'bundle.js' // 输出文件的名称
  }
}
// 其中 entry 也可以接受对象，进而进行多个网页的配置
// {main: './src/main.js'}
```

**配置多个入口**

```js
// 应用场景1
// 分离 应用程序(app) 和 第三方库(vendor) 的 webpack 配置
module.exports ={
  entry:{
    app:'./src/app.js',
    vendors:'./srcvendors.js'
  }
}
```

```js
// 应用场景2
// 告诉 webpack 需要三个独立分离的依赖图
module.exports = {
  entry:{
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js'
  }
}
```

**配置多个出口**

```js
const path = require('path');
module.exports = {
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}
```

### 脚本自动打包

安装插件

`npm install webpack-dev-server -D` 该 webpack 插件，可以实现监听 webpack 文件，并且进行自动打包

```js
// package.json
"scripts":{
  "dev":"webpack-dev-server", // 不再是通过 webpack 进行执行
  "build":"webpack -p" // 此时会读取相关的打包配置，按照给定的配置，将项目生成到 dist 中
}
// 也可以更改 webpack 后面的参数，webpack-dev-server --open --host 127.0.0.1 --port 8888
// 这些参数的意义是，自动打开浏览器，并且 在127.0.0.1 端口号为 8888 上创建新的项目
```

> **webpack 的注意点**
>
> `webpack-dev-server` 会启动一个实时打包的 http 服务器
>
> `webpack-dev-server` 打包生成的文件默认存放到根目录当中，并且是虚拟的，不可见的

然后就可以通过 `npm run dev` 来编译代码了

**其他的配置**

`npm run build` 通常用来重新编译项目，观察者模式会监听文件的修改，但是不会触发浏览器的刷新，需要手动进行刷新，配制好执行脚本后可以使用 `npm run watch` 进行调用。

```js
"scripts":{
  "watch":"webpack --watch", // 此时使用观察者模式
  "build":"webpack -p", // 用于给项目进行打包的命令 
}
```

### HMR 热模块替换

允许运行时更新各种模块，而无需进行完全刷新。

Hot Module Replacement 开启热模块替换插件，也被称为HMR，永远不要在生产环境下启用HMR。

**插件的配置**

```js
new webpack.HotModuleReplacementPlugin({
  // multiStep(boolean):设置为true时，插件会分成两步构建文件。首先编译加载chunks，之后再编译剩余的通常的资源
  // fullBuildTimeout(number)：当 multiStep 启用时，表示两步构建之间的延时
  // requestTimeout(number)：下载 manifest 的延时
  // 这些选项属于实验性内容，因此以后可能会被弃用。就如同上文所说的那样，这些选项通常情况下都是没有必要设置的，仅仅是设置一下 new webpack.HotModuleReplacementPlugin() 在大部分情况下就足够了。
})
```

## 加载器loader

在实际的开发过程中，webpack 默认只能打包处理 `js` 文件，不能处理其他文件，处理其他文件时，必须使用 loader ，否则会报错。

> - `less-loader` 可以打包处理 `.less` 相关的文件
> - `sass-loader` 可以打包处理 `.scss` 相关的文件
> - `url-loader` 可以打包处理 css 中与 `url` 路径相关的文件

### 使用 less 或者 sass 

```js
module:{
  rules:[
    {test:/\.less$/ ,use:['style-loader','css-loader','less-loader']},
    // 其中 use 可以接受数组，也可以接受单一一个名称，比如 use:'style-loader'
    // css 文件编译次序依次为 less-loader css-loader style-loader
    // 在前一个编译完成后，一次传递给下一个，最终输出文件
    // {test:/\.scss$/ ,use:['style-loader','css-loader','sass-loader']}
    // 使用 sass
  ]
}
// 或者换一种格式进行书写
module: {
  rules: [{ 
    test: /\.css$/, 
    use: ['style-loader', {
      loader: 'css-loader',
      options: {
        modules: true
      }
    }]
  }]
}
```

几乎所有的 loader 都需要进行 use 在配置但不需要进行 require 引入

### 浏览器样式兼容

运行 `npm i posscss-loader autoprefixer -D`

`postCSS` :做浏览器兼容

`autoprefixer` : 自动修改兼容前缀

```js
// 创建 postcss 的配置文件 postcss.config.js 
const autoprefixer = require('autoprefixer')
module.exports ={
  plugins:[autoprefixer]
}
// 并且在 webpack 的 css 配置后面额外添加一个 postcss-loader
module.exports={
  module:{
    rules:[{test:/\.css$/ ,use:['style-loader','css-loader']}]
  }
}
```

### 图片样式

使用 `url` 进行背景图插入的时候，会报错，可以使用 `url-loader` 和 `file-loader` 解决。

其中 `file-loader` 是 `url-loader` 内的依赖项

照旧，先安装上，`npm i url-loader file-loader -D`

```js
// webpack.config.js
module.exports={
  module:{
    rules:[{
      test:/\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
      use:'url-loader?limit=16940' // limit 用于限制图片的大小，单位是字节
    }]
  }
}
```

### JS高级语法

使用最新的语法，可能会报错，所以需要 babel进行语法转化

安装 babel  转换器相关的包 `babel-loader` `babel/core` `babel/runtime` 

```js
// babel.config.js
module.exports = {
  presets:['@babel/preset-env'],
  plugins:['@babel/plugin-transform-runtime','@babel/plugin-proposal-class-properties']
}
// webpack.config.js 中 module 里面的 rules 数组中添加该对象
{test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
// exclude 该方法添加后，不会处理，node_modules 中的 js 文件
```



## plugin

### 使用

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')
```

特性：一部分插件需要单独安装，一部分插件在 webpack 中内置了，但是所有的插件都必须通过 `require` 引入。

分析：webpack插件都是一个具有 apply 属性的 JavaScript 对象，apply属性会被 webpack complier 调用，并且 complier 对象可在整个编译的生命周期进行访问。

```js
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
    apply(compiler) {
        compiler.hooks.run.tap(pluginName, compilation => {
            console.log("webpack 构建过程开始！");
        });
    }
}
```

### `HtmlWebpackPlugin`

为 html 文件中引入的外部资源如 `script`、`link` 等资源。每次都会为他们动态添加 compile 后的 hash，防止引用缓存的外部文件问题。

生成项目的主入口 html 文件，一般原则是单应用的话会生成一个 html 文件，多应用的话会生成多个对应的 html 文件。

dist目录生成index.html文件，而且会自动更新，不需要我们手动添加或修改index.html文件。

**`HtmlWebpackPlugin`配置**

|        name        |          type           |   default   |                         description                          |
| :----------------: | :---------------------: | :---------: | :----------------------------------------------------------: |
|       title        |         string          | Webpack App |                    用于生成html文档的标题                    |
|      filename      |         string          | index.html  | 要写入html的文件，默认为'index.html'，在这里可以指定一个目录(eg:assets/admin.html) |
|      template      |         string          |     ``      |                    webpack需要模板的路径                     |
| templateParameters | Boolean/Object/Function |     ``      |                 允许重写template中引用的参数                 |
|  templateContent   |     string/function     |     ``      | 一个String/Function包含template内容的字符串。template和templateContent不可同时使用 |
|       inject       |     Boolean/String      |    true     | true/head/body/false将所有的assets注入到给定的template或templateContent。当传入`true/body`时，所有JavaScript资源将放置在body的底部。传入`head`将把脚本放在head中 |
|      favicon       |         String          |     ``      |                    向html输出facicon路径                     |
|        meta        |         Object          |     {}      |                       允许注入meta标签                       |
|       minify       |     Boolean/Object      |    false    |           将html-minifiler的配置作为对象来缩小输出           |
|        hash        |         Boolean         |    false    | 如果为`true`，则将唯一的webpack编译hash追加到所有包含js和css文件中。这对于缓存崩溃是有用的 |
|       cache        |         Boolean         |    true     |                 仅在文件被更改时才发出该文件                 |
|     showErrors     |         Boolean         |    true     |                   错误详情将被写到html页面                   |
|       chunks       |           {?}           |      ?      |                     允许只添加一些chunks                     |
|   chunksSortMode   |     String/Function     |    auto     | 允许控制chunks被包含到html之前应该如何排序。允许值：`none/auto/dependency/manual/function` |
|   excludeChunks    |          Array          |     ``      |                      允许跳过一些chunks                      |
|       xhtml        |         Boolean         |    false    |              如果为`true`设置link标签为自动关闭              |

### 清理 dist 文件夹

由于过去的代码会遗留在 dist 文件夹中，导致 dist 文件夹十分混乱，webpack 无法追踪那些文件是那个项目中用到的，因此推荐安装`clean-webpack-plugin`  在每次构建前清理 dist 文件夹。

`npm i clean-webpack-plugin -D`

```javascript
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 在 webpack config 中进行引入
{
  plugins:[
    new CleanWebpackPlugin(paths[,{options}])
    ]
}       
//options and defaults(Options)，下面是该插件的一些配置选项，不需要再项目中都配置。
    {
        // wepack根文件夹的绝对路径，默认：package的根目录
        root:__dirname,
        // 向console写日志
        werbose:true,
        //使用'true'来测试或仿真删除（将不会移除文件）
        //默认值：'false'，移除文件
        dry:false,
        //如果为'true'，则删除文件重新编译
        watch:false,
        // Instead of removing whole path recursively,
        // remove all path's content with exclusion of provided immediate children.
        // Good for not removing shared files from build directories.
        exclude: [ 'files', 'to', 'ignore' ],
        // 允许插件清理webpack目录以外的文件夹
        allowExternal:false,
        //在文件被发送的output文件夹之前执行清理
        beforeEmit:false
    }
```



## 其它核心概念

### 模式

| 选项          | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| `development` | 会将 `process.env.NODE_ENV` 的值设为 `development`。启用 `NamedChunksPlugin` 和 `NamedModulesPlugin`。 |
| `production`  | 会将 `process.env.NODE_ENV` 的值设为 `production`。启用 `FlagDependencyUsagePlugin`, `FlagIncludedChunksPlugin`, `ModuleConcatenationPlugin`, `NoEmitOnErrorsPlugin`, `OccurrenceOrderPlugin`, `SideEffectsFlagPlugin` 和 `UglifyJsPlugin`. |

### target

webpack 能够为 多种环境 或 target 构建编译（编译后代码 的运行环境）

默认值：`web`

常见值 https://link.juejin.im?target=https%3A%2F%2Fwww.webpackjs.com%2Fconfiguration%2Ftarget%2F

### source map

由于打包时，可能很难追踪到错误和警告在源代码中的原始位置。例如，如果三个源文件打包好后，如果报错，只会指向bundle.js。而无法告诉你确切的错误位置。

source map 会改变代码中显示错误的方式（打包后代码、生成后代码、转换过代码、源代码等。）

会影响构建(build )重新构建的速度

整个 source map 作为一个单独的文件生成。它为 bundle 添加了一个引用注释，以便开发工具知道在哪里可以找到它

- `eval-source-map`

  > 构建速度：-- 、重新构建速度：+ 、生产环境：no 、显示原始源代码

- `cheap-eval-source-map`

  > 构建速度：+ 、重新构建速度：++ 、生产环境：no 、转换过的代码（仅限行）

**总结**：需要注意的是不同的 `devtool` 的设置，会导致不同的性能差异。

- `"eval"` 具有最好的性能，但并不能帮助你转译代码。
- 如果你能接受稍差一些的 mapping 质量，可以使用 cheap-source-map 选项来提高性能
- 使用 `eval-source-map` 配置进行增量编译
- 在大多数情况下，`cheap-module-eval-source-map` 是最好的选择

## 动态引入



```js
const zhCN = import(/* webpackChunkName: "zhcn-lib" */'ant-design-vue/lib/locale-provider/zh_CN')
// 实现引入，在注释处可以标记打包后的文件名称。
```



## 参考文章

| 文章名称 | 链接                                |
| -------- | ----------------------------------- |
| 官方文档 | https://www.webpackjs.com/concepts/ |

