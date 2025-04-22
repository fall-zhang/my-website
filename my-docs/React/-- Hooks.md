> Create by **fall** on 26 Dec 2021<br/>
> Recently revised in 07 Aug 2024

使用 Hooks 的原因

- 复用一个有效的组件太麻烦了
- 生命周期逻辑混乱
- `this` 的指向问题

注意事项

- 只能在函数内部的最外层调用 Hook，不要在循环、条件判断或者子函数中调用
- 除自定义 Hook 外，只能在 React 的函数组件中调用 Hook

三神柱：`useState` `useEffect` `useCallback`，这么一看，必须掌握的只有三个。还蛮简单的.jpg

## useState

useState 总是替换变量而不是 class 组件中的合并。

**设置 state 只会为下一次渲染变更 state 的值**

```jsx
import { useState } from 'react'
function MyComponent(){
  const [count,setCount]= useState(0)
  // useState 返回一个数组，第一项是设置的值，这里为 0
  // 第二个为 设置的函数，调用可以访问 setCount(count+1)
  return(
  	<div>
      <p>You already click {count} times</p>
      <button onClick={()=>setCount(count+1)}>Add</button>
    </div>
  )
}
```

特性

```jsx
import {useState} from 'react'
function Counter2(){
  let [number,setNumber] = useState(0);
  function alertNumber(){
    setTimeout(()=>{
      // 1 如果想设置 number 的值 
      // setNumber(number +1 ) // 这种方式设置值，只会使用点击时的值
      setNumber(number=>number+1) // 传递函数的方式，可以避免
      // alert 只能获取到点击按钮时的 number 值
      alert(number);
    },3000);
  }
  return (
    <div>
      <p>{number}</p>
      <button onClick={(number)=>setNumber(number+1)}>+</button>
      <button onClick={()=>alertNumber()}>alertNumber</button>
    </div>
  )
}
```



state

```jsx
function Compp(props){
  console.log('render')
  function initState(){
    return {
      age:12,
      name:props
    }
  }
  const [file,setFile] = useState(initState)
  return(<div>
    <h2>{file.age}</h2>
    <button onClick={()=>setFile({age:file.age+1,name:props})}>Plus</button>
    <button onClick={()=>setFile({age:file.age+1,name:props})}>Plus</button>
    </div>)
}
```

## useRef

生成一个和 react 响应式无关的值，有两种用法

- 获取 DOM
- 在不同渲染中缓存的值

获取 DOM

```jsx
import {useState,useRef} from 'react'
function MyComponent(){
  const [count,setCount]= useState(0)
  const onAdd = ()=>{
    setCount(count+1)
  }
  const onShow= ()=>{
    alert()
  }
  const myInput = useRef(null)
  return (
  	<div>
    	<h2>当前显卡数量为：{count}</h2>
      <input type="text" ref={myInput}></input>
      <button onClick={onAdd}>给我加卡</button>
      <button onClick={onShow}>我有多少卡？</button>
    </div>
  )
}
```

useState 在设置新的值时会触发更新，如果设置了一值在函数内，下次执行时就会变为默认，useRef 是存储后，不会改变

```jsx
function MyText(){
  const currenRef = useRef('InitialData')
  return (
    <div>
      {}
    </div>
  )
}
```

## useReduce

处理全局状态

```js
const DemoUseReducer = ()=>{
  /* number为更新后的state值,  dispatchNumbner 为当前的派发函数 */
  const [ number , dispatchNumbner ] = useReducer((state,action)=>{
    const { payload , name  } = action
    switch(name){
      case 'add':
        return state + 1
      case 'sub':
        return state - 1 
      case 'reset':
        return payload       
    }
    /* return的值为新的 state */
    return state
  },0)
  return (
  <div>
    当前值：{ number }
  { /* 派发更新 */ }
  <button onClick={()=>dispatchNumbner({ name:'add' })} >增加</button>
<button onClick={()=>dispatchNumbner({ name:'sub' })} >减少</button>
<button onClick={()=>dispatchNumbner({ name:'reset' ,payload:666 })} >赋值</button>
{ /* 把dispatch 和 state 传递给子组件  */ }
<MyChildren  dispatch={ dispatchNumbner } State={{ number }} />
</div>
)
}
```

## useEffect

