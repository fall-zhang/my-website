## 笔记博客

前端冒险家的全栈之旅。

个人学习笔记、发布的文章，翻译等都在该项目内

### 安装和启动

首先需要初始化其它相关子仓库

``` bash
git submodule init
```

``` bash
pnpm i
pnpm dev
```

### 打包

``` bash
pnpm build
```

## 额外内容

- giscus 第三方开源评论模块
- github workflow 文档部署工作流
- tailwindcss tailwind 书写样式
- algolia 内容查询
- git submodule 关联两个仓库
  - my-note 我的笔记
  - article 我写的文章

### 部署

使用 github workflows 进行部署，详情可看 `.github\workflows\deploy-docs.yml`

## 项目资源引用

本项目使用了资源有：

- https://github.com/facebook/docusaurus
- https://iconpark.oceanengine.com/

### 作者的其它应用

- [fruit-navigate](https://github.com/fall-zhang/fruit-navigation) js 实现的全栈导航
- [vue-fantable](https://github.com/fall-zhang/vue-fantable) vue 大型数据表格渲染方案，vue 实现 Excel