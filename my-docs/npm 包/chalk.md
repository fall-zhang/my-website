> Create by **fall** on 08 Feb 2022<br/>
> Recently revised in 09 May 2023

## Chalk

为了更好的调试代码，让代码产生高光，从简单的白色变为其它的颜色

chrome69 之后，控制台也可以支持高亮，chalk 也支持

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

npm 中的一个包，负责控制台高亮

### Colors

`black` `red` `green` `yellow` `blue` `magenta` `cyan` `white` `blackBright` (alias: `gray`, `grey`) `redBright` `greenBright` `yellowBright` `blueBright` `magentaBright` `cyanBright` `whiteBright` 

### Background colors

`bgBlack` `bgRed` `bgGreen` `bgYellow` `bgBlue` `bgMagenta` `bgCyan` `bgWhite` `bgBlackBright` (alias: `bgGray`, `bgGrey`) `bgRedBright` `bgGreenBright` `bgYellowBright` `bgBlueBright` `bgMagentaBright` `bgCyanBright` `bgWhiteBright`

### Modifiers

 `reset` - Reset the current style. `bold` - Make the text bold. `dim` - Make the text have lower opacity. `italic` - Make the text italic. *(Not widely supported)*  `underline` - Put a horizontal line below the text. *(Not widely supported)*  `overline` - Put a horizontal line above the text. *(Not widely supported)*  `inverse`- Invert background and foreground colors. `hidden` - Print the text but make it invisible. `strikethrough` - Puts a horizontal line through the center of the text. *(Not widely supported)*  `visible`- Print the text only when Chalk has a color level above zero. Can be useful for things that are purely cosmetic.

## 参考文章

| 作者      | 链接                                       |
| --------- | ------------------------------------------ |
| wuliNorth | https://juejin.cn/post/6844904199201800200 |

