---
sidebar_position: 12
---

> Create by **fall** on 16 Nov 2024
> Recently revised in 16 Nov 2024



## 活用

自定义接口简化

```ts
const INIT_PERSON = {
  name:'taly',
  age:22,
	desc:'add some description'
}
type Persion = typeof INIT_PERSON
```

统一方法类型

```ts
type HTTP_Fun = (url:string,opts:Options):Promise<Response>{/* code */}
const get:HTTP_Fun = (url,opts)=>{ /* code */}
const post:HTTP_Fun = (url,opts)=>{/* code*/ }
```

### enum

```ts
// 利用位运算的特性，二进制中，每位是独立的，
enum FutureFlags{
  None   = 0,
  Happy  = 1,
  Rich   = 1<<1,
  Wisdom = 1<<2,
  Famous = 1<<3,
  GreatHuman = Happy|Rich|Wisdom|Famous
}
interface Human{
  flags:FutureFlags
  [key:string]:any
}
animal.flags |= AnimalFlags.HasClaws | AnimalFlags.CanFly;
```

- 我们使用 `|=` 来添加一个标志
- 组合使用 `&=` 和 `~` 来清理一个标志
- `|` 来合并标志。
