> Create by **fall** on:2020-12-07
> Recently revised in:2022-02-18

## babel 插件详解

官网有一句话：所有转换将使用本地配置文件 `babel.config.js`，之前版本是`babelrc.`

> 两个关于 JS 转译比较基础的概念：
>
> - 转译器（transpilers）：对语法的转换，如控制合并符 `??`，babel 是最著名的转译器。
> - 垫片（polyfills）：更新 / 添加新函数的脚本被称为“polyfill”，core js 支持了很多特性。

### @babel/core

对代码进行转换的一些核心方法

core 就是核心的意思嘛

babel 同 webpack，slate，qiankun 采用的是微内核架构，也就是说，核心功能非常小，大部分功能都是通过插件扩展进行实现。

`@babel/core` 主要处理这些事

- 加载，并处理配置
- 加载插件
- 将代码通过 Parse（解析） 转换成 AST（抽象语法树）
- 调用 Traverser 遍历整个 AST，并使用访问者模式进行转换
- 生成代码，包括 SourceMap 转换和源代码生成

流程走下来也就是，加载你的配置，通过配置加载所用的插件，然后应用插件生成语法树，对语法树进行操作，生成代码。

如果没有配置（你不告诉 babel 做什么），那么 babel 什么操作都不会做。

> 配置在下文



### @babel/cli

babel 的命令行工具，可以对文件进行监听和操作。

babel 带有的内置cli，让我们从命令行编译我们的命令

```bash
npm install --save-dev @babel/cli
# 进行安装 babel/cli 
npm babel study.js --watch --out-file study-compiled.js 
# 监听 study.js 并且监听生成 study-compiled.js
# --out-file把编译后的目标文件输出到相应的文件，每次更改目标时都进行编译可以加上 --watch
# 如果更改了配置，需要再次执行上面的文件，不然babel读取不到最新的命令
```

### @bebel/plugin* 和@babel/preset-env

- `@babel/plugin*` 是单个 polyfill 的内容 (语法)
- `@babel/preset-env` 是一堆 polyfill 的集合，就是 polyfill 后的环境

这两个模块是 babel 配置的主要模块

**babel/plugin***

配置文件中配置所需的插件，配置上之后才能使用，当然，使用前先 install 插件

```js
// babel.config.js
module.exports ={
  presets:[],
  plugins:[
    "@babel/plugin-transform-arrow-functions",// 引入转换箭头函数的插件
    "@babel/plugin-transform-exponentiation-operator"// 引入转换引入新增的指数运算符
  ] 
}
// study.js
const exp = 2 ** 3
const study = ()=>{}
// study-compiled.js
const study = function(){}
const exponentiation = Math.pow(2,2)
```

这就是一个简单的 babel.config.js 配置文件的使用

但是这样一个一个引入太过于麻烦，所以有了另外一个插件，@babel/preset-env

**@babel/preset-env**

presets 是预设的意思，预先设定好引入一系列的东西，省的我们一个个的引入，官方提供了很多的 presets，比如 preset-env (处理es6+规范语法的集合)、preset-stage(一些尚在提议阶段的语法插件集合，当然在babel7+以上就被废除了)，preset-react(处理react的插件等等)。

```js
// babel.config.js 文件
module.exports ={
  presets:[
    "@babel/preset-env"
  ],plugins:[]
}
// 此时es6+的语法都被编译了，但新增的API方法并没有被编译，之后在 polyfill 的时候再治解决他。
```

在此基础上，还可以进行其他配置，比如说，添加一个 target ，指定作用的运行环境

```js
module.exports = {
  presets: [
    [
      "@babel/preset-env", {
        'targets': {'browsers': ['ie >= 8', 'iOS 7']} // 支持ie8，直接使用iOS浏览器版本7
      }]],
  plugins: []
}
```

babel 的 Browserslist 集成还支持在 package.json 文件里或者新建一个 .browserslistrc 文件来指定对应目标环境。

还有一个preset叫做babel/preset-dev 会根据浏览器和运行环境，自动确定babel插件和 polyfills