> 将所有的副作用整合到一个函数中，如果出现了数据的转变，或者是生命周期的变化，就会执行该 hook，同时也支持定义多个钩子。
>
> `useEffect` 会让 React 在完成对 DOM 的更改后，运行你的 useEffect 函数。由于副作用函数是在组件内声明的，所以可以访问到组件内部的 `props`、`state`。

执行顺序：组件更新挂载完成 -> 浏览器dom 绘制完成 -> 执行useEffect回调。

- React 会在每次渲染后调用副作用函数（useEffect） —— 包括第一次渲染的时候。
- React 保证了每次运行 effect 的同时，DOM 都已经更新完毕，即可以获取到 DOM。
- React 会保存你传递的函数（我们将它称之为 “effect”），并且在执行 DOM 更新之后调用它。
- 每次执行的时候，都使用当时的副作用空间去执行。官方文档的话来说，每个 effect“属于”一次特定的渲染。（证明可以看下面的 *特定的渲染证明*）
- effect 不会阻塞浏览器更新屏幕，让你的应用看起来响应更快。

数据获取、设置订阅以及手动更改 React 组件中的 DOM 都属于副作用。

```jsx
// 特定的渲染证明
import React,{useState,useEffect} from 'react'
function Content(){
	const [count,setCount] = useState(0)
  useEffect(()=>{
    setTimeout((()=>{
      console.log(count) // count 输出为 0 1 2 3 4 ，因为 setTimeout 所处作用域不同
    }),5000)
  })
  return(
    <div>
      <h2>当前的 count 值为：{count}</h2>
      <button onClick={()=>setCount(count+1)}>点击输出当前值</button>
    </div>
  )
}
```

### 清除机制

`uesEffect` 中，通过返回函数来清除副作用

- 有些代码副作用无需进行清除，比如说网络请求和 DOM 绘制。
- 有些代码需要进行清除，比如说监听 onMouseMove 订阅外部数据源。

```jsx
import React,{useState,useEffect} from 'react'
function FriendStatus(props){
  const [isOnline,setIsOnline] = useState(null)
  useEffect(()=>{
    function handleStatusChange(status){
      setIsOnline(status.isOnline)
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id,handleStatusChange)
    // 通过返回一个函数用来清除副作用
    // return ()=>{} 也可以返回箭头函数
    return function cleanup(){
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id,handleStatusChange)
    }
  })
  if(isOnline === null){
		return 'loading...'
  }
  return isOnline ? 'Online' : 'Offline'
}
```

> class 中的所有代码都是按照生命周期进行分割的——以生命周期为逻辑
>
> Hook 中的代码是按照代码的用途进行分离的——以功能为逻辑
>
> 从而实现关注点的切换

### 选择性监听

通过只监听一部分数据实现选择性监听以及跳过 Effect 进行优化

```jsx
import {useState,useEffect} from 'react'
function Example(){
  cost [count,setCount]= useState(0)
  useEffect(()=>{
    // 更改当前文档的标题
    document.title = '别点了，都点' + count +'次了'
  },[count])// useEffect 第二个参数表明，只有 count 发生变化，才会执行该副作用函数
  // 如果第二个参数为 [] 表明，只在第一次渲染后执行一次
  return(
    <div>
      <p>你点了 {count} 次了</p>
      <button onClick={()=>setCount(count+1)}>点啊</button>
    </div>)
}
```

### 异步处理

如果想要在 useEffect 中使用异步是不能现实的，所以需要额外一层封装

```js
const asyncEffect = async (callback, deps)=>{
  useEffect(()=>{
    callback()
  },deps)
}
```

## useLayoutEffect

执行顺序 组件更新挂载完成 ->  执行 useLayoutEffect 回调-> 浏览器 dom 绘制完成

即：在浏览器绘制之前执行

```jsx
const DemoUseLayoutEffect = () => {
  const target = useRef()
  useLayoutEffect(() => {
    /*我们需要在dom绘制之前，移动dom到制定位置*/
    const { x ,y } = getPositon() /* 获取要移动的 x,y坐标 */
    animate(target.current,{ x,y })
  }, []);
  return (
    <div>
      <span ref={ target } className="animate"></span>
    </div>
  )
}
```



## useCallback

一般用于优化，传入一个函数以及该函数的依赖

每次重新渲染一个组件时，如果不使用 useCallback 包裹，函数每次都会重新声明一次（该函数和之前的函数不同）

```jsx
export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}
```

tips：

