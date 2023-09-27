>Create by **fall** on 2021-10-26
>Recently revised in 2022-11-05

# 组合式API

通过更改 `<script>` 为 `<script setup>` 或者是使用 `setup()` 方法，通过 `return`向 `vue` 暴露变量的方式，统称为 **组合式 API**

> 注意：setup 是在 beforeCreated 前执行，如果阻塞，会导致组件渲染不出来，同 beforeCreated。不用担心某个方法会在 mounted 之后执行（异步除外）。

## 文件结构

```vue
<template>
  // Vue2中，template 标签中只能有一个根元素，在 Vue3 中没有此限制
</template>
<script setup>
  // ...
  const bgColor = ref('white')
</script>
<style lang="scss" scoped>
  /* 支持将 v-bind() 变量注入 CSS */
  .container{
    background-color:v-bind(bgColor);
  }
</style>
```

## data 声明

```vue
<script setup>
  // 在 script setup里面声明的所有数据都是可以直接在 template 中使用的
  import { reactive, ref } from 'vue'
  // ref声明响应式数据，用于声明基本数据类型
  const name = ref('Jerry')
  // 修改
  name.value = 'Tom'
  // reactive声明响应式数据，用于声明引用数据类型
  const state = reactive({
    name: 'Jerry',
    sex: '男'
  })
  // 修改
  state.name = 'Tom'
</script>
```

## method

```vue
<template>
<!--调用方法-->
<button @click='changeName'>按钮</button>  
</template>

<script setup>
  import { reactive } from 'vue'
  const state = reactive({
    name: 'Jery'
  })
  // 声明method方法
  const changeName = () => {
    state.name = 'Tom'
  }  
</script>
```

## computed

计算属性值会基于其响应式依赖被缓存，可以通过计算属性对于函数进行计算，牺牲内存，节省性能

```vue
<script setup>
  import { computed, ref } from 'vue'
  const count = ref(1)
  // 通过computed获得doubleCount
  const doubleCount = computed(() => {
    return count.value * 2
  })
</script>
```

传入对象

```js
// 组合式API
import {ref,computed} from 'vue'
const firstName = ref('鲁尼')
const lastName = ref('帕瓦')
// 可以同时设置名称和读取名称
const fullName = computed({
  get() { // getter
    return firstName.value + ' ' + lastName.value
  },
  set(newValue) { // setter
    // 注意：我们这里使用的是解构赋值语法
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})
// 设置名称时，会同步更新
const fullName.value = '小泽 玛利亚' // firstName.value 小泽 lastName.value 玛利亚
```

第二个参数

```js
// onTrack 将在响应属性或引用作为依赖项被跟踪时被调用。
// onTrigger 将在侦听器回调被依赖项的变更触发时被调用。
// 计算属性的 onTrack 和 onTrigger 选项仅会在开发模式下工作。
import { computed, ref } from 'vue'
const count = ref(1)
// 通过computed获得doubleCount
const doubleCount = computed(() => {
  return count.value * 2
})
```

## watch

```javascript
import { watch, reactive,ref } from 'vue'
const state = reactive({
  count: 1
})
// 声明方法
const changeCount = () => {
  state.count = state.count * 2
}
// 只监听 state.count
watch(() => state.count, // 只有在 getter 函数返回不同的对象时，才会触发回调，如果想深度监听，使用 deep:true
  (newVal, oldVal) => {
    console.log(state.count)
    console.log(`watch监听变化前的数据：${oldVal}`)
    console.log(`watch监听变化后的数据：${newVal}`)
  },{
    immediate: true, // 立即执行
    deep: true // 深度监听
  }
)
// 侦听 ref 中的数据
const num = ref()
setTimeout(()=>{num.value++},1000)
watch(num,(newVal,oldVal)=>{
  console.log(newVal+"<新的值|旧的值>"+oldVal)
})
```

侦听多个数据

```js
// 省略引入
watch([()=>data1,()=>data2],()=>{
  
})
```

### watchEffect

在组件初始化时， 会先执行一次来收集依赖， 然后当收集到的依赖中数据发生变化时， 就会再次执行回调函数。

