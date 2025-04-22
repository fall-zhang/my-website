> Create by **fall** on 30 May 2022<br/>
> Recently revised in 19 Apr 2024

## json-server

应用场景：官方文档也提到：

Created with less than 3 for front-end developers who need a quick back-end for prototyping and mocking.

小于三个前端开发者，需要搭建一个快速的后端

创建 `mock/db.json` 文件，文件主要格式为

```json
{
  "getUser": {
    "status": 200,
    "msg": "前端—热爱"
  },
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
}
```

### 配置运行脚本

```js
{
  "script":{
    "mock": "json-server mock/db.json --port 3030"
  }
}
```

如果你以 ` http://localhost:3000/posts/1` 该路径获取数据，你将会得到

`{ "id": 1, "title": "json-server", "author": "typicode" }`

- 如果你使用 `POST, PUT, PATCH, DELETE` 这些方法，更改将会自动保存到 `db.json` 文件中
- 你写的请求体 JSON 应该被 `object` 围住，就像 `GET` 方法输出的那样（例如：`{"name": "Foobar"}`）
- `POST`，`PUT`，`PATCH` 请求，应该在请求体内包含 `Content-Type: application/json` 请求头，否则会返回 2XX 状态码，但是不会更改数据到 db.json。

## Mock

Vite 中配置 mock 插件，需要安装 `vite-plugin-mock`

```json
{
  plugins: [
    reactRefresh(),
    viteMockServe({
      ignore: /^\_/,
      mockPath: 'mock',
      localEnabled: !isBuild,
      prodEnabled: isBuild,
      // injectCode 的内容仅限于测试环境添加使用
      injectCode: `
import { setupProdMockServer } from '../mock/_createProductionServer'
setupProdMockServer()
`
    })
  ]
}
```



## 参考文章

| 参考文章 | 链接                                      |
| -------- | ----------------------------------------- |
| 官方文档 | https://www.npmjs.com/package/json-server |