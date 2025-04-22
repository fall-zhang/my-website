> Create by **fall** on ----<br/>
> Recently revised in 2021-12-14

# jQuery

## 基础语法

**获取jQuery元素**

```javascript
$("path")
// path 就是 CSS 选择器，例如：#title .image
```

**更改CSS样式**

```js
$("path").css("height","50px");
```

示例：

```js
$('path').text(value);// 控制内部文字
$('path').css('margin','20px');//控制宽度
$('path').attr('src',rate > 0 ? './1.png' : './2.png');//更改路径
$('path').hover();// 控制鼠标移入时的操作
$('path').text(value);
```

用对象填充多个数据

```javascript
$('path').css({
    height:200, // 好像是要 px 单位来着。。。
    width:200,
    backgroundColor:'red'
})
```

> **什么是隐式迭代**
>
> - 内部处理，并且遍历 DOM 内部元素，这个过程叫做隐式迭代
> - 对所有匹配到的元素内部进行遍历

### 链式编程

可以将一系列的操作连起来

```js
$('class').addClass('classname').siblings().removeClass('classname');
//向class类中添加类名，并且移出兄弟节点中的该类名
```

jquery 通过调用完成后，返回当前对象的 this，实现链式编程。

### 操作类名

```js
// 添加类名addClass()
$(".path").addClass("className")
// 移除类名removeClass()
$(".path").removeClass("className")
// 切换类名状态toggleClass()
$('.path').toggleClass('className')
// toggle 就是有就删除，没有就加上
```

## 选择器筛选

**jQuery筛选选择器**

| 语法       | 用法          | 描述                         |
| ---------- | ------------- | ---------------------------- |
| :first     | $('li:first') | 获取第一个li元素             |
| :last      | $('li:last')  | 获取最后一个li元素           |
| :eq(index) | $("li:eq(2)") | 从零开始，获取索引为2的元素  |
| :odd       | $("li:odd")   | 获取到元素中索引为奇数的元素 |
| :even      | $("li:even")  | 获取元素中索引为偶数的元素   |

**jQuery筛选的方法**

|        语法        |              用法              |                    说明                    |
| :----------------: | :----------------------------: | :----------------------------------------: |
|      parent()      |        $("li").parent()        |            查找最近一级父级元素            |
| children(selector) |     $("ul").children("li")     | 相当于$("ul>li"),最近一级子元素（亲儿子）  |
|   find(selector)   |       $("ul").find("li")       |        相当于$("ul li"),后代选择器         |
| siblings(selector) |   $(".first").siblings("li")   |        查找兄弟节点，不包括自己本身        |
|  nextAll([expr])   |     $(".first").nextAll()      |       查找当前元素后面的所有同辈元素       |
|  prevtAll([expr])  |      $(".last").prevAll()      |        查找当前元素之前所有同辈元素        |
|  hasClass(class)   | $("div").hasClass("protected") | 检查元素是否含有某个特定的类，有则返回true |
|     eq(index)      |         $("li").eq(2)          |      相当于$("li:eq(2)"),index从0开始      |

## 动画

**显示隐藏**

- `show()` 、`hide()` 、`toggle()`
  - [speed,[easing],[fn]]
  - 参数可以省略
  - speed 三种预设速度之一的字符串("slow","normal","fast")或者是毫秒数
  - easing:(Optional)制定切换效果，默认“swing”，可用"linear 4"
  - fn: 回调函数，执行完动画后执行的函数

滑动：`slideDown()` 、`slideUp()`、 `slideToggle()`

淡入淡出效果 `fadeIn()` 、`fadeOut()`、`slideToggle()`、`fadeTo()`

自定义动画 `animate()`

- animate(params,[speed],[easing],[fn])

- params：想要更改的属性	以对象形式传递，属性名不用带引号，复合样式属性采取驼峰命名法

> 可以通过`.hover`设置进入和出去的效果并且通过该方法实现，可以极大简化代码
>
> hover 内有两个方法，如果只写一个，那么将一个代码执行两次
>
> ```js
> $('ul>li').hover(function(){
>  	$(this).slideToggle()
> })
> ```
>
> ```js
>$('ul>li').stop().hover(function(){ // stop 可以在新动画触发后，没进行完的动画停止进行
> 	$(this).slideToggle()
> })
> ```

