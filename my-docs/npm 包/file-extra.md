> Create by **fall** on: 2022-07-12<br/>
> Recently revised in: 2022-07-12

## File-extra

安装：`npm i file-extra` 

为了快速操作文件使用的插件（对原生的 fs 文件操作进行了加强）

支持 [node fs](http://nodejs.cn/api/fs.html#fs_promise_example) 模块所有同名 API，并对所有异步 API 提供了 `promise` 支持（如果未传入回调函数将返回 `promise` ）。

```js
const fs = require ('fs-extra');
// Async with promises:
fs.copy('/tmp/myfile', '/tmp/mynewfile')
  .then(() => console.log('success!'))
  .catch(err => console.error(err))

// Async with callbacks:
fs.copy('/tmp/myfile', '/tmp/mynewfile', err => {
  if (err) return console.error(err)
  console.log('success!')
})

// Sync
try {
  fs.copySync('/tmp/myfile', '/tmp/mynewfile')
  console.log('success!')
} catch (err) {
  console.error(err)
}
```

异步方法：

- `copy(src, dest[, options][, callback])`: 复制文件或目录。
- `emptyDir(dir[, callback])`: 清空目录。确保一个目录是空的，如果目录非空则删除目录内容。如果目录不存在，就创建一个，目录本身并不是删除。
- `ensureFile(file[, callback])`: 确保文件存在。不存在则创建文件和相关目录，文件存在则不修改。
- `ensureDir(dir[,options][,callback])`: 确保目录存在。不存在则创建。
- `ensureLink(srcPath, destPath[, callback])`: 确保符号链接存在。不存在则创建。
- `ensureSymlink(srcPath, destPath[, type][, callback])`: 确保符号链接存在。目录结构不存在则创建。
- `mkdirp`: `ensureDir` 的别名。
- `mkdirs`: `ensureDir` 的别名。
- `move(src, dest[, options][, callback])`: 移动文件或目录。
- `outputFile(file, data[, options][, callback])`: 输出文件。父目录不存在则创建，`file` 必须是文件路径。
- `outputJson(file, object[, options][, callback])`: 输出 .json 文件，目录不存在则创建。
- `pathExists(file[, callback])`: 路径是否存在。`callback` 参数为 `(err: Error, exists: boolean)`。
- `readJson(file[, options][, callback])`: 读取 JSON 文件，然后将其解析为对象。
- `remove(path[, callback])`: 删除文件或目录。目录可以有内容，若路径不存在，则不做任何事情。
- `writeJson(file, object[, options][, callback])`: 将对象写入 JSON 文件。

同步方法：异步同功能 api 名称 + `Sync`：比如 `copySync`、`emptyDirSync` ...

## 参考文章

| 作者 | 链接 |
| ---- | ---- |
|      |      |

