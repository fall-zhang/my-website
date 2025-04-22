> Create by **fall** on：2021-11-14<br/>
> Recently revised in：2022-01-19

> 现在已经不推荐使用 class 组件了

## input 表单

```jsx
import React from "react";
class ListForm extends React.Component {
  constructor(props){
    super(props)
    this.state ={ value:''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSumbit = this.handleSumbit.bind(this)
  }
  handleChange(e){
    this.setState({value:e.target.value})
  }
  handleSumbit(e){
    console.log(this.state.value)
  }
  render() {
    return (<div>
      <form onSubmit={this.handleSumbit}>
        <label>
          名字
          <input type="text" value={this.state.value} onChange={this.handleChange} name="name"></input>
        </label>
        <input type="submit" value="提交"></input>
      </form>
    </div>)
  }
}
export default ListForm
```

## textarea表单

```jsx
class ListTextArea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '这里有一段文本等待编辑'
    }
    this.onTextChange = this.onTextChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onTextChange(e) {
    this.setState({ value: e.target.value })
  }
  onSubmit(e) {
    console.log(this.state.value)
    e.preventDefault()
  }
  render() {
    return (<form onSubmit={this.onSubmit}>
      <label>
        文章：
        <textarea value={this.state.value} onChange={this.onTextChange}></textarea>
      </label>
      <input type='submit' value="调教"></input>
    </form>)
  }
}
```





`this.state.value` 初始化于构造函数中，因此文本区域默认有初值。

## select 表单

```jsx
class OptionList extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      select:'penapple',
      hero:['cat']
    }
    this.handleChange()
    this.handleSubmit.bind(this)
    this.handleChange.bind(this)
  }
  handleChange(e){
    this.setState({select:e.target.value})
  }
  handleHero(ev){
    this.setState({hero:ev.target.value})
  }
  handleSubmit(e){
    console.log(this.state)
    e.preventDefault() 
  }
  render() {
    return (<form onSubmit={this.handleSubmit}>
      <label>
        选择水果
        <select value={this.state.select} onChange={this.handleChange}>
          <option value='banana'>香蕉</option>
          <option value='orange'>橘子</option>
          <option value="penapple">菠萝</option>
        </select>
      </label>
      <label>
        选择几位队友禁言吧
        {/* multiple可以提供进行多选 */}
        <select value={this.state.hero} onChange={this.handleHero} multiple={true}>
          <option value='longgui'>披甲龙龟</option>
          <option value='cat'>猫咪</option>
          <option value="hasagei">亚索</option>
          <option value="gailun">盖伦</option>
          <option value="grasshopeer">蚂蚱</option>
          <option value="oldcircle">轮子妈</option>
          <option value="sunofbeach">日女</option>
        </select>
      </label>
      <input type="submit" value="瓜皮"></input>
    </form>)
  }
}
```



## 多输入框表单

```jsx
class ManyList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      name: '',
      address:'',
      relationship:'',
      condition:''
   }
    this.handleChange = this.handleChange.bind(this)
    this.handleSumbit = this.handleSumbit.bind(this)
  }
  handleChange(e) {
    const target = e.target
    const value = target.type === 'checkbox'?target.checked:target.value
    this.setState({ [target.name]:value })
  }
  handleSumbit(e) {
    console.log(this.state.value)
    e.preventDefault();
  }
  render() {
    return (<div>
      <form onSubmit={this.handleSumbit}>
        <label>
          叫什么啊
          <input name="name" type="text" value={this.state.name} onChange={this.handleChange} ></input>
        </label>
        <label>
          家住哪啊
          <input name="address" type="text" value={this.state.address} onChange={this.handleChange} ></input>
        </label>
        <label>
          有女朋友没
          <input name='relationship' type="text" value={this.state.relationship} onChange={this.handleChange} ></input>
        </label>
        <label>
          有房有车没
          <input type="condition" value={this.state.condition} onChange={this.handleChange} ></input>
        </label>
        <input type="submit" value="提交"></input>
      </form>
    </div>)
  }
}
```

`setState()` 自动[将部分 state 合并到当前 state](https://react.docschina.org/docs/state-and-lifecycle.html#state-updates-are-merged), 只需调用它更改部分 state 即可。

## 非受控组件

在一个受控组件中，表单数据是由 React 组件来管理的。表单数据此时将会交给 DOM 进行处理。