## 获取属性操作

获取属性方法

`prop("属性")`

设置属性值

`prop("属性","属性值")`


> 获取自定义属性可以通过attr()获取，使用方法类似prop()
>
> h5中新添加的属性，可以将数据存放在元素里面，通过
>
> $("div").data("index") 以数字型返回数据

### 内容文本和值

```js
// 输出获取的内容，或者是输出文本
console.log($("div").html())
console.log($("div").text())
// 输出获取的值
console.log($("div"),val)
```

## jQuery 元素操作

### 遍历元素

`$("div").each(index,function(){})`

> 第一个参数一定是索引号
>
> 第二个参数是dom对象
>
> `$.each()`  方法便利元素，主要用于遍历元素，处理数据

```js
$("div").each(function(index,element){
    console.log(index);
    $(element)//将DOM对象转化成为jQuery对象
})
//$.each()
$.each($("div"),function(i,ele){
    console.log(i);
    console.log(ele);
})
$.each({name:"tom",age:18},function(key,val){
    console.log(key);
    console.log(val);
})
```

### 添加元素

`$("div").append(li);`

> 相当于添加子元素。在最后一个子节点后插入元素
>
> `$("div").prepend(li);` 类似于上一个，在第一个子节点之前插入

`$("div").after(li);`

> 把li插入到当前元素后面
>
> `$("div").before(li);` 把li插入到当前元素前面

### 删除元素

`element.remove()` 

> 删除匹配的元素

`element.empty()`

> 删除匹配元素集合中所有的子节点，杀掉孩子

`element.html("")`

> 清空匹配的元素内容

## 事件学习

事件注册

click () change()

事件处理

`$("ul").on("click","li",function(){alert("1")})`  其中 li 是 div 的子节点

> ```js
> $("div").on({
> 	mouseenter:function(){
> 		$(this).css("background","skyblue");
> 	}
> 	mouseleave:function(){
>     	$this.css("background","pink")
> 	}
> });
> ```
>
> 多个样式使用一个效果时
>
> ```js
> $("div").on("mouseenter mouseleave",function(){
> 	$(this).css("background","blue");
> })
> ```
>
> 发生上面任意一个事件都会执行下面的程序

事件委托：事件委托指的是，把事件的调用放在他的父节点上，也能实现点击子节点时的效果

事件移除

`$("div").off()` 移出所有div上面的事件

> `$("div").off("click")` 移出所有点击事件
>
> `$("div").off("click","li")`移出所有事件委托

一次性事件

用`one()`绑定的事件只能触发一次

> `$("div").one("click",function(){console.log("ppap")})`

自触发事件

> - `$("div").click()`
> - `$("div").trigger()`
> - `$("div").triggerHandler()`  不会触发浏览器默认行为

阻止事件冒泡

```js
$("div").on("click",function(event){
event.stopPropagation()
})
```

## 其它方法

### 拷贝对象

`$extend(targetObj,obj)`

> 一般数据类型会创建或者覆盖，object对象类型会继承----浅拷贝

`$extend(true,targetObj,obj)`

> 深拷贝，在对象会创建新的方法

### 多库共存

> 如果其它库也同时调用$()方法，
>
> - 可以通过jQuery()
> - var bababa = jQuery.noConflict()

### jQuery插件

瀑布流、图片懒加载、全屏滚动

### 获取尺寸

| 语法                               | 用法                            |
| ---------------------------------- | ------------------------------- |
| width()/height()                   | 获取width和height               |
| innerWidth()/innerHeight()         | 获取width+padding               |
| outerWidth()/outerHeight()         | 获取width+padding+border        |
| outerWidth(true)/outerHeight(true) | 获取width+padding+border+margin |

> 如果参数为空，获取相应数值，返回值为数字类型
>
> 如果参数为数字，修改相应值

### 获取文档位置

> 获取距离文档的偏离位置
>
> `$("div").offset() `  内如果填入参数，则将值设置为参数
>
> 获取距离带有定位父级元素的位置，如果父元素没有定位的父级，那么以文档为主
>
> `$("div").position()`