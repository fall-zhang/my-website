> Create by **fall** on ——
> Recently revised in 2022-05-31

## 发展史

1995年 javascript 诞生

ES6其实是泛指，2015年六月发布ES6第一个版本，然后规定，每年的六月发布一次正式版本，版本号以当年年份为准ES6

- `Stage 0` - `Strawperson`（展示阶段）
- `Stage 1` - `Proposal`（征求意见阶段）
- `Stage 2` - `Draft`（草案阶段）
- `Stage 3` - `Candidate`（候选人阶段）
- `Stage 4` - `Finished`（定案阶段）

## 变量的类型

- var 普通变量
  - var 声明的作用域是函数作用域，在整个函数内都有效
- let 局部变量
  - let 声明的作用域叫做块级作用域
  - 只要遇到大括号都会形成作用域，只在该大括号内可以使用改变量，并且限定的是同一个大括号。
- const 声明常量
  - 用 const 声明的变量，只能在声明的时候确定值，后续没有办法修改
  - 常量的作用域和 let 相同

> const 声明变量后被确定，后续无发被修改
>
> 作用：获取DOM对象的赋值，或者是声明一个IP地址

var 和 let 的区别

> for 循环中使用 var 变量是可以进行访问的，如果再循环中声明 let ，在循环后无法使用
>
> let 不能在变量声明之前访问该变量，var 可以访问并且不会报错，但值为 undefined
>
> let 只能被声明一次，var 可以被声明多次

## 数据类型


- **Data Types**（六个数据类型） ：undefined、Boolean、Number、String、BigInt、Symbol
- **Structural Types** （两个构造类型）：Object、Function、
- **Structural Root** （一个原始数据类型）：null


## 字符串的存储

**字符串拼接**

```js
var a = '这是一个字符串'
var b = 'this is a string'
console.log(a + b)
```

**字符串特性**

```js
// 跨行声明字符串，需添加'\'进行转译
var str1 = 'hellow \
mybro';
// ES6 中添加新的符号，无需添加转译就可直接换行
var str2 = `hellow 
mybro`;
// 新的的字符串拼接方法，以及函数中传入对象
function file({name,age,gender}){
    console.log(`我叫${name}，今年${age}岁，性别${gender}`);
};
file({
    name:'小明',
    gender:'男',
    age:22,
});
// 循环 emoji
let str = '😀🤣😜😍🤗🤔'
    for (const emoji of str) {
      console.log(emoji) // 😀🤣😜😍🤗🤔
    }
    for (let i = 0, l = str.length; i < l; i++) {
      console.log(str[i])  // 不能正确输出表情
    }
```

## 对象和类

### 面向过程和面向对象

**面向过程**：只考虑数学逻辑

**面向对象**：将生活逻辑映射到程序中

-  分析有哪些实体
-  分析设计各个实体的功能
-  实体间的相互作用

### 创建新的对象

```javascript
// 三种不同的声明方式
var obj1 = new Object();
var obj2 = Object();
var obj3 = {
  username : "iron-man"
  show:function
}
// 添加属性和方法
obg3.username = "white house"
obj3.show = function(){}
// 不同的输出方式
alert(obg3.username)
alert(obg3[username])
// 删除方法
delete obg3.username 
```

### 创建类

```js
// 类，是 ES6 中新添加的
class Hero{
  heroName
  level
  constructor(heroName,level){ // 可以通过设置默认值(heroName="未知",level="未知")
    this.heroName = heroName
    this.level = level
  }
  callMyName(){
    console.log(`作为一个英雄，我的名字是${this.heroName},我是${this.level}等级`)
  }
}
const bicycle = new Hero('单车骑士',"二级甲等")
bicycle.callMyName() 
```

**什么是类，什么是对象？**

- **类**：对象特征的集合
- **对象**：具体的某一个事物

**对象的拷贝，什么是深拷贝，什么是浅拷贝？**

浅拷贝，拷贝对象的地址，修改对象，会一同修改。

深拷贝，拷贝完整的数据，修改对象，只有当前对象会修改。

## Number

### 不同进制数据

二进制：前缀为 `0b`。

八进制：前面添加 `0` 或者是 `0o` （尽量不单独使用 `0` ，会在 `strict` 模式报错）

十六进制：前面添加 `0x` 即可

```js
// 声明一个二进制的数据
var binary = 0b100 
// 声明一个八进制的数据
var octal = 0o10
// 十六进制
var hex = 0x10
```

## 数组

> 这里只有大概的知识点，剩余的在独立章节：`-- 扩展存储对象`，中介绍。

数组的基本使用

```js
var arr = [11,54,'啥都没输入']
```

### 常用方法

| 方法              | 作用                                                 |
| ----------------- | ---------------------------------------------------- |
| `array.length`    | 数组的长度                                           |
| `array.concat()`  | 返回连接后的数组                                     |
| `array.join()`    | 用 join 可以在数组后面插入数据，生成一串字符串后返回 |
| `array.indexOf()` | 对元素进行查找，并且返回下标                         |
| `array.slice()`   | 返回数组的一部分                                     |
| `array.sort()`    | 根据字符排序                                         |
| `array.pop()`     | 删除并且返回数组最后一个元素                         |
| `array.push()`    | 从后面给数组添加元素                                 |
| `array.shift()`   | 删除并且返回数组第一个元素                           |
| `array.unshift()` | 在头部插入一个元素                                   |

### 遍历方法

**forEach 循环**

```js
var arr = [11,22,33,44,55];
arr.forEach(function(item){ // 相当于 for(let i = 0;i<arr.length,a++)
  console.log(item)
})
```

**filter 过滤**

```js
var arr = [11,22,33,44,55];
var newarr = arr.filter(function(item){
  return item>20
})
var newarr = arr.filter(item=>item>20)
```

