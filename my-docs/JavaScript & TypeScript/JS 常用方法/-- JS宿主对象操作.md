> Create by fall on ——<br/>
> Recently revised in 2022-02-15

## 浏览器操作

### 清除所有 Cookie

```js
function clearCookies(){
  const cookies = document.cookie.split(';')
  cookies.forEach()
}
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
```

### 滚动到页面顶部

```js
const goToTop = () => window.scrollTo(0, 0);
goToTop()
```



## DOM操作实例

### 在标签中添加标签

```javascript
var oDiv = document.getElementById("oDiv");
// alert(oDiv);
var Btn = document.getElementById("btn");
Btn.onclick = function(){
	var oP = document.createElement("h1");//选择添加的节点类型
    oDiv.appendChild(oP);//在oDiv内部添加一个子节点
    
    var oText = document.createTextNode("<a>咯咯咯</a>")
    oDiv.appendChild(oText);//在oDiv内部末尾添加一段纯文本
}
```

### 鼠标在可视区域内拖拽元素

html

```html
<div id="box1"></div>
```

css

```
*{margin: 0;padding: 0;}
        #box1{height: 200px;width: 200px;background-color: aqua;position: absolute;top: 50px;left: 400px;}   
```

javascript

```javascript
class MoveNode{}
var boxL = null;//容器鼠标点击位置距离容器左上角的位置
var boxT = null;
var defe = false;
var realL = null;// 盒子左距离document的左距离
var realT = null;
window.onload = function(){
  var oDiv = document.getElementById('box1');
  /* 拖动方块 */
  function dragInLimit(node){
    node.onmousedown = function(ev){
      defe = true;
      boxL = ev.clientX - node.offsetLeft;
      boxT = ev.clientY - node.offsetTop;
      document.onmousemove = function(ev){
        if(defe){
          realL = ev.clientX - boxL;
          realT = ev.clientY - boxT;
          if(realL<=0){
            realL = 0;
          };
          if(realT<=0){
            realT = 0;
          };
          if(node.offsetWidth+realL >=document.documentElement.clientWidth){
            realL = document.documentElement.clientWidth -node.offsetHeight;
          };
          if(node.offsetHeight+realT >=document.documentElement.clientHeight){
            realT = document.documentElement.clientHeight -node.offsetHeight;
          }
          node.style.top = (realT) +'px';
          node.style.left = (realL) + 'px';
        }
      }
    }
    document.onmouseup = function(){
      defe = false;
    }
  }
```

### 跟随鼠标移动效果



```css
div{
    height: 16px;
    width: 16px;
    border-radius: 8px;
    background-color: blueviolet;
    position: absolute;
    display: none;
}
```

```js
window.onload = function(){
    var oDiv = document.getElementsByTagName('div');
    document.onmousemove = function(ev){
        oDiv[0].style.top = ev.clientY + 16 +'px';
        oDiv[0].style.left = ev.clientX + 16 +'px';
        
        for(var i=oDiv.length-1; i > 0;i--){
            oDiv[i].style.display = 'block';
            oDiv[i].style.top = oDiv[i-1].style.top;
            oDiv[i].style.left = oDiv[i-1].style.left;
        }
        
    }
}
```

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

### 生成表格

css

```css
table{border: black 1px solid;
    border-collapse: collapse;
}
table tr > td{border: solid blue 1px;width: 60px;height: 22px;}
.col1{background-color: blueviolet;}
.col0{background-color: salmon;}
```

js

```javascript
window.onload = function(){
    var tab = document.getElementById('f-table');
    var rowNum = document.getElementById('rows');
    var colNum = document.getElementById('columns');
    var sub = document.getElementById('submit');
    //如何获取到输入的值
    sub.onclick = function(){
        var rowNums = rowNum.value;//行数
        var colNums = colNum.value;//列数
        if(colNums>0 && rowNums > 0){
            for(var i = 0 ;i<rowNums; i++){
                var nRow = document.createElement('tr');//创建行
                nRow.className = 'col'+ i%2;
                for(var j = 0;j<colNums;j++){
                    var nCol = document.createElement('td');//创建列
                    nCol.innerText ='ss';
                    //如何将生成的列插入到生成的行中间
                    nRow.appendChild(nCol);
                }
                document.createElement('button');
                ; 
                var deleted = document.createElement('td');
                deleted.innerHTML = '<button>删结点</button>';
                nRow.appendChild(deleted)
                tab.appendChild(nRow);
            }
        }
    }
    tab.onclick = function(ev){
        var target = ev.target;
        if(target.nodeName.toLowerCase() == 'button'){
            alert('1');
            tab.removeChild(target.parentNode.parentNode)
        }
    }
}
```

html

```html
<div>
  请输入生成列表的行数、列数
</div>
<input type="number" id="rows">
<input type="number" id="columns">
<button id="submit">
  提交
</button>
<div id="table_p">
  <table name='cattable' id="f-table">
  </table>
</div>
```

