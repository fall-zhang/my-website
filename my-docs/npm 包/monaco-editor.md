>Create by **fall** on  09 Jun 2023
>Recently revised in 09 Jun 2023

github 地址：https://github.com/microsoft/monaco-editor

VS Code 使用的是它作为代码编辑器

The Monaco Editor is the code editor which powers [VS Code](https://github.com/microsoft/vscode), with the features better described [here](https://code.visualstudio.com/docs/editor/editingevolved).

## 使用

```js
// 通过 esm 引入 monaco 编辑器
import * as monaco from "monaco-editor/esm/vs/editor/editor.api"
// 根据需要引入 css 或者是 javascript 语言的语法高亮内容
// import "monaco-editor/esm/vs/basic-language/css/css.contribution"
import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution"

const codeView = monaco.editor.create(this.$refs['codeView'], {
  theme: 'vs-dark',
  value: 'const a = 995',
  language: 'javascript',
  folding:true, // 启用代码折叠
  automaticLayout: true
})

// 通过这两个接口获取和更新数据
// 获取值
this.monacoEditor.getModel().getValue()
// 更新值
this.monacoEditor.getModel().setValue()
```

### 配置

```js
monaco.editor.create(this.$refs['codeView'], {
  theme: 'vs-dark',
  value: 'const a = 995',
  language: 'javascript',

  // wordWrap: "wordWrapColumn", // 折行方式
  // wordWrapColumn: 80, // 超过 num 个字符数，则进行折行
  // wrappingIndent: "same", //折行方式： "same" 同一行, "indent"折行后添加 tab 、 none 从文档最开始
  
  scrollBeyondLastLine: true, // 允许下拉，直到最后一行到页面顶部
  roundedSelection: false, // 选择的内容，是否是圆角
	readOnly:true, // 只读
  folding: true, // 启用代码折叠
  foldingStrategy: 'indentation',// 折叠方式 auto | indentation
  automaticLayout: true,
  showFoldingControls: 'always', // 是否一直显示折叠 always |mouseover
  // disableLayerHinting: true, // 等宽优化
  // codeLens: false, // 代码镜头
  colorDecorators: true
})
```