## 集合

### set集合

set 集合的特点

> - 键值对相同
>- `.add` 可以进行添加
> - 所有值不重复

```js
let imgs = new Set()
imgs.add(100)
imgs.add('hello')
imgs.add('hello')
imgs.add(true)
imgs.add(new String('world'))
```

> `WeakSet`  同 Set，意思就是 `WeakSet` 中的东西垃圾回收时不考虑，使用它不用担心内存泄漏问题。

### map集合

> Map集合的特点
>
> - map集合传值必须使用键值对进行添加

```js
let map = new Map();
map.set('张三',"吃饭的");
map.set("六六","喝水的");
map.set("六六","吃药了");
console.log(map);
// Map对象取值
alert(map.get('六六'));
```

> `WeakMap`  同 Set，意思就是 `WeakMap` 中的东西垃圾回收时不考虑，使用它不用担心内存泄漏问题

## 数组、对象、集合的遍历

### 数组的遍历

```js
var arr = [10,22,33,44,55,66];
//1. for 循环
for(var i = 0;i<arr.length;i++){
  document.write('for循环'+i+','+arr[i])
}
//2. for in 此时 i 指的是 index
for(var i in arr){
  document.write('for in 循环'+ i+','+ arr[i])
}
//3. forEach
arr.forEach((item,index,arr)=>{
  document.write('forEach'+index+','+item)
})
// 4. for...of
for(item of arr){
  document.write("for...of"+item +"<br>")
}
```

### 对象的遍历

使用 for...of 遍历对象会报错

```js
// for in
var person = {
	username :'iron man',
	age:28,
  gender:"male"
}
for(var attr in person){
    document.write("对象的遍历:"+attr+'分隔'+person[attr]+"<br>")
}
```

### 集合的遍历

map 集合的遍历

集合使用 for...in 不会出任何结果

```js
var map = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
// 对map进行循环
for (let item of map) {
    console.log(item[0],item[1])
}
// 将item解构
for(let [key,value] of map){
    console.log(key,value)
}
```

set 的遍历

```js
var mySet = new Set(['闪电','flash','too'])
console.log(mySet)
mySet.forEach(item => {
    console.log(item)
})
mySet.forEach(function(item){
    console.log(item)
})
// 以键值对的方式进行循环
for (let item of mySet.entries()) {
    console.log(item)
} 
// 以键的方式进行循环
for (let item of mySet.keys()) {
    console.log(item)
}
```

## 严格模式

严格模式是啥子？就是更加严格的模式！

use strict 是一种运行时自动执行更严格的 JavaScript 代码解析和错误处理的方法。如果代码错误被忽略或失败，将会产生错误或抛出异常。

非严格模式下

```js
a = 100
console.log(a) // 100
```

严格模式下

```js
"use strict"
a = 100
console.log(a) // 我直接给你报错！Error!
```

> ES6 的模块自动采用严格模式，不管你有没有在模块头部加上 "use strict"

**严格模式主要有以下限制：**

- 变量必须声明后再使用
- 函数的参数不能有同名属性，否则报错
- 不能使用 with 语句
- 不能对只读属性赋值，否则报错
- 不能使用前缀 0 表示八进制数，否则报错
- 不能删除不可删除的属性，否则报错
- 不能删除变量delete prop ，会报错，只能删除属性 selete global[prop]
- eval 不会在它的外层作用域引入变量
- eval和arguments不能被重新赋值
- arguments不会自动反映函数参数的变化
- 不能使用arguments.callee
- 不能使用arguments.caller
- 禁止this指向全局对象，此 this 指向 undefined，能避免在顶层使用 this，和顶层使用 this 报错。
- 不能使用fn.caller和fn.arguments获取函数调用的堆栈
- 增加了保留字（比如protected、static和interface）

严格模式是ES5引入的，上面这些限制，模块都必须遵守。

严格模式的好处啥的：

- 使调试跟更容易。如果代码错误本来会被忽略或失败，那么现在将会产生错误或抛出异常，从而更快地发现代码中的问题，并更快地指引它们的源代码。

- 防止意外全局。如果没有严格模式，将指赋值给未声明的变量会自动创建一个具有该名称的全局变量。这是JavaScript中最常见的错误之一。在严格模式下，会直接报错。

- 消除隐藏威胁。在没有严格模式的情况下，对null或undefined的这个值得引用会自动强制到全局。这可能会导致需要headfakes和pull-out-your-hair类型的错误。在严格模式下，因公用null或undefined的这个值会引发错误。

- 不允许重复的参数值。严格模式在检测到函数的重复命名参数（例如，函数foo（var1，var2，var1）{}）时会引发错误，从而捕获代码中几乎可以肯定存在的错误，否则会浪费大量的时间追踪命名上的问题。

  > 注意：它曾经是（ECMAScript 5 中）strict模式将禁止重复的属性名称（例如var object = {foo：“bar”，foo：“baz”}；）但是从ECMAScript 2015 开始，就不再有这种情况了。 

- 使 `eval()` 更安全。eval（）在严格模式和非严格模式下的行为方式有些不同。最重要的是，在严格模式下，在eval（）语句内部声明的变量和函数不会再包含范围中创建（它们是以非严格模式在包含范围中创建的，这也可能是问的常见来源）。

- 抛出无效的使用错误的删除符。删除操作符（用于从对象中删除属性）不能用于对象的不可配置属性，当试图删除一个不可配置的属性时，非严格代码将自动失败，而在这种情况下，严格模式会引发错误

## 参考文章：

| 文章标题                  | 地址                                                       |
| ------------------------- | ---------------------------------------------------------- |
| "use strict" 的意义和好处 | https://blog.csdn.net/qq_36379070/article/details/82586892 |

