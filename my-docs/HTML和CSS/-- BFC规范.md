---
sidebar_position: 2
---

> Create by fall on 10 Feb 2022<br/>
> Recently revised in 10 Feb 2022

## 块级格式上下文

Block Formatting Context，块级格式化上下文

BFC 是 CSS 布局的一个概念，是一个**独立的渲染区域**，规定了内部 box 如何布局，并且这个区域的**子元素不会影响到外面的元素**，其中比较重要的布局规则有内部 box 垂直放置，计算 BFC 的高度的时候，浮动元素也参与计算。

- 内部的 Box 会在垂直方向依次放置
- 垂直方向的距离由 margin 决定，属于同一个 BFC 的两个相邻 Box
- BFC 是一个独立容器，容器里面的子元素不会影响到外面的元素
- 计算 BFC 的高度时，浮动的元素也会参与计算高度
- 元素类型和 display 决定了 Box 的类型，不同的 Box 会参与不同的 Formatting Context

如何创建 BFC 

- 根元素，HTML 元素就是
- float 值不为 none
- position 为 absolute 或者 fixed
- display 为 inline-block、 table-cell、table-caption
- overflow 值不为 visible （hidden、auto、scroll）

适用场景

- 解决 margin 传递问题
- 解决 margin 叠加问题
- 解决某元素被浮动元素覆盖问题



