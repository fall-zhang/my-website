> Create by **fall** on 21 Feb 2024
> Recently revised in 21 Feb 2024

文档：https://highlightjs.readthedocs.io

支持高亮的语言：https://highlightjs.readthedocs.io/en/latest/supported-languages.html

## 使用

要为不同的预言安装不同的扩展包

```js
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
// 高亮所有 <pre><code></code></pre> 标签中的内容
hljs.highlightAll()

```