意思是，只要读取了任何响应式数据，都会触发 Proxy 的 getter 代理机制，从而调用 `watchEffect` 方法内的事件，执行一次，但是对 `watchEffect` 内进行更改时，不会触发。

```vue
<script setup>
  import { watchEffect,ref, reactive } from 'vue'
  const age = ref(999)
  const state = reactive({
    count: 1,
    name: 'liu'
  })
  setTimeout(() => {
    state.count++
  }, 3000)
  // watchEffect 不用传递第一个参数，自动找到响应式数据，这些响应式数据更新时，立即执行
  watchEffect(() => {
    age.value = state.count // state.count 值改变后，都会执行一遍 watchEffect
    console.log('当前age值为：' + age.value)
  })
</script>
```

- `watch` 只追踪明确侦听的源。它不会追踪任何在回调中访问到的东西。另外，仅在响应源确实改变时才会触发回调。`watch` 会避免在发生副作用时追踪依赖，因此，我们能更加精确地控制回调函数的触发时机。
- `watchEffect`，则会在副作用发生期间追踪依赖。它会在同步执行过程中，自动追踪所有能访问到的响应式 property。这更方便，而且代码往往更简洁，但其响应性依赖关系不那么明确。

> watch 事件发生在 DOM 更新之前，所以，如果想要进行获取 DOM，或者进行相关操作，需要设置第三个参数中 `flush: 'post'` 。

## props

用于父组件向子组件传值

### 子组件

```vue
<template>
<span>{{props.name}}</span>
<!-- 可省略 props. -->
<span>{{name}}</span>
</template>
<script setup>
  // defineProps 在 <script setup> 中已经内置，无需导入
  // 但需在 .eslintrc.js 文件中【globals】下配置【defineProps: true】，保证不会因为找不到定义报错
  // 声明 props，可选类型有 String Number Boolean Array Object Date Function Symbol 或者构造函数，vue 通过 instanceof 判断是否是一个实例
  const props = defineProps({
    name: {
      type: String,
      default: '' // 设置默认值
    },
    bar: {
      type: Object,
      default(rawProps){ // 接受原始 prop 为参数
        return {info:'gogogo'}
      },
      validator(val){
        return ['success','warn','error'].includes(val) // 自定义校验规则，返回 true 表示通过校验
      }
    }
  })
  // 或者直接在对象中声明
  // defineProps({
  //   title: String,
  //   likes: [Number,String] // 可传所选类型
  // })
  // 或者是直接数组
  // defineProps(['title','message'])
</script>
```

当然，如果使用 ts 那么 `defineProps` 会有些变化

```ts
// ts 中，不能通过泛型的方式设置默认值
defineProps<{
  title?: string
  likes?: number
}>()
```

### 父组件

```vue
<template>
  <child name='Jerry'/>  
</template>
<script setup>
  // 引入子组件
  import child from './child.vue'
</script>
```

一些默认的配置：

- prop 默认可选
- 除 Boolean 外为未递的参数默认值为 undefined
- Boolean 默认为 false，默认值为 true 时，需要设置默认值
- 注意只要传入的是 undefined，default 会进行默认处理

> `defineProps()` 宏中的参数**不可以访问 `<script setup>` 中定义的其他变量**，因为在编译时整个表达式都会被移到外部的函数中。

## emit

用于子组件触发父组件的数据，也可以通过 emit 从子组件向父组件传值。

### 子组件

```vue
<template>
  <span>{{props.name}}</span>
  // 可省略【props.】
  <span>{{name}}</span>
  <button @click='changeName'>更名</button>
</template>
<script setup>
  // import { defineEmits, defineProps } from 'vue'
  // defineEmits和defineProps在<script setup>中自动可用，无需导入
  // 需在.eslintrc.js文件中【globals】下配置【defineEmits: true】、【defineProps: true】
  // 声明props
  const props = defineProps({
    name: {
      type: String,
      default: ''
    }
  })
  // 声明事件
  const emit = defineEmits(['updateName'])
  // 传递时的验证
  // const emit = defineEmits({
  //   updateName(payload) {
  //     // 通过返回值为 `true` 还是为 `false` 来判断验证是否通过
  //   }
  // })
  const changeName = () => {
    // 执行
    emit('updateName', 'Tom')
  }
</script>
```

