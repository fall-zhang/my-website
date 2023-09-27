> Create by **fall** on 2022-05-14
> Recently revised in 2022-05-14

## Monorepo

> 在[版本控制系统中](https://link.juejin.cn?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FVersion_control)，**monorepo**（“ [mono](https://en.wiktionary.org/wiki/mono-#English) ”表示“单一”，“repo”是“[存储库](https://link.juejin.cn?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FRepository_(version_control))”的缩写）是一种软件开发策略，其中许多项目的代码存储在同一个存储库中。  --维基百科

Monorepo 把多个项目放在一个仓库里面，与之相对的是每个项目对应一个单独的仓库管理的模式（MultiRepo）

一般 Monorepo 的目录如下所示，在 packages 存放多个子项目，并且每个子项目都有自己的`package.json`:

```
├── packages
|   ├── pkg1
|   |   ├── package.json
|   ├── pkg2
|   |   ├── package.json
├── package.json
```

MultiRepo 中的缺点

- 因为不同项目之间的割裂，如果某一行出现了问题，那就需要一套流程下来，然后发布，提供其它包使用，每次修改都会很复杂。
- 多个项目依赖同一个包的同一个版本，有更新时，有的包升级了，有的包没有升级，造成运行代码和预期的不一致。
- 每一个项目的工作流都是割裂的，需要单独开发环境，配置 CI（持续集成 Continuous Integration），如果构建部署，发布不能统一，会增加额外的维护成本。

Monorepo 也是相比于 MultiRepo 有了特定的收益

- 工作流的一致性，如果有依赖的代码变动，使用该依赖的项目会立马感知到，所有的项目使用的都是最新的代码，不会版本更新不及时。
- 基建成本降低，无需切换开发环境，有新的项目接入，可以直接复用已有的基建流程，减少维护成本。
- 团队协作更加容易。

但 Monorepo 更容易出现一个问题：

仓库过大，管理时会出现问题，安装构建会相对更费时费力。

## 参考文章

| 作者   | 链接                                       |
| ------ | ------------------------------------------ |
| 神三元 | https://juejin.cn/post/6944877410827370504 |

