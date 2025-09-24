## Table 表格

```less
.pure-table {
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  border: 1px solid #cbcbcb;
}
.pure-table caption {
  color: #000;
  font: italic 85%/1 arial,sans-serif;
  padding: 1em 0;
  text-align: center;
}
.pure-table td,.pure-table th {
  border-left: 1px solid #cbcbcb;
  border-width: 0 0 0 1px;
  font-size: inherit;
  margin: 0;
  overflow: visible;
  padding: .5em 1em;
}
.pure-table thead {
  background-color: #e0e0e0;
  color: #000;
  text-align: left;
  vertical-align: bottom;
}
.pure-table td {
  background-color: transparent;
}
```

表格2

```less
.pure-table {
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  border: 1px solid #cbcbcb;
}
.pure-table caption {
  color: #000;
  font: italic 85%/1 arial,sans-serif;
  padding: 1em 0;
  text-align: center;
}
.pure-table td,.pure-table th {
  font-size: inherit;
  margin: 0;
  overflow: visible;
  padding: .5em 1em;
}
.pure-table thead {
  background-color: #e0e0e0;
  color: #000;
  text-align: left;
  vertical-align: bottom;
}
.pure-table td {
  background-color: transparent;
}
.pure-table-odd td {
  background-color: #f2f2f2;
}
```

## 实现表格固定行列

```html
<style>
  .table-wrapper {
    height: 200px;
    overflow: auto;
  }

  table {
    border-collapse: separate;
    border-spacing: 0;
  }

  td {
    height: 80px;
  }

  thead > tr {
    position: sticky;
    top: 0;
    background: green;
    z-index: 1;
  }

  thead > tr > th:first-child {
    background: green;
  }

  th:first-child,
  td:first-child {
    position: sticky;
    left: 0;
    background: #eee;
  }
</style>

<div class="table-wrapper">
  <table border="1">
    <colgroup>
      <col style="width: 30vw;min-width: 30vw">
      <col style="width: 30vw;min-width: 30vw">
      <col style="width: 30vw;min-width: 30vw">
      <col style="width: 30vw;min-width: 30vw">
    </colgroup>
    <thead>
      <tr> <th>TH1</th> <th>TH2</th> <th>TH3</th> <th>TH4</th> </tr>
    </thead>
    <tbody>
      <tr>
        <td>TD1</td> <td>TD2</td> <td>TD3</td> <td>TD4</td>
      </tr>
      <tr>
        <td>TD1</td> <td>TD2</td> <td>TD3</td> <td>TD4</td>
      </tr>
      <tr>
        <td>TD1</td> <td>TD2</td> <td>TD3</td> <td>TD4</td>
      </tr>
      <tr>
        <td>TD1</td> <td>TD2</td> <td>TD3</td> <td>TD4</td>
      </tr>
    </tbody>
  </table>
</div>
```

<br />

## fixed 相对于父级定位

父元素使用 `transform` 即可。

```html
<style>
.b {
  outline: 1px solid green;
  outline-offset: -1px;
  width: 100px;
  height: 100px;
  transform: translate(0, 0);
}
.d {
  width: 20px;
  position: fixed;
  right: 0;
  height: 20px;
  background: red;
}
</style>
<div class="b">
    <div class="d"></div>
</div>
```

## hover 后保留样式

利用了 `visibility` 可以做动画的特性

```html
<style>
.btn {
  width: 50px;
  margin: 0 25px;
  text-align: center;
  display: inline-block;
  vertical-align: top;
  outline: 1px solid green;
  outline-offset: -1px;
  cursor: pointer;
  margin-bottom: 10px;
}

.detail {
  position: absolute;
  padding-top: 20px;
  left: 0;
  right: 0;
  height: 50px;
  text-align: center;
  background-color: red;
  visibility: hidden;
  transition: visibility 99999s linear;
}

.btn:hover + .detail {
    transition: visibility .1s linear;
    visibility: visible;
}

.btn:hover + .detail ~ .detail {
    display: none; /* 这句的作用是让动画过渡立马停止 */
}
</style>

<div class="btn">按钮1</div>
<div class="detail">详情1</div>

<div class="btn">按钮2</div>
<div class="detail" style="background: green">详情2</div>

<div class="btn">按钮3</div>
<div class="detail" style="background: #666">详情3</div>

<div class="btn">按钮4</div>
<div class="detail" style="background: #aaa">详情4</div>
```

## 参考文章

| 作者（文章名称）  | 链接                                             |
| --------- | ---------------------------------------------- |
| 一些 CSS 怪癖 | <https://blog-purocean.vercel.app/css-quirks/> |