### @babel/polyfill

用于引入实现单个比较大的 API 的语法。

> 注意：
>
> `@babel/polyfill` 默认引入的是 `core-js2`。`core-js2` 在2018年后不维护了，在 babel7.4.0 已经**不推荐使用** `@babel/polyfill`了。
>
> 所以 `core-js` 官方现在推荐我们使用 polyfill 的时候直接引入 core-js 和 `regenerator-runtime/runtime` 这两个包完全取代 `@babel/polyfil `来为了防止重大更改。

babel/polyfill 是由 core-js2 和 regenerator-runtime 组成的一个集团包。

因为比如 `Promise` 这类的API，babel 没有给转译，因为 babel 只会默认转译 js 语法，而不是整个API。当使用这些API时，只需在文件顶部引入就可以使用新增的 API 了。

引入：`import '@babel/polyfill'` ，然后就可以使用新增的API了

这样引入会直接引入所有的包，如果想要引入相应的 polyfill 此时就应该使用下面的设置

```js
module.exports = {
  presets: [
    [
      "@babel/preset-env", {
        "modules": false,
        "useBuiltIns": "entry", 
        // 该属性用来按需引入 polyfill,只会把下面版本以上，不支持该api的polify引入
        'targets': {
          'browsers': ['ie >= 8', 'iOS 7'] // 支持ie8，直接使用iOS浏览器版本7
        }
      }
    ]
  ],
  plugins: []
}
```

配置如何进行引入

`useBuiltIns` 

选项："usage"|"entry"|false，默认为 false

- `entry` 的意思是在入口，根据我们配置的浏览器进行浏览器兼容，将目标环境所有不支持的 API 都引入。
- `usage` 配置为 usage 后，babel 会扫描你的每一个文件，然后检测都使用了那些新的 API，跟进配置兼容，只引入相应的 API 的 polyfilll。

> 使用`usage`这个选项的时候，命令行可能报了一堆警告，意思是你没有指定版本，会默认使用 2.x版本
>
> > WARNING: We noticed you're using the `useBuiltIns` option  without declaring a core-js version. Currently, we assume version 2.x  when no version is passed. Since this default version will likely change in future versions of Babel, we recommend explicitly setting the  core-js version you are using via the `corejs` option.
>
> 由于 babel/polyfill 是集成包，core-js3已经发布了，而且很稳定。core-js2在2018年后不维护了，@babel/polyfill 默认引入的是 core-js2。在 babel7.4.0 已经**不推荐使用 @babel/polyfill**了。
>
> 所以core-js官方现在推荐我们使用polyfill的时候直接引入 core-js 和 regenerator-runtime/runtime 这两个包完全取代 **@babel/polyfil** 来为了防止重大更改。

```js
module.export ={
  preset:[
    [
      "@babel/preset-env",{
       "modules":false,
        "useBuiltIns":"entry", // 意思是在入口根据配置的浏览器进行兼容，将目标不支持的API都引入
        // 指定 corejs 的版本 
        "corejs":"3",
        "targets":{'browers':['not ie>=8','iOS 7']}
      }
    ]
  ],
  plugins:[]
}
```

### @babel/runtime

需要依赖 `@babel/helpers` 和 `regenerator-runtime`

有时，语法的转换有些复杂，需要引入一些 `helper` 函数，比如说对 ES6 的 class 进行转换。

```js
/* study.js */
class Test {}

/* study-compiled.js */
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Test = function Test() {
  _classCallCheck(this, Test);
};
```

上面通过引入函数的方法来处理 class 的转换，但是有的方法很复杂，每个文件都会定义一遍这些个函数，每个文件的代码会很多。所以能否将这些代码抽到一个公文包里面。只需要引入对应的函数，降低代码量，此时就可以使用 `babel/plugin-transform-runtime` 插件来配合使用。在插件选项中加入这个插件。

