> Create by fall on 22 Feb 2023<br/>
> Recently revised in 10 Apr 2023

## 编写组件

### 项目目录

```
|- src
    |- MyInput
        |- index.js
        |- index.vue
        |- index.scss
    |- main.js
|- rollup.config.js
```

其中 index.js 文件负责导出，并且为组件提供单独安装功能

```js
import MyButton from "./index.vue";
MyButton.install = function (Vue) {
  Vue.component(MyButton.name, MyButton);
};
export default MyButton;
```

main.js 负责引入所有的组件，并且导出安装内容

```js
import MyButton from './MyButton.js'
import MyInput from './MyInput.js'
import { version } from '../package.json'
const componentList = [MyButton,MyInput] 
const install = (Vue)=>{
  componentList.forEach(component=>{
    Vue.use(component.name,component)
  })
}
export {
	MyButton,
  MyInput
}
export default {
  version:version,
  install:install
}
```

### rollup 配置

`rollup-plugin-vue` 插件来解析 vue 文件

是 5.x 版本解析 vue2，最新的 6.x 版本解析 vue3

```js
import pkg from "./package.json" assert { type: 'json' };
// 默认不支持导入 json 文件，使用声明可以暂时导入使用
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from '@rollup/plugin-babel'
import vuePlugin from 'rollup-plugin-vue'
export default {
  input: "./src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "esm",
    },
  ],
  plugins: [
    vuePlugin(/* options */),
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

## 参考文章

| 作者   | 文章名称                                                     |
| ------ | ------------------------------------------------------------ |
| 谢小飞 | [从零开始发布自己的NPM包](https://juejin.cn/post/7052307032971411463) |
|        |                                                              |
|        |                                                              |

