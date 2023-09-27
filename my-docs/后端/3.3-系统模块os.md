> Create by **fall** on 2021-07-14
> Recently revised in 2021-08-24

## 系统模块

```js
const os = require('os')
console.log(os.totalmem()) // 系统内存总量
console.log(os.freemem()) // 操作系统空闲内存量
const men = os.freemem() /os.totalmem() *100
console.log('内存占有率为'+men.toFixed(2)+"%")
```

## 第三方系统模块

`cpu-stat`

```js
const cpuStat = require('cpu-stat')
cpuStat.usagePercent((err,percent)=>{
  console.log(perc)
})
```

