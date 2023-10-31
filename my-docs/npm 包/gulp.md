> Create by **fall** on:——
> Recently revised in 11 Oct 2023

## gulp

> 已经 4 年没有维护，所以不建议使用该插件

**什么是 gulp？**

构建工具是一段自动根据源代码生成可使用文件的程序，包括打包，编译压缩，测试等一切需要对源码进行处理构建过程的自动化。

> **解放双手**
>
> Gulp是致力于**自动化和优化**你的工作流，将**痛苦又耗时的任务**自动化的一个工具包，说简单点，就是你本来需要不停的把文件转换成系统识别的内容，使用gulp，全都自动化了，你就可以花更多的时间在写代码这件事上。
>
> **痛苦又耗时的任务**
>
> - typescript 编写的脚本文件需要编译成浏览器认识的 JavaScript
>- sass,less 编写的样式转化为css
> - 代码是否符合书写规范，单元测试和集成测试

> **安装**
>
> `npm install -g gulp` :全局安装，执行所编写的 gulp 任务
>
> `npm install --save-dev gulp gulp-less`：局部安装为了执行编写任务时使用 gulp 的 API
>
> 默认配置文件 `gulpfile.js`

```js
// 编程式引入
const gulp = require('gulp');
const less = require('gulp-less');
gulp.task('build:less',funciton(){
    return gulp.src('./src/*.less')
				.pipe(less())
				.pipe(gulp.dest('../dist'))
})
```

> 然后再运行`gulp build:less`，然后编译后的文件就被输出到了` dist`目录
>
> gulp 似乎是完美的，入门简单，但由于对于页面性能追求的机制，gulp 对于某些大型 SPA (Single Page Application)显得不够用
>
> 单页面应用的核心是模块化，gulp对于模块化显得无能为力，模块化最重要的是减少 http 请求，而gulp只对静态资源做了流式处理，而**处理之后并没有进行整合**，也就是忽略了系统层面的处理，缺少优化，因为哪怕减少几百毫秒的延迟，所带来的收益也非同小可。

### **基本使用方法**

```js
// 定义一个程序，执行时将index.html复制到dist中
gulp.task("copy-html",function(){
  return gulp.src('index.html')
  .pipe(gulp.dest('dist/'))
})
// 在命令行中执行 gulp copy-html
// 静态文件
gulp.task("copy-image",function(){
  // 将所有img下的文件包括文件夹内的文件复制到下面路的径
  return gulp.src("img/**/*")
  .pipe(gulp.dest('dist/images'))
})

gulp.task('copy-xml',function(){
  // 拷贝json下的json文件，拷贝xml下的xml文件，除了xml下的04.xml
  return gulp.src(["json/*.json","xml/*.xml","!xml/04.xml"])
  .pipe(gulp.dest("dist/data"))
})

// 一次性执行多个任务
gulp.task("build",["copy-html","copy-image","copy-xml"],function(){
  console.log("mission complate")
})
```

### 进阶使用方法

> watch监听，监听是否有文件需要改变，会执行相应的任务

```js
gulp.task("watch",function(){
  gulp.watch("index.html",["copy-html"])
  gulp.watch("img/**/*",["copy-image"])
  gulp.watch(["json/*json","xml/*.xml","!xml/04.xml"],["copy-xml"])
})
// 命令行使用 gulp watch
```

## gulp插件

### 处理CSS

| 查件名称            | 用途                |
| ------------------- | ------------------- |
| **gulp-sass**       | 用于把sass编译成css |
| **gulp-minify-CSS** | 用于简化`css`代码   |
| **gulp-rename**     | 重命名插件          |


```js
// 安装插件 
// - npm i gulp-sass -D
// - npm i gulp-minify-css -D
// - npm i gulp-rename -D
const sass = require("gulp-sass")
const minifyCSS = require('gulp-minify-css')
const rename = require("gulp-rename")
gulp.task("sass",function(){
  return gulp.src("stylesheet/index.scss")
  .pipe(sass())
  .pipe(gulp.dest("dist/css"))
  .pipe(minifyCSS())
  .pipe(rename("index.min.css"))
  .pipe(gulp.dest("dist/css"))
})
```

### 处理JS

`gulp-concat` 合并文件

`gulp-gulify` 压缩`.js`文件

```js
// 下载插件 npm i gulp-concat -D
// 下载插件 npm i gulp-uglify -D
const concat = require("gulp-concat")
gulp.task("scripts",function(){
  return gulp.src("javascript/*.js")
  .pipe(concat("index.js"))
  .pipe(gulp.dest("dist/js"))
  .pipe(uglify())
  .pipe(rename('index.min.js'))
  .pipe(gulp.dest("dist/js"))
})

```

