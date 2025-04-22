> Create by **fall** on 2020-08-15<br/>
> Recently revised in 2022-12-17

## axios

基于 Promise，用于浏览器和 node.js 的 HTTP 客户端（可以调用一个 http 的接口），能拦截请求和响应，自动转化 json 数据。

- Promise 异步处理
- 拦截请求和相应
- 支持防御 [CSRF](https://link.juejin.cn?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCross-site_request_forgery) 攻击
- 转换请求和响应数据
- 同时支持浏览器和 Node.js 环境；

```js
axios.get('/data')
//也可以使用 restful方式进行传输 axios.get('/data')
.then(res=>{
  console.log(res.data) // res.data获取后台响应的数据
})
```

### 请求

**直接请求**

```js
axios('http://localhost:2525'{
	method:"get"
}).then(res)
```

**get 方式请求数据**

```js
axios.get({
    url:"/hello",
  // params 可以自动将对象数据转换成拼接字符串进行传输
  params:{
    id:233
  }
}).then((res)=>{console.log(res.data)})
```

**post 数据的传输**

```js
// 第一种 post 数据传输方式
axios.post('/data',postData).then(function(res){
  console.log(res.data)
})
// 第二种 post 数据的传输方法
const params = new URLSearchParams()
params.append('name','lihua')// 可以通过该方法写多个数据
axios.post('/data',params).then(res=>{
  console.log(res.data)
})
```

**put 数据的传输**

```js
axios.put('/data',{
  id:10010,
  data:"请不要回应"
})
```

### 返回对象

data：返回的数据

headers：响应头信息

status：响应状态吗

statusTest：响应状态信息

```js
axios.put('/data',{
  username:'liushaoye'
}).then(data=>{
  console.log(data.status)
  console.log(data.headers)
})
```

### 全局配置

```js
axios.defaults.timeout = 5000 // 响应超时时间
axios.defaults.baseURL = 'http://localhost:3000' // 默认基准地址
axios.defaults.headers['mytoken'] = 'adacocizuzxoui322ucuzcoiu' // 设置响应头
```

### 拦截器

拦截器指在用户请求，在请求发送到服务器之前添加一些操作

一般会用于用户的认证，认证通过后，需要在每个请求上都添加认证信息。或者是在服务器状态码为 401时，自动跳转到登录界面。

**请求拦截器**

发送的请求需要经过请求拦截器才能进行发送，送往服务器。

```js
// 可以向 use 中提供两个函数作为参数，在成功时执行，或者失败时执行
axios.interceptors.request.use((config)=>{
  console.log(config.url)
  config.headers.mytoken = 'hello' // 在请求头（header）中添加了 mytoken : hello
  return config
},function(err){
  console.log(err)
})
```

**响应拦截器**

接受的响应，经过响应拦截器，进行加工处理之后才会被axios进行处理

```js
axios.interreceptors.response.use(function(res){
  // 对返回的数据进行处理，只获取相应的数据，不需要响应头内容
  const data = res.data
  return data // 必须要返回内容，给下一层 then 调用
},function(err){
  console.log('有错误信息'+err)
  // 处理响应错误信息
})
axios.get('/data').then((res)=>{
  console.log(res)// 上面返回的是就是res.data,所以取出的值为res.data
})
```

中断（取消）请求

```js
var CancelToken = axios.CancelToken
var source = CancelToken = CancelToken.source()
axios.get('user',{
  cancelToken:source.token
})
```

### 适配器

通过适配器，axios 支持浏览器和 node，我们也可以通过自定义适配器的方式

axios 是如何区分 node 还是浏览器环境的

```js
function getDefaultAdapter() {
  var adapter;
  // 通过浏览器和 node 独有的 API 确定当前环境
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = require('./adapters/xhr');
  } else if (typeof process !== 'undefined' && 
    Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = require('./adapters/http');
  }
  return adapter;
}
```

### 配置

```js

```

解决跨域问题

如果 `server` 端是自己开发的，那么修改相关代码支持跨域即可。如果不是自己开发的，那么可以自己写个后端转发该请求，用代理的方式实现。

跨域这个行为是**浏览器禁止**（浏览器不允许当前页面的所在的源去请求另一个源的数据）的，但是服务端并不禁止。

## 插件

### axios-mock-adapter

实现 mock 请求

```js
var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");
// 在默认的Axios实例上设置mock适配器
var mock = new MockAdapter(axios);
// 模拟 GET /users 请求
mock.onGet("/users").reply(200, {
  users: [{ id: 1, name: "John Smith" }],
});
// 进行请求
axios.get("/users").then(function (response) {
  console.log(response.data);
});
```

## 建议配置

- 添加 `token` 验证
- 控制某些请求的调用频率
- 添加一些全局消息提醒

```js
import axios form 'axios'
axios.defaults.timeout = 5000 // 响应超时时间
axios.defaults.baseURL = 'http://localhost:3000' // 默认基准地址
axios.interceptors.request.use((config)=>{
  // ... 其它逻辑
  config.headers.token = "input your token"
  return config // 必须返回配置
})
import config from './config'
const httpFetch = axios.create(config)
// 配置拦截请求
httpFetch.interreceptors.request.use(req=>{
  // setting
  req.headers.token = 'set your token'
})
httpFetch.interreceptors.response.use(res=>{
  if(res.data && typeof res.data == 'string'){
    res.data = JSON.parse(res.data)
  }
  // 其他操作
})
```







## 参考文章

| 作者             | 文章地址                                   |
| ---------------- | ------------------------------------------ |
| 【vue学习】axios | https://www.jianshu.com/p/d771bbc61dab     |
| 阿宝哥           | https://juejin.cn/post/6885471967714115597 |
|                  |                                            |
|                  |                                            |

```js
export const handleRequestHeader = (config) => {
  config.header['token'] = localStorage.getItem('token') || token || ''
  config['xxxx'] = 'xxx'
  return config
}
export const handleLogout = ()=>{
  message.info("用户已登出")
}
export const handleNetworkError = (errStatus) => {
  let errMessage = '未知错误'
  if (errStatus) {
    switch (errStatus) {
      case 400:
        errMessage = '错误的请求';        break
      case 401:
        errMessage = '未授权，请重新登录';        break
      case 403:
        errMessage = '拒绝访问';        break
      case 404:
        errMessage = '请求错误,未找到该资源';        break
      case 405:
        errMessage = '请求方法未允许';        break
      case 408:
        errMessage = '请求超时';        break
      case 500:
        errMessage = '服务器端出错';        break
      case 501:
        errMessage = '网络未实现';        break
      case 502:
        errMessage = '网络错误';        break
      case 503:
        errMessage = '服务不可用';        break
      case 504:
        errMessage = '网络超时';        break
      case 505:
        errMessage = 'http版本不支持该请求';        break
      default:
        errMessage = `其他连接错误 --${errStatus}`
    }
  } else {
    errMessage = `无法连接到服务器！`
  }
  message.error(errMessage)
}
export const handleAuthError = (errno) => {
  const authErrMap = {
    '10031': '登录失效，需要重新登录', // token 失效
    '10032': '您太久没登录，请重新登录~', // token 过期
    '10033': '账户未绑定角色，请联系管理员绑定角色',
    '10034': '该用户未注册，请联系管理员注册用户',
    '10035': 'code 无法获取对应第三方平台用户',
    '10036': '该账户未关联员工，请联系管理员做关联',
    '10037': '账号已无效',
    '10038': '账号未找到',
  }
  if (authErrMap.hasOwnProperty(errno)) {
    message.error(authErrMap[errno])
    // 授权错误，登出账户
    handleLogout()
    return false
  }
  return true
}
const handleGeneralError = (errno, errmsg) => {
  if (err.errno !== '0') {
    meessage.error(err.errmsg)
    return false
  }
  return true
}
```

```js
import axios from 'axios'
import { message } from 'antd'
import {
  handleChangeRequestHeader,
  handleConfigureAuth,
  handleAuthError,
  handleGeneralError,
  handleNetworkError
} from './tools'
type Fn = (data: FcResponse<any>) => unknown
axios.interceptors.request.use((config) => {
  config = handleChangeRequestHeader(config)
  config = handleConfigureAuth(config)
  return config
})
axios.interceptors.response.use(
  (response) => {
    if (response.status !== 200) return Promise.reject(response.data)
    handleAuthError(response.data.errno)
    handleGeneralError(response.data.errno, response.data.errmsg)
    return response
  },
  (err) => {
    handleNetworkError(err.response.status)
    Promise.reject(err.response)
  }
)
export const Get = <T,>(url, params, clearFn) => new Promise((resolve) => {
  axios.get(url, { params }).then((result) => {
    let res: FcResponse<T>
      if (clearFn !== undefined) {
        res = clearFn(result.data) as unknown as FcResponse<T>
      } else {
        res = result.data as FcResponse<T>
      }
        resolve([null, res as FcResponse<T>])
      })
        .catch((err) => {
          resolve([err, undefined])
        })
      })
export const Post = (url, data, params) => {
    return new Promise((resolve) => {
      axios.post(url, data, { params }).then((result) => {
        resolve([null, result.data as FcResponse<T>])
      })
        .catch((err) => {
        resolve([err, undefined])
      })
    })
  }
```

```js
import { userApi } from "./path/user"
import { shoporderApi } from "./path/shoporder"
export const api = {
	...userApi,
	...shoporderApi
}
```

```js
import { Get } from "../server"
export function getUserInfo(id) { ... }
export function getUserName(id) { ... }
export const userApi = {
	getUserInfo,
	getUserName
}
```

```js
import { Get } from "../server"
function getShoporderDetail() { ... }
function getShoporderList() { ... }
export const shoporderApi = {
	getShoporderDetail,
	getShoporderList
}
```

