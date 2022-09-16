---
sidebar_position: 10
---

> Create by **fall** on ————
> Recently revised in 2022-02-20

## flex布局

在当前元素使用：`display: flex` 元素内的排列方式就是 `flex` 布局。

对于采用 `flex` 布局的内容，父元素和子元素都有一套不同的配置，可以根据需要对元素进行操作。

### 父元素

定义排列方向

`flex-direction` 内部盒子的排列方向

* row 默认从左往右进行排列
* row-reverse: 从右往左排列
* column: 从上往下排列
* column-reverse : 从下往上排列

`flex-wrap` 表示子项单行显示还是换行显示

- nowrap 默认不折行（如果元素过多，不折行会导致每个元素宽度减少）
- wrap 换行 
- wrap-reverse 宽度不足从下往上显示，即超出部分换行到上面一行

`flex-flow`：同时表示 `flex-wrap` 和 `flex-direction` 的缩写。

```css
.father{
  display:flex;
  flex-flow:wrap row;
}
.father2{
  display:flex;
  flex-direction:column;
  flex-wrap:nowrap;
}
```

**控制 flex 内元素排列的位置**

`justify-content` 内部盒子方向（`flex-direction`方向）元素和元素之间的中间距的铺开方式。

|取值|样式作用|
|--------|------|
|flex-start  |起始位置对齐|
|flex-end    |结束位置对齐|
|center      |中间对齐|
|space-between|多余空白在元素之间分配(盒子边缘和父容器接触)|
|space-around| 多余空间在每个盒子两侧均匀生成|
|space-evenly|所有空白间距相等(盒子边缘和父容器不接触)|

`align-content`：另一个方向的元素中间距开放式。

|取值|样式作用|
|----|----|
|stretch|默认排列，先按所需要的行数等比划分，再向上对齐|
|flex-start|起始位置对齐|
|flex-end|结束位置对齐|
|center|中心对齐|
|space-between|多余空白在元素之间分配(盒子边缘和父容器接触)|
|space-around|多余空间在每个盒子两侧均匀生成|
|space-evenly|所有空白间距相等(盒子边缘和父容器不接触)|

`place-content`：同时控制 `place-content:<align-content> <justify-content>`

```html
<style>
  .child{
    height: 200px ;
    width: 200px ;
    background-color: cyan;
    margin: 10px;
  }
  .father{
    display: flex;
    flex-flow: row wrap;
    height:600px;
    background-color: chartreuse;
    align-content: center;/*flex-flow 为 row ，就是 column 方向向上的间距如何展示*/
    justify-content:center;/*flex-flow 为 row ，就是 row 方向向上的间距如何展示*/
  }
</style>
<div class="father">
  <div class="child"></div>
  <div class="child" style="height: 120px ;"></div>
  <div class="child"></div>
</div>
```

`align-items`：控制该行内容的对齐方式（元素高低不一时，是中心对齐还是上部对齐，或者是底部对齐）可选值：

- `baseline` 文字的基准线对齐
- `center` 中心
- `end` 
- `flex-end`
- `flex-start`

```html
<style>
  .child{
    height: 200px ;
    width: 200px ;
    background-color: cyan;
    margin: 10px;
  }
  .father{
    display: flex;
    flex-flow: row wrap;
    height:600px;
    background-color: chartreuse;
    align-content: center;
    align-items: baseline;
  }
</style>
<div class="father">
    <div class="child"></div>
    <div class="child" style="height: 120px ;width: 120px;"></div>
    <div class="child" style="height: 120px ;width: 120px;"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child" style="height: 120px ;width: 120px;"></div>
  </div>
```

### 子元素

通过控制 flex 子元素上面的属性，来进行布局

`flex-grow`：当容器空间有空余时，扩展各个子项所占的宽度 默认值为 0，分配的值和为 1 时全部扩展，有两项以上大于1，则按比例进行分配。

`flex-shrink`：空间不足的时候，单个元素的伸缩比例(容器空间没空余) 默认值为1，数值越大，收缩越强烈。

