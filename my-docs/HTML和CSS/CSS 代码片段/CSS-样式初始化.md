> Create by **fall** on 04 Apr 2023<br/>
> Recently revised in 27 Nov 2024

## 样式的初始化

```scss
@charset "UTF-8";

body {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #000;
  -webkit-font-smoothing: antialiased
}
img {
  vertical-align: middle;
  border-style: none;
}
ul{
  list-style:none;
}
a {
  color: #409EFF;
  text-decoration: none
}
a:focus,
a:hover {
  color: #66b1ff
}
a:active {
  color: #3a8ee6
}
h1,h2,h3,h4,h5,h6 {
  color: #1c1c1d;;
  font-weight: inherit
}

h1:first-child,
h2:first-child,
h3:first-child,
h4:first-child,
h5:first-child,
h6:first-child,
p:first-child {
  margin-top: 0
}

h1:last-child,
h2:last-child,
h3:last-child,
h4:last-child,
h5:last-child,
h6:last-child,
p:last-child {
  margin-bottom: 0
}
h1 {
  font-size: 20px
}
h2 {
  font-size: 18px
}
h3 {
  font-size: 16px
}
h4,h5,h6,p {
  font-size: inherit
}
small{
  font-size:80%;
}
p {
  line-height: 1.8
}
hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eee
}
pre,code,kbd,samp {
  font-size: 1em;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
}
```



### box-shadow

```css
.default-shadow{
    box-shadow: 1px 1px 4px rgba(0, 0, 0, .07), 0 1px 4px rgba(0, 0, 0, .07), 0 1px 4px rgba(0, 0, 0, .1), 0 2px 6px rgba(0, 0, 0, .08);
}
```

### switch

```html
<input type="checkbox" class="switch">
```

```css
.switch{
  appearance:none;
  position:relative;
  display:inline-block;
  background:lightgrey;
  height:1.65rem;
  width:2.75rem;
  vertical-align:middle;
  border-radius:2rem;
  box-shadow:0px 1px 3px #0003 inset;
  transition: 0.25s linear background;
}
.switch::before{
  content:'';
  display:block;
  width:1.25rem;
  height:1.25rem;
  background:#fff;
  border-radius:1.2rem;
  position:absolute;
  top:0.2rem;
  left:0.2rem;
  box-shadow:0 1px 3px #0003;
  transition:0.25s linear transform;
  transform:translateX(0rem);
}
.switch:checked{
  background:green;
}
.switch::before{
  transform:translateX(1rem);
}
.switch:focus-visible{
  outline:2px solid dodgerblue;
}
.switch:focus{
  /* 不建议使用 outline:none; */
  outline-color:transparent;
}
```



