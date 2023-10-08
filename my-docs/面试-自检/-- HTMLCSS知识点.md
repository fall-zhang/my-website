> Create by **fall** on 2021-10-18
> Recently revised in 2021-10-18

### css 的渲染层合成是什么，浏览器如何创建新的渲染层

在 DOM 树中每个节点都会对应一个渲染对象（RenderObject）当它们的渲染对象处于相同的坐标空间（z 轴空间）时，就会形成相同的 RenderLayers，也就是渲染层。渲染层将保证页面元素以正确的顺序堆叠，这时候就会出现**层合成（composite）**，从而正确处理透明元素和重叠元素的显示。对于有位置重叠的元素的页面，这个过程尤其重要，因为一旦图层的合并顺序出错，将会导致元素显示异常。

**浏览器如何创建新的渲染层**

- 根元素 document
- 有明确的定位属性（relative、fixed、sticky、absolute）
- opacity < 1
- 有 CSS fliter 属性
- 有 CSS mask 属性
- 有 CSS mix-blend-mode 属性且值不为 normal
- 有 CSS transform 属性且值不为 none
- backface-visibility 属性为 hidden
- 有 CSS reflection 属性
- 有 CSS column-count 属性且值不为 auto 或者有 CSS column-width 属性且值不为 auto
- 当前有对于 opacity、transform、fliter、backdrop-filter 应用动画
- overflow 不为 visible

