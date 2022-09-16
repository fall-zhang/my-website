> Create by **fall** on:2022-07-12
> Recently revised in:2022-07-12

## Chalk

为了更好的调试代码，让代码产生高光，从简单的白色变为其它的颜色

```js
// commonjs
const chalk = require('chalk')
console.log(chalk.red('author: fall'))
```

自定义输出方式

```js
const log = {
  success:(str)=>console.log(chalk.green(str)),
  error:(str)=>conosle.log(chalk.red(str))
}
```



## 参考文章

| 作者      | 链接                                       |
| --------- | ------------------------------------------ |
| wuliNorth | https://juejin.cn/post/6844904199201800200 |

