
> Create by **fall** on 18 Oct 2021
> Recently revised in 12 Oct 2023

## 简单

### ES6 新 API 有哪些？

- 新增选择器 document.querySelector、document.querySelectorAll 
- 拖拽释放（Drag and drop）API 
- 媒体播放的 video 和 audio 
- 本地存储 localStorage 和 sessionStorage 
- 离线应用 manifest 
- 桌面通知 Notifications 
- 语意化标签 article、footer、header、nav、section 
- 增强表单控件 calendar、date、time、email、url、search 
- 地理位置 Geolocation 
- 多任务 webworker 
- 全双工通信协议 websocket 
- 历史管理 history 
- 跨域资源共享(CORS) Access-Control-Allow-Origin 
- 页面可见性改变事件 visibilitychange 
- 跨窗口通信 PostMessage 
- Form Data 对象 
- 绘画 canvas 
- web component
- IndexDB

### 静态类型检查是什么

**js 是动态类型语言**

静态类型语言：类型检查发生在编译阶段，因此除非修复错误，否则会一直编译失败

动态类型语言：只有在程序运行了一次的时候错误才会被发现，也就是在运行时，因此代码中包含了错误，会在运行时阻止脚本正常运行的错误类型

**js 静态类型检查的方法**

**TypeScript **是一个会编译为 JavaScript 的超集（尽管它看起来几乎像一种新的静态类型语言）

**使用静态类型的优势**

- 可以尽早发现 bug 和错误 
- 减少了复杂的错误处理 
- 将数据和行为分离 
- 减少单元测试的数量 
- 提供了领域建模（domain modeling）工具 
- 帮助我们消除了一整类 bug 
- 重构时更有信心 

​	**使用静态类型的劣势**

- 代码冗长
- 需要花时间去掌握类型

### iframe 有什么优点、缺点

优点：

- iframe 能够原封不动的把嵌入的网页展现出来。 
- 如果有多个网页引用 iframe，那么你只需要修改 iframe 的内容，就可以实现调用的每一个页面内容的更改，方便快捷。 
- 网页如果为了统一风格，头部和版本都是一样的，就可以写成一个页面，用 iframe 来嵌套，可以增加代码的可重用。 

缺点：

- iframe 会阻塞主页面的 onload 事件
- 如果遇到加载缓慢的第三方内容如图标和广告，这些问题可以由 iframe 来解决。
- iframe 和主页面共享连接池，会增加服务器的 http 请求，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。对于追求响应速度大型网站是不可取的。 
- 会产生很多页面，不容易管理。 
- iframe 框架结构有时会让人感到迷惑，如果框架个数多的话，可能会出现上下、左右滚动条，会分散访问者的注意力，用户体验度差。 
- 代码复杂，无法被一些搜索引擎索引到，这一点很关键，现在的搜索引擎爬虫还不能很好的处理 iframe 中的内容，所以使用iframe 会不利于搜索引擎优化（SEO）。 
- 很多的移动设备无法完全显示框架，设备兼容性差。 

### 箭头函数与普通函数相比有哪些区别？

箭头函数与普通函数相比，缺少了 `caller，arguments，prototype`。

普通函数中的 `this` 指向运行时所在的对象，箭头函数中 `this` 是定义时上层作用域的 `this`。因此一个是可变的，一个是不变的。

```js
var name = 'fall'
var person = {
  name: 'nanjiu',
  say: function() {
    console.log('hello',this.name)
  },
  say2: () => {
    console.log('hello',this.name)
  }
}
person.say() // say: nanjiu
person.say2() // say2: fall
```

### 什么是事件代理（事件委托） 有什么好处

事件委托的原理：不给每个子节点单独设置事件监听器，而是设置在其父节点上，然后利用冒泡原理设置每个子节点，即`event.target`。

**优点：**

