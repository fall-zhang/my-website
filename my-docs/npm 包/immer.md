> Create by **fall** on 22 Mar 2023<br/>
> Recently revised in 22 Mar 2023

## Immer

不可变数据工具，当需要一些历史工具，或者对历史进行处理的时候需要用到 immer

```js
import produce from 'immer'
let state = {
  name: '',
  address: ['']
}
const history = []
history.push(state)
state = produce(state,(draft)=>{
  draft.address.push(996)
})
history.push(state)
```





## 参考文章

| 作者           | 文章名称                                              |
| -------------- | ----------------------------------------------------- |
| immer 官方文档 | https://immerjs.github.io/immer/zh-CN/update-patterns |

