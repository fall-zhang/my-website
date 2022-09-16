---
sidebar_position: 20
---

> Create by **fall** on 2020-09-23
> Recently revised in 2022-02-18

## 异步管理 Promise

### Promise的介绍

先承诺好解决方案，如果正确，采用正确的解决方案，如果错误，采用错误的解决方案

- 如果返回值为 promise 实例对象，会调用下一个 then 进行处理
- 如果是一个普通的返回值，会通过then接收普通测传入的值

Promise 是用来管理异步编程的，**它本身不是异步的**，Promise用于防止陷入回调地狱。

> 了解Promise的工作方式是了解 `async` & `await` 的基础，因为这些异步函数在底层使用了 `promise`
>
> 当 promise 被调用后，它会以处理中状态开始，此时调用的函数会继续执行，而 promise 仍在处理中直到解决为止，从而为调用的函数提供所请求的任何数据。被创建的 promise 最终会以**被解决状态或被拒绝状态**结束，并在完成时调用相应的回调函数（传给 `then` 和 `catch`）。

那些JS API 使用了 promise?

- Battery API
- Fetch API
- Service Worker

### Promise 的使用

```js
var p = new Promise(function(resolve, reject) {
  if (/* 条件 */) { // 符合条件，执行成功的函数resolve
    resolve(/* value */);  
  } else {
    // 不满足条件，执行reject
    reject(/* reason */);  
  }
});
// 方法一：p.then()内传入两个方法，
// 第一个方法执行成功后执行 resolve 中的函数
// 第二个方法执行方法的传入值为 reject 的参数 
p.then((result)=>{
  /* 成功后的执行内容 */
},(reason)=>{
  /* 失败后的执行内容 */
})
// 方法二：成功的内容通过.then()获取。失败的内容也可以通过 .catch() 进行捕获
p.catch((err)=>{throw new Error('错误')})
.catch(err)=>{console.log(err)}
// 如果捕获错误中出现错误，可以添加第二个catch来补获
```

> 在 promise 中的错误会像冒泡一样，如果出现一个错误，那么接下来的也都会错误。但可以利用这一特性——在最后调用的接口上实现对于错误的处理，实现简化错误操作。
>
> 注：实现该特性需要两点注意，第一点每次调用 then 都要返回一个新的 Promise ；不管第一个参数的返回值是什么

> 是否执行 `resolve` , `reject` 都是取决于是否执行 `resolve()` & `reject()` 或者是函数本身出现异常

**当执行的函数出现错误时**

```js
new Promise(resolve=>{
  resolve(a)
  // 由于 a 没有定义，所以执行错误返回
}).then(result=>{
  console.log("成功"+result)
},reason=>{
  console.log("失败"+reason)
}).then(result=>{
  console.log("success"+result)
},reason=>{
  console.log('failure')
})
// 该函数第一次执行失败，调用失败的函数，输出原因
// 第二次由于没有返回值，以成功执行计算
// 个人理解，第一个 then 判断的是 Promise 对象执行成功与否，第二个 then 用来判断第一个 then 执行的成功与否
```

> Promise 能解决回调地狱的问题，但是由于充满了 then 方法，使得可读性不强，所以使用 `async & await` 作为语法糖，很多人认为 `async & await` 就是回调地狱的最终解决方案。

### Promise 的嵌套调用

```js
const pr = new Promise((resolve) => {
  setTimeout(() => {
    console.log(999)
  }, 1000)
  resolve('666')
})
pr.then((result) => {
  console.log("1111"+result)
  return Promise.resolve("bbbb")
  /* 
  Promise.resolve("bbbb")等价于 
	new Promise(resolve=>{
		resolve("bbbb")
	})
*/
})
  .then((result) => {
    console.log('吃人的东西'+result)
  })
  .catch((err) => {
    console.log('出错了，玛德' + err)
  })
```

### 静态方法

`Promise.resolve()` & `Promise.reject()`

- `Promise.resolve()` 返回一个给定值解析后的 Promise 对象
- `Promise.reject()` 返回一个带拒绝原因的 Promise 对象

```js
Promise.resolve('object')
// 等价于 new Promise(resolve => resolve("object")) 新建了一个执行成功，并且返回 object 的 Promise 对象
Promise.reject('do not handle this')
```

> 注：调用 `reject` 和 `resolve` 之后 Promise 的使命就完成了，因此，操作不应该放在 `Promise` 对象中，而应该放置在 `then` 中执行。

`Promise.all()`

> 当返回的数组中所有的 Promise 对象的返回值都为 resolve 时，才会执行相应的 Promise，有一个出错，其他的 Promise 也无法执行

```js
let p1 = Promise.resolve(1)
let p2 = Promise.resolve(2)
Promise.all([ p2, p1])
  .then(result => {
 // 返回的结果是按照 Array 中编写实例的顺序来
    console.log(result) // [ 2, 1 ]
  })
  .catch(reason => {
    console.log("失败:reason")
  })
```