> bebel 配置的注意事项：
>
> 在更改配置之后，一定要重启命令，否则不会生效。
>
> 维护一些公共组件库，或者一些别的公共库推荐要使用 `@babel/runtime` 配合 `babel/plugin-transform-runtime` 来建立沙箱环境

### 其他工具集

**核心支持**

`@babel/parser` 

babel 使用的 JavaScript 解析器，支持 JSX，Flow，TypeScript，支持实验性的语言提议（stage-0起）

`@babel/traverse`

实现了访问者模式，对 AST 进行遍历，插件通过它获取相应的 AST 节点，并对节点进行相应的操作。

`@babel/generator`

将 AST 转换为源代码，同事支持 SourceMap。

**插件开发辅助**

`@babel/template`

很小但很有用的模块，编写字符串形式，且带有占位符的代码，来代替手动进行编码。

`@babel/types`

用于 AST 节点的 Lodash 工具库，包含构造节点，验证节点，以及变换 AST 节点的方法

`@babel/helper`

用于辅助代码，淡出语法转换可能无法让代码运行起来，比如低版本浏览器无法识别class关键字，这时候需要添加辅助代码，对class进行模拟。

## Babel 工作流程

如何实现？

- 解析（Parsing）：将代码字符串经过**分词**与**语法分析**解析成抽象语法树（AST）。AST 是 babel 转译的核心数据结构，后续操作将依赖于 AST。
- 转换（Transformation）：对抽象语法树进行转换操作，插件应用于此流程。
- 生成（Code Generation）：根据变换后的抽象语法树再生成代码字符串。

解析和生成 babel 做的十分完善，我们只需再转换中加入对应的插件操作生成结果即可。

> 分词：比如 `const a = 10` 会被分为四个部分`const`、`a` 、`=`、`10`，每个元素内有更相信的信息
> 语法分析：建立分析语法单元之间的关系，形成 AST 树。 

> babel 使用访问者模式对节点类型进行处理。这样做可以
>
> - 可以对节点统一遍历
> - 具备优秀的扩展性和灵活性
> - 提供节点的操作方法

## babel的配置

配置分为两种，一种是 preset，另一种是 plugins

preset：包含了插件的所有功能

执行时的顺序

- 执行plugin中的所有插件
- plugin中的插件，按照引入的顺序进行编译
- 所有plugins中的插件引入完成，再执行presets预设
- presets预设，按照倒序进行执行。

```js
modole.export
```

> babel 配置中 preset 的配置的执行顺序是相反的，即在前面的最后执行，可以理解为，最前面的包裹着后面的内容。类似于栈。
>
>  plugins 的配置的执行顺序是正常的，类似于队列。

## core-js

开源库[zloirock/core-js](https://github.com/zloirock/core-js)
提供了es5、es6的polyfills，包括promises、[symbols](https://link.jianshu.com?t=https://link.zhihu.com/?target=https%3A//github.com/zloirock/core-js%23ecmascript-6-symbol)、[collections](https://link.jianshu.com?t=https://link.zhihu.com/?target=https%3A//github.com/zloirock/core-js%23ecmascript-6-collections)、iterators、[typed arrays](https://link.jianshu.com?t=https://link.zhihu.com/?target=https%3A//github.com/zloirock/core-js%23ecmascript-6-typed-arrays)、[ECMAScript 7+ proposals](https://link.jianshu.com?t=https://link.zhihu.com/?target=https%3A//github.com/zloirock/core-js%23ecmascript-7-proposals)、[setImmediate](https://link.jianshu.com?t=https://link.zhihu.com/?target=https%3A//github.com/zloirock/core-js%23setimmediate) 等等。
如果使用了 babel-runtime、babel-plugin-transform-runtime 或者 babel-polyfill，你就可以间接的引入了 core-js 标准库

## 参考文章

优于最开始未收录参考文章，可能一部分文章没有列出来

| 文章名称                     | 链接                                   |
| ---------------------------- | -------------------------------------- |
| 用 babel-plugin 实现按需加载 | https://zhuanlan.zhihu.com/p/210280253 |

