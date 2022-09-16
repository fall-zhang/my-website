---
sidebar_position: 13
---

> Create by fall on:2022-03-10
> Recently revised in:2022-07-11

一般有两类相反的 CSS 属性的写法，两类解决方案

- Semantic CSS 就是一般的写法（语义 CSS）
- Atomic/Utility-First CSS 

## Semantic CSS

来，上代码，最经典的 CSS 书写方式就可以称之为 Semantic CSS

```html
<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img class="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>

<style>
  .chat-notification {
    display: flex;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .chat-notification-logo-wrapper {
    flex-shrink: 0;
  }
  .chat-notification-logo {
    height: 3rem;
    width: 3rem;
  }
  .chat-notification-content {
    margin-left: 1.5rem;
    padding-top: 0.25rem;
  }
  .chat-notification-title {
    color: #1a202c;
    font-size: 1.25rem;
    line-height: 1.25;
  }
  .chat-notification-message {
    color: #718096;
    font-size: 1rem;
    line-height: 1.5;
  }
</style>
```

问题有很多：

- 代码膨胀，每个文件都有很多的重复代码，CSS 逐渐肿胀
- 命名困难，内层的 class 可能会重复使用外层的 class
- 难以复用，导致多条样式在同一语义环境下，没法使用
- 重构成本高，哪怕是把所有字体大小加 `2px`，也需要相当成本

- 

## Atomic/Utility-First CSS 

类似于 BootStrap ，把样式分割为一个个 class 的方法，提供了一种可能的解决方案

```html
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <div class="flex-shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-gray-500">You have a new message!</p>
  </div>
</div>
```

- 减少了自定义 css 的使用
- 原子化，使得更容易复用
- 通过覆盖原原子，实现重构
- 但是书写一个简单的内容，需要复杂的各种 class

### Tailwind CSS

- 一个「 Atomic/Utility-First CSS」的解决方案
- 一套完整的设计系统

```html
<!-- 添加类名即可实现 hover 效果 -->
<button class="bg-black hover:bg-red ...">
  Hover me
</button>
```

特性：语义化，响应式，添加伪类

还可以定义顶层样式

```css
.btn-indigo {
  @apply py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75;
}
// 自定义的顶层样式组合，保证了样式在顶层仍然有效
```

> CSS in JS 可以使用 twin.macro 这个库

特点：

- 还要自己重新记忆一遍所有的类名，语义化减少了一部分学习成本
- 不同团队的命名也不同，学习成本 up
- 扩展新的 css 会重新构建，速度较慢
- 提供统一严谨的代码开发风格

## 参考文章

| 作者       | 链接                                       |
| ---------- | ------------------------------------------ |
| 艾特老干部 | https://juejin.cn/post/6951300894684577823 |