### 启动服务器

插件：`gulp-connect`

```js
// 安装npm i gulp-connect -D
gulp.task("scripts",function(){
  return gulp.src("javascript/*.js")
  .pipe(concat("index.js"))
  .pipe(gulp.dest("dist/js"))
  .pipe(uglify())
  .pipe(rename('index.min.js'))
  .pipe(gulp.dest("dist/js"))
  .pipe(connect.reload()) // 监听发现文件更改时，启动刷新
})

const connect = require('gulp-connent')
gulp.task("server",function(){
  connect.server({
    root:"dist", // 设置根目录
    port:8888,
    livereload:true // 启动实时刷新
    // 当使用livereload时要启动实时监听，并且实时刷新
  })
})
```

> 注：当任务名称为`default`时，直接使用gulp命令就可以执行

## 对比 webpack

> 详情可以查看 `打包-webpack` 文件

几个比较基础的概念

- module，开发时所编写的单个模块
- bundle，打包后生成的文件
- chunk，模块分析之后，分割出来的代码块

简单讲只做两件事：**按需加载**，**打包**

> `webpack`从入口文件开始，递归找出所有依赖的代码块，再将代码块按照loader解析成新内容，而在`webpack`会在各个特定的时期广播对应事件，插件会监听这些事件，在某个事件中进行特定的操作。通俗一点来说，`webpack`本身来递归找到各个文件之间的依赖关系，在这个过程中，使用loaders对文件进行解析，最后，在各个不同的事件阶段，插件可以对文件进行一个统一的处理，可以将许多松散的模块依赖和规则打包成符合生产环境部署的前端资源，还可以按需加载的模块进行代码分割，等到实际需要的时候进行异步加载。

> **安装**
>
> `npm i -g webpack` 全局安装是为了执行`webpack`任务
>
> `npm i --save-dev webpack`局部安装是为了使用`webpack`提供的API
>
> 默认配置文件：`webpack.config.js`

```js
const path = require('path');
module.exports = {
  entry:'./src/index.js',
  output:{
    filename:'bundle.js',
    path:path.join(__dirname,'dist')
  }
}
```

> 其实`webpack`内部处理转译TypeScript语法也是使用的第三方插件实现的
>
> - `webpack `不是以取代 `gulp` 为目的的，而是为了给大型 SPA 提供更好的构建方案
> - 对大量文件进行流式处理是`gulp`擅长的事。
> - `rollup` 官网也坦言如果你在构建一个库，`rollup `绝对是首选，但如果是构建一个应用，那么请选 `webpack`。

|          | `Gulp`                                                       | `Webpack`                                                    |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 定位     | 基于流的自动化构建工具                                       | 一个万能模块打包器                                           |
| 目标     | 自动化和优化开发工作流，为通用 website 开发而生              | 通用模块打包加载器，为移动端大型 SPA 应用而生                |
| 学习难度 | 易于学习，易于使用，api总共只有5个方法                       | 有大量新的概念和api，不过好在有详尽的官方文档                |
| 适用场景 | 基于流的作业方式适合多页面应用开发                           | 一切皆模块的特点适合单页面应用开发                           |
| 作业方式 | 对输入（`gulp.src`）的 `js`，`ts`，`scss`，`less` 等源文件依次执行打包（bundle）、编译（compile）、压缩、重命名等处理后输出（`gulp.dest`）到指定目录中去，为了构建而打包 | 对入口文件（entry）递归解析生成依赖关系图，然后将所有依赖打包在一起，在打包之前会将所有依赖转译成可打包的` js `模块，为了打包而构建 |
| 使用方式 | 常规` js` 开发，编写一系列构建任务（task）。                 | 编辑各种 JSON 配置项                                         |
| 优点     | 适合多页面开发，易于学习，易于使用，接口优雅。               | 可以打包一切资源，适配各种模块系统                           |
| 缺点     | 在单页面应用方面输出乏力，而且对流行的单页技术有些难以处理（比如` Vue` 单文件组件，使用 gulp 处理就会很困难，而 `webpack `一个 loader 就能轻松搞定） | 不适合多页应用开发，灵活度高但同时配置很繁琐复杂。“打包一切” 这个优点对于 HTTP/1.1  尤其重要，因为所有资源打包在一起能明显减少浏览器访问页面时的资源请求数量，从而减少应用程序必须等待的时间。但这个优点可能会随着 HTTP/2  的流行而变得不那么突出，因为 HTTP/2 的多路复用可以有效解决客户端并行请求时的瓶颈问题。 |
| 结论     | 浏览器多页应用(MPA)首选方案                                  | 浏览器单页应用(SPA)首选方案                                  |