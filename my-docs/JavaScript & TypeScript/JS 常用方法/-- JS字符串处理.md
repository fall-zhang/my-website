> Create by fall on ——<br/>
> Recently revised in 03 Jul 2023

## 字符串处理方法

### 是否是苹果设备

```js
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
```

### 检查是否是邮箱

```js
function checkEmail (value) {
  const regex = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
  return regex.test(value)
}
```

### 检查是否是手机号

```js
function checkPhoneNo (value) {
  const regex = /^1\d{10}$/
  return regex.test(value)
}
```

### 获取字符串长度

```js
// 英文字符长度为 1 ，中文字符为 2
function getStringLength (str = '') {
  str.split('').reduce((pre, cur) => {
    const charCode = cur.charCodeAt(0)
    if (charCode >= 0 && charCode <= 128) {
      return pre + 1
    }
    return pre + 2
  }, 0)
}
```

### 省略多余字符

```js
function truncateString (string, length){
  const result = string.length < length ? string : `${string.slice(0, length - 3)}...`;
	return result
} 
truncateString('Hi, I should be truncated because I am too loooong!', 36)   // 'Hi, I should be truncated because...'
```

### 文章单词总数

```javascript
// 检测该数据是否为 字母 
function notalp(alp){
  if((alp >= "a" && alp <= "z")||(alp>="A" && alp<="Z")){
    return 1;
  }
  else{
    return 0;
  }
}
function count(str){
  var total = 1; // 默认第一个单词就是字母
  for(var i = 0;i<str.length-1;i++){
    // 当前者为字母，后者不是字母，则单词结束，加一
    if(notalp(str[i]) > notalp(str[i+1])){
      total ++;
    }
  }
  return total
}
```

### 文章单词出现次数

```javascript
function alpTimes(supStr,subStr){
  var arr = supStr.split(subStr)
  return arr.length-1
}
alpTimes("can i can a can like a canner to can a can","can")
```

### 字符串逆序

```javascript
function addReverseStr(str){
  var arr = str.split(" ")
  arr.reverse()
  arr = arr.join(" ")
  return str.concat(arr)
}
const newStr = addReverseStr("how old are you")
```

### 随机生成（随机码）

```javascript
function randomTest(num){
  var arr = []
  for(let i= 0;i<num;i++){
    var n = parseInt(Math.random()*62)
    if(n>=0&&n<=9)
      arr.push(n)
    else if(n>=10&&n<36){
      arr.push(String.fromCharCode(87+n))//小写
    }
    else if(n>=36&&n<62){
      arr.push(String.fromCharCode(29+n))//大写
    }
    else(
      alert("该方法无法输出部分不合法数据")
    )
  } 
  return arr.join("")
}
```

### 大小写转换加空格

``` javascript
// 该方法可以将 AutoFix 更改为 auto fix
function trans(str){
  var newstr = str.split("");
  for(var i = 1;i < newstr.length;i++){
    if(newstr[i]>="A" && newstr[i]<="Z"){
      newstr[i] =newstr[i].toLowerCase();
      newstr.splice(i,0," ");
    }
  }
  return newstr.join("")
}
console.log(trans("MostStrongMan"))
```

### 字母检查工具

```javascript
// 用来检测该字符串是否为字母
function check(str){
  if ((str>='a'&&str<='z')||(str>='A'&&str<='Z')){
    return true
  }else{
    return false
  }
}
```

### 随机生成（随机码）

```javascript
// 随机码，包括大写，小写，数字
/** 
	num 表示输出字符串长度
*/
function randomString(num){
  var arr = []
  for(let i= 0;i<num;i++){
    var n = parseInt(Math.random()*62)
    if(n>=0&&n<=9)
      arr.push(n)
    else if(n>=10&&n<36){
      arr.push(String.fromCharCode(87+n))//小写
    }
    else if(n>=36&&n<62){
      arr.push(String.fromCharCode(29+n))//大写
    }
    else(
      alert("该方法无法输出部分不合法数据")
    )
  } 
  return arr.join("")
}
```



## 使用

```js
// string-util.js
```

