> Create by **fall** on 2021-10-17
> Recently revised in 2021-11-29

> 注：这次只进行了汇总，需要在抽出时间进行书写。

## Web Component

目的是，JS 原生就可以创建可复用的组件。Custom Element和Shadow DOM都可以让你去创造可复用的组件。

具体实现？创造一个你定制的HTML标签，它将会继承HTM元素的所有属性，并且你可在任何支持的浏览器中通过简单的引入一个script。

### 自定义元素

```js
// CustomElementRegistry 作为构造方法
// customElements 作为实例对象
window.customElements.define('self-design',myElement)
// 第一个参数定义了元素的名称，可以直接在 DOM 中使用
// <self-design></self-design>
```

为了避免和 native 的标签冲突，必须用 `-` 进行链接

```js
class myElement extends HTMLElement{
  constructor(){
    // 必须首先调用 super 方法
    super();
  }
}
customElements.define('my-component', myElement)
```

> 当元素被创建时，会调用 `constrcutor` 函数，当元素被插入 DOM 时，会调用 `connectCallbacck`

### 生命周期

**生命周期回调**

```js
class myElement extends HTMLElement{
  adoptedCallback(){
    // 当元素通过调用document.adoptNode(element)被采用到文档时将会被调用
  }
  static observedAttributes(){ // 被监视的属性
    return ['foo', 'bar']
  }
  attributeChangedCallback(attr, oldVal, newVal){
    // 每当将属性添加到 observedAttributes 的数组中时
    switch(attr){
      case 'foo': 
        break;
      case 'bar':
    }
  }
  connectCallback(){
    // 当这个元素被插入DOM树的时候将会触发当前方法
    // 对元素进行设置
    // 此时可以确定所有的属性和子元素都已经可用的办法
  }
  disconnectCallback(){
    // 当元素从DOM中被移除的时候，会被调用
  }
}
```

> 理论上通过序列化可以将复杂值传递给属性，但是这样会影响性能，并且你可以直接调用组件的方法，所以不需要这样做。

**生命周期执行顺序**

```js
constructor -> attributeChangedCallback -> connectedCallback
```

attributeChangedCallback要在connectedCallback之前执行

因为 web 组件上的属性，被插入DOM前就应该初始化配置了。因此attributeChangedCallback要在connectedCallback之前执行。 这意味着你需要根据某些属性的值，在Shadow  DOM中配置节点，那么你需要在构造函数中引用这些节点，而不是在connectedCallback中引用它们。

### 样式

```html
<template id="mybutton">
    <style>
        button {
            color:blue;
            border: 0;
            border-radius: 5px;
            background-color: brown;
        }
    </style>
    <button id="btn">My Button</button>
</template>
```

### 接收参数

创建模板

```html
<template id="span-group" >
  <span>没什么的，对吧？</span>
</template>
```

生成类

```js
class myElement extends HTMLElement {
  constructor() {
    super()
    const dom = document.querySelector('#span-group')
    const content = dom.content.cloneNode(true)
    const text = this.getAttribute('text')
    content.querySelector('span').innerText = text
    this.appendChild(content)
  }
}
customElements.define('my-component', myElement)
```

使用

```html
<my-component></my-component>
<my-component text="有问题啊"></my-component>
<my-component text="没有问题啊"></my-component>
<my-component></my-component>
```

### 发送参数

有两种发送方式

- 自定义组件上添加自定义方法监听DOM 元素事件，在需要的地方调用组件的自定义方法
- 使用元素的自定义事件

自定义方法

```js
class MyButton extends HTMLElement{
	constructor(){
    super() // 同 react 都需要在最开始调用 super
    const template = document.getElementById('my_button')
    const content = template.content.cloneNode(true)
    const button = content.querySelector("#btn")
    button.innerText = this.getAttributes('text')
    button.addEventListener('click',ev=>{
      this.onClick('f,m,l') // 把点击事件挂载到该组件上
    })
  }
}
// 在需要的时候，调用组件的自定义方法
document.querySelector('my-button').onClick = value => {
    console.log(value)
}
```