`Promise.allSettled()`

> ES2020 引入的 `allSettled` 方法用于确保所有操作都结束
>
> 假设一个页面有三个区域，分别对应三个独立的接口数据，使用 `Promise.all`  来并发请求三个接口，如果其中任意一个接口出现异常，状态是 reject ，这会导致页面中该三个区域数据全都无法出来，`Promise.allSettled` 的出现就可以解决这个问题。

```js
let p1 = Promise.resolve(1)
let p2 = Promise.resolve(2)
Promise.allS([ p2, p1])
  .then(result => {
 // 返回的结果是按照 Array 中编写实例的顺序来
    console.log(result) // [ 2, 1 ]
  })
  .catch(reason => {
    console.log("失败:reason")
  })
```



`Promise.race()`

> `Promise.race`只要有一个 promise 对象进入 `FulFilled ` 或者 `Rejected` 状态的话，就会继续进行后面的处理。

```js
function timerPromisefy(delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(delay);
    }, delay);
  });
}
// 任何一个 promise 率先变为 resolve 或 reject 的话程序就停止运行
Promise.race([
  timerPromisefy(1),
  timerPromisefy(32),
  timerPromisefy(64)
]).then(function (value) {
  console.log(value);    // => 1
});
```

`Promise.finally()`

> 无论执行成功或者失败与否，都会在最后执行这个 finally 中的函数

```js
this.loading = true
request()
  .then((res) => {
    // do something
  })
  .catch((err) => {
    // output err
  })
  .finally(() => {
    this.loading = false // 无论成功与否，都想把 loading 转换为 false
  })
```

## 现代异步async & await

> 两个关于 JS 转译比较基础的概念：
>
> - 转译器（transpilers）：对语法的转换，如控制合并符 `??`，babel 是最著名的转译器。
> - 垫片（polyfills）：更新 / 添加新函数的脚本被称为“polyfill”，core js 支持了很多特性。

### async 的特点

- 语法简洁，更像是同步代码，也更符合普通的阅读习惯
- 改进JS中异步操作串行执行的代码组织方式，减少 callback 的嵌套
- Promise 中不能自定义使用 `try/catch` 进行错误捕获，但是在 `async/await` 中可以像处理同步代码处理错误。

await 意思是，等待 await 里面的函数全部执行完成，再接着执行该 async 函数。并且在接着执行该函数之前，先执行其他函数。

`async/await` 的实现是基于 Promise的，`async` 关键字意味着该函数会返回 `promise`，是 generator 的语法糖。

> **注意**：await 将异步代码改造成了同步代码，这会导致多个异步代码中，如果没有依赖性却使用了 await 进行等待，会导致性能上的降低。

### async 的作用

`async` 是 [AsyncFunction 特性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction) 中的关键字。

将 `async` 放在函数声明前面可以声明 `async` 函数

```js
// async 怎么用？
async function getSomething() {
  return "something";
}
// 或者使用箭头函数进行声明
let getSomething = async()=>{
  return "something"
}
// 无论是函数式声明还是箭头函数，都会返回Promise对象
getSomething() // Promise { <state>: "fulfilled", <value>: "something" }
```

### async 的实例

```js
const fun1 = async ()=>{
  return '测试'
}
fun1().then(alert)
// fun1 等价于 fun2
const fun2 = ()=>{
  return Promise.resolve('测试')
}
```

只有 await 右边返回为 resolve 才会继续执行，否则直接中断

```js
let p1 = Promise.reject(100)
async function fn1() {
  let result = await p1
  console.log(1) // 这行代码不会执行
}
```

**async 函数的执行顺序**

```js
let p1 = Promise.resolve(1)
let p2 = new Promise(resolve=>{
  setTimeout(()=>{
    resolve(2)
  },2000)
})
async function fun(){
  console.log(1)
  let resu2 = await p1 // 等待返回 resolve ,返回 resolve 后继续执行
  console.log(3)
  let resu1 = await p2
  console.log(4)
}
fun()
console.log(2)
```

> 任务队列（宏任务）
>
> 基于微任务的技术有 `MutationObserver`、`Promise` 以及以 `Promise` 为基础开发出来的很多其他的技术。
>
> 不管宏任务是否到达时间，以及放置的先后顺序，每次**主线程执行栈为空的时候**，引擎会优先处理微任务队列，**处理完微任务队列里的所有任务**，再去处理宏任务。

根据 HTML5 的标准，`setTimeout()`最少为 4 ms

## 内容参考

| 作者 | 文章链接                                    |
| ---- | ------------------------------------------- |
| 边城 | https://segmentfault.com/a/1190000007535316 |
|      |                                             |
|      |                                             |
|      |                                             |