### 父组件

```vue
<template>
  <child :name='state.name' @updateName='updateName'/>  
</template>
<script setup>
  import { reactive } from 'vue'
  import child from './child.vue'
  const state = reactive({
    name: 'Jerry'
  })
  // 接收子组件触发的方法
  const updateName = (name) => {
    state.name = name
  }
</script>
```

### 搭配 TS

```vue
<script setup lang="ts">
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()
</script>
```

### 自定义修饰符



## v-model

v-model 可以绑定多个值，并且如果简写为 `v-model`，默认绑定的为 `modelValue`

### 子组件

```vue
<template>
  <span @click="changeInfo">我叫{{ modelValue }}，今年{{ age }}岁</span>
</template>
<script setup>
  // import { defineEmits, defineProps } from 'vue'
  // defineEmits和defineProps在<script setup>中自动可用，无需导入
  // 需在.eslintrc.js文件中【globals】下配置【defineEmits: true】、【defineProps: true】
  defineProps({
    modelValue: String,
    age: Number
  })
  const emit = defineEmits(['update:modelValue', 'update:age'])
  const changeInfo = () => {
    // 触发父组件值更新
    emit('update:modelValue', 'Tom')
    emit('update:age', 30)
  }
</script>
```

### 父组件

```vue
<template>
  // v-model:modelValue简写为v-model
  // 可绑定多个v-model
  <child
    v-model="state.name"
    v-model:age="state.age"
  />
</template>

<script setup>
  import { reactive } from 'vue'
  // 引入子组件
  import child from './child.vue'

  const state = reactive({
    name: 'Jerry',
    age: 20
  })
</script>
```

## provide 和 inject

### 父组件

```vue
<template>
  <child/>
</template>
<script setup>
  import { provide } from 'vue'
  import { ref, watch } from 'vue'
  // 引入子组件
  import child from './child.vue'
  let name = ref('Jerry')
  // 声明provide
  provide('provideState', {
    name,
    changeName: () => {
      name.value = 'Tom'
    }
  })
  // 监听name改变
  watch(name, () => {
    console.log(`name变成了${name}`)
    setTimeout(() => {
      console.log(name.value) // Tom
    }, 1000)
  })
</script>
```

### 子组件

```vue
<script setup>
  import { inject } from 'vue'
	// 注入
  const provideState = inject('provideState')
  // 子组件触发name改变
  provideState.changeName()
</script>
```

## nextTick

> A utility for waiting for the next DOM update flush.
> 等待下一次 DOM 更新完成的工具

```js
// type
function nextTick(callback?:()=>void):Promise<void>
```

```vue
<script setup>
  import { nextTick } from 'vue'
  nextTick(() => {
    // ...
  })
</script>
```

## ref 和 defineExpose

将 `ref` 挂载到组件或者标签上，可以获取被绑定元素，提供给父组件使用

- 在选项式 API 里，子组件的数据都是默认隐式暴露给父组件的，但在 `script-setup` 模式下，所有数据只是默认 `return` 给 `template` 使用，不会暴露到组件外，所以父组件是无法直接通过挂载 `ref` 变量获取子组件的数据。
- 如果要调用子组件的数据，需要先在子组件中使用 `defineExpose` 暴露出来，才能够拿到。

### 子组件

```vue
<template>
  <span>{{state.name}}</span>
	<input :ref="(el)=>{}"> <!-- 也可以通过组件内绑定方法，传入的参数就是当前的 ref 的内容 --》
</template>
<script setup>
  import { defineExpose, reactive, toRefs } from 'vue'
  // 声明state
  const state = reactive({
    name: 'Jerry'
  }) 
  // 声明方法
  const changeName = () => {
    state.name = 'Tom'
  }
  // 将方法、变量暴露给父组件使用，父组件才能拿到子组件暴露的数据，如果不需要使用，可以不暴露
  defineExpose({
    // 解构 state
    ...toRefs(state),
    changeName
  })
</script>
```

