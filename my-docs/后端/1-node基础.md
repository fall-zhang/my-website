> Create by **fall** on ——
> Recently revised in 03 Sep 2023

# node.js

> node.js 官方网站：https://nodejs.org
>
> node.js 中文网：http://nodejs.cn

## 简介

node.js 是一个使用 JavaScript 语言，基于 Chrome V8 引擎构建的开发平台

也就是说，js 能使用除依赖浏览器的 BOM、DOM 等，大多数语法都能在 node.js 上进行使用（JS 既可以做前端，又可以做后端）。

> 其它 JS 引擎
>
> - Firefox 有 `SpiderMonkey`
> - safari 具有 `JavaScriptCore`(又称为 `Nitro`)
> - Edge 有 `Chakra`
>
> 所有这些引擎都实现了 ECMA ES-262（ECMAScript）标准

V8 引擎使用 C++ 编写，通常被认为是一门解释型语言，但是现代的 JavaScript 也会对其进行编译。JavaScript 是由 V8 在其内部编译的，使用了即时编译（JIT：Just In Time）以加快执行速度。

### 开发

**node.js 的优势**

- 事件驱动（事件出发时，执行并传递过去的回调函数）
- 非阻塞 I/O 模型（IO 操作时不会阻塞线程）
- 拥有世界最大的开源库生态系统 ---- `npm`

通过 node 可以开发：

- 控制台程序（命令行程序、CLI 程序）
- 桌面应用程序（GUI：Graphical User Interface），借助 `node-webkit`、`electron`等框架
- 开发 web 应用程序，处理前端请求

node.js 开发工具，帮助更好地进行开发

- 提供基础工具和包管理工具： yarn、pnpm
- 规范化代码的工具、eslint、prettier
- 测试相关 tdd / bdd 测试覆盖率
- 构建和前端工程化相关 gulp、webpack、rollup、Vite，和他们的插件
- node 中间层
- 客户端应用 node.js 如：electron

### 应用场景

开发 web 应用程序

- 请求：客户端发起请求
- 处理：服务器处理请求
- 响应：服务器将处理结果发送到客户端

node.js 开发 web 应用程序和 PHP、Java、ASP.Net 等传统开发 Web 应用程序的区别在于，传统模式必须有 Web 容器（比如说 apache 服务器，负责对网络数据进行解析和请求）

> **网站开发技术栈**
>
> PHP 语言：LAMP - Linux Apache MySQL PHP（全栈开发技术栈）
>
> node.js 全栈开发技术栈：MEAN - MongoDB Express Angular Node.js
>
> Angular 可以替换为 Vue 或者是 React，express 已经成为 node 后端开发基础
>
> 新技术：
>
> TypeScript：为 JS 添加类型注解，拥有强类型语言的功能
>
> Nuxt、Next：以 Vue、React 为基础的服务端渲染（SSR）方案
>
> Nest：google 推出，提供一套类似于将 Spring JS 化的框架。

### node 的架构

- 
- libuv，提供了一些 net、http、fs

```
								|																JS                            |
								
```



## REPL 介绍

`Read-Eval-Print-Loop`（交互式解释器）

- Read：读取 - 读取用户输入，解析输入JavaScript的数据的数据结构并存储在内存中
- Eval：执行 - 之行输入的数据结构
- Print：打印 - 打印输出结果
- Loop：循环 - 循环操作以上步骤，直到用户按两下`ctrl + c`退出

**基本使用方法**

REPL就是命令行的工具，通过 node 进入

- 直接在REPL中写程序进行测试，在命令行工具输入`node`可以进入REPL环境
- 运行node.js脚本，`node app.js`
- 可以使用` process.exit(1)`或者简写 `.exit`退出REPL界面

### REPL其他功能

**tab自动补全**：在输入一部分命令之后，可以使用tab键自动补全

**探索JavaScript对象**：输入完一个对象(`Number.`)之后，通过tab键可以打印可访问的所有属性和方法

**探索全局对象**：`global.` 再按下tab键。

**`_`特殊变量**：如果在某些代码之后输入`_`会打印最后一次操作结果。

**点命令**

> - `.help`：显示点命令的帮助
> - `.editor`：启用编辑器模式，可以轻松地编写多行JavaScript代码
> - `.break`：输入多行的表达式时，输入 `.break` 命令可以终止进一步的操作
> - `.clear` ：将REPL上下文重置为空对象并清除当前正在输入的任何多行的表达式
> - `.load` ：加载JavaScript文件(相对于当前工作目录)
> - `.save` ：将在REPL绘画中输入的所有内容保存到文件(需指定文件名)
> - `.exit` ：退出REPL，相当于按下两次 `ctrl+C`

