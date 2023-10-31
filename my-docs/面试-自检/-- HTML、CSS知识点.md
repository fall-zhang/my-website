> Create by **fall** on 18 Oct 2021
> Recently revised in 11 Oct 2023

https://github.com/haizlin/fe-interview/blob/master/category/css.md
> 现在学习更新到 issue 107

## 初级

### html 标签的类型（`head`， `body`，`!Doctype`） 他们的作用是什么

- head 头部元素的容器，大多数标签不会展示给用户，一般含有 meta，link 等
- body 是主体内容，
- !DOCTYPE 指示浏览器关于页面使用哪个 HTML 版本进行编写的指令。

### html5 语义化标签

```
<header>     <!--：页眉通常包括网站标志、主导航、全站链接以及搜索框。-->
<nav>        <!--：标记导航，仅对文档中重要的链接群使用。-->
<main>       <!--：页面主要内容，一个页面只能使用一次。如果是web应用，则包围其主要功能。-->
<article>    <!--：定义外部的内容，其中的内容独立于文档的其余部分。-->
<section>    <!--：定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分。-->
<aside>      <!--：定义其所处内容之外的内容。如侧栏、文章的一组链接、广告、友情链接、相关产品列表等。-->
<footer>     <!--：页脚，只有当父级是body时，才是整个页面的页脚。-->
<strong>     <!--：和 em 标签一样，用于强调文本，但它强调的程度更强一些。-->
<mark>       <!--：使用黄色突出显示部分文本。-->
<del>        <!--：移除的内容。-->
<code>       <!--：标记代码。-->
```

### audio 有哪些属性

| **属性** | **属性值** | **注释**                                                     |
| -------- | ---------- | ------------------------------------------------------------ |
| src      | url        | 播放的音乐的url地址（火狐只支持 ogg 的音乐，chrome 貌似全支持） |
| preload  | preload    | 预加载（在页面被加载时进行加载或者说缓冲音频）如果使用了autoplay 的话那么该属性失效。 |
| loop     | loop       | 循环播放                                                     |
| controls | controls   | 是否显示默认控制条（控制按钮）                               |
| autoplay | autoplay   | 自动播放                                                     |

audio 属性

- duration：获取媒体文件的总时长，以s为单位，如果无法获取，返回 NaN
- paused：如果媒体文件被暂停，那么paused属性返回true，反之则返回false
- ended：如果媒体文件播放完毕返回true
- muted：用来获取或设置静音状态。值为boolean
- volume：控制音量的属性值为0-1;0为音量最小，1为音量最大
- startTime：返回起始播放时间
- error：返回错误代码，为uull的时候为正常。否则可以通过Music.error.code来获取具体的错误代码： 1.用户终止 2.网络错误 3.解码错误 4.URL无效 
- currentTime：用来获取或控制当前播放的时间，单位为s。
- currentSrc：以字符串形式返回正在播放或已加载的文件

常用的控制用的函数：

- `load()`：加载音频、视频软件
- `play()`：加载并播放音频、视频文件或重新播放暂停的的音频、视频
- `pause()`：暂停出于播放状态的音频、视频文件
- `canPlayType()`：测试是否支持给定的Mini类型的文件

常用 audio 的事件：

- `loadstart`：客户端开始请求数据
- `progress`：客户端正在请求数据（或者说正在缓冲）
- `play`：play()和autoplay播放时
- pause：pause()方法促发时
- ended：当前播放结束
- timeupdate：当前播放时间发生改变的时候。播放中常用的时间处理哦
- canplaythrough：歌曲已经载入完全完成
- canplay：缓冲至目前可播放状态。

### 使用 `<link>` 和 `@import` 有什么区别？

- link 是 HTML 的标签，`@import` 是 CSS 提供的
- link 除加载 CSS 外，还可以定义 `rel` 连接属性等，`@import` 只能加载 CSS
- 如果用 link 引用 CSS，则与页面同步加载，`@import`引用 CSS，则等页面完全载入后加载 CSS 文件，即异步加载
- link 是 XHTML 标签，`@import` 是在 CSS2.1 引入的
- 通过 js 操作 DOM，可以插入 link 标签来改变样式；由于 DOM 方法是基于文档的，无法使用 `@import` 方式插入样式
- 在文档中添加link标签，浏览器会识别该文档为css文件，就会并行下载资源并且**不会**停止对当前文档的处理。这也是为什么建议使用link方式来加载css，而不是使用@import方式

### CSS3 有哪些新特性？