### 父组件

```vue
<template>
  <child ref='childRef'/>  
</template>
<script setup>
  import { ref, nextTick } from 'vue'
  import child from './child.vue'
  const childRef = ref('childRef')
  // nextTick 确保渲染子组件
  nextTick(() => {
    // 获取子组件 name
    console.log(childRef.value.name)
    // 执行子组件方法
    childRef.value.changeName()
  })
</script>
```

## Router

### useRoute 和 useRouter

```vue
<script setup>
  import { useRoute, useRouter } from 'vue-router'
  // 必须先声明调用
  const route = useRoute()
  const router = useRouter()
  // 路由信息
  console.log(route.query)
  // 路由跳转
  router.push('/newPage')
</script>
```

### 路由导航守卫

```vue
<script setup>
  import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
  // 添加一个导航守卫，在当前组件将要离开时触发。
  onBeforeRouteLeave((to, from, next) => {
    next()
  })
  // 添加一个导航守卫，在当前组件更新时触发。
  // 在当前路由改变，但是该组件被复用时调用。
  onBeforeRouteUpdate((to, from, next) => {
    next()
  })
</script>
```

## store

```vue
<script setup>
  import { useStore } from 'vuex'
  import { key } from '../store/index'
  // 必须先声明调用
  const store = useStore(key)
  // 获取Vuex的state
  store.state.xxx
  // 触发mutations的方法
  store.commit('fnName')
  // 触发actions的方法
  store.dispatch('fnName')
  // 获取Getters
  store.getters.xxx
</script>
```

## 生命周期

通过在生命周期钩子前面加上 on 来访问组件的生命周期钩子。

下表包含如何在 Option API 和 setup() 内部调用生命周期钩子

| **Option API**（选项式API） | **setup 中** （组合式API） |
| --------------------------- | -------------------------- |
| beforeCreate                | 不需要                     |
| created                     | 不需要                     |
| beforeMount                 | onBeforeMount              |
| mounted                     | onMounted                  |
| beforeUpdate                | onBeforeUpdate             |
| updated                     | onUpdated                  |
| beforeUnmount               | onBeforeUnmount            |
| unmounted                   | onUnmounted                |
| errorCaptured               | onErrorCaptured            |
| renderTracked               | onRenderTracked            |
| renderTriggered             | onRenderTriggered          |
| activated                   | onActivated                |
| deactivated                 | onDeactivated              |

## CSS 变量注入

```vue
<template>
	<span>Jerry</span>  
</template>
<script setup>
  import { reactive } from 'vue'
  const state = reactive({
    color: 'red'
  })
</script>
<style scoped>
  span {
    /* 使用 v-bind 绑定 state 中的变量 */ 
    color: v-bind('state.red');
  }  
</style>
```

## 原型绑定与组件内使用

### main.js

```javascript
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
// 获取原型
const prototype = app.config.globalProperties
// 绑定参数
prototype.name = 'Jerry'
```

### 组件内使用

```vue
<script setup>
  import { getCurrentInstance } from 'vue'
  // 获取原型
  const { proxy } = getCurrentInstance()
  // 输出
  console.log(proxy.name)
</script>
```

## 相关支持

### 对 await 的支持

不必再配合 async 就可以直接使用 await 了，这种情况下，组件的 setup 会自动变成 async setup 。

```vue
<script setup>
  const post = await fetch('/api').then(() => {})
</script>
```

### 组件的 name

使用额外单独的 `<script>` 块来定义

```vue
<script>
  export default {
    name: 'ComponentName',
  }
</script>
```

唯一一个需要额外 `<script>` 书写的属性

`inheritAttrs`：是否父组件穿透进来的内容。完全控制传进来的 style、class、等内容



## 参考文章

| 作者      | 链接                                       |
| --------- | ------------------------------------------ |
| Jerry丶Hu | https://juejin.cn/post/7006108454028836895 |
| SandySY   | https://juejin.cn/post/6940454764421316644 |
| 官方文档  | https://vuejs.org/                         |
|           |                                            |
|           |                                            |

 

