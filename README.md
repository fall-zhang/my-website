# 笔记博客

将个人笔记和发布的文章，翻译等内容放置在该网站内

### 安装和启动

```
pnpm i
pnpm dev
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### 打包

```
pnpm build
```

## 项目计划

- [ ] 使用 github workflow 一键布局功能
- [ ] 将 article-release 项目也放到里面
- [ ] 考虑使用 ts
- [ ] 添加 eslint 格式化
- [ ] 更新使用 es 导出
- [ ] 支持 tailwind

## 可选内容

- React-Live 交互式代码块
- remark-emoji 提供 emoji 支持
- Mermaid 更加丰富的图形绘制
- remark-math rehype-katex 提供数学符号的支持

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## 资源引用

本项目使用了资源有：

- https://github.com/facebook/docusaurus
- https://iconpark.oceanengine.com/