盒子：

- border-radius、box-shadow、background-clip、background-origin、background-size

渐变

- linear-gradient
- radial-gradient

转换

- transform、rotate、scale、translate、transform-origin

动画和过度

- transition、animation、`@keyframe`

### CSS 新增的伪类？

- `:not()` 否定选择器
- `:only-child` 只有一个子元素时才会生效
- `:empty` 选择连空格都没有的元素
- `:root` html 根元素

### 说明一下 `::before` 和 `::after`

在 CSS2 中提出的是，`:before` 和 `:after`，之后为了区分伪类和伪元素改为 `::before` 和 `::after`

- 是伪元素，并且默认 `display: inline`，`user-select: none`
- 必须要设置 content 属性，才能正常使用
- 可以结合伪类使用

伪类和伪元素有什么区别

- 伪类：表示不能通过类去触碰的地方，或者是特殊的状态
- 伪元素：某些内容的特殊位置，比如第一个字符 `::first-letter`

### rgba()和opacity这两个的透明效果有什么区别呢？

- opacity 会设置整个容器的透明度，无论是里面的字体还是背景颜色，
- rgba 设置的是颜色，只会对设置该颜色的内容产生影响。

### 如何使元素进行隐藏

- opacity：设置整个 DOM 的透明度
- visibility：设置是否可见，隐藏后不能触发事件，不可到达（比如 tab，切换表单的事件）
- display：none 在渲染树中移除整个 DOM。

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

### 什么是 FOUC？style 标签放在 body 前，后的区别

FOUC：Flash of Unstyled Content，无样式的渲染，然后突然变更样式，进行的闪烁。

导致的原因：将 style 标签写在 body 标签后：由于浏览器以逐行方式对 html 文档进行解析；当解析到写在尾部的样式表（外联或写在 style 标签）会导致浏览器停止之前的渲染，等待加载且解析样式表完成之后重新渲染，因此可能会出现 FOUC 现象（即样式失效导致的页面闪烁问题）

解决方案：style 写在 body 标签前，这样利于浏览器逐步渲染。

### 浏览器解析CSS选择器的过程？

从右到左，因为 CSSOM 是树状的

如果从左到右：顶到根，会判断非常多的内容（一个节点，和节点的子节点也不能放过，不断向下遍历，找到符合条件）

如果从右到左：根到顶（根不正确直接舍弃去查找），则只需要向上判断（父节点，父节点的节点，都会很容易找）

例如，我选择 ul.tree li.apple ，

顶到根，我要查找所有 ul.tree，ul.tree 也要向下遍历去找到 li 是否有 apple（所有节点都要查），根到顶，我找到所有 li.apple，判断顶上是否有 ul.tree。

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

### 如何取消 Chrome 中自动填充的黄色背景

- 设置设置内阴影： `box-shadow: inset`
- 设置文字填充颜色：`-webkit-text-fill-color`

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





### flex是哪些属性组成的

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

### RAF 和 RIC 是什么

**requestAnimationFrame：** 告诉浏览器在下次重绘之前执行传入的回调函数(通常是操纵 dom，更新动画的函数)；由于是每帧执行一次，那结果就是每秒的执行次数与浏览器屏幕刷新次数一样，通常是每秒 60 次。

**requestIdleCallback：**: 会在浏览器空闲时间执行回调，也就是允许开发人员在主事件循环中执行低优先级任务，而不影响一些延迟关键事件。如果有多个回调，会按照先进先出原则执行，但是当传入了 timeout，为了避免超时，有可能会打乱这个顺序。

> 这个题目可以深入去问浏览器每一帧的渲染流程 具体可以看看这篇 [requestIdleCallback 和 requestAnimationFrame 详解](https://juejin.cn/post/6844903848981577735)

## 困难

### 如何设计实现一个渲染引擎

这道题是字节终面的最后一个题目 属于**开放性问题** 没有固定答案 我当时觉得题目概念太大了 把我整懵了 我只是回答了下浏览器渲染原理啥的 貌似面试官不太满意 哈哈 如果叫你设计一个渲染引擎 应该从哪些方面着手呢

大家可以参考看看文章 [你不知道的浏览器页面渲染机制](https://juejin.cn/post/6844903815758479374)



## 参考文章

| 作者         | 链接                                       |
| ------------ | ------------------------------------------ |
| Big shark@LX | https://juejin.cn/post/7004638318843412493 |
| haizlin      | https://github.com/haizlin/fe-interview    |
|              |                                            |
|              |                                            |

