> Create by **fall** on 2021-08-13
> Recently revised in 2022-07-24

## Vite

### 搭建项目

`pnpm create vite` 然后选择所需的技术栈搭建项目。

> 如果是 vue 项目，可以参考该文章  https://juejin.cn/post/7058201396113309703

### 预构建

基于冷启动的打包构建方式必须先将所有包都打包完成，然后才能提供服务，但应用逐渐变大，速度也会更慢。

预构建：Vite 选择 **ESbuild** 作为**预构建工具**提高本地开发的冷启动速度（ESbuild 的构建速度，至少是 JavaScript 构建器速度的10-100倍）。

```js
// ES 导入不支持下面这种导入方式，所以 Vite 会对所有该导入方式进行预构建
import { oneMethod } from 'my-dev'
```

首次启动：

- 首先查找依赖

抓取源码，从代码中找到需要预构建的依赖，最终返回类似下面的对象：

```js
{
  vue: '/path/to/your/project/node_modules/vue/dist/vue.runtime.esm-bundler.js',
  'element-plus': '/path/to/your/project/node_modules/element-plus/es/index.mjs',
  'vue-router': '/path/to/your/project/node_modules/vue-router/dist/vue-router.esm-bundler.js'
}
```

以 `index.html` 作为查找入口，将所有来自 `node_modules` 以及在配置文件的 `optimizeDeps.indclude` 选项中的模块找出来。

> `esbuild` 默认支持的入口文件类型有`js`、`ts`、`jsx`、`css`、`json`、`base64`、`dataurl`、`binary`、`file`（`.png`等），并不包括`html`。`vite`自己实现了一个`esbuild`插件`esbuildScanPlugin`，来处理`.vue`和`.html`这种类型的文件。

如果仅仅依靠原生 `esm` 的加载机制，每个依赖的 `import` 都将产生一个请求，浏览器无法支撑，所以客观上需要进行裸模块进行打包，并处理浏览器支持的相对路径（如：`import ElementPlus from '/path/to/.vite/element-plus/es/index.mjs'`）。

- 其次对查找到的依赖进行构建

当前已经得到了需要构建的依赖列表，只需把他们进行打包就好了

为了避免在程序运行过程中发生了错误，导致缓存不可用。`vite` 并没有将`esbuild` 的 `outdir`（输出目录）直接配置为`.vite`目录，而是先将构建产物存放到了一个临时目录。当构建完成后，才将原来旧的 `.vite`（如果有的话）删除。然后再将临时目录重命名为`.vite`。

- 其它缓存操作

冷启动还会在构建 `js` 文件之外，创建 `_metadata.json`，格式如下：

```json
{
  "hash": "22135fca",
  "browserHash": "632454bc",
  "optimized": {
    "vue": {
      "file": "/path/to/your/project/node_modules/.vite/vue.js",
      "src": "/path/to/your/project/node_modules/vue/dist/vue.runtime.esm-bundler.js",
      "needsInterop": false
    },
    "element-plus": {
      "file": "/path/to/your/project/node_modules/.vite/element-plus.js",
      "src": "/path/to/your/project/node_modules/element-plus/es/index.mjs",
      "needsInterop": false
    }
  }
}
```

上面的 JSON 中 `hash` 标识缓存主要标识，由两项内容决定

- vite 的配置文件
- 依赖的 lock 文件（`package-lock.json`、`yarn.lock`、`pnpm-lock.yaml`

任何一项发生改变，都会导致 hash 发生变化，vite 启动时，缓存会失效，然后需要重新构建 `.vite` 缓存，如果手动删除，也会重新构建。

### 打包

打包时，首先移除打包后内容的目录，默认是 `dist`，然后从入口文件 `index.html` 开始解析（使用 `buildHtmlPlugin` 进行解析 `.html` 文件）

创建 `baseRollupPlungin`，创建默认的 plugin 以及用户自定义的 plugin，实质上是 rollup 中的 plugin（vite 中的配置为 `rollupInuptOptions`）

然后就是解析 `.env` 文件，文件内以 `VITE_` 开头的内容会通过 `import.meta.env` 的方式暴露给我们。

`node` 环境下进行的打包，所以会调用 `rollup.rullop()` 生成 `bundle`。并且会应用上面创建好的 `baseRullupPlugin`、`buildHtmlPlugin`。

调用 `bundle.generate` 生成 `output` （对象），包含每一个 `chunk` 内容，最后通过遍历，并调用 `fs` 模块生成 `chunk` 文件，结束打包。

### CSS

Vite 中集成配置了 PostCSS，所以可以直接使用

以 `module.css` 为后缀结尾的文件都将被视为 CSS modules 文件，会返回一个响应的模块对象。

### Vite 配置

`vite.config.js`

```js
export default {
  // 配置服务的端口，代理操作
  server: {
    port: 3001,
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        cookieDomainRewrite: '',
        secure: false,
        rewrite: (p) => p.replace(/^\/api/, ''),
      }
    }
  },
  // 定义路径别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@C': path.resolve(__dirname, 'src/components'),
      '@U': path.resolve(__dirname, 'src/utils'),
      '@H': path.resolve(__dirname, 'src/hooks'),
    }
  }
}
```

使用

```js
// 使用代理
fetch("/api/users")
  .then(response => response.json())
  .then(json => console.log(json));
// 使用路径别名
import CourseAdd from "@C/CourseAdd.vue";
import Comp from "@U/sum.js";
```

使用 mock 

```js
npm i mockjs -S
npm i vite-plugin-mock cross-env -D
```

