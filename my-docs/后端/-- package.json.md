> Create by **fall** on — — 2020
> Recently revised in 21 Feb 2023

## 配置选项

`package.json` 是一个项目清单，可以做很多互不相关的事情

- 存储元数据：元数据就是描述数据信息的数据
- 工具的配置中心（可以在该文件内放置工具的配置）
- `npm` 和 `yarn` 存储所有已经安装的包的名称和版本的地方。

最简单的 `package.json` 文件（其实就是最简单的 JSON 文件）：

```json
{} // 真的很简单 ^_^
```

`package.json` 的文件当然要符合语法规范

```json
{
  "name":"my-demo"
}
```

> 命令行工具快速创建 package.json： `npm init` 初始化当前环境。
>
> `npm init -y` 或者 `npm init -yes` 快速创建

### 基础属性

所有属性都可以通过 npm 或者其它工具使用

> name 必须小于 214 个字符，不能包含空格，只能包含小写字母、连字符(`-`)、下划线（`_`）

| 值                   | 作用                                                         |
| -------------------- | ------------------------------------------------------------ |
| name（必填           | 设置应用程序 / 软件包的名称                                  |
| version（必填        | 表明当前的版本                                               |
| private              | 私有，防止应用程序 / 软件包被意外发布到 npm 公共仓库（会禁用 npm publish 命令） |
| scripts              | 定义了一组可以运行的 node 脚本                               |
| description          | 应用程序 / 软件包的简短描述                                  |
| dependencies         | 设置了作为依赖安装的 npm 安装包列表                          |
| devDependencies      | 设置作为开发依赖安装的 `npm` 软件包的列表，不会作为依赖树被安装 |
| peerDependencies     | 于表示与另一个包的依赖与兼容性关系来警示使用者。             |
| optionalDependencies | 可选依赖，安装失败也不会报错，比如控制台高亮的 `chalk`       |
| type                 | type 属性设置为 module 可以表明当前使用 `import` 的方式引入包，需要 `node>16` |

```json
{
  "name": "fall-template",
  "version": "0.0.6",
  "private": true,
  "scripts": {
    "dev": "vite",
  },
  "description":"what a nice package!",
  "dependencies": {
    "react": "^18.1.0"
  },
  "devDependencies": {
    "vite": "^3.0.9"
  },
  "peerDependencies": {
    "react-dom": ">=18.1.0"
  },
  "optionalDependencies": {
    "chalk": "^5.2.0"
  }
}
```

### script

标签的前缀和后缀

- 前缀：`pre`、`post`

```json
// script 标签通常可以添加前缀和后缀来执行一些任务
{
  "script":{
    "prepublish":"npm test", 
    "postpublish":"git push"
  }
}
```

### config

**config**

```js
"config": {
  "port": "3001"
}
// 可以通过 process 访问到 config 中配置的内容
console.log(process.env.npm_package_config_port)
```

publishConfig，模块发布时生效，用于设置发布时一些配置项的集合

如果只想让模块发布到特定 npm 仓库，就可以这样来配置：

```json
{
  "private": true,
  "publishConfig": {
    "tag": "1.1.0",
    "registry": "https://registry.npmjs.org/",
    "access": "public"
  }
}
```

### 文件目录

**main**、**module**

应用程序需的入口点，即引入的时候，默认引入的就是该文件

- main 表示 commonjs 引入的默认入口
- module 表示 ES6 引入的默认入口

```json
{
  "main":"src/main.js",
  "module":"src/module.js"
}
```

**files**

files 用来描述当前包的白名单列表。当使用 `npm publish` 包发布时，files 指定的文件会被推送到 npm 服务器中，如果指定的是文件夹，那么该文件夹下面所有的文件都会被提交。

```json
{
  "files": [
    "LICENSE",
    "README.md",
    "index.js",
    "lib/"
  ]
}
```

**sideEffects**

表示副作用，在 tree-shaking 优化时，css 文件只引入了，没有使用，通过 sideEffects 标明则不会被移除

Ant Design 在 package.json 里设置了如下的 sideEffects，来告知 webpack，这些样式文件具有副作用，引入后不能被删除。

```JSON
"sideEffects": [
  "dist/*",
  "es/**/style/*",
  "lib/**/style/*",
  "*.less"
]
```

**bin** 

字段用来指定各个内部命令对应的可执行文件的位置

```json
"bin": {
  "someTool": "./bin/someTool.js",
  "vite": "bin/vite.js"
}
```

**directories**

用来规范项目的目录。node.js 模块是基于 CommonJS 模块化规范实现的，需要严格遵循 CommonJS 规范。模块目录下除了必须包含包项目描述文件 package.json 以外，还需要包含以下目录：

```json
{
  "directories": {
    "bin": "./bin", // 存放可执行二进制文件的目录
    "lib": "./lib", // 存放js代码的目录
    "doc": "./doc", // 存放文档的目录
    "test": "./test", // 存放单元测试用例代码的目录
    "man": "./man"
  }
}
```

**typings**

字段用来指定 TypeScript 的入口文件：

```json
{
  "typings": "types/index.d.ts"
}
```

### 系统及环境配置

| 值          | 作用                                            |
| ----------- | ----------------------------------------------- |
| engines     | 设置了此软件包 / 应用，在哪个版本的 node 上运行 |
| browerslist | 告知支持哪些浏览器                              |
| os          | 指定项目对操作系统的兼容性要求                  |
| cpu         | 指定项目只能在特定的 CPU 体系上运行。           |

