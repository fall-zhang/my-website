> Create by **fall** on 29 Jul 2025<br/>
> Recently revised in 29 Jul 2025

## GitHub Action

CICD 工具的一种，可以帮助你进行一些固定的繁琐操作

- **CI ** 的全称是**Continuous Integration**，直译为**可持续集成**，而普遍对其的解释是**频繁地（一天多次）将代码集成到主干**。对于这个解释我们要搞懂其中的两个概念：
- CD：**持续交付（Continuous delivery）** 或者 **持续部署（continuous deployment）** 或者是两者的并集，
- CI/CD 既可能仅指持续集成和持续交付构成的关联环节，也可以指持续集成、持续交付和持续部署这三项构成的关联环节。更为复杂的是，有时"持续交付"也包含了持续部署流程。

我以我自己的工作流为例，解释

```yml
name: deploy docs
# 指定在什么情况下会运行
on:
  # 在指定的分支发生变化的时候运行
  push:
    branches:
      - source
    paths:
      - ".github/workflows/deploy-docs.yml"
      - "my-docs/**"
      - "docusaurus.config.ts"
      - "src/**"
      - "package.json"
  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# 部署到 GitHub Pages 时 GITHUB_TOKEN 的权限
permissions:
  contents: write

# 只能同时执行一个部署，跳过正在运行的队列Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# 然而，不要取消正在进行的脚本，当我们想要生成内容部署时。
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          ref: source

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install pnpm
        run: npm i -g pnpm

      - name: Install dependencies
        run: pnpm i --frozen-lockfile

      - name: Build doc
        run: pnpm build

      - name: Deploy Doc 🚀
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: github-pages
          folder: ./build
          clean: false

      - name: Deploy Doc 🚀
        uses: actions/upload-pages-artifact@v3
        with:
          path: build

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    permissions:
      pages: write
      id-token: write
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

```

