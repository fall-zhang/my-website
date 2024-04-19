> Create by **fall** on 10 Oct 2023
> Recently revised in 11 Oct 2023

### json 和 xml 数据的区别

1. 数据体积方面：xml是重量级的，json是轻量级的，传递的速度更快些。 
2. 数据传输方面：xml在传输过程中比较占带宽，json占带宽少，易于压缩。 
3. 数据交互方面：json与javascript的交互更加方便，更容易解析处理，更好的进行数据交互 
4. 数据描述方面：json对数据的描述性比xml较差 
5. xml和json都用在项目交互下，xml多用于做配置文件，json用于数据交互。 

a.js 和 b.js 两个文件互相 require 是否会死循环? 双方是否能导出变量? 如何从设计上避免这种问题?

### require 具体实现原理是什么

**require 基本原理**

 <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0f1dbabee4d849d3a3e018c91f04c619~tplv-k3u1fbpfcp-watermark.image"  />

**require 查找路径**

<img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e49999989bcf496facdbc91179bebd71~tplv-k3u1fbpfcp-watermark.image" alt="图片.png" />

require 和 module.exports 干的事情并不复杂，我们先假设有一个全局对象{}，初始情况下是空的，当你 require 某个文件时，就将这个文件拿出来执行，如果这个文件里面存在 module.exports，当运行到这行代码时将 module.exports 的值加入这个对象，键为对应的文件名，最终这个对象就长这样：

```
{
  "a.js": "hello world",
  "b.js": function add(){},
  "c.js": 2,
  "d.js": { num: 2 }
}
```

当你再次 require 某个文件时，如果这个对象里面有对应的值，就直接返回给你，如果没有就重复前面的步骤，执行目标文件，然后将它的 module.exports 加入这个全局对象，并返回给调用者。这个全局对象其实就是我们经常听说的缓存。所以 require 和 module.exports 并没有什么黑魔法，就只是运行并获取目标文件的值，然后加入缓存，用的时候拿出来用就行。

具体可以看看这篇 [深入 Node.js 的模块加载机制，手写 require 函数](https://juejin.cn/post/6866973719634542606)

https://juejin.cn/post/6974565176427151397)