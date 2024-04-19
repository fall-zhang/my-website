> Create by **fall** on  17 Feb 2022
> Recently revised in 18 Dec 2023

## Rollup

使用 Rollup@4 要将 node 升级到 V18 以上

Rollup 是一款基于 ESmodule 的打包软件（webpack 基于 commonjs）

```js
import pkg from "./package.json" assert { type: 'json' };
// 在 package.json 中配置 main，作为 cjs 默认导入内容，module 作为 esm 导入内容
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from '@rollup/plugin-babel'
import vuePlugin from 'rollup-plugin-vue'
// vue-plugin-vue 描述了需要哪些包
export default {
  input: "./src/immer/index.vue",
  output: [{
      file: pkg.main,
      format: "cjs",
    },{
      file: pkg.module,
      format: "esm",
      // 将这些包作为单独的包导出
      manualChunks: {
				lodash: ['lodash']
			}
    },
  ],
  plugins: [
    vuePlugin(/* options */), // 用于解析 .vue 文件
    json(),
    commonjs({
      include: /node_modules/,
    }),
    resolve({
      preferBuiltins: true,
      jsnext: true,
      main: true,
      brower: true,
    }),
    babel({ exclude: "node_modules/**" }),
  ],
  // 警告处理
  // onwarn(warning, warn) {}
};
```

### TreeShaking

Rollup 必须保守地删除代码，以确保最终结果将正确运行。无论是对你正在使用的模块中的某些部分还是对全局环境，Rollup 都会使这些副作用。



```shell
# 大型项目可能会达到 Node 的内存限制，使用以下方式运行即可。
node --max-old-space-size=8192 node_modules/rollup/dist/bin/rollup -c
# 请注意，这个数字可以安全地超过你的可用物理内存。在这种情况下，Node 会根据需要将内存分页到磁盘上。
```

## 插件

插件分为官方插件（以 @rollup/plugin 开头）和社区插件（rollup-plugin 开头）

### @rollup/plugin-json

可以处理 JSON 文件

### @rollup/plugin-node-resolve

可以解析 node 中的包，将代码打包到产物中

### @rollup/plugin-alias

```js
{
  plugins: [
    vuePlugin({
      target: 'broswer'
    }),
    sucrase({
      exclude: ['node_modules/**'],
      transforms: ['jsx']
    }),
    alias({
      entries: [
        // { find: 'packages/', replacement: '@/' },
        { find: '@', replacement: __dirname + '/packages' },
        { find: 'utils', replacement: __dirname + '/packages/utils/index.js' },
      ]
    }),
    // 让 Rollup 查找到外部模块，打包到产物内
    resolve({
      // 将自定义选项传递给解析插件
      moduleDirectories: ['node_modules']
    })
    // alias({
    //   entries: [
    //     { find: 'utils', replacement: '../../../utils' },
    //     { find: 'batman-1.0.0', replacement: './joker-1.5.0' }
    //   ]
    // })
  ]
}
```

### rollup-plugin-polyfill-node

如果想要在项目中使用 node 的



### rollup-plugin-visualizer

用来查看打包后的包体积大小

```js

```

### @rollup/browser

面向浏览器的构建（NPM 上的 `@rollup/browser`）现在依赖于一个需要提供的 WASM 文件。如果你正在使用 Vite 的浏览器构建，你需要将 `"@rollup/browser"` 添加到 `optimizeDeps.exclude` 中，否则 `npm run dev` 将因为 `.wasm` 文件的无效路径而失败（请参阅 [vitejs #14609](https://github.com/vitejs/vite/issues/14609)）。

### @rollup/plugin-sucrase



































































