> Create by **fall** on 20 Feb 2023
> Recently revised in 20 Feb 2023

## 开发 VS Code 插件

VS Code 插件由两部分组成：配置声明和代码。

配置声明：代码入口文件，插件激活时机，菜单项，快捷键等等

> VSCode 的本体没有加入各种语言的编辑能力，是插件完成的，比如：css-language-features\typescript-language-features

### 实现语言插件

声明式语言特性（Declarative language features）：编写配置文件来定义一些特性

编程式语言特性

声明式语言特性可实现：代码高亮、Snippet 补全、括号匹配、括号自动闭合、注释 / 反注释、缩进、折叠

```json
{
  "comments":{
    "lineComment":"//", // 注释，返注释
    "blockComment":["/*","*/"] // 区块注释
  }
}
```



### 实现代码高亮

VSCode 的代码高亮分为两步：

- 符号化（Tokenization）使用 TextMate language grammars（语言语法） 来进行词法解析。
  - language grammars 用于为代码中的元素（如关键字、注释、字符串等）分配名称。
  - 允许我们根据编写名称的选择器进行样式化（语法高亮展示）
- 样式化（Theming）使用 scope selector（范围选择器） 来选取第一步分析出的特定元素，然后为它们指定样式。

理解为，将给定的语法内容视为伪元素，给伪元素添加样式，就可以实现代码高亮

```json
{ // 最基本的匹配示例
  // 定义一些关键字 keywords
  "keywords": {
    "patterns": [
      // 匹配到的这些 if else ... 都会标记为 keyword.control.test
      { "name": "keyword.control.test", "match": "\\b(if|else|while|for|return)\\b" }
      // name 属性中 a.b.c 其中 a.b 可以选择到 a.b.c
    ]
  }
}
```

我们实现跨语言的字符串设置时，比如：

C 语言中 scope 为 `string.quoted.double.c`

TypeScript 中单引号 scope 为 `string.quoted.single.ts`

我们只需要选中 `string.quoted` 为其设定样式即可

```json
{
  // 表示我们这次匹配的是 string
  "string": {
    "name":"string.quoted.double.ts",
    // 在被 begin 和 end 之间匹配的所有内容都被标记为 name，如果匹配不到 end 默认定位到内容的末尾
    "begin": "\"",
    "end": "\"",
  }
}
```







## 参考文章

| 作者 | 文章名称                                                     |
| ---- | ------------------------------------------------------------ |
| 野生 | [VSCode 语言插件开发入门](https://mp.weixin.qq.com/s/Eqb9hAvG-WeseP9rCl_XRg) |
|      |                                                              |
|      |                                                              |
|      |                                                              |