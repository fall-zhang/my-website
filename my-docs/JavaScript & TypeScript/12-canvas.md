---
sidebar_position: 36
---

> Create by **fall** on 2022-06-10
> Recently revised in 2022-06-16

## canvas

Canvas 的默认大小为 `300px * 150px`

如何获取 DOM

```js
// 确保 DOM 中存在如下的标签
// <canvas id="canvas" width="600" height="600"></canvas>
const canvas = document.getElementById('canvas')
const stx = canvas.getContext('2d') // 获取 2d 对象
```

如何绘制矩形

```js
ctx.fillStyle = 'green'; // 填充颜色
ctx.strokeRect(x,y) // 绘制边框，四个参数分别表示填充的起始点 x y，以及宽度，高度
ctx.fillRect(10, 10, 150, 100); // 填充矩形，四个参数分别表示填充的起始点 x y，以及宽度，高度
```

画一个圆形

```js
ctx.translate(300, 300) // 原点偏移方向 x 轴 300，y 轴 300
ctx.beginPath() // 开启路径
ctx.arc(0, 0, 100, 0, 2 * Math.PI) // 起始点 x,y 半径
ctx.closePath() // 关闭路径
ctx.strokeStyle = 'red' // 更改颜色为红色
ctx.stroke() // 画： stroke 意思为轻划
```

### canvas 对象

```js
ctx.beginPath() // 新建一条路径生成之后，绘制命令被指到路径上生成的内容
ctx.closePath() // 闭合路径
ctx.stroke() // 通过线条进行绘制
ctx.fill()  // 通过填充进行绘制
```

保存和提取

```js
// 保存和提取状态，是一个栈，也就是说，只能提取栈中最近的一次保存
// 保存当前状态
ctx.save()
// 提取当前状态
ctx.restore()
```



## 参考文章

| 作者         | 链接                                                        |
| ------------ | ----------------------------------------------------------- |
| MDN官方文档  | https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API |
| Sunshine_Lin | https://juejin.cn/post/6986785259966857247                  |
|              |                                                             |
|              |                                                             |
|              |                                                             |


