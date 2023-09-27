---
sidebar_position: 2
---

> Create by **fall** on 13 Dec 2021
> Recently revised in 24 Jan 2023

## CSS 相关

**getComputedStyle**

返回一个对象，对象中有计算后得到的样式的属性，这些属性是只读的

```js
const dom = document.querySelector('.box')
dom.style.height // '100%'
// 都可以获取到内容
getComputedStyle(dom).height // '274.4px'
getComputedStyle(dom)['background-color'] // 'rgba(0, 0, 0, 0)'
getComputedStyle(dom)['backgroundColor'] // 'rgba(0, 0, 0, 0)'
getComputedStyle(dom)['background'] 
// rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box

// 甚至可以获取伪元素上面的内容
result = getComputedStyle(h3, '::after').content
```

## 窗口属性

### navigator

导航器对象，浏览器所处环境，和 cookie

```js
// 浏览器的代码名
navigator.appCodeName // "Mozilla"
// 浏览器的名称
navigator.appName // "Netscape"
// 浏览器平台和版本信息
navigator.appVersion // "5.0 (Windows)"
// 浏览器是否启用 cookie
navigator.cookieEnabled // true
// 运行浏览器的操作平台
navigator.platform // "Win32"
// user-agent 就是向服务器发送的请求头中的 user-agent
navigator.userAgent //"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:95.0) Gecko/20100101 Firefox/95.0"
```

### screen

显示器对象，用的是什么显示器，就会展示对应的信息

```js
// 显示屏幕的可用高度
screen.availHeight  // 1040
// 显示屏幕
screen.availWidth  // 1920
// 屏幕高度
screen.height // 1080
// 屏幕宽度
screen.width  // 1920
// 屏幕颜色的位数
screen.colorDepth // 32
```

### history

浏览器历史对象

```js
// history：控制浏览器当前网页的历史
// 返回前一个URL
history.back()
// 返回下一个URL
history.forward()
// 前进后退
history.go(-1) // 填入0，刷新当前页面，填入正数前进页面，填入负数后后退页面
history.length // 输出总历史记录长度
```

### Location

当前路由位置对象

```js
// 以当前路由为
// https://juejin.cn/search#heading-2?query=route&type=0

// 完整的域名
location.href // https://juejin.cn/search#heading-2?query=route&type=0
// 使用协议
location.protocol // https:
// 主机名，和当前的 URL 的端口号
location.host // juejin.cn
// 当前的网络请求路径
location.pathname // /search
// 哈希值，URL 中从 # 开始，之后的内容
location.hash // #heading-2
// 查询字符串
location.search // ?query=route&type=0

// 对象上的方法
// 重新加载文档
location.assign(URL) // 当前窗口跳转到该 url 产生新的历史记录--可以后退
// 重新加载当前界面
location.reload() // 重新载入窗口，刷新
location.reload(true) // 不经过浏览器缓存，强制从服务器重载
// 用新的文档替换当前文档
location.replace(newURL)// 在当前窗口替换成新的url		不产生新的历史记录--不可以后退
```

location.protocol包括

- file：本地磁盘访问
- http：
- https：证书认证协议

location.hostname 通过IP找到全球范围内该主机所在的网络地址

location.port(端口号(默认隐藏))

> 当前电脑中使用的网络软件，随机分配一个编号 0-65535
> hostname:port  定位到当前使用网络的程序
> 浏览器默认端口号：8080
> http:80
> https:443

location.search 由问号拼接的部分直接提交到查询字符串中,给服务器提交查询字符串

> https://www.xxx.com/?value1=5&value2=10
> alert(location.search)

location.hash  锚点，通过锚点可以实现单页面跳转

### Document

数组

```js
// 锚点对象数组
document.anchors
// 图片对象数组
document.images
// 连接对象数组
document.links
// 表单对象数组
document.forms
// 返回页面中所有嵌入对象
document.embeds
// 返回当前网页的所有样式表
document.styleSheets
// 返回文档中的所有样式
document.scripts
```

属性

```js
// 设置或者返回当前文档中有关的所有 cookie
document.cookie
// 当前文档的域名
document.domain
// 从哪个页面（URL）跳转到的当前文档
document.referrer
// 当前文档的标题
document.title
// 当前文档使用的字符集
document.characterSet 
```

方法

```js
// 打开一个新的文档，并擦除旧文档内容
document.open()
// 关闭文档输出流
document.close()
// 向当前文档追加写入文本
document.write()
```

### 相关 window

- `window.parent` 获取当前 window 的父 window
- `window.top` 获取当前 window 的最顶层 window

### 焦点控制

```js
// 得到焦点
window.focus
// 失去焦点
window.blur
```

### 窗口控制

```js
// 按照给定像素移动指定窗口
window.moveBy(X,Y) // 移动指定的位置
// 将窗口移动到指定的位置
window.moveTo(X,Y)
// 调整当前窗口的大小
window.resizeBy(X,Y) // 大于0 时扩大，小于 0 时缩小
// 改变当前窗口的大小
window.resizeTo(X,Y) // 改变成为指定的长宽
// 水平位移量，垂直位移量
window.scrollBy(X,Y) // 参照当前位置进行移动
// 窗口内容滚动到指定的位置
window.scrollTo(X,Y)
```

