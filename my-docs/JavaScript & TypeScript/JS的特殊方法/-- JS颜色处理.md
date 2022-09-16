> Create by fall on 2022-02-15
> Recently revised in 2022-02-15

### RGB 转化为十六进制

```js
function rgbToHex(r,g,b){
  const result = (1<<24)+(r<<16)+(g<<8)+b
  // 使用移位操作符
	return '#'+result.toString().slice(1)
}
rgbToHex(255, 255, 255)
```

### 随机获取颜色

```js
function randomColor(){
  const result = Math.floor(Math.random() * 0xffffff).toString(16)
  return "#"+ result.toString(16).padStart(6,'0')
}
```

