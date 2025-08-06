### super() 和 super(props) 有什么区别

```js
class sup {
  constructor(name) {
    this.name = name;
  }
  printName() {
    console.log(this.name);
  }
}
class sub extends sup {
  constructor(name, age) {
    super(name); // super代表的事父类的构造函数
    this.age = age;
  }
  printAge() {
    console.log(this.age);
  }
}
let jack = new sub("jack", 20);
jack.printName(); //输出 : jack
jack.printAge(); //输出 : 20
```

在上面的例子中，可以看到通过 `super` 关键字实现调用父类，`super` 代替的是父类的构建函数，使用 `super(name)` 相当于调用 `sup.prototype.constructor.call(this,name)`

在 `React` 中，类组件是基于 `ES6` 的规范实现的，继承 `React.Component`，因此如果用到 `constructor` 就必须写 `super()` 才初始化 `this`

```js
因为在 React 会在类组件构造函数生成实例后再给 this.props 赋值，所以在不传递 props 在 super 的情况下，调用 this.props 为 undefined，如下情况：

class Button extends React.Component {
  constructor(props) {
    super(); // 没传入 props
    console.log(props);      //  {}
    console.log(this.props); //  undefined
    // ...
  }
}
```

