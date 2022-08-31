> Create by **fall** on 2020-05-12
> Recently revised in 2022-04-30

## 文档对象模型DOM

### document对象

document是从`<html>`到`</html>`结束的部分，也是文档展示的部分

节点类型

- 元素节点：`<div></div>`
- 文本节点：`okokyes` 等文本内容
- 属性节点： `id="box1"`

```js
var ss = document.getElementById(id)
// 功能: 通过id获取符合条件的元素，(界面上所有 id 必须都是唯一的)
// 返回值: 符合条件的一个节点
alert(ss.id)//返回id
alert(ss.title)//返回title
alert(ss.className)//返回类名
alert(ss.style.width)//返回样式中的高

ss.id = "ssu"// 设置id
ss.title = 'soo' // 设置标题
ss.className = 'box4'// 设置类名
ss.style.width = '44px'// 给CSS对象中的高重新赋值
// style 中的类名大多数和CSS中的样式相同，部分存在"-",将"-"删除，并将"-"后的首字母大写即可
// 注：style只能访问样式和修改行间样式，即body内，访问不到style属性中的样式

node.getElementsByTagName()// 获取当前节点内部的节点
node.getElementsByClassName()// IE8以下不兼容
document.getElementByName()// 只能使用document进行获取,
// getElementByName需要将它用在表单元素上，因为name属性在其他地方不生效

var tag = document.getElementByTagName("li")// 查找document下所有li节点
tag[0].style.width = "50px" // 修改第一个查找到的属性的值

var after = document.getElementById('id')
var aftertag = after.getElementByTagName('li')// 获取id子节点中的的li

document.querySeletor()
// 返回值：找到符合条件的第一个元素节点
// 参数 : 参数的写法和style选择器的写法相同
document.querSeletorAll()
// 返回值：找到所有符合条件的元素节点
// 确保兼容 IE8 的 node.getElementsByClassName()
function elementsByClassName(node,classStr){
    var nodes = node.getElementsByTagName("*");
    var arry =[];
    for (var i = 0 ;i<nodes.length;i++){
        if(nodes[i].className === classStr){
            arry.push(nodes[i])
        }
    }
    return arry;
}
```


### 获取有效样式的方法

```javascript
alert(oDiv.style.width);// 只能获取行内(内联)样式
alert(oDiv.currentStyle['height'])//  IE兼容
alert(getComputedStyle(oDiv)["height"]);//火狐，谷歌浏览器
//将两个方法通过函数封装起来就可以实现兼容所有浏览器
function getStyle(node,cssStyle){
	return node.currentStyle ? node.currentStyle['height'] : getComputedStyle(oDiv["height"])
}
```

### attribute改变值

```javascript
//通过attribute可以改变许多值
//访问自定义名字
//空格，回车，换行，缩进，虽然看不见，但都是字符
window.onload = function(){
    var oDiv = document.getElementById("id")
    oDiv.attributes["title"]//可以直接输入结果
    alert(oDiv.getAttribute("id"))//输出id属性的值
    oDiv.setAttribute("class",'box1')//设置属性名
    oDiv.removeAttribute("title")//删除属性，以及属性名
    
    alert(oDiv.innerHTML())//将父标签内部添加元素，并且元素可以生效
    alert(oDiv.innerText())//将父标签内部添加text，不会在页面生效
    oDiv.outerHTML = "<h1>ssss</h1>"//包括父标签一起修改
    alert(oDiv.childNodes[0].nodeValue)
	alert(oDiv.childNOdes[0].nodeName)
}
```

### 根据当前节点查找

```js
oDiv.childNodes.length// 返回节点个数，包括文本节点
oDiv.childNodes[i].nodeType// 返回当前节点的节点类型
oDiv.firstChild
oDiv.lastChild
oDiv.nextSibling// 访问当前节点中的下一个节点,包括文本节点
oDiv.previousSibling// 访问当前节点的前一个节点

oDiv.parentNode()
oDiv.children.length// 返回所有节点，不包括文本节点
oDiv.firstElementChild
oDiv.lastElementChild
oDiv.nextElementSibling// 下一个非文本节点
oDiv.previousElemtntSibling
```

**节点类型**

|          | nodeType | nodeName | nodeValue |
| -------- | -------- | -------- | --------- |
| 元素节点 | 1        | 标签名   | null      |
| 属性节点 | 2        | 属性名   | 属性值    |
| 文本节点 | 3        | #text    | 文本内容  |

> 其它nodeType ：注释  8 | 文档  9
>
> 文本节点：包括元素之间的空格，或者是回车在内的内容

### 节点操作

> `createElement(nodeName)` 创建节点
>
> - 格式：document.createElement()
> - 参数：标签名
> - 返回值：创建好的节点

> `appendChild()` 在选定的内容里插入(添加)节点
>
> - 格式：document.appendChild()
> - 格式：document.cloneNode()// 只克隆节点
> - document.cloneeNode(true)// 克隆时包括节点和里面的内容
> - 返回值: 克隆出来的新结点

> - `cloneNode()` 克隆添加的当前节点
>
> - 返回值，克隆后的节点
> - 用于复制节点

