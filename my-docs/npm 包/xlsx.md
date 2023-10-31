> Create by **fall** on 06 02 2023
> Recently revised in 06 02 2023

## xlsx

该插件可以用于处理 excel 文件，实现 excel 文件的导入导出

其中有两个重要的对象

- WorkBook 整个工作区，类似于一个 excel 文件，包括多个 sheet
- WorkSheet 单个表格，类似于 excel 中的 sheet，仅为一个表格

### 导入文件

一般导入文件会使用 input 标签，并利用 input 标签上的 files 实现文件读取

```jsx
import XLSX from 'xlsx'
function ExcelInport(){
  async function onUploadFile(ev){
    const file = ev.target.files[0]
    const data = await file.arrayBuffer() // 将 file 转换为 ArrayBuffer，二进制数据
    const wb = XLSX.read(data)
    // wb 上面总共有两个对象，SheetName，就是放置表格名称的数组、Sheets，就是表格名称对应的表格
    const workSheet = wb.Sheets[wb.SheetNames[0]]
    // 生成 html 文件，内嵌到页面中
    XLSX.utils.sheet_to_html(ws, { id: 'tabeller' })
    // 将二进制转换为 JSON 数据，这些数据只有表格中的内容
    XLSX.utils.sheet_to_json(ws)
  }
  return <input id="excel" onChange={(ev)=>onUploadFile(ev)}>
}
```

### 导出

通过 table 标签进行导出

```js
const json = [
  {name:"foo",age:42,creer:"manager"},
  {name:"fall",age:24,creer:"developer"}
]
const workSheet = XLSX.utils.json_to_sheet(json)
const wb = XLSX.utils.book_new()
XLSX.book_append_sheet(wb,workSheet,'sheetName')
XLSX.writeFile(wb,"新建sheet.xlsx")

/* 通过添加到点击事件上，可以生成 xlsx 文件 */
const table = document.getElementById("tabeller");
const wb = XLSX.utils.table_to_book(table);
/* 导出为文件 */
XLSX.writeFile(wb, "SheetJSIntro.xlsx");
```



## 参考文章

| 作者         | 链接                                       |
| ------------ | ------------------------------------------ |
| 写代码的海怪 | https://juejin.cn/post/6998000575203770376 |



