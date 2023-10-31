> Create by **fall** on 2022-05-16
> Recently revised in 2022-05-17

## Lerna

安装：`npm install lerna -g`

初始化项目：`lerna init --independent`

初始化后的项目目录是：

```
lerna-repo/
  packages/    # 子包的目录
  package.json
  lerna.json   # lerna 的配置目录
```

项目添加子包（package）：`lerna create <module-name>`

子包的操作

所有子包更新依赖：`lerna bootstrap`

为子包添加依赖

```
lerna add <moduleName>  // 所有子包都添加这个依赖
lerna add <moduleName> --scope = <pkgName> // 给scope后的包添加依赖
lerna add <pkgName1> --scope = <pkgName2> // 给pkgName2中添加pkgName1，包内的互相引用，会复制pkgName1到pkgName2中
```

### 打包

- 每个子包中的 `src/index` 都是源代码的入口文件
- 每个子包中的 `lib/index.js` 都是打包后的文件，也是引用时的入口
- 每个子包的配置是基本一样的，用 babel 转换，都会压缩代码
- `npm run build packName` 打包指定的包

使用 rollup 打包

根目录创建一个 script 目录，包含一些开发所需的配置文件

## 参考文章

| 作者        | 链接                                       |
| ----------- | ------------------------------------------ |
| 努力的Jerry | https://juejin.cn/post/6844903954329894920 |