- **减少内存消耗和对 DOM 操作，提高性能**。因为需要不断的操作 DOM，持续操作 DOM 会引起浏览器重绘和回流的可能也就越多，页面交互的事件也就变的越长。在 JavaScript 中，添加到页面上的事件处理程序数量将直接关系到页面的整体运行性能。每一个事件处理函数，都是一个对象，多一个事件处理函数，**内存**中就会被多占用一部分空间。如果要用事件委托，就会将所有的操作放到 js 程序里面，只对它的父级进行操作，与 DOM 的操作就只需要交互一次，这样就能大大的减少与 DOM 的交互次数，提高性能。
- 动态绑定事件 因为事件绑定在父级元素 所以新增的元素也能触发同样的事件

### addEventListener 默认是捕获还是冒泡

默认是**冒泡**

addEventListener **第三个参数**默认为 false 代表执行事件冒泡行为。

当为 true 时执行事件捕获行为。

### HashMap 和 Array 有什么区别？

查找效率：

- HashMap 因为其根据 hashcode 的值直接算出 index，所以其查找效率是随着数组长度增大而增加的。
- ArrayMap 使用的是二分法查找，所以当数组长度每增加一倍时，就需要多进行一次判断，效率下降。

扩容数量

- HashMap 初始值 16 个长度，每次扩容的时候，直接申请双倍的数组空间。
- ArrayMap 每次扩容的时候，如果 size 长度大于 8 时申请 size*1.5 个长度，大于 4 小于 8 时申请 8 个，小于 4 时申请 4 个。这样比较 ArrayMap 其实是申请了更少的内存空间，但是扩容的频率会更高。因此，如果数据量比较大的时候，还是使用 HashMap 更合适，因为其扩容的次数要比 ArrayMap 少很多。 	

扩容效率

- HashMap 每次扩容的时候重新计算每个数组成员的位置，然后放到新的位置。
- ArrayMap 则是直接使用 System.arraycopy，所以效率上肯定是 ArrayMap 更占优势。 	

内存消耗

- 以 ArrayMap 采用了一种独特的方式，能够重复的利用因为数据扩容而遗留下来的数组空间，方便下一个 ArrayMap 的使用。
- 而HashMap 没有这种设计。由于 ArrayMap 只缓存了长度是 4 和 8 的时候，所以如果频繁的使用到 Map，而且数据量都比较小的时候，ArrayMap 无疑是相当的是节省内存的。 	

总结
综上所述，数据量比较小，并且需要频繁的使用 Map 存储数据的时候，推荐使用 ArrayMap。 而数据量比较大的    时候，则推荐使用 HashMap。

### HashMap 和 Object 有什么区别？

Objects 和 Maps 类似的是，它们都允许你按键存取一个值、删除键、检测一个键是否绑定了值。不过 Maps 和 Objects 有一些重要的区别，在下列情况里使用 Map 会是更好的选择：

|          | Map                                                          | Object                                                       |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 意外的键 | Map 默认情况不包含任何键。只包含显式插入的键。               | 一个 Object 有一个原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。**注意:** 虽然 ES5 开始可以用 `Object.create(null)` 来创建一个没有原型的对象，但是这种用法不太常见。 |
| 键的类型 | 一个 Map 的键可以是**任意值**，包括函数、对象或任意基本类型。 | 一个 Object 的键必须是一个 `String` 或是 `Symbol`。          |
| 键的顺序 | Map 中的 key 是有序的。因此，当迭代的时候，一个 Map 对象以插入的顺序返回键值。 | 一个 Object 的键是无序的。注意：自 ECMAScript 2015 规范以来，对象确实保留了字符串和 Symbol 键的创建顺序； 因此，在只有字符串键的对象上进行迭代将按插入顺序产生键。 |
| Size     | Map 的键值对个数可以轻易地通过[size](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/size) 属性获取 | Object 的键值对个数只能手动计算                              |
| 迭代     | Map是 [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/iterable) 的，所以可以直接被迭代。 | 迭代一个 Object 需要以某种方式获取它的键（Symbol.iterable）然后才能迭代。 |
| 性能     | 在频繁增删键值对的场景下表现更好。                           | 在频繁添加和删除键值对的场景下未作出优化。                   |





### let 实现原理

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