> 注意！不少人会将这些**合成层的条件和渲染层产生的条件**混淆，这两种条件发生在两个不同的层处理环节，是完全不一样的 具体可以看看这篇文章 [浏览器层合成与页面渲染优化](https://juejin.cn/post/6844903966573068301)

### css 优先级是怎么计算的

- 第一优先级：!important 会覆盖页面内任何位置的元素样式
- 1.内联样式，如 style="color: green"，权值为 1000
- 2.ID 选择器，如#app，权值为 0100
- 3.类、伪类、属性选择器，如.foo, :first-child, div[class="foo"]，权值为 0010
- 4.标签、伪元素选择器，如 div::first-line，权值为 0001
- 5.通配符、子类选择器、兄弟选择器，如*, >, +，权值为 0000
- 6.继承的样式没有权值

### position 有哪些值，作用分别是什么

- static

  static(没有定位)是 position 的默认值，元素处于正常的文档流中，会忽略 left、top、right、bottom 和 z-index 属性。

- relative

  relative(相对定位)是指给元素设置相对于原本位置的定位，元素并不脱离文档流，因此元素原本的位置会被保留，其他的元素位置不会受到影响。

  **使用场景**：子元素相对于父元素进行定位

- absolute absolute(绝对定位)是指给元素设置绝对的定位，相对定位的对象可以分为两种情况：

  - 设置了 absolute 的元素如果存在有祖先元素设置了 position 属性为 relative 或者 absolute，则这时元素的定位对象为此已设置 position 属性的祖先元素。
  - 如果并没有设置了 position 属性的祖先元素，则此时相对于 body 进行定位。 **使用场景**：跟随图标 图标使用不依赖定位父级的 absolute 和 margin 属性进行定位，这样，当文本的字符个数改变时，图标的位置可以自适应

- fixed 可以简单说 fixed 是特殊版的 absolute，fixed 元素总是相对于 body 定位的。 **使用场景**：侧边栏或者广告图

- inherit 继承父元素的 position 属性，但需要注意的是 IE8 以及往前的版本都不支持 inherit 属性。

- sticky （在父节点内相对于视图固定）

- 设置了 sticky 的元素，在屏幕范围（viewport）时该元素的位置并不受到定位影响（设置是 top、left 等属性无效），当该元素的位置将要移出偏移范围时，定位又会变成 fixed，根据设置的 left、top 等属性成固定位置的效果。 当元素在容器中被滚动超过指定的偏移值时，元素在容器内固定在指定位置。亦即如果你设置了 top: 50px，那么在 sticky 元素到达距离相对定位的元素顶部 50px 的位置时固定，不再向上移动（相当于此时 fixed 定位）。

  **使用场景**：跟随窗口

### 垂直水平居中实现方式

这道题基本也是 css 经典题目 但是网上已经有太多千篇一律的答案了 如果大家想在这道题加分

可以针对定宽高和不定宽高的实现多种不同的方案

建议大家直接看 [面试官：你能实现多少种水平垂直居中的布局（定宽高和不定宽高）](https://juejin.cn/post/6844903982960214029)

### 路由原理 history 和 hash 两种路由方式的特点

**hash 模式**

- location.hash 的值实际就是 URL 中#后面的东西 它的特点在于：hash 虽然出现 URL 中，但不会被包含在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。
- 可以为 hash 的改变添加监听事件

```javascript
window.addEventListener("hashchange", funcRef, false)
```

每一次改变 hash（window.location.hash），都会在浏览器的访问历史中增加一个记录利用 hash 的以上特点，就可以实现前端路由更新视图但不重新请求页面

> 特点：兼容性好但是不美观（话说美观也不重要吧，手机端看不见URL）

**history 模式**

利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法，两个方法应用于浏览器的历史记录站。这两个方法修改浏览器历史记录栈后，虽然当前 URL 改变了，但浏览器不会刷新页面，以此实现更新视图但不重新请求页面，实现单页应用前端路由。

当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。

> 特点：虽然美观，但是刷新会出现 404 需要后端进行配置

### 手写-将虚拟 Dom 转化为真实 Dom（类似的递归题-必考）

```js
{
  tag: 'DIV',
  attrs:{
  id:'app'
  },
  children: [
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] }
      ]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] }
      ]
    }
  ]
}

```

把上面的虚拟DOM转换为

```html
<div id="app">
  <span>
    <a></a>
  </span>
  <span>
    <a></a>
    <a></a>
  </span>
</div>
```

**答案**

```js
// 真正的渲染函数
function _render(vnode) {
  // 如果是数字类型转化为字符串
  if (typeof vnode === "number") {
    vnode = String(vnode);
  }
  // 字符串类型直接就是文本节点
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }
  // 普通DOM
  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    // 遍历属性
    Object.keys(vnode.attrs).forEach((key) => {
      const value = vnode.attrs[key];
        dom.setAttribute(key, value);
    });
  }
  // 子数组进行递归操作 这一步是关键
  vnode.children.forEach((child) => dom.appendChild(_render(child)));
  return dom;
}
```

## 中等

### css 开启硬件加速

硬件加速即 GPU 加速

浏览器在处理下面的 css 的时候，会使用 GPU 渲染

- transform（当 3D 变换的样式出现时会使用 GPU 加速）
- opacity
- filter
- will-change

```
采用 transform: translateZ(0)
采用 transform: translate3d(0, 0, 0)
使用 CSS 的 will-change属性。 will-change 可以设置为 opacity、transform、top、left、bottom、right。
```

> 注意！层爆炸，由于某些原因可能导致产生大量不在预期内的合成层，虽然有浏览器的层压缩机制，但是也有很多无法进行压缩的情况，这就可能出现层爆炸的现象（简单理解就是，很多不需要提升为合成层的元素因为某些不当操作成为了合成层）。解决层爆炸的问题，最佳方案是打破 overlap 的条件，也就是说让其他元素不要和合成层元素重叠。简单直接的方式：使用 3D 硬件加速提升动画性能时，最好给元素增加一个 z-index 属性，人为干扰合成的排序，可以有效减少创建不必要的合成层，提升渲染性能，移动端优化效果尤为明显。

### 常用设计模式有哪些并举例使用场景

- 工厂模式 - 传入参数即可创建实例

虚拟 DOM 根据参数的不同返回基础标签的 Vnode 和组件 Vnode

- 单例模式 - 整个程序有且仅有一个实例

vuex 和 vue-router 的插件注册方法 install 判断如果系统存在实例就直接返回掉

- 发布-订阅模式 (vue 事件机制)

- 观察者模式 (响应式数据原理)

- 装饰模式: (@装饰器的用法)

- 策略模式 策略模式指对象有某个行为,但是在不同的场景中,该行为有不同的实现方案-比如选项的合并策略

### 浏览器缓存策略是怎样的（强缓存 协商缓存）具体是什么过程？

这个也是经典的前端缓存问题 知识点加起来是一篇文章了 推荐大家看 [前端浏览器缓存知识梳理](https://juejin.cn/post/6947936223126093861)

### https 加密过程是怎样的

使用了对称加密和非对称加密的混合方式

具体过程请看 [前端进阶高薪必看-HTTPS 篇](https://juejin.cn/post/6844904150115827725)

### flex:是哪些属性组成的

flex 实际上是 flex-grow、flex-shrink 和 flex-basis 三个属性的缩写。

flex-grow：定义项目的的放大比例

- 默认为0，即 即使存在剩余空间，也不会放大
- 所有项目的flex-grow为1：等分剩余空间（自动放大占位）
- flex-grow为n的项目，占据的空间（放大的比例）是flex-grow为1的n倍。

flex-shrink：定义项目的缩小比例

- 默认为1，即 如果空间不足，该项目将缩小
- 所有项目的flex-shrink为1：当空间不足时，缩小的比例相同
- flex-shrink为0：空间不足时，该项目不会缩小
- flex-shrink为n的项目，空间不足时缩小的比例是flex-shrink为1的n倍。

flex-basis： 定义在分配多余空间之前，项目占据的主轴空间（main size，也就是flex-dircation），浏览器根据此属性计算主轴是否有多余空间。

```
默认值为auto，即 项目原本大小；
设置后项目将占据固定空间。
```

### 304 是什么意思一般什么场景出现 ，命中强缓存返回什么状态码

**协商缓存命中返回 304**

这种方式使用到了 headers 请求头里的两个字段，Last-Modified & If-Modified-Since 。服务器通过响应头 Last-Modified 告知浏览器，资源最后被修改的时间：

Last-Modified: Thu, 20 Jun 2019 15:58:05 GMT

当再次请求该资源时，浏览器需要再次向服务器确认，资源是否过期，其中的凭证就是请求头 If-Modified-Since 字段，值为上次请求中响应头 Last-Modified 字段的值：

If-Modified-Since: Thu, 20 Jun 2019 15:58:05 GMT

浏览器在发送请求的时候服务器会检查请求头 request header 里面的 If-modified-Since，如果最后修改时间相同则返回 304，否则给返回头(response header)添加 last-Modified 并且返回数据(response body)。

另外，浏览器在发送请求的时候服务器会检查请求头(request header)里面的 if-none-match 的值与当前文件的内容通过 hash 算法（例如 nodejs: cryto.createHash('sha1')）生成的内容摘要字符对比，相同则直接返回 304，否则给返回头(response header)添加 etag 属性为当前的内容摘要字符，并且返回内容。

综上总结为：

```
请求头last-modified的日期与响应头的last-modified一致
请求头if-none-match的hash与响应头的etag一致
这两种情况会返回Status Code: 304
```

**强缓存命中返回 200** 

### tree shaking 是什么，原理是什么

Tree shaking 是一种通过**清除多余代码方式**来优化项目打包体积的技术，专业术语叫 Dead code elimination

tree shaking 的**原理**是什么?

```
ES6 Module引入进行静态分析，故而编译的时候正确判断到底加载了那些模块

静态分析程序流，判断那些模块和变量未被使用或者引用，进而删除对应代码
```

> 扩展：common.js 和 es6 中模块引入的区别？

CommonJS 是一种模块规范，最初被应用于 Nodejs，成为 Nodejs 的模块规范。运行在浏览器端的 JavaScript 由于也缺少类似的规范，在 ES6 出来之前，前端也实现了一套相同的模块规范 (例如: AMD)，用来对前端模块进行管理。自 ES6 起，引入了一套新的 ES6 Module 规范，在语言标准的层面上实现了模块功能，而且实现得相当简单，有望成为浏览器和服务器通用的模块解决方案。但目前浏览器对 ES6 Module 兼容还不太好，我们平时在 Webpack 中使用的 export 和 import，会经过 Babel 转换为 CommonJS 规范。在使用上的差别主要有：

1、CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。

2、CommonJS 模块是运行时加载，ES6 模块是编译时输出接口（静态编译）。

3、CommonJs 是单个值导出，ES6 Module 可以导出多个

4、CommonJs 是动态语法可以写在判断里，ES6 Module 静态语法只能写在顶层

5、CommonJs 的 this 是当前模块，ES6 Module 的 this 是 undefined

### babel 是什么，原理了解吗

Babel 是一个 JavaScript 编译器。他把最新版的 javascript 编译成当下可以执行的版本，简言之，利用 babel 就可以让我们在当前的项目中随意的使用这些新最新的 es6，甚至 es7 的语法。

Babel 的三个主要处理步骤分别是： 解析（parse），转换（transform），生成（generate）。

- 解析 将代码解析成抽象语法树（AST），每个 js 引擎（比如 Chrome 浏览器中的 V8 引擎）都有自己的 AST 解析器，而 Babel 是通过 Babylon 实现的。在解析过程中有两个阶段：词法分析和语法分析，词法分析阶段把字符串形式的代码转换为令牌（tokens）流，令牌类似于 AST 中节点；而语法分析阶段则会把一个令牌流转换成 AST 的形式，同时这个阶段会把令牌中的信息转换成 AST 的表述结构。
- 转换 在这个阶段，Babel 接受得到 AST 并通过 babel-traverse 对其进行深度优先遍历，在此过程中对节点进行添加、更新及移除操作。这部分也是 Babel 插件介入工作的部分。
- 生成 将经过转换的 AST 通过 babel-generator 再转换成 js 代码，过程就是深度优先遍历整个 AST，然后构建可以表示转换后代码的字符串。

还想深入了解的可以看 [[实践系列\]Babel 原理](https://juejin.cn/post/6844903760603398151)

### 13 RAF 和 RIC 是什么

**requestAnimationFrame：** 告诉浏览器在下次重绘之前执行传入的回调函数(通常是操纵 dom，更新动画的函数)；由于是每帧执行一次，那结果就是每秒的执行次数与浏览器屏幕刷新次数一样，通常是每秒 60 次。

**requestIdleCallback：**: 会在浏览器空闲时间执行回调，也就是允许开发人员在主事件循环中执行低优先级任务，而不影响一些延迟关键事件。如果有多个回调，会按照先进先出原则执行，但是当传入了 timeout，为了避免超时，有可能会打乱这个顺序。

> 这个题目可以深入去问浏览器每一帧的渲染流程 具体可以看看这篇 [requestIdleCallback 和 requestAnimationFrame 详解](https://juejin.cn/post/6844903848981577735)

### 困难

#### Es6 的 let 实现原理

原始 es6 代码

```js
var funcs = [];
for (let i = 0; i < 10; i++) {
  funcs[i] = function () {
    console.log(i);
  };
}
funcs[0](); // 0
```

babel 编译之后的 es5 代码（polyfill）

```js
var funcs = [];

var _loop = function _loop(i) {
  funcs[i] = function () {
    console.log(i);
  };
};

for (var i = 0; i < 10; i++) {
  _loop(i);
}
funcs[0](); // 0
```

其实我们根据 babel 编译之后的结果可以看得出来 let 是借助闭包和函数作用域来实现块级作用域的效果的在不同的情况下 let 的编译结果是不一样的

#### 如何设计实现一个渲染引擎

这道题是字节终面的最后一个题目 属于**开放性问题** 没有固定答案 我当时觉得题目概念太大了 把我整懵了 我只是回答了下浏览器渲染原理啥的 貌似面试官不太满意 哈哈 如果叫你设计一个渲染引擎 应该从哪些方面着手呢

大家可以参考看看文章 [你不知道的浏览器页面渲染机制](https://juejin.cn/post/6844903815758479374)

#### require 具体实现原理是什么

**require 基本原理**

 <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0f1dbabee4d849d3a3e018c91f04c619~tplv-k3u1fbpfcp-watermark.image" alt="图片.png" style={{zoom:"80%"}} />

**require 查找路径**

<img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e49999989bcf496facdbc91179bebd71~tplv-k3u1fbpfcp-watermark.image" alt="图片.png" style={{zoom:"80%"}} />

require 和 module.exports 干的事情并不复杂，我们先假设有一个全局对象{}，初始情况下是空的，当你 require 某个文件时，就将这个文件拿出来执行，如果这个文件里面存在 module.exports，当运行到这行代码时将 module.exports 的值加入这个对象，键为对应的文件名，最终这个对象就长这样：

```
{
  "a.js": "hello world",
  "b.js": function add(){},
  "c.js": 2,
  "d.js": { num: 2 }
}
```

当你再次 require 某个文件时，如果这个对象里面有对应的值，就直接返回给你，如果没有就重复前面的步骤，执行目标文件，然后将它的 module.exports 加入这个全局对象，并返回给调用者。这个全局对象其实就是我们经常听说的缓存。所以 require 和 module.exports 并没有什么黑魔法，就只是运行并获取目标文件的值，然后加入缓存，用的时候拿出来用就行。

具体可以看看这篇 [深入 Node.js 的模块加载机制，手写 require 函数](https://juejin.cn/post/6866973719634542606)

#### 4 前端性能定位以及优化指标

前端性能优化 已经是**老生常谈**的一项技术了 很多人说起性能优化方案的时候头头是道 但是真正的对于性能分析定位和性能指标这块却一知半解 所以这道题虽然和性能相关 但是考察点在于平常项目如何进行**性能定位和分析**

1. 我们可以从 前端性能监控-**埋点**以及 **window.performance**相关的 api 去回答
2. 也可以从性能分析工具 Performance 和 **Lighthouse**
3. 还可以从**性能指标** LCP FCP FID CLS 等去着手

> 以下为性能相关的文章 大家可以去看看

[5 分钟撸一个前端性能监控工具](https://juejin.cn/post/6844903662020460552)

[前端性能优化之谈谈通用性能指标及上报策略](https://juejin.cn/post/6844904150057091086)

[前端性能优化指标 + 检测工具](https://juejin.cn/post/6974565176427151397)

## 参考文章

| 作者         | 链接                                       |
| ------------ | ------------------------------------------ |
| Big shark@LX | https://juejin.cn/post/7004638318843412493 |
|              |                                            |
|              |                                            |
|              |                                            |

