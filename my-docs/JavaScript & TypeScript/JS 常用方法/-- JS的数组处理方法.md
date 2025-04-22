> Create by **fall** on 15 Feb 2022<br/>
> Recently revised in 21 Nov 2024

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

### 快速排序

```js
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; // 基线条件，如果数组只有一个元素或为空，直接返回
  }

  const pivot = arr[0]; // 基准值为数组的第一个元素
  const left = []; // 左侧子数组
  const right = []; // 右侧子数组

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]); // 将小于基准值的元素放入左侧子数组
    } else {
      right.push(arr[i]); // 将大于等于基准值的元素放入右侧子数组
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]; // 递归地对左右子数组进行快速排序，并将结果拼接返回
}

// 示例运行
const arr = [5, 3, 8, 4, 2, 9, 1, 6, 7];
const sortedArr = quickSort(arr);
console.log(sortedArr); // 输出：[1, 2, 3, 4, 5, 6, 7, 8, 9]
```



```js

function quickSort(arr) {
  const stack = []; // 创建一个栈
  stack.push(arr); // 将整个数组推入栈中

  while (stack.length) { // 栈不为空时循环
    const currentArray = stack.pop(); // 弹出栈顶的数组

    if (currentArray.length <= 1) {
      continue; // 如果数组长度为空或为1，则不需要进行排序，继续下一次循环
    }

    const pivot = currentArray[0]; // 基准值为数组的第一个元素
    const left = []; // 左侧子数组
    const right = []; // 右侧子数组

    for (let i = 1; i < currentArray.length; i++) {
      if (currentArray[i] < pivot) {
        left.push(currentArray[i]); // 将小于基准值的元素放入左侧子数组
      } else {
        right.push(currentArray[i]); // 将大于等于基准值的元素放入右侧子数组
      }
    }

    stack.push(...right); // 将右侧子数组推入栈中
    stack.push(pivot); // 将基准值推入栈中
    stack.push(...left); // 将左侧子数组推入栈中
  }

  return stack;
}

// 示例运行
const arr = [5, 3, 8, 4, 2, 9, 1, 6, 7];
const sortedArr = quickSort(arr);
console.log(sortedArr); // 输出：[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

