> Create by fall on:2021-07-03
> Recently revised in:2022-07-24

> 注：这里只提供 Vite 环境下的插件说明

## 插件

### vite-plugin-vue-setup-extend

定义包名称

```javascript
// 包名称 setup 扩展包
// vite-plugin-vue-setup-extend
// vite.config.ts
import { defineConfig } from 'vite'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
export default defineConfig({
  plugins: [
    VueSetupExtend()
  ]
})
```

使用

```vue
<script lang="ts" setup name="OrderList">
</script>
```

### unplugin-auto-import

自动导入包

```js
// 包名称
// unplugin-auto-import
// vite.config.ts 配置
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
export default defineConfig({
  plugins: [
    AutoImport({
      // 可以自定义文件生成的位置，默认是根目录下，使用ts的建议放src目录下
      dts: 'src/auto-imports.d.ts',
      imports: ['vue'],
      eslintrc: { // 如果开启了 eslint，记得使用这个，关闭因为没引入导致 eslint 的报错
        enabled: true
      }
    })
  ]
})
```

之后自动生成 `auto-imports.d.ts` 文件。

```js
// auto-imports.d.ts
// Generated by 'unplugin-auto-import'
// We suggest you to commit this file into source control
declare global {
  const computed: typeof import('vue')['computed']
  const createApp: typeof import('vue')['createApp']
  const customRef: typeof import('vue')['customRef']
  const defineAsyncComponent: typeof import('vue')['defineAsyncComponent']
  const defineComponent: typeof import('vue')['defineComponent']
  const effectScope: typeof import('vue')['effectScope']
  const EffectScope: typeof import('vue')['EffectScope']
  const getCurrentInstance: typeof import('vue')['getCurrentInstance']
  const getCurrentScope: typeof import('vue')['getCurrentScope']
  const h: typeof import('vue')['h']
  const inject: typeof import('vue')['inject']
  const isReadonly: typeof import('vue')['isReadonly']
  const isRef: t  ypeof import('vue')['isRef']
  // ...
}
export {}
```

`eslint`

```js
// 上方配置了 eslint 会自动生成 .eslintrc-auto-import.json文件，将其导入 eslintrc.js
// eslintrc.js
module.exports = {
  extends: [
    './.eslintrc-auto-import.json'
  ]
}
```

### unplugin-vue-components

### vite-plugin-style-import

手动引入库的时候，自动引入对应的样式文件

```js
import { ElButton } from 'element-plus';
        ↓ ↓ ↓ ↓ ↓ ↓
// dev
import { Button } from 'element-plus';
import 'element-plus/lib/theme-chalk/el-button.css`;

// prod
import Button from 'element-plus/lib/el-button';
import 'element-plus/lib/theme-chalk/el-button.css';
```

```js
// vite.config.js
// 其它的解析器有 ElementPlusResolve VantResolve NutResolve AntdResolve
import styleImport, { AndDesignVueResolve } from 'vite-plugin-style-import';
export default {
  plugins: [
    // ...
    styleImport({
      resolves: [AndDesignVueResolve()],
    }),
  ],
}
```

### unplugin-icons

自动引入 icon，使用的是 [icons](https://icones.netlify.app/) 作为图标库

安装：`npm i -D unplugin-icons @iconify/json`

配置：

```js
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
export default {
  plugins: [ // ...
    Components({
      resolvers: IconsResolver(),
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),
  ],
}
```

使用：

```vue
<template>
  <i-mdi-account-reactivate style="font-size: 2em; color: red" />
</template>
```



## 解决报错问题

### TypeScript 报错

因为我们生成的 `auto-imports.d.ts` 和 `components.d.ts` 两个文件，默认是生成在项目根目录，正常我们配置的 TypeScript 解析的文件都放在 src 文件夹下。所以解决方案有两种

- 在 tsconfig.json 中 include `auto-imports.d.ts` 和 `components.d.ts` 这两个文件
- 或者像下面这样配置，把两个 .d.ts 的生成目录放到 src 文件夹下

```js
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default {
  plugins: [
    // ...
    AutoImport({
      dts: './src/auto-imports.d.ts', // 解析后的文件所在的路径
    }),
    Components({
      dts: './src/components.d.ts'
    }),
  ],
}
```

### ESlint 报错

因为 ESlint 并不知道我们引入了哪些内容，所以会报错

首先调用插件的时候，同时也导出使用的内容，导出为 `.eslintrc-auto-import.json` 

```js
import AutoImport from 'unplugin-auto-import/vite'

export default {
  plugins: [
    // ...
    AutoImport({
      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
  ],
}
```

然后再 `eslint.config.js` 中导入即可

```js
module.exports = { 
  /* ... */
  extends: [
    // ...
    './.eslintrc-auto-import.json',
  ],
}
```



## 推荐配置

使用插件：`unplugin-auto-import` 和 `unplugin-vue-components`

```js
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
export default {
  plugins: [ // ... 其他插件
    AutoImport({
      // 这里除了引入 vue 以外还可以引入pinia、vue-router、vueuse等，
      // 自定义的配置规则，可见 https://github.com/antfu/unplugin-auto-import#configuration
      imports: ['vue'],
      // 第三方组件库的解析器
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // dirs 指定组件所在位置，默认为 src/components
      // 可以让我们使用自己定义组件的时候免去 import 的麻烦
      dirs: ['src/components/'],
      // 配置需要将哪些后缀类型的文件进行自动按需引入
      extensions: ['vue', 'md'],
      // 解析的 UI 组件库，这里以 Element Plus 和 Ant Design Vue 为例
      resolvers: [ElementPlusResolver(), AntDesignVueResolver()],
    }),
  ],
}
```



## 参考文章

| 作者名称    | 文章链接                                   |
| ----------- | ------------------------------------------ |
| 小学生study | https://juejin.cn/post/7054317318343491615 |
| 菜猫子neko  | https://juejin.cn/post/7062648728405934087 |
|             |                                            |
|             |                                            |

