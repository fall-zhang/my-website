> Create by **fall** on — — 2020<br/>
> Recently revised in 10 Apr 2024

> 注：npm 会随着 node 的安装进行安装，安装 node 后，就可以使用 npm 命令。

## npm

npm 的功能：

- 下载包（脚本）：从 NPM 服务器下载别人编写的**第三方包**到本地使用。
- 下载命令程序（命令行）：允许用户从 NPM 服务器下载并安装别人编写的**命令行程序**到本地使用。
- 上传包和命令程序：允许用户将自己编写的包或命令行程序上传到 NPM 服务器供别人使用。

在 Node V10 之后自带 npm，不需要额外下载。

LTS 版本：Long Term Support（[长期支持版本](https://nodejs.org/en/about/releases/)）

- 官方网址：https://nodejs.org
- 安装 npm 组件：https://www.npmjs.com

### 更换源（可选）

> 因为某些大家知道的原因，需要更换为国内的镜像，或者安装 yarn，代替 npm

查看当前使用的镜像：`npm config get registry` 。默认是：`https://registry.npmjs.org/`

可以使用下面的命令更改镜像地址，当然也可以使用这个方法改回原来的地址：

`npm config set registry https://registry.npmmirror.com` 

- 最新镜像地址：`https://registry.npmmirror.com` 
- 淘宝原镜像（已过期）：`https://registry.npm.taobao.org`

> 安装 cnpm：`npm install -g cnpm --registry=https://registry.npm.taobao.org`
>
> 安装完成之后就可以通过 cnpm 代替 npm 的所有命令（有些插件使用 cnpm 安装，可能会出现问题）

### 命令

`npm -v` 用于检测 npm 是否安装成功

#### 包管理

**安装包**

- 本地的安装包：使用 `npm install <package-name>` 安装，并且放置在 `node_modules` 文件夹中
- 全局的安装包：`npm install <package-name> -g` 全局安装，并放在固定的位置。

> **软件包通常都应该本地安装而非全局安装**，比如计算机中有数十个项目，就该有十个对应的软件包（node_modules），用来保证每个应用都可以运行不同的版本。如果全局安装，所有的项目都使用同一个版本，可能导致维护上的噩梦，破坏原来的依赖项和兼容性等。
>
> 仅在需要**添加一些全局命令**的时候，再进行全局安装，比如 `yarn`、`pnpm`

**安装命令详解**

```bash
# 示例：
npm install rollup@3.9.1 --save-dev  
# 示例功能：使用 npm 安装 rollup 的 3.9.1 版本版本
npm install # 表示使用 npm 命令工具的 install 安装功能
rollup@3.9.1 # 表示下载 3.9.1 版本的 rollup
--save  # 表示安装在当前文件夹下，npm 5 之后的版本可以省略，也可以整体简写为 -S
-dev    # 将安装的信息保存在 package.json 中，作为开发依赖添加到 devDependencies 列表，简写为：-D
--save-dev # 多个命令串联
# 简写：
npm i rollup@3.9.1 -S-D
```

**卸载包**

`npm uninstall <package-name>`  卸载 node.js 指定的包

`npm uninstall <package-name> -g` 全局模块的卸载必须带上 -g

**升级包**

`npm update`  升级当前目录下的项目的所有模块

`npm update <package-name>` 升级特定名称的包

#### 常用命令

**远程查找**

- 在网络上搜索模块：`npm search <key-word>`
- `npm view <package-name>`：在网络中查看该插件的详情
- `npm view <package-name> version`：查看该软件的最新版本
- `npm view <package-name> versions`  查看该插件的所有版本

**本地查找**

- 查找当前工作区安装的模块：`npm list`
- 查看全局安装的主要模块：`npm list -g --depth=0`

| 命令（常用命令）       | 功能                                                         |
| ---------------------- | ------------------------------------------------------------ |
| `npm root -g`          | 查看全局模块的安装路径<br />如果使用 nvm 管理工具，位置可能会不同 |
| `npm init`             | 创建 JSON 文件，初始化本地开发环境                           |
| `npm cache clean`      | 清除 npm 本地的缓存，可使用 `-f` 强制清除缓存                |
| `npm config get cache` | 查看 缓存所在位置                                            |

### npx

npx 可以自动寻找当前文件夹（node_modules）文件夹下的可执行插件，正确引用并且执行。并且如果当前文件夹下没有下载可执行插件，那就会在网络中寻找后，下载并且运行，在运行成功后删除，利用这一特性，可以实现避免全局模块的安装。

> 命令的使用类似于原插件的执行方法，不过不需要 npm 进行安装：
>
> `npx cowsay hello world`
>
> 可以和 node 特定版本结合，`npx node@10 -v #10.18.1`

```bash
npx uglify-js@3.1.0 // 同 npm 一样，可以通过@指定使用的版本
```

**可添加的参数**

`--no-install` 强制使用本地模块

`--ignore-existing` 忽略本地存在的模块

```bash
 npx --no-install http-server // 强制使用本地模块
 npx --ignore-existing create-react-app my-react-app // 忽略本地存在的模块，然后生成react app
```

`-p` 指定将要安装的模块

```bash
npx -p node@0.12.8 node -v 
npx -p lolcatjs -p cowsay "hello" // 可以通过 -p 指定多个不同的命令
```

`-c` 可以将所有命令都用 npx 解释，

```bash
npx -p lolcatjs -p cowsay 'cowsay hello | lolcatjs' // 报错
// 默认情况只有第一个可执行项会使用 npx 安装的模块，后面的可执行项还是会交给 Shell 解释。
npx -p lolcatjs -p cowsay -c 'cowsay hello | lolcatjs' // 添加 -c 后将所有命令给 npx 解释，正常运行
```

将环境变量带入所要执行的命令

```bash
npm run env | grep npm_ // 可以用该命令查看提供当前项目的一些环境变量。
npx -c 'echo "$npm_package_name"' // 该代码会输出当前项目的项目名
```

#### 执行远程代码

npx 可以指定直接执行 git 上面的代码，前提是远程代码必须是一个模块，必须包含 package.json 和入口脚本。

用 npx 使用 live-server

使用 `npx http-server` 在当前文件夹下开启 `live-server` 即开启本地环境

> yarn & pnpm
>
> yarn 和 pnpm 都是为了解决 npm 上出现的一些固有的错误以及性能问题等而开发的。pnpm 的[官方文档](https://pnpm.io/zh/pnpm-cli)
>
> 现在 PNPM 也作为包管理工具进行使用

### 编写 npm 脚本

分三步走：

第一步，编写命令：

第一行表示使用 node 解析该命令（不能缺少）

在项目目录中添加该工具 `./bin/disco.js`

```js
#!/usr/bin/env node
// process.argv 为一个数组，表示执行命令的位置，以及之后的参数
console.log(process.argv.length)
console.log(process.argv[0])
```

第二步，`package.json` 中添加以下内容：

```json
{
  "bin": { // 表示命令
    "disco": "./bin/disco.js" // 表示命令的标识符，运行时使用 disco 运行
  }
}
```

第三步，在当前工作区启动内容

`npm link`，将内容连接到全局工作区

然后就可以运行命令

```bash
disco ld as -v
# 输出为：
# 5
# C:\Program Files\nodejs\node.exe
```

### npm 包的发布

首先登陆 `npm adduser`，或者 `npm login`，如果没有账号，请上官网进行注册。

登陆完成后：`npm publish .` 

然后你就可以通过你发布的包名去下载你上传的包 `npm install <package-name>`

**包的管理权限**

通常只有一个人拥有发布功能，如果想要添加，可以通过命令实现

`npm owner ls <package-name>` 所有者列表

`npm owner add <user-name> <package-name> ` 添加所有者

`npm owner add <user-name> <package-name>` 删除所有者

取消发布

```bash
npm unpublish vue-fantable@0.1.4
```

### 版本控制

监听的文件：

- 首先忽略 `.gitignore` 中存在的文件，并且再忽略 `.npmignore` 中选择的文件
- 通过 `package.json` 中的 files 属性来添加白名单，发布到 npm 上（不管是否被忽略）

```bash
npm version [major | minor | patch]
# 分别修改 主版本+1 新增版本+1 补丁版本加+1
```

查看[语义化版本规范](https://semver.org/lang/zh-CN/)

> 一个包是否是足够优秀的包，会通过以下方式计算权重
>
> - 测试：具备良好的测试，良好的测试覆盖率
> - 文档：良好的文档（README、API）
> - 规范：良好的编码规范

域级包

比如 `@types/`、`@eslint/` 之类称之为域级包，避免了包名称太多导致的冲突

```bash
npm init --scope=username
# 初始化时添加域的名称
```

## corepack

corepack 是 node V16.13 后用来**管理**如（npm、pnpm、yarn）包管理器的工具

通过以下方式即可启用改管理工具

```bash
corepack enable
# 关闭
corepack disable
```

该工具会关联 `package.json` 中的 `packageManager` 字段

```json
{
  "packageManager": "pnpm@8.15.4"
}
```

此时，就会锁定使用的包管理器版本，锁定包管理器后，使用的包不是指定的包管理器，就会报错。



通过 corepack 切换当前版本

```bash
corepack use pnpm@8.15.4
# 版本升级(不升级主版本号)
corepack up
```



## nvm 的使用

nvm 是 node 版本控制工具

> 注：windows 上运行的 nvm 和 linux & MacOS 上的 nvm 工具不是一个项目，它们是两个团队做出来的东西。

nvm（Linux、Unix、OS X）的安装：https://github.com/creationix/nvm

nvm（Windows）安装：https://github.com/coreybutler/nvm-windows

### 常用命令

```bash
# 安装最新版本的 node
nvm install node
nvm install latest
# 当前所拥有的 node 的版本
nvm list
nvm ls
# 切换到淘宝镜像
nvm use taobao
# 全局安装 nvm 命令
npm install -g nvm
# 当前nvm工具的版本
nvm -v
# 使用 12.22.12 版本的 node
nvm use 12.22.12
# 卸载该版本的 node.js
nvm uninstall 8.4.0
```

## 参考文章

| 作者            | 链接                                                         |
| --------------- | ------------------------------------------------------------ |
| 深入浅出 nodejs | 第二章                                                       |
| levy9527        | [📦vue组件发布npm最佳实践](https://juejin.cn/post/6844903620916281358) |
|  谢小飞      |  [从零开始发布自己的NPM包](https://juejin.cn/post/7052307032971411463)    |
| 纪轻昀 | [锁定 Node.js 的包管理：Corepack 使用指南](https://juejin.cn/post/7352739150242496527) |
