> Create by fall on 2022-02-15<br/>
> Recently revised in 2022-02-15

### 输出两个日期之间的间隔时间

```javascript
var d1= '2014/3/13'
var d2= '2019-4-8'
alert(minuesDate(d1,d2))
function minuesDate(date1,date2){
    var day1 = new Date(date1)
    var day2 = new Date(date2)
    var time1 = day1.getTime()
    var time2 = day2.getTime()
    var time = Math.abs(time1-time2)
    return parseInt(time/1000/3600/24)
}
```

###　输出n天后的日期

```javascript
var after = 20
function afterDay(n){
  var date = new Date
  var d = date.getDate();
  date.setDate(d+n)
  return date
}
console.log (afterDay(after))
```