> `replaceChild()` 替换节点
>     	格式: box1.parentNode.replaceChild(box2,box1)
>     	作用: 用box2,把box1替换掉

> `insertBefore()` 在前方插入节点
>
> - 格式: box1.parentNode.insertBefore(box2,box1 )
> - 将box2插入到box1的前面

> `removeChild()` 删除结点
>
> - 格式： box.parentNode.remove()
> - 作用：将节点删除

```javascript
window.onload = function(){
  var oDiv = document.getElementById('box1')
  oDiv.parentNode()//返回父节点
  var oP = cloneNode(oDiv)
  document.body.insertBefore(oP,oDiv);//将oP节点插入到oDiv节点的前面
  document.parentNode.replaceChild(box2,box1)
}
```

> **注意事项：**
>
> 文档碎片操作时，通过一次性将文档插入到页面中的操作，进而节省计算时间

### 添加一个节点

```js
const dom = document.createElement('h1')
dom.innerHTML = `Hello World`
const node = document.querySelector('.reactTitle')
node.appendChild(dom)
```

## 容器宽度的获取

获取元素节点宽度

- `oDiv.offsetWidth` 元素的宽度，不包括 margin
- `oDiv.offsetHeight` 元素的高度，不包括 margin

```js
oDiv.offsetleft
oDiv.offsetTop
// 获取当前可视区域距离第一个有定位的父节点的位置	
getComputedStyle(oDiv)[width]
// 获取的仅为容器height设置的宽度
```

获取当前 document 容器的宽度

```js
var width = document.documentElement.clientWidth;
var width = document.body.clientWidth;
```

## 绑定事件

### 事件类型及种类

- **鼠标事件**
  - `click`			单击
  - `dblclick`		双击	
  - `mouseover` 鼠标移入(经过子节点会重复触发)
  - `mouseout`   鼠标移出(经过子节点会重复触发)
  - `mousemove` 鼠标移动（会不停的触发）
  - `mouseup` 鼠标抬起
  - `mousedown` 鼠标按下
  - `mouseenter` 鼠标移入(经过子节点不会重复触发)
  - `mouseleave`  鼠标移出(经过子节点不会重复触发)
- **键盘事件**
  - `keypress`	 只有按字符键和方向键有效
  - `keydown`    键盘按下时触发，并且长按功能键不会连续触发
  - `keyup`    键盘抬起来时触发
- **HTML事件**
  - **window事件**
    - `load`     当前页面加载完后触发
    - `onload`  当前页面解构的时候   仅IE浏览器
    - `scroll`    页面滚动的时候触发
    - `resize`     窗口大小发生变化触发
  - **form表单事件**
    - `blur`    失去焦点时触发
    - `focus`   获取焦点触发
    - `select`  输入框内文本选中时触发
    - `change`   当对输入框内容进行修改，并且退出编辑时时触发

```js
oDiv= document.getElementById('box')
oDiv.onchange = function(){
	this.style.background = 'cyan' 
}
```

- 必须添加在form元素上
  - submit	点击submit上的按钮才会触发
  - reset       点击reset按钮才会触发	

### 鼠标事件对象的属性

- button
  - 返回值 0,1,2 ，分别为鼠标左键滚轮和右键的点击
- 获取当前位置
  - `clientX`  `clinentY`   在可视区域的位置
  - `pageX`   `pageY`    当前页面的位置，（滚轮滑动会改变值）
  - `screenX`  `screenY`  当前电脑显示器的横纵位置
- 获取当前节点的页边距
  - `offsetLeft`
  - `offsetRight`

- 获取容器当前顶端高度
  - `document.docuemtElement.scrollTop`
  - `document.body.scrollTop`
- 获取document容器的宽度
  - `var width = document.documentElement.clientWidth`
  - `var width = document.body.clientWidth`

```js
document.onmousedown = function(ev){
	var e = ev || window.event;
	alert(e.button);
}
var oDiv = document.getElementById('box');
oDiv.offsetLeft;
```

### 键盘事件对象属性

- `shiftKey`     按下shift键，为true
- `altKey`
- `ctrlKey `  
- `metaKey`     
- windows 	    按下开始菜单键, 为true
- macos系统     按下command键，为true

```
document.onclick = function(ev){
	if(ev.ctrlKey){
		alert('ctrlyes ')
	}
}
```

- `keyCode` 键码

- which    键码

  都只能添加给 onkeydown

  不区分大小写并且返回区分大小写字母的ASCII码值

```js
window.onkeydown = function(ev){
	var e = ev||window.event;  //对获取方法进行兼容
	var which = e.which||e.keyCode; //键码操作的兼容
	alert(which)
}
```

### 触发对象

触发对象是指 target 属性，只存在事件对象中，并且指向触发该事件的子容器

```js
window.onclick = function(){
  var e =ev||window.event;
  var target = ev.target;
  alert(target.innerHTML)
}
```

### 事件冒泡

触发该事件的时候，同样会触发父节点的事件

解决的方法

```js
oli.onclick = function(ev){
  ev.cancelBubble = true;
  ev.stopPropagation =true;
}
```

## 浏览器默认行为

