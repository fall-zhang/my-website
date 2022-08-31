---
sidebar_position: 3
---

>Create by **fall** on 2021----
>Recently revised in 2022----

## 设计模式

在面向对象软件设计过程中针对特定问题的简洁而优雅的解决方案。

当我们遇到合适的场景时，我们可能会条件反射一样自然而然想到符合这种场景的设计模式。

### 单例模式

保证一个类仅有一个实例，并提供一个访问它的全局访问节点实现的方法为，先判断示例存在与否，存在则直接返回，不存在就创建再返回，确保一个类只有一个实例对象

适用场景，一个单一对象，比如弹窗：无论点击多少次，弹窗应该被创建一次。

```js
class CreateUser{
  constructor(name){
    this.name = name
    this.getName()
  }
  getName(){
    return this.name
  }
}
// 代理实现单例模式
let ProxyMode = (function(){
  var instance = null
  return function(name){
    if(!instance){
      instance = new CreateUser(name)
    }
    return instance
  }
})()
const a = new ProxyMode('thi')
const b = new ProxyMode('tii')
```

### 策略模式

定义一些列算法，把他们一个个封装起来，并使它们可以相互替换。

策略模式目的就是将算法的使用算法的实现分离开来。

一个基于策略模式的程序至少由两部分组成。第一个部分是一组策略类（可变），策略类封装了具体的算法，并负责具体的计算过程。第二个部分是环境类Context（不变），Context接受客户的请求，随后将请求委托给某一个策略类。要做到这一点，说明Context中要维持对某个策略对象的引用。

```js
let levelCount = {
  'A':(money)=>{
    return money*4
  },
  'B':(money)=>{
    return money*5
  }
}
function getData(level,count){
  return levelCount[level](count)
}
let a = getData('A',55)
let a = getData('B',55)
```

### 代理模式

为对象提供一个代用品或占位符，以便控制对它的访问

常用的虚拟代理形式：某一个花销很大的操作，可以通过虚拟代理的方式延迟到这种需要它的时候才去创建（例：使用虚拟代理实现图片懒加载）

图片懒加载的方式：先通过一张loading图占位，然后通过异步的方式加载图片，等图片加载好了再把完成的图片加载到 img 标签里面。

```js
var imgFunc = (function() {
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);
    return {
        setSrc: function(src) {
            imgNode.src = src;
        }
    }
})();
var proxyImage = (function() {
    var img = new Image();
    img.onload = function() {
        imgFunc.setSrc(this.src);
    }
    return {
        setSrc: function(src) {
            imgFunc.setSrc('./loading,gif');
            img.src = src;
        }
    }
})();
proxyImage.setSrc('./pic.png');
```



### 中介者模式

> 中介者模式的定义：通过一个中介者对象，其他所有的相关对象都通过该中介者对象来通信，而不是相互引用，当其中的一个对象发生改变时，只需要通知中介者对象即可。通过中介者模式可以解除对象与对象之间的紧耦合关系。

例如：现实生活中，航线上的飞机只需要和机场的塔台通信就能确定航线和飞行状态，而不需要和所有飞机通信。同时塔台作为中介者，知道每架飞机的飞行状态，所以可以安排所有飞机的起降和航线安排。

中介者模式适用的场景：例如购物车需求，存在商品选择表单、颜色选择表单、购买数量表单等等，都会触发change事件，那么可以通过中介者来转发处理这些事件，实现各个事件间的解耦，仅仅维护中介者对象即可。

```js
const goods = {
  'iphone':200,
  'huawei':128,
  'vivo':88
}
const mediator =(function(){
  const phoneSelect = document.getElementById('phoneSelect')
  const memorySelect = document.getElementById('memorySelect')
  const numSelect = document.getElementById('numSelect')
  return{
    changed:function(obj){
      switch(obj){
        case phoneSelect:
          // do something
          break;
        case memorySelect:
          // do something
          break;
        case numSelect:
          // do something
          break;
      }
    }
  }
})()
phoneSelect.onchange = function(){
  mediator.changed(this)
}
memorySelect.onchange = function(){
  mediator.changed(this)
}
numSelect.onchange = function(){
  mediator.changed(this)
}
```

### 装饰者模式

再不改变对象自身的基础上，在程序运行期间给对象动态地添加方法

例如，假设有自行车，如果有四种型号的自行车可以使用同一款车灯，车铃，如果为他们单独创建对象

需要创建2*4个子8个对象













## 参考文章

| 作者             | 链接                                       |
| ---------------- | ------------------------------------------ |
| 考拉海购前端团队 | https://juejin.cn/post/6844903503266054157 |













