> Create by fall on:2022-09-19
> Recently revised in:2022-09-20

> 在 vue 中使用 typescript，建议使用 Vite，因为 webpack 的分析有缺陷，且运行时类型检查需要占用额外的资源。

## 语言语法

### 组合式 API

所有内容必须放在 `<script lang="ts" setup>` 中进行使用

#### defineProps

```ts
// 1. 使用 ts 定义 props
interface Props {
  foo: string
  bar?: number
}
const props = defineProps<Props>()
// 通过 ts 调用不能设置默认值，可以通过 withDefaults 传递默认值
interface Props {
  foo: string
  bar?: number
}
const props = withDefaults(defineProps<Props>(),{
  foo: 'hello'
})
// 传递默认值也可以通过 *实验性的* 响应性语法糖：对 defineProps() 的响应性解构
// 默认值会被编译为等价的运行时选项
interface Props {
  name: string
  count?: number
}
const { name, count = 100 } = defineProps<Props>()
```

#### defineEmit

```ts
// 运行时
const emit = defineEmits(['change', 'update'])
// 基于类型
const emit = defineEmits<{
  (e: 'change', id: number): void // 使用名称，传入的参数
  (e: 'update', value: string): void
}>()
```

#### ref

```ts
import type {Ref} from 'vue'
const year1 = ref(2020) // 没有提供泛型，默认推断为 Ref<number>
const year2:Ref<string|number> = ref(2022)
// 指定泛型参数，但没有初始值，默认为 Ref<T,undefined>
const n = ref<number>() // 此处为 Ref<number|undefined>
```

#### reactive

```ts
interface Book{
  title:string
  publishYear?:number
}
const book:Book = reactive({
  title:'成年人的谎言生活'
})
// reactive 中不推荐使用泛型，因为处理了深层次 ref 解包的返回值与泛型参数的类型不同。
```

#### computed

```ts
const count = ref(0)
const moreCount = computed<number>(()=>count.value+5) // 通过泛型来规定返回值的类型
```

#### 事件

```vue
<template>
  <input type="text" @change="onTextChange" />
</template>
<script lang="ts" setup>
  // 为事件标注类型
  function onTextChange(ev:Event){
    (event.target as HTMLInputElement).value // 需要自行推断 event.target 的类型
  }
</script>
```

#### provide

因为 provide 和 inject 会在不同的组件运行，所以 Vue 提供了 InjectionKey，继承自 `Symbol`

```ts
import {InjectionKey} from 'vue'
const key = Symbol() as InjectionKey<string>;
provide(key, 'foo')
const foo = inject(key)
// 不使用 symbol 注入，使用 string 类型作为 inject 注入，则需要传入泛型
const foo = inject<string>('foo') // 推断为 string | undefined
const fuu = inject<string>('fuu','bar') // 推断为 string | undefined
```

#### 组件

子组件需要将内容暴露，父组件才能够使用

```ts
// 子组件 MyModal.vue
import { ref } from 'vue'
const isContentShown = ref(false)
const open = () => (isContentShown.value = true)
defineExpose({
  open
})
```

```ts
// 父组件
// 如果想在 ts文件中使用，需要 volar 接管默认的 ts 设置，下方有讲到该问题
import MyModal from './MyModal.vue'
const modal = ref<InstanceType<typeof MyModal> | null>(null)
const openModal = () => {
  modal.value?.open()
}
```

### 选项式 API

官方文档：https://cn.vuejs.org/guide/typescript/options-api.html

## IDE 的一些问题

### VS Code

在每个项目里我们都运行了两个语言服务实例：一个来自 Volar，一个来自 VSCode 的内置服务。在大型项目中可能会遇到表现不一致，或者是资源占用过高的问题。使用 Volar 接管模式，可以使用 Volar 同时接管 `.ts` 和 `.vue` 文件。

在插件页面输入 `@builtin typescript` 改变默认插件的配置。

更改 JavaScript 和 TypeScript 的语言功能，在需要被 volar 接管的工作区禁用即可。

### 配置文件

手动配置 `tsconfig.json` 时，请必须保证以下选项设置为对应的值：

```json
{
  compilerOptions:{
    isolatedModules:true, // 应设为 true，Vite 使用 esbuild 来转译 TypeScript，并受限于单文件转译的限制。
    // 使用选项式 API 时应设为 true，或者至少设置 compilerOptions.noImplicitThis = true，它是 strict 模式的一部分，设置为 true 才可以获得对组件选项中 this 的类型检查。否则 this 会被认为是 any。
    strict:true, 
    // 如果在构建工具中配置了路径解析别名，需要通过 compilerOptions.paths 为 TypeScript 再配置一遍。
    paths:[
      "@/*": ["src/*"], 
    ]
  }
}
```

