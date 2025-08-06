> Create by **fall** on 26 Jun 2025<br/>
> Recently revised in 26 Jun 2025

```js
import {Observable} from 'rxjs'
const observable  = new Observable(subscribe=>{
  subscribe.next(1)
  subscribe.next(2)
  subscribe.next(3)
  setTimeout(()=>{
    subscribe.next(4)
    subscribe.complete()
  },3000)
})
objservable.subscribe({
  next:(num)=>{
    console.log(num)
  }
})
```



```js
import {interval,take} from 'rxjs'
// 每五秒输出一次，直到 5
interval(500).pipe(take(5)).subscribe(e=>{
  console.log(e)
})
// 更改输出包装为 5
interval(500).pipe(map(e=>({num:e}))).subscribe(e=>{
  console.log(e)
})
```

