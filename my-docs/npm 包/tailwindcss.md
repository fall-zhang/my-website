> Create by **fall** on:2022-03-10
> Recently revised in:2022-03-12

## Tailwind

特性：语义化，响应式，添加伪类

扩展：

```js
module.exports = {
  theme:{
    extend:{
      colors:{
        'regal-blue':'#243c5a'
      },
      spacing:{
        '13': '3.25rem'
      }
    }
  }
}
```

扩展之后就可以方便的使用

```html
<div class="h-12 w-13 m-13 text-regal-blue">
  高度为 宽度 外边距 字体颜色为设定好的颜色
</div>
```

还可以定义顶层样式

```css
.btn-indigo {
  @apply py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75;
}
// 自定义的顶层样式组合，保证了样式在顶层仍然有效
```



### V3 特性

Tailwind 3 支持内置了 JIT任意值的辅助类

```html
<div class="top-[-113px]">
</div>
```

在 Tailwind 中使用这些有颜色的阴影了

```html
<button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 ...">Subscribe</button>
```

滚动捕捉

滚动后，在某处停止

```html
<div class="snap-x ...">
  <div class="snap-center ..."> <!-- 滚动时，自动捕捉中间 -->
    <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
  </div>
  <!-- 滚动时，自动捕捉左侧 scroll-m{side}-{size} 表示向左侧六个单位长度 -->
  <div class="scroll-ml-6 snap-start  ...">
    <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
  </div>
  <div class="snap-center ...">
    <img src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
  </div>
  <div class="snap-center ...">
    <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
  </div>
  <div class="snap-center ...">
    <img src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
  </div>
  <div class="snap-center ...">
    <img src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
  </div>
</div>
```

下划线

```html
<p>
  I’m Derek, an astro-engineer based in Tatooine. I like to build X-Wings at
  <a href="#" class="underline decoration-sky-500 decoration-2">My Company, Inc</a>. Outside of work, I
  like to <a href="#" class="underline decoration-pink-500 decoration-dotted decoration-2">watch pod-racing</a>
  and have <a href="#" class="underline decoration-indigo-500 decoration-wavy decoration-2">light-saber</a>
  fights.
</p>
```



> CSS in JS 可以使用 twin.macro 这个库

特点：

- 还要自己重新记忆一遍所有的类名，语义化减少了一部分学习成本
- 不同团队的命名也不同，学习成本 up
- 扩展新的 css 会重新构建，速度较慢（慢已成为历史）
- 提供统一严谨的代码开发风格



## 参考文章

| 作者       | 链接                                       |
| ---------- | ------------------------------------------ |
| 艾特老干部 | https://juejin.cn/post/6951300894684577823 |
| 程序员巴士 | https://juejin.cn/post/7043788892234842120 |

> Create by **fall** on:2022-03-10
> Recently revised in:2022-03-12

## Tailwind

特性：语义化，响应式，添加伪类

扩展：

```js
module.exports = {
  theme:{
    extend:{
      colors:{
        'regal-blue':'#243c5a'
      },
      spacing:{
        '13': '3.25rem'
      }
    }
  }
}
```

扩展之后就可以方便的使用

```html
<div class="h-12 w-13 m-13 text-regal-blue">
  高度为 宽度 外边距 字体颜色为设定好的颜色
</div>
```

还可以定义顶层样式

```css
.btn-indigo {
  @apply py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75;
}
// 自定义的顶层样式组合，保证了样式在顶层仍然有效
```



### V3 特性

Tailwind 3 支持内置了 JIT任意值的辅助类

```html
<div class="top-[-113px]">
</div>
```

在 Tailwind 中使用这些有颜色的阴影了

```html
<button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 ...">Subscribe</button>
```

滚动捕捉

滚动后，在某处停止

```html
<div class="snap-x ...">
  <div class="snap-center ..."> <!-- 滚动时，自动捕捉中间 -->
    <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
  </div>
  <!-- 滚动时，自动捕捉左侧 scroll-m{side}-{size} 表示向左侧六个单位长度 -->
  <div class="scroll-ml-6 snap-start  ...">
    <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
  </div>
  <div class="snap-center ...">
    <img src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
  </div>
  <div class="snap-center ...">
    <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
  </div>
  <div class="snap-center ...">
    <img src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
  </div>
  <div class="snap-center ...">
    <img src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
  </div>
</div>
```

下划线

```html
<p>
  I’m Derek, an astro-engineer based in Tatooine. I like to build X-Wings at
  <a href="#" class="underline decoration-sky-500 decoration-2">My Company, Inc</a>. Outside of work, I
  like to <a href="#" class="underline decoration-pink-500 decoration-dotted decoration-2">watch pod-racing</a>
  and have <a href="#" class="underline decoration-indigo-500 decoration-wavy decoration-2">light-saber</a>
  fights.
</p>
```



> CSS in JS 可以使用 twin.macro 这个库

特点：

- 还要自己重新记忆一遍所有的类名，语义化减少了一部分学习成本
- 不同团队的命名也不同，学习成本 up
- 扩展新的 css 会重新构建，速度较慢（慢已成为历史）
- 提供统一严谨的代码开发风格



## 参考文章

| 作者       | 链接                                       |
| ---------- | ------------------------------------------ |
| 艾特老干部 | https://juejin.cn/post/6951300894684577823 |
| 程序员巴士 | https://juejin.cn/post/7043788892234842120 |

