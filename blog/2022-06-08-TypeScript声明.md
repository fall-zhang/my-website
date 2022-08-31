---
slug: TypeScript声明
title: TypeScript声明
authors: fall
---

## 声明空间

声明空间，就是声明类型和声明变量所在的不同空间。类型声明空间是 TypeScript 声明的类型空间，这些空间的变量**不能进行赋值**。变量声明空间可以进行赋值：

类型声明空间

```ts
class Foo{}
type Bus = {}
interface Bar{}
// 这些都可以作为类型注解使用
let foo:Foo
let bus:Bus
let bar:Bar
// 但是 Bar、Bus 不能赋值，因为它们只存在类型声明空间
const bar = Bar // error: cannot find name 'Bar'
```

变量声明空间

```ts
class Foo {}
const someVar = Foo
// class Foo {}  Foo 既会被放置到变量声明空间，也会放到类型声明空间
// 所以 class 声明的内容既可以作为类型注解，也可以进行赋值
```

## 全局模块

全局模块就是任何文件都可以访问的模块，默认情况下，在一个新的 ts 文件中写代码时，它处于全局命名空间中。

```ts
// foo.ts
const foo = 123
// 此时，如果在相同的项目里，创建一个新的文件 bar.ts 系统会允许你使用 foo 内的内容
// bar.ts
const back = foo
```

想避免暴露在全局作用空间

```ts
// foo.ts
export const foo = 123
// 如果想继续使用 foo 就需要进行导入，并且使用其他变量也不会污染全局作用域
// bar.ts
import {foo} from './foo' // 此时还会将该文件定义为一个模块，文件内定义的变量也不会污染全局空间
const back = foo
```

> 所以文件内，只要使用了 export 关键字，就会表示该文件是个模块。所以也常使用 `export {}` 放在首行，表示是一个模块。

## 环境声明

通过 `declare` 关键字来告诉 TypeScript 一个其他地方已经存在的代码（内容）。

```ts
// main.ts
foo = 1123 // Error
```

通常会使用 `.d.ts` 结尾的文件进行声明，一般会使用 `global.d.ts` 或者 `vendor.d.ts`。

```
// global.d.ts
declare let foo:any
// main.ts
foo = 1123 // declare 声明了该变量，将不会报错

```

其他的声明文件也类似于该文件，但是更加详细，所以如果自带 `.d.ts` 结尾的声明文件，一般不需要自行书写。

在声明文件中，每个根级别的声明必须以 `declare` 关键字作为前缀， TypeScript 将不会把它编译成任何代码。

开发者需要确保这些声明文件，和声明的内容在编译时存在。

> 声明文件可以声明各种类型

### TS的声明文件

编译器通过声明文件能够显示来自其他包的错误和提示。并且声明文件提供有关库的所有类型信息。

获取一个库的声明文件有两种方式

- **Bundled** 包含了自己的声明文件，我们只需安装这个库，就可以立即使用它，看库中是否包含 index.d.ts 文件，有些库会在 `package.json` 文件的 `typings` 或 `types` 属性中指定类型文件。
- **Definitely Typed** 是一个庞大的声明仓库，为没有声明文件的 JavaScript提供类型定义。这些类型定义通过众包的方式完成，微软和开源者一同管理。（比如 React 没有自己的声明文件，可以从 Definitely Typed 获取它的声明文件）

```bash
# yarn 
yarn add --dev @types/react
# npm 
npm i --save-dev @types/react
```

### 第三方代码的声明

有时，可能在某些内容上添加显式注解，并且你会在类型声明空间中使用它。

可以通过 `type` 快速实现它

```
declare type Staff = {
	name:string
}
```

> 我个人倾向认为这是自定义声明，在声明文件中进行声明之后，在任何其他的文件中都可以使用，并且无需进行引入。在使用中要符合 `declear` 中定义的约束。

### 第三方 NPM 模块

可以用声明一个全局模块的方式，来解决查找模块路径的问题。

`global.d.ts` 是一种扩充 `lib.d.ts` 很好的方式，如果你需要的话。

```
// 定义 global.d.ts
declare module 'jquery'{
  // some variable declarations
  export var bar: number;
}
// 导入使用 main.js
// 在必要的时候进行导入
import * as $ from 'jquery'
// import vue from 'vue' // 如果没有进行 declare 声明，直接引入会报错
```

有人会声明 `npm i @types/jquery`

### 非 JS 资源

在 ts 文件中，可能引入其他类型的文件，比如 png。为了避免报错，向文件中进行声明。

```
// index.d.ts
declare module '*.svg'
declare module '*.png'
declare module '*.vue'{ // 用于定义以 .vue 结尾的文件，并且让 typescript 跳过识别
  import type {DefineComponent} from 'vue'
  const component: DefineComponent <{}, {}, any>
  export default component
}
// 在声明之后就可以使用
import * as foo from './some/file.css'
```

## 参考文章

| 文章名称           | 链接                                                         |
| ------------------ | ------------------------------------------------------------ |
| 深入理解TypeScript | [jkchao.github.io/typescript-…](https://link.juejin.cn?target=https%3A%2F%2Fjkchao.github.io%2Ftypescript-book-chinese%2F) |
| 铁皮饭盒           | [juejin.cn/post/684490…](https://juejin.cn/post/6844903993727008776) |

如有错误（不当）可以在评论区指出。

转载请注明出处。