### 事件循环

```js
setTimeout(function () {
  console.log("1");
}, 0);
async function async1() {
  console.log("2");
  const data = await async2();
  console.log("3");
  return data;
}
async function async2() {
  return new Promise((resolve) => {
    console.log("4");
    resolve("async2的结果");
  }).then((data) => {
    console.log("5");
    return data;
  });
}
async1().then((data) => {
  console.log("6");
  console.log(data);
});
new Promise(function (resolve) {
  console.log("7");
  //   resolve()
}).then(function () {
  console.log("8");
})
```

输出结果：2475361

> 注意！我在最后一个 **Promise** 埋了个坑 我没有调用 resolve 方法 这个是在面试美团的时候遇到了 当时自己没看清楚 以为都是一样的套路 最后面试官说不对 找了半天才发现是这个坑 哈哈

### 手写 bind

Function.prototype.bind()

返回一个改变 this 指向的函数

```js
// bind实现要复杂一点  因为他考虑的情况比较多 还要涉及到参数合并(类似函数柯里化)
Function.prototype.myBind = function (context, ...args) {
  if (!context || context === null) {
    context = window;
  }
  // 创造唯一的key值  作为我们构造的context内部方法名
  let fn = Symbol()
  context[fn] = this
  let _this = this
  //  bind情况要复杂一点
  const result = function (...innerArgs) {
    // 第一种情况 :若是将 bind 绑定之后的函数当作构造函数，通过 new 操作符使用，则不绑定传入的 this，而是将 this 指向实例化出来的对象
    // 此时由于new操作符作用  this指向result实例对象  而result又继承自传入的_this 根据原型链知识可得出以下结论
    // this.__proto__ === result.prototype   //this instanceof result =>true
    // this.__proto__.__proto__ === result.prototype.__proto__ === _this.prototype; //this instanceof _this =>true
    if (this instanceof _this === true) {
      // 此时this指向指向result的实例  这时候不需要改变this指向
      this[fn] = _this;
      this[fn](...[...args, ...innerArgs]); //这里使用es6的方法让bind支持参数合并
      delete this[fn];
    } else {
      // 如果只是作为普通函数调用  那就很简单了 直接改变this指向为传入的context
      context[fn](...[...args, ...innerArgs]);
      delete context[fn];
    }
  };
  // 如果绑定的是构造函数 那么需要继承构造函数原型属性和方法
  // 实现继承的方式: 使用Object.create
  result.prototype = Object.create(this.prototype);
  return result;
};

//用法如下

// function Person(name, age) {
//   console.log(name); //'我是参数传进来的name'
//   console.log(age); //'我是参数传进来的age'
//   console.log(this); //构造函数this指向实例对象
// }
// // 构造函数原型的方法
// Person.prototype.say = function() {
//   console.log(123);
// }
// let obj = {
//   objName: '我是obj传进来的name',
//   objAge: '我是obj传进来的age'
// }
// // 普通函数
// function normalFun(name, age) {
//   console.log(name);   //'我是参数传进来的name'
//   console.log(age);   //'我是参数传进来的age'
//   console.log(this); //普通函数this指向绑定bind的第一个参数 也就是例子中的obj
//   console.log(this.objName); //'我是obj传进来的name'
//   console.log(this.objAge); //'我是obj传进来的age'
// }

// 先测试作为构造函数调用
// let bindFun = Person.myBind(obj, '我是参数传进来的name')
// let a = new bindFun('我是参数传进来的age')
// a.say() //123

// 再测试作为普通函数调用
// let bindFun = normalFun.myBind(obj, '我是参数传进来的name')
//  bindFun('我是参数传进来的age')
```

### 手写-实现一个寄生组合继承

```js
function Parent(name) {
  this.name = name;
  this.say = () => {
    console.log(111);
  };
}
Parent.prototype.play = () => {
  console.log(222);
};

function Children(name) {
  Parent.call(this);
  this.name = name;
}
Children.prototype = Object.create(Parent.prototype)
Children.prototype.constructor = Children;
// let child = new Children("111");
// // console.log(child.name);
// // child.say();
// // child.play();
```

