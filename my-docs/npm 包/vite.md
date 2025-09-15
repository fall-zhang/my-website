> Create by **fall** on 13 Aug 2021<br/>
> Recently revised in 15 Sep 2025

## Vite

### 搭建项目

`pnpm create vite` 然后选择所需的技术栈搭建项目。

Vite v3 需要 [Node.js](https://nodejs.org/en/) 版本 14.18+，16+，使用前确保 Node 版本。

> 我的两个模板项目：
>
> - React 模板：https://github.com/fall-zhang/vite-typescript-react-template
> - Vue 模板：https://github.com/fall-zhang/vite-vue3-TS-lint
>
> 如果是 vue 项目，还可以参考该文章  [Vue3 现已成为新的默认版本，这个开箱即用的Vue3模板它不香吗？](https://juejin.cn/post/7058201396113309703)
>
> 更多开箱即用的模板和插件项目可以参考：[awesome-vite](https://github.com/vitejs/awesome-vite)

### 静态资源处理

服务时引入一个静态资源会返回解析后的公共路径。

```js
import imgUrl from './img.png'
document.getElementById('hero-img').src = imgUrl
// 在开发时，会作为当前路径下的相对路径
// 构建后，放置在/assets/img.2d8efhg.png
```

- CSS 中的 `url()` 也以同样的方式处理。
- 使用 `assetsInclude` 扩展视为静态资源的列表
- 当静态资源小于一定大小（默认为 `4kb`，可以通过 `assetsInlineLimit` 进行设置）将内联为 `base64` 编码
- TS 不会将静态资源视为模块，此时要使用 `vite/client`

作为特殊资源引入时：

- 使用 `?raw` 作为字符串引入 `import shaderString from './shader.glsl?raw'`
- 同理，使用 `?url` 表示导入一个 URL
- 导入为 `worker` 时，路径后面拼接 `?worker` 或者 `?sharedworker`
- 在构建时 Web Worker 内联为 base64 字符串 `import InlineWorker from './worker.js?worker&inline'`

public 目录

- `public` 中的资源不应该被 JavaScript 文件引用。（例如 `robots.txt`）
- 必须保持原有文件名（没有经过 hash）
- ... 或者你压根不想引入该资源，只是想得到其 URL。

开发时能直接通过 `/` 根路径访问到，比如 `public/icon.png` 应该在源码中被引用为 `/icon.png`。

JSON 文件可以被直接导入，也可以被具名导入

```js
// 导入整个对象
import json from './example.json'
// 对一个根字段使用具名导入 —— 有效帮助 treeshaking
import { field } from './example.json'
```

### 环境变量

- **`import.meta.env.MODE`**：`string` 应用运行的[模式](https://cn.vitejs.dev/guide/env-and-mode.html#modes)。
- **`import.meta.env.BASE_URL`**：`string` 部署应用时的基本 URL。他由[`base` 配置项](https://cn.vitejs.dev/config/shared-options.html#base)决定。
- **`import.meta.env.PROD`**：`boolean` 应用是否运行在生产环境。
- **`import.meta.env.DEV`**：`boolean` 应用是否运行在开发环境 (永远与 `import.meta.env.PROD`相反)。
- **`import.meta.env.SSR`**：`boolean` 应用是否运行在 [server](https://cn.vitejs.dev/guide/ssr.html#conditional-logic) 上。

生产环境中，这些环境变量会在构建时被**静态替换**，动态的 key 将无法生效，动态 key 取值 `import.meta.env[key]` 是无效的。

配置环境变量：

`.env` 文件

```
.env                # 所有情况下都会加载
.env.local          # 所有情况下都会加载，但会被 git 忽略
.env.[mode]         # 只在指定模式下加载
.env.[mode].local   # 只在指定模式下加载，但会被 git 忽略
```

> 遵从着修饰越多越优先的原则，并且会优先使用本地配置
>
> 只有 `VITE_` 为前缀的变量才会暴露给经过 vite 处理的代码。

示例

```
KEY=123
NEW_KEY1=test$foo   # test
NEW_KEY2=test\$foo  # test$foo
NEW_KEY3=test$KEY   # test123
```

默认情况下 `development` 用于 `vite dev` 命令，`production` 用于 `vite production`

并且可以通过 `--mode` 来修改使用的模式

```bash
vite build --mode staging
# 此时应该使用的 env 文件应该为 .env.staging
```



HTML 中的环境变量替换

`import.meta.env` 中的任何属性都可以通过特殊的 `%ENV_NAME%` 语法在 HTML 文件中使用，如果不存在，则不会替换：

```html
<h1>Vite is running in %MODE%</h1>
<p>Using data from %VITE_API_URL%</p>
```

### CSS

Vite 中集成配置了 PostCSS，所以可以直接使用

以 `module.css` 为后缀结尾的文件都将被视为 CSS modules 文件，会返回一个响应的模块对象。

在 `vite.config.js` 中，`css.modules.localsConvention` 

```
localsConvention: 'camelCaseOnly' // 表示使用小驼峰进行书写，可以将划线转换为小驼峰
.apply-color -> applyColor
可以将 css 的调用格式转换
```

样式注入

使用 `?inline` 可以避免 CSS 样式注入页面

```
import './foo.css' // 样式将会注入页面
import otherStyles from './bar.css?inline' // 样式不会注入页面
```

### TypeScript

Vite 仅执行 `.ts` 文件的转译工作，**不执行任何类型检查**。并认为你的 IDE 或构建过程处理了类型检查。

> 不把类型检查作为转换过程的一部分，是因为这两项工作在本质上是不同的。转译可以在每个文件的基础上进行，与 Vite  的按需编译模式完全吻合。相比之下，类型检查需要了解整个模块图。转换时如果进行类型检查，将拖慢 Vite 的速度。
>
> 类型检查用 tsc，或者 vue tsc

`tsconfig.json` 中的一些配置，比如说当 `"isolatedModules": true` 时

```
"isolatedModules": true
```

因为 Vite 使用的 ESbuild 并不支持 TS 中的 `enum` 语法，所以，使用带有 `enum` 的语法库，会有问题，如果在打包时报错，可以通过 `"skipLibCheck":true` 解决。

### Glob 导入

可以从文件系统内导入多个模块

导入多个模块是通过 [fast-glob](https://github.com/mrmlnc/fast-glob) 实现的

```js
const modules = import.meta.glob('./dir/*.js')
// 如果以 ! 开头，表示忽略该文件，如：'!**/bar.js'
```

```js
// module 的形式如下
const modules = {
  './dir/foo.js': () => import('./dir/foo.js'),
  './dir/bar.js': () => import('./dir/bar.js'),
}
```

Glob 无法直接处理进行 tree-shaking，所以需要一些标注来进行推断

```js
const modules = import.meta.glob('./dir/*.js', {
  import: 'setup',
  eager: true, // 标注为热模块
})
```

Vite 也支持带变量的动态导入。

```js
const module = await import(`./dir/${file}.js`)
```

变量仅能代表单层的文件名。如果 `file` 是 `foo/bar`，将会导入失败。

### 构建模式

#### 多页面模式

假设你有下面这样的项目文件结构

```
├── package.json
├── vite.config.js
├── index.html
├── main.js
└── nested
    ├── index.html
    └── nested.js
```

在开发过程中，简单地导航或链接到 `/nested/` - 将会按预期工作，与正常的静态文件服务器表现一致。

构建过程中，你只需指定多个 `.html` 文件作为入口点即可：

```js
// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // 当前路径下的 index.html
        nested: resolve(__dirname, 'nested/index.html'),
      },
    },
  },
})
```

#### 库模式

如果打算开发面向浏览器的库，该库发布时，使用 `build.lib` 需要确保不想打包进去的依赖，例如 `vue`、`react`

```js
// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'lib/main.js'),
      name: 'MyLib',
      // the proper extensions will be added
      fileName: 'my-lib',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
```

```json
// 推荐的 package.json 配置
{
  "name": "my-lib",
  "type": "module",
  "files": ["dist"],
  "main": "./dist/my-lib.cjs",
  "module": "./dist/my-lib.js",
  "exports": {
    ".": {
      "import": "./dist/my-lib.js",
      "require": "./dist/my-lib.cjs"
    },
    "./secondary": { // 第二个
      "import": "./dist/secondary.js",
      "require": "./dist/secondary.cjs"
    }
  }
}
```

> 如果 `package.json` 不包含 `"type": "module"`，Vite 会生成不同的文件后缀名以兼容 Node.js。`.js` 会变为 `.mjs` 而 `.cjs` 会变为 `.js` 。
>
> 在库模式下，所有 `import.meta.env.*` 用法在构建生产时都会被静态替换。但是，`process.env.*` 的用法不会被替换

部署相关内容可以查看[官方文档](https://cn.vitejs.dev/guide/static-deploy.html)

### 服务端渲染

SSR 特别指支持在 Node.js 中运行相同应用程序的前端框架（例如 React、Preact、Vue 和 Svelte），将其预渲染成 HTML，最后在客户端进行水合处理。

详情可见：[服务端渲染](https://cn.vitejs.dev/guide/ssr.html)

### 后端集成 

### WASM

```js
import init from './example.wasm?init'
```

### Web Worker

```js
const worker = new Worker(new URL('./worker.js', import.meta.url))
```

### Monorepo

在 monorepo 启动时，该仓库中的某个包可能会成为另一个包的依赖。

Vite 会自动侦测没有从 `node_modules` 解析的依赖项，并将链接的依赖视为源码。它不会尝试打包被链接的依赖，而是会分析被链接依赖的依赖列表。

只有被导出为 ESM 格式才会这样处理，如果不是 EMS，可以将依赖添加到 `optimizeDeps.include` 和 [`build.commonjsOptions.include`](https://cn.vitejs.dev/config/build-options.html#build-commonjsoptions) 中，并且如果更新了这些配置，需要在启动时添加 `--force` 使更改生效。

## 实现原理

Vite 会将用户**源码**和**依赖**的代码分隔开进行处理。

- 依赖：使用 esbuild 进行预构建。
- 源码：以 [原生 ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) 方式提供源码。可能是一些需要预处理的文件（例如 JSX， Vue/Svelte 组件）

依赖会通过 `Cache-Control: max-age=31536000,immutable` 在浏览器内进行强制缓存。

源码模块的请求会根据 `304 Not Modified` 进行协商缓存。

### 依赖解析和预构建

传统的打包方式是基于冷启动的方式，必须先将所有包都打包完成，然后才能提供服务，但应用逐渐变大，速度也会更慢。

使用预构建：Vite 选择 **ESbuild** 作为**预构建工具**提高本地开发的冷启动速度（ESbuild 的构建速度，是 JS 构建器速度的10以上）。

预构建需要将 CommonJS / UMD 转换为 ESM 格式，以及将导入转换为合法的 URL

```js
// 原生 ES 导入不支持下面这种导入方式，所以 Vite 会对所有该导入方式进行预构建
import { oneMethod } from 'my-dev'
// 处理成类似于这种
// /node_modules/.vite/deps/my-dev.js?v=f3sf2ebd
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

> `esbuild` 默认支持的入口文件类型有 `js`、`ts`、`jsx`、`css`、`json`、`base64`、`dataurl`、`binary`、`file`（`.png` 等），并不包括 `html`。`vite` 自己实现了一个 `esbuild` 插件 `esbuildScanPlugin`，来处理 `.vue` 和 `.html` 这种类型的文件。

如果仅仅依靠原生 `esm` 的加载机制，每个依赖的 `import` 都将产生一个请求，浏览器无法支撑，所以客观上需要进行裸模块进行打包，并处理浏览器支持的相对路径（如：`import ElementPlus from '/path/to/.vite/element-plus/es/index.mjs'`）。

- 其次对查找到的依赖进行构建

当前已经得到了需要构建的依赖列表，只需把他们进行打包就好了

为了避免在程序运行过程中发生了错误，导致缓存不可用。`vite` 并没有将 `esbuild` 的 `outdir`（输出目录）直接配置为 `.vite` 目录，而是先将构建产物存放到了一个临时目录。当构建完成后，才将原来旧的 `.vite`（如果有的话）删除。然后再将临时目录重命名为 `.vite`。

已预构建的依赖请求使用 HTTP 头 `max-age=31536000, immutable` 进行强缓存，以提高开发期间页面重新加载的性能。一旦被缓存，这些请求将永远不会再次访问开发服务器。

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

> 是否需要重新运行预构建步骤：
>
> - 包管理器的锁文件内容，例如 `package-lock.json`，`yarn.lock`，`pnpm-lock.yaml`，或者 `bun.lockb`；
> - 补丁文件夹的修改时间；
> - `vite.config.js` 中的相关字段；
> - `NODE_ENV` 的值。

### 打包构建

打包时，首先移除打包后内容的目录，默认是 `dist`，然后从入口文件 `index.html` 开始解析（使用 `buildHtmlPlugin` 进行解析 `.html` 文件）

创建 `baseRollupPlungin`，创建默认的 plugin 以及用户自定义的 plugin，实质上是 rollup 中的 plugin（vite 中的配置为 `rollupInuptOptions`）

然后就是解析 `.env` 文件，文件内以 `VITE_` 开头的内容会通过 `import.meta.env` 的方式暴露给我们。

`node` 环境下进行的打包，所以会调用 `rollup.rullop()` 生成 `bundle`。并且会应用上面创建好的 `baseRullupPlugin`、`buildHtmlPlugin`。

调用 `bundle.generate` 生成 `output` （对象），包含每一个 `chunk` 内容，最后通过遍历，并调用 `fs` 模块生成 `chunk` 文件，结束打包。d

**CSS 内容的打包**

Vite 会自动地将一个异步 chunk 模块中使用到的 CSS 代码抽取出来并为其生成一个单独的文件。这个 CSS 文件将在该异步 chunk 加载完成时自动通过一个 `<link>` 标签载入。

如果想禁用该功能，可以使用 `build.cssCodeSplit` 为 `false`。

> 下面所罗列的功能会自动应用为构建过程的一部分，除非你想禁用它们，否则没有必要显式配置。

### CSS 代码分割 

Vite 会自动地将一个异步 chunk 模块中使用到的 CSS 代码抽取出来并为其生成一个单独的文件。这个 CSS 文件将在该异步 chunk 加载完成时自动通过一个 `<link>` 标签载入，该异步 chunk 会保证只在 CSS 加载完毕后再执行，避免发生 [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content) A flash of unstyled content,before all information is retrieved.

如果你更倾向于将所有的 CSS 抽取到一个文件中，你可以通过设置 [`build.cssCodeSplit`](https://cn.vitejs.dev/config/build-options.html#build-csscodesplit) 为 `false` 来禁用 CSS 代码分割。

### 预加载指令生成 

Vite 会为入口 chunk 和它们在打包出的 HTML 中的直接引入自动生成 `<link rel="modulepreload">` 指令。

### 异步 Chunk 加载优化 

在实际项目中，Rollup 通常会生成 “共用” chunk —— 被两个或以上的其他 chunk 共享的 chunk。与动态导入相结合，会很容易出现下面这种场景：

在无优化的情境下，当异步 chunk `A` 被导入时，浏览器将必须请求和解析 `A`，然后它才能弄清楚它也需要共用 chunk `C`。这会导致额外的网络往返：

Vite 将使用一个预加载步骤自动重写代码，来分割动态导入调用，以实现当 `A` 被请求时，`C` 也将 **同时** 被请求：

`C` 也可能有更深的导入，在未优化的场景中，这会导致更多的网络往返。Vite 的优化会跟踪所有的直接导入，无论导入的深度如何，都能够完全消除不必要的往返。

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

### 插件

以 rollup-plugin 开头的是 rollup 的插件

以 vite-plugin 开头的是 vite 的插件

以 @vitejs/ 开头的是 vite 官方提供的插件

#### rollup-plugin-external-globals

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

#### rollup-plugin-visualizer

依赖分析，分析依赖占比

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

#### vite-plugin-compress

进行代码压缩

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

#### vite-plugin-imagemin

图片压缩，对图片进行处理

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

#### @vitejs/plugin-legacy

浏览器进行向下兼容

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

## vite.config.js

### 配置

`vite.config.js`

```js
export default {
  // 配置服务的端口，代理操作
  server: {
    port: 3001,
    proxy: {
      '/api': {
        target: '',
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
  host:true, // 表示可以通过 ip 在局域网进行访问
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

| 作者             | 链接                                       |
| ---------------- | ------------------------------------------ |
| 前端论道         | https://juejin.cn/post/7078622707104874503 |
| 字节跳动ADFE团队 | https://juejin.cn/post/7064853960636989454 |
|                  |                                            |
|                  |                                            |