`flex-basis`：分配剩余空间之前元素的默认大小，优先级高于 `width/height` 随着排列方式的不同而改变，上下排列相当于height ，左右排列相当于 width。

`flex`：分别表示 `flex-grow`、`flex-shrink`、`flex-basis`

`order `：改变某一个子项的排序位置，默认值为 `0`，值越大越靠后

`align-self`：单独某一个子项的垂直对齐方式，`align-items` 的单元素控制。

## grid 布局

CSS 网格中使用的一些基本属性是：`display`、`grid-template-columns`、`grid-template-rows`、`grid-column`、`grid-row` 和 `gap`。

### 父元素

`grid-template-rows`：设置行数，grid 布局中的行数。

`grid-template-columns`：设置列数，grid 布局中总共有几列。

`grid-template-areas`：指定 grid 布局的区域

```css
.grid1 {
	grid-template-rows:100px 200px 100px; /* 总共有三行内容，行高分别为 100px 200px 100px */
  grid-template-columns: 100px 200px 100px;	 /* 分为三列，列宽分别为 100px 200px 100px */
}
/* grid-template-column:1fr 1fr 1fr 1fr;可以写成 grid-template-column:repeat(4 , 1fr)*/
1fr 相当于当前面积的 当前fr/所有fr，如果和小于1fr，则只占未分配面积的多少
/* 当总 fr 数小于 1 时，所占面积为对应的数值，如果大于 1 则是剩余面积的对应比例*/
/* grid-template-areas 指定 grid 布局中的区域 */
.grid2 {
  grid-template-areas:
    "a1 a1 a1"
    "a2 a2 a3"
    "a2 a2 a3"
} /* 需要配合子组件中的 grid-area 进行使用*/
.grid2_child{  grid-area:a1}
    然后选择盒子，添加grid-area:a1属性(以及a2、a3)
grid-template: 复合属性书写方式：grid-template-row、grid-template-column、grid-template-area
grid-row-gap :行间距
grid-column-gap :列间距
grid-gap:复合写法输入值依次为(行，列)
justify-items:end(控制所有网格布局中盒子的宽度自适应)__}可选值stretch、start、end、center
align-items:end(控制所有网格布局中盒子的高度自适应)----}
place-items:同时控制justify-items 和 align-items
justify-content(横向)和align-content(纵向):控制网格整体的移动；
place-items:center
```
`align-items` ：在`flex-direction` 排列方向上的对齐方式

| 取值       | 作用         |
| ---------- | ------------ |
| stretch    | flex子项拉伸 |
| flex-start | 容器顶部对齐 |
| flex-end   | 容器底部对齐 |
| center     | 居中水平对齐 |



|取值|作用|
|---|----|
|stretch|默认值拉伸表现为水平或者垂直填充|
|start|左侧或者顶部对齐|
|end|右侧或者底部对齐|
|center|中间对齐|
|space-between|两端对齐|
|space-around|独立不重叠的空白空间|
|space-evenly|平均分配空间|

### 子元素

|取值|作用|
|-----|-------|
|grid-column-start|选择开始的列|
|grid-column-end|选择结束的列 添加span X 可以改变占网格的个数|
|grid-row-start|选择开始的行|
|grid-row-end|选择结束的行 span X 可以改变占网格的个数|
|grid-column|grid-column-end 和 grid-column-start 的简写 数值用 / 隔开|
|grid-row|grid-row-start 和 grid-column-end 的简写 数值用 / 隔开|
|grid-area|grid-row 和 grid-column 两个的复合写法   行起始'列开始'行结束'列结束' |
|justify-self|横向的对齐方式|
|align-self|纵向的对齐方式|
|place-self|横向和纵向的简写方式|

> 父元素：grid-template-columns:repeat(12,1fr)
>
> 子元素：grid-column: 3 / span 8 从第三个开始布局，渲染8个方格

## 参考文章

| 作者         | 链接 |
| :----------- | ---- |
| MDN 官方文档 |      |