### 手写-new 操作符

```js
function myNew(fn, ...args) {
  let obj = Object.create(fn.prototype);
  let res = fn.call(obj, ...args);
  if (res && (typeof res === "object" || typeof res === "function")) {
    return res;
  }
  return obj;
}
// 用法如下：
// // function Person(name, age) {
// //   this.name = name;
// //   this.age = age;
// // }
// // Person.prototype.say = function() {
// //   console.log(this.age);
// // };
// // let p1 = myNew(Person, "lihua", 18);
// // console.log(p1.name);
// // console.log(p1);
// // p1.say();
```

### instanceOf 原理，手动实现 function isInstanceOf (child, Parent)

instanceof 主要作用就是判断一个实例是否属于某种类型

```js
let person = function(){

}
let no = new person()
no instanceof person//true
```

instanceOf 原理

```js
function new_instance_of(leftVaule, rightVaule) { 
  let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
  leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
  while (true) {
    if (leftVaule === null) {
      return false;    
    }
    if (leftVaule === rightProto) {
      return true;    
    } 
    leftVaule = leftVaule.__proto__ 
  }
}
```

​	其实 instanceof 主要的实现原理就是只要右边变量的 prototype 在左边变量的原型链上即可。因此，instanceof  在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 prototype，如果查找失败，则会返回  false，告诉我们左边变量并非是右边变量的实例。

同时还要了解 js 的原型继承原理

​	手动实现

```js
function instance_of(L, R) {//L 表示左表达式，R 表示右表达式
    var O = R.prototype;
    L = L.__proto__;
    while (true) { 
        if (L === null) 
        return false; 
        if (O === L) // 这里重点：当 O 严格等于 L 时，返回true 
        return true; 
        L = L.__proto__; 
    } 
}
// 开始测试
var a = []
var b = {}

function Foo(){}
var c = new Foo()
function child(){}
function father(){}
child.prototype = new father() 
var d = new child()

console.log(instance_of(a, Array)) // true
console.log(instance_of(b, Object)) // true
console.log(instance_of(b, Array)) // false
console.log(instance_of(a, Object)) // true
console.log(instance_of(c, Foo)) // true
console.log(instance_of(d, child)) // true
console.log(instance_of(d, father)) // true
```

### 手写 setTimeout 模拟实现 setInterval

```js
function mySetInterval(fn, time = 1000) {
  let timer = null,
      isClear = false;
  function interval() {
    if (isClear) {
      isClear = false;
      clearTimeout(timer);
      return;
    }
    fn();
    timer = setTimeout(interval, time);
  }
  timer = setTimeout(interval, time);
  return () => {
    isClear = true;
  };
}

// let a = mySettimeout(() => {
//   console.log(111);
// }, 1000)
// let cancel = mySettimeout(() => {
//   console.log(222)
// }, 1000)
// cancel()
```

### 查找数组公共前缀

题目描述

```js
编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。

示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"

示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
```

答案

```js
const longestCommonPrefix = function (strs) {
  const str = strs[0];
  let index = 0;
  while (index < str.length) {
    const strCur = str.slice(0, index + 1);
    for (let i = 0; i < strs.length; i++) {
      if (!strs[i] || !strs[i].startsWith(strCur)) {
        return str.slice(0, index);
      }
    }
    index++;
  }
  return str;
}
```

### 如何找到数组中第一个没出现的最小正整数，怎么优化

```
给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。

示例 1：
输入：nums = [1,2,0]
输出：3

示例 2：
输入：nums = [3,4,-1,1]
输出：2

示例 3：
输入：nums = [7,8,9,11,12]
输出：1
```

这是一道字节的算法题 目的在于不断地去优化算法思路

- 第一版 O(n^2) 的方法

```js
const firstMissingPositive = (nums) => {
  let i = 0;
  let res = 1;
  while (i < nums.length) {
    if (nums[i] == res) {
      res++;
      i = 0;
    } else {
      i++;
    }
  }
  return res;
};
```

