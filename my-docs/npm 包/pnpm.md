> Create by **fall** on 2022-07-23
> Recently revised in 2022-07-23

## PNPM

> Fast, disk space efficient package manager.

[官方文档](https://pnpm.io/zh/pnpm-cli)

特点：空间利用率高，极快的安装速度

安装：`npm i pnpm -g`

> 幽灵依赖：比如 `moment.js` 被 `antd` 引用，在 `package.json` 中安装 `antd`，然而 `import` 的时候，能引用 `moment.js` ，此时 `moment.js` 就成为幽灵依赖。造成原因是 yarn 或者 npm，为了避免引用嵌套引用导致包过大，拍平了依赖，导致的幽灵依赖。

### 如何工作

在 `node_modules` 中，会产生一个 `.pnmp` 文件夹，用于存放目录树（文件夹名），被称为虚拟存储目录，通过 `package-name>@<version>` 实现相同模块不同版本之间隔离和复用。

那么如何将这些文件夹和资源关联？

`Store` + `Links`

Store

pnpm 资源在磁盘上的存储位置

Mac/Linux 中会设置在 `{home dir}>/.pnpm-store/v3`；windows 会设置在当前目录的根目录，比如C（`C/.pnpm-store/v3`）、D盘（`D/.pnpm-store/v3`）。

可以在不同的磁盘上设置同一个存储，但在这种情况下，`pnpm` 将**复制包**而不是**硬链接**（详情可见 linux 章节，或者自行查询）它们。硬链接只能发生在同一文件系统同一分区上。

需要注意的是一般用户权限下只能硬链接到文件，**不能用于目录**。

Links

比如说 100 个项目中用到了 lodash，`npm` 和 `yarn` 会安装 100 次，而 pnpm 只会安装一次，之后都会使用 `hardlink` 硬链接。

由于`hark link`只能用于文件不能用于目录，但是`pnpm` 的 `node_modules` 是树形目录结构， 通过 `symbolic link`（也可称之为软链或者符号链接）来链接到文件。

全局的 Store 也会存在一些问题，比如：store 会随着时间越来越大，所以使用 `pnpm store prune` 命令解决问题。
比如：有个包 `axios@1.0.0` 被一个项目所引用了，但是某次修改使得项目里这个包被更新到了 `1.0.1` ，那么 store 里面的 1.0.0 的 axios 就就成了个不被引用的包，执行 `pnpm store prune` 就可以在 store 里面删掉它了，注意不要经常使用。

### PeerDependencies

pnpm 的最佳特征之一是，在一个项目中，`package`的一个特定版本将始终只有一组依赖项。 这个规则有一个例外 -那就是具有 [peer dependencies ](https://docs.npmjs.com/files/package.json#peerdependencies)的`package`。

通常，如果一个`package`没有 peer 依赖项（peer dependencies），它会被硬链接到其依赖项的软连接（symlinks）旁的 `node_modules`，就像这样：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/08fc3d6dd49f4d2a92d1d31a9a9999e6~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

如果 `foo` 有 peer 依赖（peer dependencies），那么它可能就会有多组依赖项，所以我们为不同的 peer 依赖项创建不同的解析：

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4dd2ecc8c09b4cf7a01d72e6f5113102~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

`pnpm`创建` foo@1.0.0_bar@1.0.0+baz@1.0.0` 或`foo@1.0.0_bar@1.0.0+baz@1.1.0`内到`foo`的软链接。 因此，Node.js 模块解析器将找到正确的 peers。

`peerDep`的包命名规则如下(看起来就很麻烦)

```
.pnpm/<organization-name>+<package-name>@<version>_<organization-name>+<package-name>@<version>/node_modules/<name>

// peerDep组织名(若无会省略)+包名@版本号_组织名(若无会省略)+包名@版本号/node_modules/名称(项目名称)
复制代码
```

> *如果一个`package`没有 peer 依赖（peer dependencies），不过它的依赖项有 peer 依赖，这些依赖会在更高的依赖图中解析*, 则这个传递`package`便可在项目中有几组不同的依赖项。 例如，`a@1.0.0` 具有单个依赖项 `b@1.0.0`。 `b@1.0.0` 有一个 peer 依赖为 `c@^1`。 `a@1.0.0` 永远不会解析`b@1.0.0`的 peer, 所以它也会依赖于 `b@1.0.0` 的 peer 。

如果需要解决peerDep引入的多实例问题，可以通过 [`.pnpmfile.cjs`](https://link.juejin.cn?target=https%3A%2F%2Fpnpm.io%2Fzh%2Fpnpmfile)文件更改依赖项的依赖关系。

### 命令的使用

命令和 npm 的使用极其相似

安装所有包

`pnpm install`

安装特定的包

`pnpm install <package-name>`

`pnpm update <package-name>` 更新包

将本地项目连接到另一个项目。注意，使用的是硬链接，而不是软链接。如：`pnpm link ../../axios`。

> 硬链接是引用资源，最后一个引用消失则资源删除，软连接是创建了一个快捷方式，和存在与否无关

### 支持 monorepo

`monorepo` 即共同管理多个包，让多个包使用共同的版本管理，除去额外的包的内容

首先在文件夹内容创建一个 `pnpm-workspace.yaml`，表明当前文件夹为多包管管理模式的根目录

```bash
packages:
  # 所有在 packages/  子目录下的 package
  - 'packages/**'
  # 不包括在 test 文件夹下的 package
  - '!**/test/**'
```

安装全局包时注意添加 `-w` 

### 配置

配置是统一的配置文件 `.npmrc`

- `shamefully-hoist=true` 可以让包名提升，即还可以实现幽灵引用
- `enable-pre-post-scripts=true` 提供 `pre`、`post` 前置脚本，后置脚本

```
// .npmrc
shamefully-hoist=true
enable-pre-post-scripts=true
```

## 参考文章

| 作者 | 链接 |
| ---- | ---- |
|      |      |