- 自定义 hooks 时，需要对返回的函数添加 `useCallback`
- 一般同 memo 一起使用，用于让保证 props 中的函数相同
- 作为 useEffect 的依赖时，用来保证每次都触发 useEffect
- 不要在除性能优化之外的情况下使用 useEffect

## useMemo

一般情况下，只要父组件改变了，不管子组件是否依赖该状态，子组件也会重新渲染

- 类组件通过 `pureComponent`
- 函数组件通过 `React.memo`，将组件传递给 memo 之后，返回一个新的组件，如果接收到的属性不变，就不会重新渲染

## useContext

我们可以使用 useContext，来获取父级组件传递过来的 context 值，这个当前值就是最近的父级组件 Provider 设置的 value 值。

```jsx
type ActionOne ={
  name:'add'|'sub'|'reset'
  payload?:any
}
type Action = ActionOne
const DemoUseReducer = () => {
  /* number为更新后的state值,  dispatchNumbner 为当前的派发函数 */
  const [number, dispatchNumbner] = useReducer((state:number, action:Action) => {
    const { name,payload } = action
    /* return的值为新的state */
    switch (name) {
      case 'add':
        return state + 1
      case 'sub':
        return state - 1
      case 'reset':
        return payload
    }
    return state
  }, 0)
  return (
    <div>
      当前值：{number}
      { /* 派发更新 */}
      <button onClick={() => dispatchNumbner({ name: 'add' })} >增加</button>
      <button onClick={() => dispatchNumbner({ name: 'sub' })} >减少</button>
      <button onClick={() => dispatchNumbner({ name: 'reset', payload: 666 })} >赋值</button>
      { /* 把dispatch 和 state 传递给子组件  */}
      <MyChildren dispatch={dispatchNumbner} State={{ number }} />
    </div>
  )
}
```

只有在找不到 provider 的时候，才会使用 createContext 的默认值

### createContext

- 创建一个 Context

```tsx
const ThemeContext = createContext('dark');
```

## useSyncExternalStore

对于外部内容的订阅，一般用于

- 订阅原有的系统（如果你的应用完全由 React 构建，我们推荐使用 React state 替代）
- 订阅浏览器 API

```jsx
// App.jsx
// 订阅原有系统
import { useSyncExternalStore } from 'react';
import { todosStore } from './todoStore.js';

export default function TodosApp() {
  const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
  return (
    <>
      <button onClick={() => todosStore.addTodo()}>Add todo</button>
      <hr />
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}
```

```js
// todoStore.js
// 这是一个第三方 store 的例子，
// 你可能需要把它与 React 集成。

let nextId = 0;
let todos = [{ id: nextId++, text: 'Todo #1' }];
let listeners = [];

export const todosStore = {
  addTodo() {
    todos = [...todos, { id: nextId++, text: 'Todo #' + nextId }]
    emitChange();
  },
  subscribe(listener) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },
  getSnapshot() {
    return todos;
  }
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}
```

## useDeferredValue

它将“滞后”于实际值，并自动触发非阻塞的重新渲染以“追赶”新值。

使用场景

- 新的内容还在加载期间，代替旧内容进行展示
- 数据渲染很慢，无法简单优化，避免阻塞 UI 时

```tsx
const App = ()=>{
  const [state,setState] = useState()
  const deferedState = useDeferredValue(state)
	if(deferedState !== state){
    return <div> Loading </div>
  }
  return <>
  <input onChange={(e)=>setState(e.target.value)}></input>
  {new Array(999).fill('').map(item=>{
    return <>{deferedState}</>
  })}
  </>
} 
```



## useTransition

用于设置新的状态，直到新状态加载完成后，更新页面渲染。在期间可以更改为其他新的状态。

使用场景

- 点击一个导航菜单，在加载时点击进入另一个菜单
- 实现一个可中断的路由导航，在进入新的页面前，用户可以点击进入其它页面
- 启用 [Suspense](https://react.docschina.org/reference/react/Suspense) 的路由默认情况下会将页面导航更新包装为 transition。

> 注意事项，不能用于 input 等内容的绑定，输入事件的更新应该是同步的

```jsx

```





## 参考文章

| 作者          | 链接                                               |
| ------------- | -------------------------------------------------- |
| React官方文档 | https://react.docschina.org/docs/hooks-effect.html |
| 我不是外星人  | https://juejin.cn/post/6864438643727433741         |
|               |                                                    |
|               |                                                    |
|               |                                                    |