取消浏览器默认右键菜单

```js
document.onload = function(){
	document.oncontextmenu = function(){
		return false;
	}
}
```

阻止浏览器点击a链接时弹出窗口

```javascript
function preDef(ev){
    if(ev.preventDefault){
        ev.preventDefault();
    }else{
    	window.event.returnValue = false;//IE8兼容
    }
}
```

### 浏览器拖拽行为

自制七巧板？？？？

三个事件的应用

- mousedown      点击时计算位置
- mousemove      记录移动距离
- mouseup          停止移动

## 事件委托

**应用场景**

如果使用 for 循环给节点添加事件，倘若再新添加新的节点，新的节点不会生效事件，并且**浪费资源**

实现步骤

1. 找到当前节点的父节点或者祖先节点
2. 将事件添加到父节点或者是祖先节点
3. 找到触发对象，是否为想要的触发对象，然后进行操作

```javascript
window.onload = function(){
    var btn = document.getElementById('btn');
    var list = document.getElementById('list');
    var i = 0;
    //点击则新增节点
    btn.onclick = function(){
        var nList = document.createElement('li');//每次循环都要新建一个节点
        alert(i);
        nList.innerHTML =((i++)+5)*1111;
        list.appendChild(nList);
    }
    list.onclick =function(ev){
        ev.target.style.backgroundColor = 'red';
    }
}
```

## 事件监听器

`addEventListener()`

- 格式 ： `node.addEventListener('click')`
- 参数:  
  - 参数一：事件类型
  - 参数二：绑定函数
  - 参数三：布尔值
    - true    事件捕获    从父节点到子节点
    - false   事件冒泡    默认（从子节点到父节点）

```javascript
//示例
oBtn.addEventListener('click',function(){
    alert('点击')
},false)
```

`removeEventListener()`

- 格式： `node.removeEventListener`
- 参数：
  - 第一个参数    事件类型
  - 第二个参数    删除的函数名称

只删除某一个函数而不影响其他的函数

```javascript
oBtn.addEventListener('click',function(){
    alert('点击');
},false);
function show(){
    alert('强制')
}
oBtn.addEventListener('click',show,false);
oBtn.removeEcentListener('click',show);
```

低版本（IE）浏览器兼容

**attachEvent()  &   datachEvent()**

```javascript
//分别输入节点名称，事件类型，方法名
function addEvent(node,evenType,funcName){
    node.addEventListener ? nodenode.addEventListener(evenType,funcName,false) : node.attachEvent('on'+ eventType,funcName);
}

function removeEvent(node,evenType,funcName){
    node.removeEventListener ? node.removeEventListener(eventType,funcName) : node.detachEvent('on'+eventType,funcName)
}
```

## JS动画

动画必须包含

- 有开始，有结束
- 重复点击按钮速度加快

解决办法

- 运动必须保证每次设置一个定时器，必须关闭上一个定时器
- if & else 将运动和静止分隔开

### 回调函数

将一个函数作为实参传入后，使用该实参的过程称之为回调函数

在 C 语言，C++、里面称之为函数指针

### 函数防抖和节流

函数防抖（debounce），指的是，如果一定时间内，触发了 20 次的事件，等待事件一定时间内都不触发，再给出最终结果会按照最终结果执行。

函数节流（throttle），指的是如果同一个事件，一秒内触发100次，持续十秒，全部执行会造成很大的资源浪费，所以，如果一直在触发事件，在执行事件时，一秒执行一次。

## DOM

### 获取节点

**获取节点**

- `document.getElementById()` 通过 `id` 获取元素
- `document.getElementsByName()` 通过 `name` 获取元素节点
- `document.getElementsByTagName()` 通过 元素标签 获取节点
- `document.querySelector()` 通过元素选择器获取元素

**节点的指针**

- `firstChild` 元素子节点的第一个
- `lastChild` 元素子节点的最后一个
- `childNodes` 获取元素子节点列表
- `previousSibling` 当前节点的前一个节点
- `nextSibling` 当前节点的后面一个节点
- `parentNode` 当前节点的父节点

### 节点的操作



**创建节点**

- `createElement` 创建元素节点
- `createAttribute` 创建属性节点
- `createTextNode` 创建文本节点



**插入节点**

- `appendChild` 向子节点的最后添加节点
- `insertBefore` 当前节点前面插入节点

**替换节点**

- `replaceChild` 用前者替换后者节点

**复制节点**

- `cloneNode` 创建节点的副本

**删除节点**

- `removeChild` 删除指定节点

### 属性操作

- `getAttribute` 获取元素节点指定属性的值
- `setAttribute` 创建或者改变元素节点的属性
- `removeAttribute` 移除属性

**文本操作**

- `insertData(place,string)` 从 place 位置插入 string
- `appendData` 把 string 插入到文本末尾处
- `deleteData(offset,count)` 从 offset 开始产出 count 个字符
- `replaceData(offset,count,string)` 从 offset 开始，用 string 替换 count 个字符
- `splitData(offset)` 从 offset 开始，将文本分为两个及诶点
- `substring(offset,count)` 返回由 offset 开始的 count 个节点
