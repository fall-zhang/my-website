> Create by **fall** on 09 Jun 2023
> Recently revised in 09 Jun 2023

文档：https://codemirror.net/docs/guide/

github：https://github.com/codemirror/codemirror5

## 使用

要为不同的预言安装不同的扩展包

```js
import { basicSetup } from "codemirror"
import { EditorState, Compartment } from "@codemirror/state"
import { EditorView, keymap } from "@codemirror/view"
import { javascript } from "@codemirror/lang-javascript"
import {python} from "@codemirror/lang-python"
// Comparment 用于动态控制配置相关内容
let language = new Compartment()
let startState = EditorState.create({
  doc: "const a = 66",
  extensions: [basicSetup, language.of(javascript())]
})
const codeView = new EditorView({
  state: startState,
  // extensions: [javascript()],
  parent: docuement.body // 所需要挂在的 DOM
})

// 之后就可以动态控制配置内容
codeView.dispatch({
  effects: language.reconfigure(python())
})
```

