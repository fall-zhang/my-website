> Create by **fall** on 14 Dec 2021
> Recently revised in 04 Apr 2023

## PostCSS

`npm install postcss-cli -g`

PostCSS 是一个运行环境，用于使用 JavaScript 改变 CSS 的环境

官方解释：A tool for transforming CSS with JavaScript

## 插件

### postcss-sprites

> `cnpm i postcss-sprites`
>
> 将多张图片自动合成为一张图片（雪碧图|sprites）

```js
const sprites = require('postcss-sprites');
module.exports = {
	plugins :[
		cssnext,
		stylelint({
            "rules" : {
            "color-no-invalid-hex" true;
            }
		}),
		sprites({
		spritePath : './dist'
		})
	]
}
```

### postcss-cssnext

> `cnpm i postcss-cssnext`
>
> 对css进行降级，支持更早的浏览器版本

```js
const cssnext = require('postcss-cssnext');
module.exports = {
	plugins :[
		cssnext
	]
}
```

postcss-import

`cnpm i postcss-import`

对于多个css文件进行合并

```js
const postcss = require('postcss-import');
module.exports = {
	plugins :[
		postcss
	]
}
```

### autoprefixer

`npm i autoprefixer`

自动添加浏览器前缀，进行浏览器兼容

```javascript
// 配置文件中引入
const autoprefixer = require('autoprefixer');
module.exports = {
	plugins :[
		autoprefixer({
			browsers : ['> 0%']// 对所有浏览器兼容
		})
	]
}
```

### stylelint

> 命令行安装`cnpm i stylelint`
>
> 进行 CSS 内容进行纠错

```js
const cssnext = require('postcss-cssnext');
module.exports = {
  plugins :[
    cssnext,
    stylelint({
      "rules" : {
        "color-no-invalid-hex" true;
      }
    })
  ]
}
```

### Animate.css

> `npm install animate.css --save`
>
> animate.css 是一些CSS动画的集成

### cssnano

> `cnpm i cssnano`
>
> 对于css进行压缩

```js
const postcss = require('postcss-import');
module.exports = {
	plugins :[
		cssnano
	]
}
```

### postcss-pxtorem

> 注意：不是 postcss-px2rem！

```bash
npm install postcss-pxtorem --save
```

vue 项目中，通过 `vue.config.js` 中添加以下内容，对该插件进行配置

```js
const postToRem = require('postcss-pxtorem')({ // 把px单位换算成rem单位
  rootValue: 16, // 初始根元素大小（换算基数） 
  unitPrecision: 3, //允许 REM 单位增长到的十进制数字，小数点后保留的位数。
  propList: ['*'], // 需要从 px 转化为 rem 的属性，如：height,font-size 之类，或者通配符 *
  exclude: /(node_module)/,
  selectorBlackList: ['.van'],// 选择器白名单
  mediaQuery: false,  // 是否允许在 f12 查询中转换px，默认为false。
  minPixelValue: 1 //设置要替换的最小像素值
})
module.exports={
  css: {
    loaderOptions: {
      postcss: {
        plugins: [postToRem]
      }
    }
  }
}
```

全局监听

```js
// 基准大小
const baseSize = 16
// 设置 rem 函数
function setRem () {
  // 当前页面宽度相对于 1920 宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / 1920
  // 设置页面根节点字体大小, 字体大小最小为12
  let fontSize = (baseSize * Math.min(scale, 2))>12 ? (baseSize * Math.min(scale, 2)): 12
  document.documentElement.style.fontSize = fontSize + 'px'
}
// 初始化
setRem()
//改变窗口大小时重新设置 rem,这里最好加上节流
window.onresize = function () {
  setRem()
}
```

### postcss-px-to-viewport

```json
// 默认配置
 {
  unitToConvert: 'px',
  viewportWidth: 320,
  unitPrecision: 5,
  propList: ['*'],
  viewportUnit: 'vw',
  fontViewportUnit: 'vw',
  selectorBlackList: [],
  minPixelValue: 1,
  mediaQuery: false,
  replace: true,
  exclude: undefined,
  include: undefined,
  landscape: false,
  landscapeUnit: 'vw',
  landscapeWidth: 568
}
```

`vue.config.js`

```js
const pxtoViewport =require("postcss-px-to-viewport")({
  unitToConvert: "px", // 需要转换的单位，默认为"px"
  viewportWidth: 1920, // 视窗的宽度，对应pc设计稿的宽度，一般是1920
  // viewportHeight: 1080,// 视窗的高度，对应的是我们设计稿的高度
  unitPrecision: 3, // 单位转换后保留的精度
  propList: [
    // 能转化为vw的属性列表
    "*",
  ],
  viewportUnit: "vw", // 希望使用的视口单位
  fontViewportUnit: "vw", // 字体使用的视口单位
  selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。cretae
  minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
  mediaQuery: false, // 媒体查询里的单位是否需要转换单位
  replace: true, // 是否直接更换属性值，而不添加备用属性
  exclude: /(\/|\\)(node_modules)(\/|\\)/, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
})
module.exports = {
  //动态设置 extract 的值。开发环境设为 false，生产环境设为 true，以便打包出单独的 css 文件。
  extract: IS_PROD,
  sourceMap: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [pxtoViewport],
      },
    },
  },
};
```



### postcss-px-to-viewport-8-plugin

将px转换为 viewport

