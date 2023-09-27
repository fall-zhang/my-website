> Create by **fall** on 2021-10-18
> Recently revised in 2022-03-20

### 闭包的应用场景

比如常见的防抖节流

```js
// 防抖
function debounce(fn, delay = 300) {
  let timer; // 闭包引用的外界变量
  return function () {
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }
}
```

使用闭包可以在 JavaScript 中模拟块级作用域

```js
// babel 中也用这个模拟块级作用域
function outputNumbers(count) {
  (function () {
    for (var i = 0; i < count; i++) {
      alert(i);
    }
  })();
  alert(i); //导致一个错误！
}
```

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

### 手写-setTimeout 模拟实现 setInterval（阿里）

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

### 手写-发布订阅模式（字节）

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

### 写-判断括号字符串是否有效（小米）

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
复制代码
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
复制代码
```

### 手写-查找数组公共前缀（美团）

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
复制代码
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

### 手写-如何找到数组中第一个没出现的最小正整数 怎么优化（字节）

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

## 已学习

### 手写-实现一个对象的 flatten 方法（阿里）

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



### undefined 和 null 的区别是什么？

- undefined 是此处应该有一个值，但是没定义。
- null 是不应该有值

```js
var a;
i // undefined
function b(x){console.log(x)}
b() // undefined
var  c = new Object();
c.p // undefined
var d = f();
d // undefined
```

判断一个值是否存在的话，使用的是 a === undefined 而不是，a==null，后者只能判断是否为 null

### 手写-防抖节流（京东）

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

### 手写-字符串最长的不重复子串

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
// 字符串中 最长不重复字符
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

### 手写-怎么在指定数据源里面生成一个长度为 n 的不重复随机数组 能有几种方法 时间复杂度多少（字节）

- 第一版 时间复杂度为 O(n^2)

```js
function getTenNum(testArray, n) {
  let result = [];
  for (let i = 0; i < n; ++i) {
    const random = Math.floor(Math.random() * testArray.length);
    const cur = testArray[random];
    if (result.includes(cur)) {
      i--;
      break;
    }
    result.push(cur);
  }
  return result;
}
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const resArr = getTenNum(testArray, 10)
```

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
    debugger;
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

### 手写 promise.all 和 race（京东）

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

### 什么是事件代理（事件委托） 有什么好处

事件委托的原理：不给每个子节点单独设置事件监听器，而是设置在其父节点上，然后利用冒泡原理设置每个子节点，即`event.target`。

**优点：**

- **减少内存消耗和对 DOM 操作，提高性能**。因为需要不断的操作 DOM，持续操作 DOM 会引起浏览器重绘和回流的可能也就越多，页面交互的事件也就变的越长。在 JavaScript 中，添加到页面上的事件处理程序数量将直接关系到页面的整体运行性能。每一个事件处理函数，都是一个对象，多一个事件处理函数，**内存**中就会被多占用一部分空间。如果要用事件委托，就会将所有的操作放到 js 程序里面，只对它的父级进行操作，与 DOM 的操作就只需要交互一次，这样就能大大的减少与 DOM 的交互次数，提高性能。
- 动态绑定事件 因为事件绑定在父级元素 所以新增的元素也能触发同样的事件

### addEventListener 默认是捕获还是冒泡

默认是**冒泡**

addEventListener**第三个参数**默认为 false 代表执行事件冒泡行为。

当为 true 时执行事件捕获行为。

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