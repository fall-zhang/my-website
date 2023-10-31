> Create by **fall** on 2022-04-05
> Recently revised in 2022-05-30

## husky

用于将代码推送到 git 上

```bash
npm i lint-staged husky -D
npm set-script prepare "husky install" # 在 package.json 中添加脚本
npm run prepare # 初始化 husky，将 git hooks 钩子交由 husky 执行
```

在初始化之后，会在根目录创建 `.husky` 文件夹

添加 `pre-commit` 钩子命令：`npx husky add .husky/pre-commit "npx lint-staged"`

lint-satged 用于 lint 的缓存。

### pre-commit

在 `.husky` 文件夹内创建名为 `pre-commit` 文件夹，然后在文件夹内添加如下内容

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
npm run lint-staged
```

## 搭配其他插件

`commitlint`：用来对 commit 的内容进行约束。

`lint-staged`：对代码进行格式化，如果有错误，将不能上传代码。

安装 lint-staged `yarn add lint-staged`

package.json 中，添加如下内容

```json
{
  "lint-staged": {
    "*.less": "stylelint --syntax less",
    "*.{js,jsx,ts,tsx}": [
      "eslint  --fix"
    ],
    "*.{md,json}": [
      "prettier --write"
    ]
  },
  "script":{
    "lint-staged": "lint-staged",
    "lint-staged:js": "eslint --ext .js,.jsx,.ts,.tsx ",
  }
}
```

## 参考文章

| 作者             | 链接                                       |
| ---------------- | ------------------------------------------ |
| jpliu            | https://juejin.cn/post/7038143752036155428 |
| 啥也不是的小垃圾 | https://juejin.cn/post/6982192362583752741 |