- 第二版 时间空间均为 O(n)

```js
const firstMissingPositive = (nums) => {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }
  for (let i = 1; i <= nums.length + 1; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
};
```

- 最终版 时间复杂度为 O(n) 并且只使用常数级别空间

```js
const firstMissingPositive = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    while (
      nums[i] >= 1 &&
      nums[i] <= nums.length && // 对1~nums.length范围内的元素进行安排
      nums[nums[i] - 1] !== nums[i] // 已经出现在理想位置的，就不用交换
    ) {
      // arr[i] 交换到 arr[arr[i]-1]，如果 arr[i] = 6 arr[5] = 6
      const temp = nums[nums[i] - 1]; // 交换
      nums[nus[i] - 1] = nums[i];
      nums[i] = temp;
    }
  }
  // 现在期待的是 [1,2,3,...]，如果遍历到不是放着该放的元素
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) {
      return i + 1;
    }
  }
  return nums.length + 1; // 发现元素 1~nums.length 占满了数组，一个没缺
}
```

## 中等难度

### 实现一个发布订阅模式

```js
class EventEmitter {
  constructor() {
    this.events = {};
  }
  // 实现订阅
  on(type, callBack) {
    if (!this.events[type]) {
      this.events[type] = [callBack];
    } else {
      this.events[type].push(callBack);
    }
  }
  // 删除订阅
  off(type, callBack) {
    if (!this.events[type]) return;
    this.events[type] = this.events[type].filter((item) => {
      return item !== callBack;
    });
  }
  // 只执行一次订阅事件
  once(type, callBack) {
    function fn() {
      callBack();
      this.off(type, fn);
    }
    this.on(type, fn);
  }
  // 触发事件
  emit(type, ...rest) {
    this.events[type] &&
      this.events[type].forEach((fn) => fn.apply(this, rest));
  }
}
// 使用如下
// const event = new EventEmitter();

// const handle = (...rest) => {
//   console.log(rest);
// };

// event.on("click", handle);

// event.emit("click", 1, 2, 3, 4);

// event.off("click", handle);

// event.emit("click", 1, 2);

// event.once("dbClick", () => {
//   console.log(123456);
// });
// event.emit("dbClick");
// event.emit("dbClick");
```

### 实现一个 Scheduler 类，完成对Promise的并发处理，最多同时执行2个任务

```js
class Scheduler {
  constructor() {
    this.tasks = [], // 待运行的任务
      this.usingTask = [] // 正在运行的任务
  }
  // promiseCreator 是一个异步函数，return Promise
  add(promiseCreator) {
    return new Promise((resolve, reject) => {
      promiseCreator.resolve = resolve
      if (this.usingTask.length < 2) {
        this.usingRun(promiseCreator)
      } else {
        this.tasks.push(promiseCreator)
      }
    })
  }
  usingRun(promiseCreator) {
    this.usingTask.push(promiseCreator)
    promiseCreator().then(() => {
      promiseCreator.resolve()
      this.usingMove(promiseCreator)
      if (this.tasks.length > 0) {
        this.usingRun(this.tasks.shift())
      }
    })
  }
  usingMove(promiseCreator) {
    let index = this.usingTask.findIndex(promiseCreator)
    this.usingTask.splice(index, 1)
  }
}
const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time)
})
const scheduler = new Scheduler()
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order))
}
addTask(400, 4) 
addTask(200, 2) 
addTask(300, 3) 
```

### 写-判断括号字符串是否有效

题目描述

```js
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
有效字符串需满足：
    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。
    
示例 1：
输入：s = "()"
输出：true

示例 2：
输入：s = "()[]{}"
输出：true

示例 3：
输入：s = "(]"
输出：false
```

答案

```js
const isValid = function (s) {
  if (s.length % 2 === 1) {
    return false;
  }
  const regObj = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "(" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      const cur = stack.pop();
      if (s[i] !== regObj[cur]) {
        return false;
      }
    }
  }
  if (stack.length) {
    return false;
  }
  return true;
};
```



