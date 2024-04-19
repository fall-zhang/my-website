> Create by **fall** on 24 Oct 2021
> Recently revised in 11 Oct 2023

### webpack Plugin 和 Loader 的区别

- Loader：

  用于对模块源码的转换，loader 描述了 webpack 如何处理非 javascript 模块，并且在 buld 中引入这些依赖。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，或者将内联图像转换为 data URL。比如说：CSS-Loader，Style-Loader 等。

- Plugin

  目的在于解决 loader 无法实现的其他事,它直接作用于 webpack，扩展了它的功能。在 webpack 运行的生命周期中会广播出许多事件，plugin 可以监听这些事件，在合适的时机通过 webpack 提供的 API 改变输出结果。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。

> webpack 相关知识可以看鲨鱼哥这篇文章 [前端进阶高薪必看-Webpack 篇](https://juejin.cn/post/6844904150988226574) 说的很通俗易懂 基本应对简单的面试足够了。

#### Webpack 有哪些优化手段

随着项目越来越大，Webpack 构建速度可能会越来越慢，构建出来的 js 的体积也越来越大，此时就需要对 Webpack 的配置进行优化

这个知识点可以单独开一篇文章 大家请看 [带你深度解锁 Webpack 系列(优化篇)](https://juejin.cn/post/6844904093463347208)

### babel 是什么，原理了解吗

Babel 是一个 JavaScript 编译器。他把最新版的 javascript 编译成当下可以执行的版本，简言之，利用 babel 就可以让我们在当前的项目中随意的使用这些新最新的 es6，甚至 es7 的语法。

Babel 的三个主要处理步骤分别是： 解析（parse），转换（transform），生成（generate）。

- 解析 将代码解析成抽象语法树（AST），每个 js 引擎（比如 Chrome 浏览器中的 V8 引擎）都有自己的 AST 解析器，而 Babel 是通过 Babylon 实现的。在解析过程中有两个阶段：词法分析和语法分析，词法分析阶段把字符串形式的代码转换为令牌（tokens）流，令牌类似于 AST 中节点；而语法分析阶段则会把一个令牌流转换成 AST 的形式，同时这个阶段会把令牌中的信息转换成 AST 的表述结构。
- 转换 在这个阶段，Babel 接受得到 AST 并通过 babel-traverse 对其进行深度优先遍历，在此过程中对节点进行添加、更新及移除操作。这部分也是 Babel 插件介入工作的部分。
- 生成 将经过转换的 AST 通过 babel-generator 再转换成 js 代码，过程就是深度优先遍历整个 AST，然后构建可以表示转换后代码的字符串。

还想深入了解的可以看 [[实践系列\]Babel 原理](https://juejin.cn/post/6844903760603398151)