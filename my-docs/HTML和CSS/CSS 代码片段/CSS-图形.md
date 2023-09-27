## 基础图形

### 椭圆

<div style="width: 200px;height: 100px;background: pink;border-radius: 200px / 100px;"></div>

```css
.box {width: 200px;height: 100px;background: pink;border-radius: 100px / 50px;}
```

### 圆柱

<div style="position:relative;height: 100px;">
  <div style="position:absolute;border-radius: 200px / 50px;width: 200px;height: 100px;background: pink;"></div>
  <div style="position:absolute;border-radius: 200px / 50px;width: 200px;height: 50px;background: lightpink;">
  </div>
</div>

```html
<body>
  <div class='container'>
    <div class="top"></div>
    <div class="bottom"></div>
  </div>
</body>
<style>
  .container{
    position:relative;height: 100px;
  }
  .top{
    height: 100px;
    width: 200px;
    position:absolute;
    border-radius: 200px / 50px;
    background: pink;
  }
  .bottom{
    position:absolute;
    border-radius: 200px / 50px;
    width: 200px;
    height: 50px;
    background: lightpink;
  }
</style>
```

### 梯形

<div style="width: 150px;height:0px;border-bottom:100px blue solid;border-left:40px solid magenta;border-right:40px solid transparent;"></div>

```css
.box{
  width: 200px;
  height:0px;
  border-bottom:100px blue solid;
  border-left:40px solid magenta;
  border-right:40px solid transparent;
}
```

### 六角星

<div style="width: 0;height: 0;border-left: 50px solid transparent;border-right: 50px solid transparent;border-bottom: 100px solid red;position: relative;">
  <div style="width: 0;height: 0;border-left: 50px solid transparent;border-right: 50px solid transparent;border-top: 100px solid red;position: absolute;top: 30px;left: -50px;">  </div>
</div>




```css
.box {width: 0;height: 0;border-left: 50px solid transparent;border-right: 50px solid transparent;border-bottom: 100px solid red;position: relative;}

.box:after {width: 0;height: 0;border-left: 50px solid transparent;border-right: 50px solid transparent;border-top: 100px solid red;position: absolute;content: "";top: 30px;left: -50px;}
```

### 五角星

```css
.div { margin: 50px 0; position: relative; display: block; color: red; width: 0px; height: 0px; border-right: 100px solid transparent; border-bottom: 70px solid red; border-left: 100px solid transparent; -moz-transform: rotate(35deg);-webkit-transform: rotate(35deg); -ms-transform: rotate(35deg); -o-transform:rotate(35deg);}

.div:before { border-bottom: 80px solid red; border-left: 30px solid transparent; border-right: 30px solid transparent; position: absolute; height: 0; width: 0; top: -45px;left: -65px;display: block;content: ""; -webkit-transform: rotate(-35deg);-moz-transform: rotate(-35deg); -ms-transform:rotate(-35deg);-o-transform:rotate(-35deg);}

.div:after { position: absolute; display: block; color: red; top: 3px; left: -105px;width: 0px;height: 0px;border-right:100px solid transparent; border-bottom:70px solid red;border-left: 100px solid transparent;-webkit-transform: rotate(-70deg); -moz-transform: rotate(-70deg); -ms-transform: rotate(-70deg);-o-transform: rotate(-70deg);content: '';}
```

### 心形

```css
.div {position: relative;width: 100px;height: 90px;}

.div:before,#heart:after { position: absolute;content: ""; left: 50px;top: 0;width: 50px;height: 80px;background: red; -moz-border-radius: 50px 50px 0 0; border-radius: 50px 50px 0 0;-webkit-transform: rotate(-45deg);-moz-transform: rotate(-45deg); -ms-transform: rotate(-45deg); -o-transform: rotate(-45deg);transform: rotate(-45deg); -webkit-transform-origin: 0 100%;-moz-transform-origin: 0 100%;-ms-transform-origin: 0 100%; -o-transform-origin: 0 100%; transform-origin: 0 100%;}

.div:after { left: 0; -webkit-transform: rotate(45deg); -moz-transform: rotate(45deg); -ms-transform: rotate(45deg); -o-transform: rotate(45deg); transform: rotate(45deg); -webkit-transform-origin: 100% 100%;-moz-transform-origin: 100% 100%; -ms-transform-origin: 100% 100%; -o-transform-origin: 100% 100%; transform-origin :100% 100%;}
```

### 莫比乌斯环

```css
.div {position: relative; width: 212px; height: 100px;}

.div:before,.div:after {content: ""; position: absolute; top: 0; left: 0; width: 60px;height: 60px;border: 20px solid red; -moz-border-radius: 50px 50px 0 50px;border-radius: 50px 50px 0 50px;-webkit-transform: rotate(-45deg);-moz-transform: rotate(-45deg);-ms-transform: rotate(-45deg); -o-transform: rotate(-45deg);transform: rotate(-45deg);}

.div:after { left: auto; right: 0; -moz-border-radius: 50px 50px 50px 0;border-radius: 50px 50px 50px 0; -webkit-transform: rotate(45deg); -moz-transform: rotate(45deg); -ms-transform: rotate(45deg);-o-transform: rotate(45deg);transform: rotate(45deg);}
```

### 气泡框

```css
div {width: 120px; height: 80px;background: red;position: relative;-moz-border-radius:10px; -webkit-border-radius: 10px;border-radius: 10px;}

.div:before {content:"";position: absolute;right: 100%;top: 26px;width: 0; height: 0;border-top: 13px solid transparent; border-right: 26px solid red;border-bottom: 13px solid transparent;}
```

### 扇形

```css
.div {width: 0;height: 0;border-left: 70px solid transparent;border-right: 70px solid transparent;border-top: 100px solid red; -moz-border-radius: 50%; -webkit-border-radius: 50%;border-radius: 50%;}
```

### 月亮

```css
.div { width: 80px;height: 80px;border-radius: 50%;box-shadow: 15px 15px 0 0 red;}
```

### 十字

```css
.div {background: red;height: 100px;position: relative;width: 20px;}

.div:after { background: red;content: "";height: 20px;left: -40px;position: absolute;top:40px;width: 100px;}
```

## 参考文章

| 作者（文章名称） | 链接                                         |
| ---------------- | -------------------------------------------- |
| 一些 CSS 怪癖    | https://blog-purocean.vercel.app/css-quirks/ |