### 实现一个对象的 flatten 方法

题目描述

```js
const obj = {
  a: {
    b: 1,
    c: 2,
    d: {e: 5}
  },
  b: [1, 3, {a: 2, b: 3}],
  c: 3
}

flatten(obj) 结果返回如下
// {
//  'a.b': 1,
//  'a.c': 2,
//  'a.d.e': 5,
//  'b[0]': 1,
//  'b[1]': 3,
//  'b[2].a': 2,
//  'b[2].b': 3
//   c: 3
// }
```

答案

```js
function isObject(val) {
  return typeof val === "object" && val !== null;
}
function flatten(obj) {
  if (!isObject(obj)) {
    return;
  }
  let res = {};
  const dfs = (cur, prefix) => {
    if (isObject(cur)) {
      if (Array.isArray(cur)) {
        cur.forEach((item, index) => {
          dfs(item, `${prefix}[${index}]`);
        });
      } else {
        for (let k in cur) {
          dfs(cur[k], `${prefix}${prefix ? "." : ""}${k}`);
        }
      }
    } else {
      res[prefix] = cur;
    }
  };
  dfs(obj, "");
  return res;
}
flatten();
```



### 闭包的作用

闭包可以用于在对象中创建私有变量

```js
var aaa = (function () {
  var a = 1;
  function bbb() {
    a++;
    console.log(a);
  }
  function ccc() {
    a++;
    console.log(a);
  }
  return {
    b: bbb, //json结构
    c: ccc,
  };
})();
console.log(aaa.a); //undefined
aaa.b(); //2
aaa.c(); //3
```

### 防抖节流

防抖和节流也算是闭包的应用场景

```js
// 防抖
function debounce(fn, delay = 300) {
  //默认300毫秒
  let timer;
  return function () {
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args); // 改变this指向为调用debounce所指的对象
    }, delay);
  };
}

window.addEventListener(
  "scroll",
  debounce(() => {
    console.log(111);
  }, 1000)
);

// 节流
// 设置一个标志
function throttle(fn, delay) {
  let flag = true;
  return () => {
    if (!flag) return;
    flag = false;
    timer = setTimeout(() => {
      fn();
      flag = true;
    }, delay);
  };
}

window.addEventListener(
  "scroll",
  throttle(() => {
    console.log(111);
  }, 1000)
)
```

### 原型链判断

请写出下面的答案

```js
Object.prototype.__proto__;
Function.prototype.__proto__;
Object.__proto__;
Object instanceof Function;
Function instanceof Object;
Function.prototype === Function.__proto__;
// 答案
Object.prototype.__proto__; //null
Function.prototype.__proto__; //Object.prototype
Object.__proto__; //Function.prototype
Object instanceof Function; //true
Function instanceof Object; //true
Function.prototype === Function.__proto__; //true
```

这道题目深入考察了原型链相关知识点 尤其是 Function 和 Object 的之间的关系

