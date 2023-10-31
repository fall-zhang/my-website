> Create by **fall** on  17 Feb 2022
> Recently revised in 10 Apr 2023

## Rollup

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
};
```

## 插件

### rollup-plugin-visualizer

用来查看打包后的包体积大小

```js

```

