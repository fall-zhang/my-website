> Create by **fall** on 2022-02-15
> Recently revised in 2022-02-15

## JS方法

### 删除数组中的对应的值

```js
function deleteItem(arr, deleteItem) {
  var result = arr.filter(item => item !== deleteItem);
  return result
}
var ss = [1, 2, 3, 4, 5, 6]
ss = deleteItem(ss, 3)
```

### 移除重复项

```js
function removeDuplicates(arr){
  return (...new Set(...[arr]))
}
removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5, 5, 6])
```

### 获取一组数据的平均值

```js
function arrAverage(arr){
  const total = arr.reduce((a,b)=>a+b)
  return total/arr.length
}
```