强烈推荐大家看看这篇文章 看完就清楚了 [JavaScript 原型系列（三）Function、Object、null 等等的关系和鸡蛋问题](https://juejin.cn/post/6844903937418461198)

### 获取字符串中最长的不重复子串

题目描述

```js
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
示例 1:
输入: s = "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:
输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:
输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
示例 4:
输入: s = ""
输出: 0
```

答案

```js
const lengthOfLongestSubstring = function (s) {
  if (s.length === 0) {
    return 0;
  }
  let left = 0;
  let right = 1;
  let max = 0;
  while (right <= s.length) {
    let lr = s.slice(left, right);
    const index = lr.indexOf(s[right]);
    if (index > -1) {
      left = index + left + 1;
    } else {
      lr = s.slice(left, right + 1);
      max = Math.max(max, lr.length);
    }
    right++;
  }
  return max;
}
```

我给的答案

```js
// 字符串中最长不重复字符
function maxLength (str) {
  if (str.length == 0) {
    return 0
  }
  let left = 0
  let right = 1
  let max = 0
  while (right < str.length) {
    let currentStr = str.slice(left, right)
    if (currentStr.includes(str[right])) {
      left++
      if (right - left <= 0) {
        right++
      }
    } else {
      right++
    }
    max = Math.max(max, currentStr.length)
  }
  return max
}
const res = maxLength('abcdeffeeduxfnaomx')
console.log(res);
```

### 生成一个长度为 n 的不重复随机数组

怎么在指定数据源里面生成一个长度为 n 的不重复随机数组 能有几种方法 时间复杂度多少

- 第二版 标记法 / 自定义属性法 时间复杂度为 O(n) 

```js
function getTenNum(testArray, n) {
  let hash = {};
  let result = [];
  let ranNum = n;
  while (ranNum > 0) {
    const ran = Math.floor(Math.random() * testArray.length);
    if (!hash[ran]) {
      hash[ran] = true;
      result.push(ran);
      ranNum--;
    }
  }
  return result;
}
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const resArr = getTenNum(testArray, 10)
```

- 第三版 交换法 时间复杂度为 O(n)

```js
function getTenNum(testArray, n) {
  const cloneArr = [...testArray];
  let result = [];
  for (let i = 0; i < n; i++) {
    const ran = Math.floor(Math.random() * (cloneArr.length - i));
    result.push(cloneArr[ran]);
    cloneArr[ran] = cloneArr[cloneArr.length - i - 1];
  }
  return result;
}
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const resArr = getTenNum(testArray, 14)
```

> 值得一提的是操作数组的时候使用交换法 这种思路在算法里面很常见

- 最终版 边遍历边删除 时间复杂度为 O(n)

```js
function getTenNum(testArray, n) {
  const cloneArr = [...testArray];
  let result = [];
  for (let i = 0; i < n; ++i) {
    const random = Math.floor(Math.random() * cloneArr.length);
    const cur = cloneArr[random];
    result.push(cur);
    cloneArr.splice(random, 1);
  }
  return result;
}
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const resArr = getTenNum(testArray, 14)
```

### 实现对象的深拷贝

```js
const obj = {
  staff:['六','久']
}
function deepClone(content){
  if(typeof content!=='obj'){
    return content
  }
  let result = {}
  if(Array.isArray(content)){
    result = []
  }
  Object.keys(content).forEach(item=>{
      console.log('深克隆/')
    if(typeof content[item] ==='object'&&content!==null){
      console.log('深克隆/')
      result[item] = deepClone(item)
    }else{
      result[item] = content[item]
    }
  })
  return result
}
const child = deepClone(obj)
```

### 手写 promise.all 和 race

```js
//静态方法
static all(promiseArr) {
  let result = [];
  //声明一个计数器 每一个promise返回就加一
  let count = 0;
  return new Mypromise((resolve, reject) => {
    for (let i = 0; i < promiseArr.length; i++) {
      //这里用 Promise.resolve包装一下 防止不是Promise类型传进来
      Promise.resolve(promiseArr[i]).then(
        (res) => {
          //这里不能直接push数组  因为要控制顺序一一对应(感谢评论区指正)
          result[i] = res;
          count++;
          //只有全部的promise执行成功之后才resolve出去
          if (count === promiseArr.length) {
            resolve(result);
          }
        },
        (err) => {
          reject(err);
        }
      );
    }
  });
}
//静态方法
static race(promiseArr) {
  return new Mypromise((resolve, reject) => {
    for (let i = 0; i < promiseArr.length; i++) {
      Promise.resolve(promiseArr[i]).then(
        (res) => {
          //promise数组只要有任何一个promise 状态变更  就可以返回
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    }
  });
}
```



### apply call bind 区别

- 三者都可以改变函数的 this 对象指向。
- 三者第一个参数都是 this 要指向的对象，如果如果没有这个参数或参数为 undefined 或 null，则默认指向全局 window。
- 三者都可以传参，但是 **apply 是数组**，而 **call 是参数列表**，且 apply 和 call 是一次性传入参数，而 **bind 可以分为多次传入**。
- bind 是返回**绑定 this 之后的函数**，便于稍后调用；apply 、call 则是**立即执行** 。
- bind()会返回一个新的函数，如果这个返回的新的函数作为**构造函数**创建一个新的对象，那么此时 this **不再指向**传入给 bind 的第一个参数，而是指向用 new 创建的实例

```js
function add(a,b){
  console.log(this) // '10+20'
  console.log(a) // 10
  console.log(b) // 33
  return a+b
}
const reAdd = add.bind('10+20',10).bind(22,33)
const result = reAdd()
result // 43
```

> 注意！很多同学可能会忽略 bind 绑定的函数作为构造函数进行 new 实例化的情况
>
> 如果这个返回的新的函数作为构造函数创建一个新的对象，那么此时 this 不再指向传入给 bind 的第一个参数，而是指向用 new 创建的实例



### 三数之和

题目描述

给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

实际上就是找所有 C<sub>n</sub><sup>3</sup> 的组合，然后求和，注意：不能重复，要为数组去重

注意：答案中不可以包含重复的三元组。

```js
//例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
//满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

这题我们才用排序 + 双指针的思路来做，遍历排序后的数组，定义指针 l 和 r，分别从当前遍历元素的下一个元素和数组的最后一个元素往中间靠拢，计算结果跟目标对比。

```js
var threeSum = function(nums) {
  if(nums.length < 3){
    return [];
  }
  let res = [];
  // 排序
  nums.sort((a, b) => a - b);
  for(let i = 0; i < nums.length; i++){
    if(i > 0 && nums[i] == nums[i-1]){
      // 去重
      continue;
    }
    if(nums[i] > 0){
      // 若当前元素大于0，则三元素相加之后必定大于0
      break;
    }
    // l为左下标，r为右下标
    let l = i + 1; r = nums.length - 1;
    while(l<r){
      let sum = nums[i] + nums[l] + nums[r];
      if(sum == 0){
        res.push([nums[i], nums[l], nums[r]]);
        while(l < r && nums[l] == nums[l+1]){
          l++
        }
        while(l < r && nums[r] == nums[r-1]){
          r--;
        }
        l++;
        r--;
      }
      else if(sum < 0){
        l++;
      }
      else if(sum > 0){
        r--;
      }
    }
  }
  return res;
};
```

## 读代码

### 异步代码执行

```js
// 今日头条面试题
async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2')
}
console.log('script start')
setTimeout(function () {
  console.log('settimeout')
})
async1()
new Promise(function (resolve) {
  console.log('promise1')
  resolve()
}).then(function () {
  console.log('promise2')
})
console.log('script end')
```

```
script start
async1 start
async2
promise1
script end
async1 end
promise2
settimeout
```

### 代码解释

**题目一**

```js
var min = Math.min();
max = Math.max();
console.log(min < max);
// 写出执行结果，并解释原因
```

```
Math.min 的参数是 0 个或者多个，如果多个参数很容易理解，返回参数中最小的。如果没有参数，则返回 Infinity，无穷大。
而 Math.max 没有传递参数时返回的是-Infinity.所以输出 false
```

**题目二**

```js
var company = {
    address: 'beijing'
}
var yideng = Object.create(company);
delete yideng.address
console.log(yideng.address);
// 写出执行结果，并解释原因
```

```
// beijing 
这里的 yideng 通过 prototype 继承了 company的 address。yideng 自己并没有 address 属性。所以 delete 操作符的作用是无效的。 

delete 能删除的：
（1）可配置对象的属性（2）隐式声明的全局变量 （3）用户定义的属性 （4）在ECMAScript 6中，通过 const 或 let 声明指定的 "temporal dead zone" (TDZ) 对 delete 操作符也会起作用

delete 不能删除的：
（2）显式声明的全局变量 （2）内置对象的内置属性 （3）一个对象从原型继承而来的属性

delete 删除数组元素：
（1）当你删除一个数组元素时，数组的 length 属性并不会变小，数组元素变成 undefined

delete 操作符与直接释放内存（只能通过解除引用来间接释放）没有关系。
```





