```js
// vite.config.ts
plugins: [
  createMockServer({
    // close support .ts file
    supportTs: false,
  }),
]
// package.json 中的 script
"dev": "cross-env NODE_ENV=development vite"
```



### 相关配置

`tsconfig.json` 中的一些配置，比如说当 `"isolatedModules": true` 时

```
"isolatedModules": true
```

因为 Vite 使用的 ESbuild 并不支持 TS 中的 `enum` 语法，所以，使用带有 `enum` 的语法库，会有问题，可以通过 `"skipLibCheck":true` 解决。

### 静态资源处理

服务时引入一个静态资源会返回解析后的公共路径。

```js
import imgUrl from './img.png'
document.getElementById('hero-img').src = imgUrl
// 在开发时，会作为当前路径下的相对路径
// 构建后，放置在/assets/img.2d8efhg.png
```

- CSS 中的 `url()` 也以同样的方式处理。
- 当静态资源小于一定大小（默认为 `4kb` ），将内联为 `base64` 编码

作为特殊资源引入时：

- 使用 `?raw` 作为字符串引入 `import shaderString from './shader.glsl?raw'`
- 同理，使用 `?url` 表示导入一个 URL
- 导入为 `worker` 时，路径后面拼接 `?worker` 或者 `?sharedworker`

## 插件

### Vue插件

> 详情请见 vue 文件夹下的 vite 插件 ，这里面只有建议的配置

```js
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
export default {
  plugins: [ // ... 其他插件
    AutoImport({
      // 自定义的配置规则，可见 https://github.com/antfu/unplugin-auto-import#configuration
      imports: ['vue'],  // 这里除了引入 vue 以外还可以引入pinia、vue-router、vueuse 等
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

### rollup 插件

#### CDN 引入

`rollup-plugin-external-globals`

改变部分包的引入方式为 CDN 引入，以此来减少带宽，减小打包后的内容（可能有替代方案）

```javascript
// vite.config.js
import externalGlobals from "rollup-plugin-external-globals"
plugins: [
  commonjs(),
  externalGlobals({
    vue: "Vue", // 包名和变量中使用的名称
    "ant-design-vue": "antd",
  })
]
```

```html
<!-- index.html -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ant-design-vue@2.0.0-rc.9/dist/antd.min.css">
<script src="https://cdn.jsdelivr.net/npm/vue@3.0.5/dist/vue.global.prod.js"></script>
<script src="https://cdn.jsdelivr.net/npm/ant-design-vue@2.0.0-rc.9/dist/antd.js"></script>
```

#### 依赖分析

安装 `rollup-plugin-visualizer` 插件，分析依赖占比

```bash
npm install  rollup-plugin-visualizer @types/rollup-plugin-visualizer -D	
```

在 vite.config.ts 中引入

```js
import { visualizer } from 'rollup-plugin-visualizer';
export default defineConfig({
  // ...
  plugins: [
    // 将这个visualizer插件放到最后的位置中
    visualizer()
  ]
});
```

#### 代码压缩

`vite-plugin-compress` 进行代码压缩

```js
npm install vite-plugin-compress -s
```



```ts
// vite.config.ts
import compress from 'vite-plugin-compress'
export default defineConfig({
  // ...
  plugins: [
    compress(),
  ]
})
```

#### 图片压缩

安装 `vite-plugin-imagemin` 对图片进行处理

```bash
# 安装
npm i vite-plugin-imagemin -D
```

使用

```js
import viteImagemin from 'vite-plugin-imagemin'
export default defineConfig({
  // ...
  plugins: [
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {        optimizationLevel: 7      },
      mozjpeg: {        quality: 20      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {            name: 'removeViewBox'          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    })
  ]
});
```

兼容

使用 `@vitejs/plugin-legacy`

```bash
npm install @vitejs/plugin-legacy -D
```

引入

```js
import legacy from '@vitejs/plugin-legacy'
export default defineConfig({
  // ...
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ]
});
```

## 默认配置

### react

这是我的 `vite.config.ts` 默认配置，仅供参考

```ts
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'
import { apiAddress, proxyApi } from './src/config'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
    proxy: {
      [proxyApi]: {
        target: apiAddress,
        changeOrigin: true,
        cookieDomainRewrite: '',
        secure: false,
        rewrite: (p) => p.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@C': path.resolve(__dirname, 'src/components'),
      '@U': path.resolve(__dirname, 'src/utils'),
      '@H': path.resolve(__dirname, 'src/hooks'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // 重写 less 变量，定制样式
        modifyVars: {
          // font
          '@font-black': '#1c1e21',
          '@font-white': '#ffffffe6;',
          // color
          '@success-color': '#52c41a', // 成功色
          '@warning-color': '#faad14', // 警告色
          '@error-color': '#f5222d', // 错误色
          '@heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色
          '@disabled-color': 'rgba(0, 0, 0, 0.25)', // 失效色
        },
      },
    },
  },
  plugins: [reactRefresh()],
})
```

### vue

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import {resolve as pathResolve}  from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  host:true, // 表示可以通过 ip 进行访问
  resolve: {
    alias: {
      '@': pathResolve(__dirname, 'src'),
      '@C': pathResolve(__dirname, 'src/components'),
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts:'./public/auto-imports.d.ts'
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts:'./public/components.d.ts'
    }),
  ],
})
```



## 参考文章

| 作者     | 链接                                       |
| -------- | ------------------------------------------ |
| 前端论道 | https://juejin.cn/post/7078622707104874503 |
|          |                                            |
|          |                                            |
|          |                                            |