```json
{
  "engines": {
    "node": ">= 16.0.0",
    "npm": ">= 6.0.0",
    "yarn": "^0.13.0"
  },
   "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ],
  "os": ["darwin", "linux"],
  "cpu":["x64", "AMD64","!arm"],   // 适用的cpu
}
```

### 信息描述

描述一些内容，

可选值的格式和标准的 json 文件格式相同

**author**：列出软件包的作者名称

```json
{
  "author": {
    "name": "Fall Zhang",
    "email": "123456@gmail.com",
    "url": "https://github.com/fall-zhang"
  },
  "author":"Fall"
}
```

**contributors**：贡献者

```json
{
  "contributors":['personA','personB'],
  "contributors":[
    {
      "name":'Fall Zhang',
      "email":"123456@gmail.com",
      "url": "https://github.com/fall-zhang"
    }
  ]
}
```

**bugs**：连接到软件包的问题跟踪器，最常用的是 GitHub 的 issues 页面

```json
{
  "bugs":"https://github.com/sosos/issues"
}
```

**homepage**：设置软件包的主页

```json
{
  "homepage":"http:nodejs.cn"
}
```

**license**：软件包的许可证

```json
{
  "license":"MIT"
}
```

**keywords**：属性包含与软件包相关的关键字词组

```json
{
  "keywords":[  "email","machine learning","ai"]
}
```

**repository**：指定了程序包仓库所在的位置

```json
{
  "repository":"github:nodejscn/node-api-cn",
  "repository": {
    "type": "git",
    "url": "https://github.com/fall-zhang/vite-vue3-TS-lint"
  },
}
```

### 第三方库

**typings**

字段用来指定 TypeScript 的入口文件：

```json
{
  "typings": "types/index.d.ts"
}
```

**eslintConfig**

用来配置 eslint 的环境配置

```json
{
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    "rules": {},
    "parserOptions": {
      "parser": "babel-eslint"
    }
  }
}
```

**babel**

可以放在 `babel.config.js`

```json
"babel": {
	"presets": ["@babel/preset-env"],
	"plugins": [...]
}
```

**unpkg**

npm 上所有的文件都开启 CND 服务，该 CND 服务由 unpkg 提供

```javascript
"unpkg": "dist/vue.js"
```

**lint-staged**

`lint-staged` 可以实现在 git 暂存区运行 lint 工具，一般搭配 husky（负责 git 的 hook）进行配置

```json
{
  "lint-staged": {
    "*.{js,vue,jsx,tsx}": [
      "eslint --fix"
    ],
    "*.md": [
      "prettier --write"
    ]
  }
}
```

**browserslist**

一般，babel 以及 auto-prefixer 会用到该配置

```json
"browserslist": {
  "production": [
    ">0.2%",
    "not dead",
    "not op_mini all"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
  ]
}
```



## 版本控制

**语义化版本控制**：简单来讲所有版本都有三个数字

比如说：`2.6.5`

- 第一个数字是主板本，进行不兼容的 API 更改时，升级主板本。
- 第二个数字是次版本，当你做了向下兼容的功能性新增，升级次板本。
- 第三个数字是补丁版本，向后兼容的缺陷修复时，升级补丁版本

语义化符号控制：

| 符号        | 示例             | 含义                                                  |
| ----------- | ---------------- | ----------------------------------------------------- |
| `~`         | `~0.13.0`        | 只更新补丁版本 `0.13.1`、`0.13.2` 可以，`0.14.0` 不行 |
| `^`         | `^2.2.1`         | 更新补丁版本和次版本                                  |
| `*`         | `*`              | 接受所有更新，包括主版本升级                          |
| `>`         | `>2.2.1`         | 接受高于指定版本的任意版本                            |
| `<`         | `<2.2.1`         | 接受低于指定版本的任何版本                            |
| `<= `、`>=` | `<=2.2.1`        | 大于等于，或者小于等于指定版本                        |
| `latest`    | `latest`         | 使用可用的最新的版本                                  |
| `-`         | `2.1.0-2.6.2`    | 接受一定范围的版本                                    |
| `||`        | `< 2.1 || > 2.6` | 组合集合                                              |
| 无符号      | `2.2.1`          | 只接受特指的版本                                      |



## package-lock.json

`package-lock.json` 和 `package.json` 文件一样，只不过， `package-lock.json` 会固化当前安装的每个软件包的版本，当运行 `npm install` 时，`npm` 会使用这些确切的版本。如果不存在，就会自动生成该文件。

没有 `package-lock.json` 时，会通过包名查找位置，然后包的依赖，之后进行安装，有了`package-lock.json` 后，可以直接从 package-lock.json 中直接查找地址进行下载，在 npm 5.0.0 之后的版本支持该特性。即，安装时更快，更高效。

`package-lock.json` 文件需要被提交到 Git 仓库，以便被其他人获取（如果项目是公开的或有合作者，或者将 Git 作为部署源）。

其它的包管理器也有类似于 `package-lock.json` 的功能，比如说 `yarn` 工具中的 `yarn.lock` 文件，和 `pnpm` 包管理工具中的

**为什么单一的 package-lock.json 不能确定唯一的依赖树？**

不同的 npm 版本导致的 npm 安装依赖的策略和算法不同，根据 `package.json` 中的 [semver-range version](https://link.juejin.cn?target=https%3A%2F%2Fdocs.npmjs.com%2Fcli%2Fv6%2Fusing-npm%2Fsemver) 更新依赖，可能某些依赖自上次安装以后，己经发布了新的版本。

## 参考文章

| 文章（作者） | 链接                                       |
| ------------ | ------------------------------------------ |
| 语义化版本   | https://semver.org/lang/zh-CN/             |
| CUGGZ        | https://juejin.cn/post/7023539063424548872 |