使用元素的自定义事件

```js
class MyButton extends HTMLElement{
  constructor(){
    super() // 同 react 都需要在最开始调用 super
    const template = document.getElementById('my_button')
    const content = template.content.cloneNode(true)
    const button = content.querySelector("#btn")
    button.innerText = this.getAttributes('text')
    button.addEventListener('click',ev=>{
      this.dispatchEvent(
        new CustomEvent( 'onClick',{
          detail:'hello hu ya'
        })
      )
    })
  }
}
// 在需要的时候，调用组件的自定义方法
document.querySelector('my-button').addEventListener('onClick',(res)=>{
  console.log(res)
})
```

### Slot

```html
<template id="mybutton">
    <style>
        button {
            color:blue;
            border: 0;
            border-radius: 5px;
            background-color: brown;
        }
    </style>
    <button id="btn">My Button</button>
    <p><slot name="my-text">My Default Text</slot></p>
</template>
```

```html
<my-button>
  <p>Another Text from outside</p>
</my-button>
```



### customElements对象

customElements.prototype.define()

customElements.prototype.get()

customElements.prototype.upgrade()

customElements.prototype.whenDefined()

```js
customElements.whenDefined('my-element')
  .then(() => {
})
```

## 基本使用

首先是 HTML 部分

```html
<template id="span-group">
  <span>没什么的，对吧？</span>
</template>
```

```js
// js
window.onload = function () {
  class yComponent extends HTMLElement {
    constructor() {
      // 必须首先调用 super 方法
      super();
      // 元素的功能代码写在这里
      const template = document.querySelector('#span-group')
      const content = template.content.cloneNode(true)
      this.appendChild(content)
    }
  }
  customElements.define('my-component', myComponent);
}
```

使用

```html
<my-component></my-component>
<my-component></my-component>
<my-component></my-component>
<my-component></my-component>
```

## 进阶使用

`MyButton.js`

```js
const template = document.createElement('template');
template.innerHTML = `
  <style>
  button {
    width: 60px;
    height: 30px;
    cursor: pointer;
    color: blue;
    border: 0;
    border-radius: 5px;
    background-color: #F0F0F0;
  }
  </style>
  <div>
  <button id="btn">Add</button>
    <p id="message"><slot name="my-text">My Default Text</slot></p>
    <ul id="text-list"></ul>
  </div>
`;
const Texts = [
  'My lady, Hello!',
  'BuiBuiBui',
  'BiliBili',
  'Haiwei is NO.1'
]
class MyButton extends HTMLElement {
  constructor () {
    super()
    const content = template.content.cloneNode(true);
    const button = content.querySelector('#btn');
    const textList = content.querySelector('#text-list');
    this.$button = button;
    this.$message = content.querySelector('#message');
    button.addEventListener('click', (evt) => {
      const li = document.createElement('li');
      li.innerText = Texts[Math.floor(Math.random() * 4)];
      textList.appendChild(li);
      this.dispatchEvent(
        new CustomEvent('onClick', {
          detail: 'Hello fom within the Custom Element'
        })
      )
    })
    this.attachShadow({ mode: 'open' }).appendChild(content);
  }
  get text () {
    return this.getAttribute('text');
  }
  set text (value) {
    this.setAttribute('text', value);
  }
  static get observedAttributes() {
    return ['text'];
  }
  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }
  render() {
    this.$message.innerText = this.text;
  }
}

window.customElements.define('my-button', MyButton)

```

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./MyButton.js"></script>
  </head>
  <body>
    <my-button> 
      <p slot="my-text">Another text from outside</p>
    </my-button>
  </body>
  <script>
    const mybutton = document.querySelector('my-button');
    mybutton.addEventListener('onClick', (value) => {
      console.log(value)
      mybutton.text = value.detail
    });
  </script>
</html>
```





## 参考文章

| 作者  | 链接                                       |
| ----- | ------------------------------------------ |
| CodeX | https://juejin.cn/post/6956206468316004382 |