## 开发

### 命名规则

配置代码缩进为两个空格

**JavaScript 文件命名规则**

- 不要用中文
- 不要包含空格（用 `-` 划分单词）
- 不要出现 node 关键字，比如不能命名为 node.js。

**输出到命令行**

`console.log('我的%s已经%d岁', '猫', 2)`

和 C 语言很像

- `%s` 会格式化变量为字符串
- `%d` 会格式化变量为数字
- `%i` 会格式化变量为其整数部分
- `%o` 会格式化变量为对象

**计算耗时**

> 利用 `console.time()` 和 `console.timeEnd()` 计算执行某个函数的耗时

**stdout 和 stderr**

> console.log 非常适合在控制台中打印消息。 这就是所谓的标准输出（或称为 `stdout`）。
>
> `console.error` 会打印到 `stderr` 流。
>
> 它不会出现在控制台中，但是会出现在错误日志中。

## CommonJS

最开始没有 ES6 的模块化概念，因此 node 使用 Commonjs 规范，进行补充模块化开发。

> package.json 中可以设置 `"type":"module"` 即可启用 ES6 import 方式的导入（实验功能，node 版本 >16）

node 模块分为**全局模块**和**非全局模块**

全局模块，不需要被调用就可以使用，`process` 模块在使用的时候，无需通过 `require()` 函数来加载该模块，可以直接使用。

非全局模块，需要调用才能进行使用，由于 node 最初是使用 common.js 规范，所以引入模块的方式是

```js
const fs = require('fs')
// 可以导入并使用 fs 模块。并且每个独立的文件的对象和变量都是私有的，不会公开给外界。
```

### 模块化

如果代码文件不能进行交互，添加功能就要在一个文件中实现，这个文件写的多厉害，多么方便查看，对于一个人来说，不断地查找上下文，耗时耗力。如果文件出错，整个项目都无法运行，所以出现CommonJS，让多个文件组成一个项目，并且让 JS 语言具有开发大型项目的能力。

Commonjs，作为模块化标准，node.js 作为 CommonJS 的技术实现。

Node中，提供的模块分为两类，

- 核心模块：Node提供的，称为核心模块。核心模块在 Node 源代码的编译过程中，编译进了二进制执行文件，所以它的加载速度是最快。http模块，fs模块，url模块。
- 文件模块：用户编写的模块

 两个对象

**默认导出**

```js
// test.js 文件，用作向外暴露接口
module.exports = function(){
  console.log("这就是调用的东西")
}
// 其他文件使用 test.js
var ss = require("./test")
ss()
```

**普通导出**

```js
// test.js
exports.world = function(){
  console.log('hello')
}
// 其他文件进行使用时
const hello = require('./test.js')
hello.world()
```

require 的查找顺序

- 首先在文件模块缓存区
- 是否是原生模块，如果是，并且在文件缓存区，直接加载，不在缓存区进行加载原生模块，然后放入缓存区。
- 查找文件模块，根据扩展名载入，并且进行缓存



- 当前 node.js（16） 仍然默认启用 CommonJS 规范，所以，不支持 `import` 导入其他的包。
- 所有代码都运行在模块作用域，不会污染全局作用域。
- 模块可以被多次加载，但只会运行一次，然后将结果进行缓存，之后调用会直接调用缓存的结果，如果不想再调用，必须清除缓存
- 模块的加载顺序和代码顺序相同。
- CommonJS 规范是服务器规范，一般先下载到本地再调用。
- 读取速度非常，快采用同步的执行方式。

> 浏览器为何不能兼容CommonJS
>
> 缺少四个环境变量：module/exports/require/global

### 规范对比

ESM 模块和 CommonJS 模块的差异：

- `CommonJS` 模块输出的是一个值的拷贝（一旦输出一个值，模块内部的变化就影响不到这个值），`ES6` 模块输出的是值的引用（是动态引用且不会缓存值，模块里的变量绑定其所在的模块，等到脚本真正执行时，再根据这个只读引用到被加载的那个模块里去取值）；
- `CommonJS` 模块是运行时加载，`ES6` 模块是编译时输出接口；
- `CommonJS` 模块的 `require()` 是同步加载模块，`ES6` 模块的 `import` 命令是异步加载，有一个独立的模块依赖的解析阶段；

## 参考文章

| 文章名称                     | 链接                                       |
| ---------------------------- | ------------------------------------------ |
| Node - 从0基础到实战企业官网 | https://juejin.cn/post/6844903745755545614 |