### 跨窗口通信

postMessage

### 打开窗口

```js
window.open(URL,'WindowName','WindowStyle')
// 或者直接 open
open("https://www.baidu.com","name1","height=400,width=400,left=400,top=400")
// 窗口风格
// height:number>100 窗口高度
// width:number>100 窗口宽度
// left:number>=0 窗口左坐标
// top:number>=0 窗口上坐标
// location:boolean 是否显示地址栏
// menubar:boolean 是否显示菜单栏
// resizable:boolean 是否可以改变窗口的大小
// scrollbars:boolean  是否允许出现滚动条
// status:boolean 是否显示状态栏
// toolbar:boolean 显示工具栏
window.close() // 关闭浏览器窗口
```

## 状态栏

```js
// 状态栏的默认显示
window.defaultStatus
// 临时改变浏览状态的显示
window.status
```

## 缓存

### localStorage

localStorage 只能存储字符串

```js
localStorage.setItem('user_name','fall')
localStorage.getItem('user_name')
localStorage.clear()
```

### sessionStorage

sessionStorage 只能存储字符串

```js
sessionStorage.setItem('user_name','fall')
sessionStorage.getItem('user_name')
sessionStorage.clear()
```

> sessionStorage 和 localStorage 区别在于
>
> - sessionStorage 中的数据，只能在当前页面进行使用，哪怕是同一个页面，也不会访问到，会随着浏览器关闭而清除
> - localSotrage 可以在多个页面中进行共享

## 数据处理

`parseInt(string[,radix])` 其中 radix 的范围是 `2-36`，即从 2 进制到 36 进制去解析前面的字符串。默认是十进制。

parseInt 的意思就是，将字符串，按照什么进制进行解析

`Number.parseInt === parseInt` 为 true

```js
// 过大或者过小都会有特性
// 如果大于等于 1e+21 或者小于等于 1e-7，使用十进制时，都会返回最开始的系数，下面的返回 4
parseInt(4.7, 10)
parseInt(4.7 * 1e22, 10)        // Very large number becomes 4
parseInt(0.00000000000434, 10)  // Very small number becomes 4
// 解析 BigInt 会丢失精确度
parseInt('900719925474099267n')
// 900719925474099300
```

`isNaN()` 用于判断是否是 `NaN`，也可以判断字符串是否是数字

```js
isNaN('12') // false
isNaN('0b12') // false
isNaN('0ad') // true
```

### 深克隆

- `structuredClone`

现代浏览器都支持该方法，用于实现深克隆

```js
const cloneA = {name:'asudua',age:{ddd:'不说'}}
const b = structuredClone(cloneA)
b.age.ddd = '爱说不说'
a.age.ddd // 不说
```

## 定时器

### setTimeout

定时器相关方法

```js
function logMessage(){
  console.log('给我一辆法拉利')
}
// 定时器
const timber= setTimeout(logMessage,2000)
if(Math.random()>0.5){
  clearTimeout(timber)
}
```

```js
let x = 0
function logMessage(){
  x++
  console.log('给我'+x+'辆法拉利')
}
const interval = setInterval(logMessage,500)
// 在合适的时间清除事件
// clearInterval(interval)
```

- 调用 setTimeout 后，会创建一个宏事件队列存放定时器任务
- 则使用值 0，意味着“立即”执行，或者更准确地说，在下一个事件循环执行。
- setTimeout 回调函数中的 this 指向全局 window。
- 因为延时值是以 32 个 bit 存储的，延时执行时间最大值是 24.8 天
- 根据 HTML5 的标准，`setTimeout()`最少为 4ms
- 如果当前任务执行时间过久，会影响下一个事件任务的执行；
- 如果 setTimeout 存在嵌套调用（5 次以上），判断该函数方法被阻塞，系统会设置最短时间间隔为 4 秒；
- 未激活的页面，setTimeout 执行最小间隔是 1000 毫秒

## 对话框

```js
// 提示
window.alert('提示内容')
// 确认
const result = window.confirm('提示内容') // 会返回 true or false
// 内容
window.prompt('提示字符串','默认内容') // 返回内容，或者是 null
```



## 控制台

### console

`console` 用于在控制台打印内容

```js
console.time('test1');
console.timeEnd('test1');
//通过以上的方法，进行时间的计算
console.log('log') // 打印日志
console.error('one Error') // 打印错误
```

打印的其它用法

```js
const obj = {nana:'fall',fun:'foo'}
// 以两个空格为缩进，输出对象
console.log(JSON.stringify(obj,null,2))
var a = "background: rgb(248, 177, 173);color: rgb(63, 172, 203)";
console.log("%c Jazz.Computer ", a)
console.log("%c 2015 ", a)
console.log("%c Yotam Mann ", a)
console.log("%c Sarah Rothberg ", a)
```



## 参考文章

| 作者（文章名称） | 连接                                                         |
| ---------------- | ------------------------------------------------------------ |
| MDN官方文档      | [Location](https://developer.mozilla.org/zh-CN/docs/Web/API/Location) |







