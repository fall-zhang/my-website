## 快捷方式指南

文章补充到

https://github.blog/2024-04-19-a-short-guide-to-mastering-keyboard-shortcuts-on-github/

github 快捷方式：

`s` 进入搜索

`t` 快速查找文件

`l` 快速跳转到该行

~~`b` 查看当前文件的历史记录~~

`.` 快速查看代码

将网页的 `.com` 改为 `.dev`，你就可以打开在线的 vscode 编辑该项目

## workflow

workflow，工作流

工作流，当提交代码到远程后会触发一系列脚本，从而实现一键部署，一键测试功能

```yaml
name: deploy docs
# 指定在什么情况下会运行
on:
  # 在指定的分支发生变化的时候运行
  push:
    branches:
      - root
    paths:
      - ".github/workflows/deploy-docs.yml"
      - "my-docs/**"
      - "package.json"
  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  # Build job
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          ref: root

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install pnpm
        run: npm i -g pnpm

      - name: Install env
        run: pnpm install

      # - name: Setup Pages
      #   uses: actions/configure-pages@v4
      # - name: Build with Jekyll
      #   uses: actions/jekyll-build-pages@v1
      #   with:
      #     source: ./
      #     destination: ./_site
      # - name: Upload artifact
      #   uses: actions/upload-pages-artifact@v3

      - name: Build doc
        run: pnpm build

      - name: Deploy Doc 🚀
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: github-pages
          folder: ./build
          clean: false

  # Deployment job
  # deploy:
  #   environment:
  #     name: github-pages
  #     url: ${{ steps.deployment.outputs.page_url }}
  #   runs-on: ubuntu-latest
  #   needs: build
  #   steps:
  #     - name: Deploy to GitHub Pages
  #       id: deployment
  #       uses: actions/deploy-pages@v4

```

## 参考文章

| 作者       | 链接                                                         |
| ---------- | ------------------------------------------------------------ |
| Sara Verdi | [A short guide to mastering keyboard shortcuts on GitHub](https://github.blog/2024-04-19-a-short-guide-to-mastering-keyboard-shortcuts-on-github/) |

