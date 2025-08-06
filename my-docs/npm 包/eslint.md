> Create by **fall** on -- Aug 2020<br/>
> Recently revised in 07 May 2025

## Eslint

> 只介绍 8.40 之后以及 9 以上的版本，更早的版本请看 [eslint](./legacy/eslint-v8.md)

官方网址：https://cn.eslint.org/docs/rules/

作为一个语法检查工具，可以用来保规范代码格式。减少语法错误，统一团队编码风格。

一般作为配置项配置在 `eslint.config.js` 中，或者可能配置在 `package.json` 中作为配置项。

标准的 eslint 配置：

```js
// eslint.config.js
import jslint from '@eslint/js'
export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx}']
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/build/**', '**/.docusaurus/**', '**/coverage/**', '**/temp.js', '**/release/**']
  },
  jslint.configs.recommended,
  {
    // 自定义的其它配置
    rules:{
      'no-var': 'warn',
    }
  }
]
```

错误等级分为三种

- `off` 或者 `0` 表示关闭规则
- `warn` 或者 `1` 打开规则，表示警告，打印黄色字体（黄色波浪线）
- `error` 或者 `2` 打开规则，并且作为错误，打印红色字体（红色波浪线）

### 配置

**行内配置**

```js
/* eslint-disable @typescript-eslint/no-explicit-any */
// ↑↑↑↑ 禁用整个文件的 typescript 规则
// 禁用下一行规则
// eslint-disable-next-line no-unused-vars
```

> eslint 支持层叠配置，默认使用离需检测的文件最近的 `eslint.config.js` 配置文件

### 插件

- eslint-plugin-html：这个插件你可以让 eslint 去检测 html 文件 script 标签里的 js 代码
- eslint-plugin-import：添加 import 和 export 的支持
- eslint-plugin-node：添加对 node 的 eslint 支持
- eslint-plugin-promise：添加对 promise 语法的解析
- eslint-plugin-standard：标准 js 和 eslint 的语法

typescript：

- @typescript-eslint/eslint-plugin：typescript 语法检测支持。

Vue：

- eslint-plugin-vue：Vue 语法检查

Prettier：

- eslint-config-prettier：关闭所有与 prettier 有冲突的规则。
- eslint-plugin-prettier：将 prettier 作为 ESLint 的规则来使用，代码不符合 Prettier 的标准时，会报一个 ESLint 错误

## 命令行

在 package.json 中配置 `lint` 脚本

```json
"scripts":{
	"lint": "eslint --fix --ext .js,.ts,.vue ./src",
  "lint:quiet": "eslint --fix --ext .js,.ts,.vue ./src --quiet", // 不输出 warn，只输出 error
}
```

## 推荐配置

v7、v8 配置文件和 v9 不同，但 rules 可以复用，因此单独把 rules 提取出来，然后区分不同版本的配置文件

如果不确定配置是否正确，可以使用命令行运行 `eslint`

### 推荐规则配置

```js
const rules = {
  // js 处理
  'no-unused-vars': 1, // 未使用的变量
  'comma-dangle': 0,
  'space-before-function-paren': 0, // function 前面的空格
  eqeqeq: 1, // 必须使用全等
  semi: [2, 'never'], // 语句不使用分号结尾
  quotes: [  // 引号类型 `` "" ''
    2,
    'single',
    {
      avoidEscape: true,
      allowTemplateLiterals: true
    }
  ],
  'no-irregular-whitespace': 2, // 不能有不规则的空格
  'eol-last': 0, // 所有文件结尾必须包括换行
  'no-else-return': 2, //如果 if 语句里面有 return 后面不能跟 else 语句
  'max-lines-per-function': [ // 每个方法最多多少行
    2,
    { max: 300, skipComments: true, skipBlankLines: true }
  ],
  'no-confusing-arrow': 2,
  'no-nested-ternary': 2,
  'no-console': 1,
  'no-debugger': 1, // 使用 debugger 会警告
  'no-multiple-empty-lines': [2, { max: 2 }], // 空行最多不能超过2行
  'no-multi-spaces': 2, // 不能用多余的空格
  'no-trailing-spaces': 2, // 一行结束后面不要有空格
  'no-proto': 1, // 禁止使用__proto__属性
  'no-sparse-arrays': 2, // 禁止稀疏数组， [1,,2]
  'no-param-reassign': [
    2,
    { props: true, ignorePropertyModificationsFor: ['draft'] }
  ],
  'indent': [1, 2, { SwitchCase: 1 }],
  // 异步处理
  'no-promise-executor-return': 2, // 禁止 promise 中使用 return
  'no-await-in-loop': 2, // 禁止循环中使用 await
  'max-nested-callbacks': ['error', 3], // 异步最大回调数
  'no-return-await': 2,
  'prefer-promise-reject-errors': 2, // 使用 new Error 追踪错误
  'func-call-spacing': 0,

  // vue 错误
  'vue/no-unused-vars': 1,
  'vue/multiline-html-element-content-newline': 0,
  'vue/first-attribute-linebreak': 0,
  'vue/html-closing-bracket-newline': 0,
  'vue/html-indent': 0,
  'vue/no-multiple-template-root': 0,
  'vue/html-self-closing': 0,
  'vue/max-attributes-per-line': [
    1,
    {
      singleline: 5,
      multiline: 4
    }
  ],
  // react
  'react/no-this-in-sfc': 0,
  'react/prop-types': 0,
  'react/display-name': 'off',
  'react/jsx-uses-react': 'off', // React ^16.14.0 以及 V17 以后将支持新的语法转换器
  'react/react-in-jsx-scope': 'off', // 新的语法转换器不必引入 React
}
```

### node

纯 node 的后端项目，或者是纯 js 项目，只需要安装 eslint，`@eslint/js`

```js
// eslint.config.js
import jslint from '@eslint/js'
export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.js,mjs,jsx}']
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/build/**', '**/.docusaurus/**', '**/coverage/**', '**/temp.js', '**/release/**']
  },
  jslint.configs.recommended,
  {
    // 自定义的其它配置
    rules:{
      'no-var': 'warn',
    }
  }
]
```

### TypeScript

TypeScript 也是使用 eslint 进行格式化，tslint 已经不再维护，而是合并到 eslint 中，添加额外插件即可使用

安装：除了 `eslint`、`typescript` 之外，还需要安装 `@typescript-eslint/parser`、`@typescript-eslint/eslint-plugin`

```ts
import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
    },
    rules: {
      'no-undef': 0, // 未命名变量不报错：当未命名变量的检查交给 ts 类型检查器时使用
      '@typescript-eslint/no-explicit-any': 1, // 使用 any 时警告
      '@typescript-eslint/no-this-alias': 0, // 是否禁止 this 的别名
    },
  },
)

```

### Vue

保证 eslint 能够生效的同时，不会和 eslint 产生冲突

```json
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import { FlatCompat } from "@eslint/eslintrc";
import { __dirname } from 'node:path'
const compat = new FlatCompat({
  baseDirectory: __dirname,
});
export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  ...compat.config({
    "parserOptions": {
      "ecmaVersion": 2020,
      "ecmaFeatures": {
        "jsx": true
      }
    },
  }),
  {
    rules:{
      'indent':[1,2, { SwitchCase: 1 }],
      'no-undef':1,
      'no-unused-vars':1,
      'vue/no-unused-vars':1,
      'vue/html-indent':0,
      'vue/html-self-closing':0,
      'vue/max-attributes-per-line':0,
      'vue/first-attribute-linebreak':0,
      'vue/attribute-hyphenation':0,
      'vue/html-closing-bracket-newline':0,
      'vue/singleline-html-element-content-newline':0,
    }
  }
]
```

### React

Typescript + React

```js
import lintReact from 'eslint-plugin-react'
import jslint from '@eslint/js'
import lintReactHooks from 'eslint-plugin-react-hooks'
import tslint from 'typescript-eslint'
const defaultConfig = {
  plugins: {
    react: lintReact,
    'react-hooks': lintReactHooks
  },
  settings: { react: { version: '18.3' } },
  rules: {
    // react
    'react/no-this-in-sfc': 1,
    'react/prop-types': 0,
    'react/display-name': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // typescript
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-this-alias': 'warn',
    '@typescript-eslint/no-unused-expressions': 'off'
  }
}
export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{tsx,ts,js,mjs,jsx}']
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/build/**', '**/.docusaurus/**', '**/coverage/**', '**/temp.js', '**/release/**']
  },
  jslint.configs.recommended,
  lintReact.configs.flat.recommended,
  lintReact.configs.flat['jsx-runtime'],
  ...tslint.configs.recommended,
  defaultConfig
]

```

## IDE 配置

### VScode

安装 eslint 插件后

酌情修改 VScode 中 `setting.json` 的内容、

```json
{
  "eslint.enable": true, // 开启 vscode 的 eslint 作为格式化工具
  "eslint.autoFixOnSave": true, // 是否在保存的时候自动 fix eslint
  "eslint.options": { // 指定 vscode 的 eslint 所处理的文件的后缀
    "extensions": [
      ".js",
      ".vue",
      ".ts",
      ".tsx"
    ]
  },
  "eslint.validate": [ // 确定校验准则
    "javascript",
    "javascriptreact",
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ]
}
```

## Eslint 语法配置清单

> P.S. 我认为经常使用的会优先排列在前面

```json
{
  "no-alert": 0,// 禁止使用 alert confirm prompt（原生弹出框）
  "no-array-constructor": 2,// 禁止使用数组构造器，箭头函数
  "no-console": 2,// 禁止使用 console
  "no-const-assign": 2,// 禁止修改const声明的变量
  "no-debugger": 2,//禁止使用 debugger
  "no-empty-label": 2,// 禁止使用空 label  
  "no-invalid-this": 2,// 禁止无效的this，只能用在构造器，类，对象字面量
  "no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
  "no-multi-spaces": 1,// 不能用多余的空格
  "no-multi-str": 2,// 字符串不能用 \ 换行
  "no-ternary": 0,// 禁止使用三目运算符
  "no-trailing-spaces": 1,// 一行结束后面不要有空格
  "eol-last": 0, // 文件以单一的换行符结束
  "eqeqeq": 2,//必须使用全等
  "init-declarations": 0,//声明时必须赋初值
  "semi": [2, "always"],//语句强制分号结尾
  "id-match": 0,// 命名检测
  "quotes": [1, "single"],// 引号类型 `` "" ''
  "prefer-const": 0,//首选 const
  "no-bitwise": 0,// 禁止使用按位运算符
  "no-caller": 1,// 禁止使用 arguments.caller或arguments.callee
  "no-catch-shadow": 2,// 禁止catch子句参数与外部作用域变量同名
  "no-class-assign": 2,// 禁止给类赋值
  "no-cond-assign": 2,// 禁止在条件表达式中使用赋值语句
  "no-constant-condition": 2,//禁止在条件中使用常量表达式 if(true) if(1)
  "no-continue": 0,//禁止使用continue
  "no-use-before-define": 2,//未定义前不能使用
  "no-control-regex": 2,//禁止在正则表达式中使用控制字符
  "no-delete-var": 2,//不能对 var 声明的变量使用 delete 操作符
  "no-div-regex": 1,//不能使用看起来像除法的正则表达式/=foo/
  "no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
  "no-dupe-args": 2,//函数参数不能重复
  "no-duplicate-case": 2,//switch中的case标签不能重复
  "no-else-return": 2,//如果 if 语句里面有 return ,后面不能跟 else 语句
  "no-empty": 2,//块语句中的内容不能为空
  "no-empty-character-class": 2,//正则表达式中的[]内容不能为空
  "no-eq-null": 2,//禁止对null使用==或!=运算符
  "no-eval": 1,//禁止使用eval
  "no-ex-assign": 2,//禁止给catch语句中的异常参数赋值
  "no-extend-native": 2,//禁止扩展native对象
  "no-extra-bind": 2,//禁止不必要的函数绑定
  "no-extra-boolean-cast": 2,//禁止不必要的bool转换
  "no-extra-parens": 2,//禁止非必要的括号
  "no-extra-semi": 2,//禁止多余的冒号
  "no-fallthrough": 1,//禁止 switch 穿透
  "no-floating-decimal": 2,//禁止省略浮点数中的0 .5 3.
  "no-func-assign": 2,// 禁止重复的函数声明
  "no-implicit-coercion": 1,// 禁止隐式转换
  "no-implied-eval": 2,// 禁止使用隐式 eval
  "no-inline-comments": 0,// 禁止行内备注
  "no-inner-declarations": [2, "functions"],//禁止在块语句中使用声明（变量或函数）
  "no-invalid-regexp": 2,//禁止无效的正则表达式
  "no-irregular-whitespace": 2,//不能有不规则的空格
  "no-iterator": 2,//禁止使用__iterator__ 属性
  "no-label-var": 2,//label名不能与var声明的变量名相同
  "no-labels": 2,//禁止标签声明
  "no-lone-blocks": 2,//禁止不必要的嵌套块
  "no-lonely-if": 2,//禁止 else 语句内只有if语句
  "no-loop-func": 1,//禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
  "no-mixed-requires": [0, false],// 声明时不能混用声明类型
  "no-mixed-spaces-and-tabs": [2, false],// 禁止混用tab和空格
  "linebreak-style": [0, "windows"],// 换行风格
  "no-native-reassign": 2,// 不能重写native对象
  "no-negated-in-lhs": 2,// in 操作符的左边不能有!
  "no-nested-ternary": 0,// 禁止使用嵌套的三目运算
  "no-new": 1,// 禁止在使用new构造一个实例后不赋值
  "no-new-func": 1,// 禁止使用new Function
  "no-new-object": 2,//禁止使用new Object()
  "no-new-require": 2,//禁止使用new require
  "no-new-wrappers": 2,//禁止使用new创建包装实例，new String new Boolean new Number
  "no-obj-calls": 2,//不能调用内置的全局对象，比如Math() JSON()
  "no-octal": 2,//禁止使用八进制数字
  "no-octal-escape": 2,//禁止使用八进制转义序列
  "no-param-reassign": 2,// 禁止给参数重新赋值
  "no-path-concat": 0,//node中不能使用__dirname或__filename做路径拼接
  "no-plusplus": 0,// 禁止使用++，--
  "no-process-env": 0,// 禁止使用process.env
  "no-process-exit": 0,// 禁止使用process.exit()
  "no-proto": 2,// 禁止使用__proto__属性
  "no-redeclare": 2,// 禁止重复声明变量
  "no-regex-spaces": 2,//禁止在正则表达式字面量中使用多个空格 /foo bar/
  "no-restricted-modules": 0,//如果禁用了指定模块，使用就会报错
  "no-return-assign": 1,//return 语句中不能有赋值表达式
  "no-script-url": 0,// 禁止使用javascript:void(0)
  "no-self-compare": 2,// 不能比较自身
  "no-sequences": 0,// 禁止使用逗号运算符
  "no-shadow": 2,// 外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
  "no-shadow-restricted-names": 2,// 严格模式中规定的限制标识符不能作为声明时的变量名使用
  "no-spaced-func": 2,// 函数调用时 函数名与 () 之间不能有空格
  "no-sparse-arrays": 2,// 禁止稀疏数组， [1,,2]
  "no-sync": 0,// nodejs 禁止同步方法
  "no-this-before-super": 0,//在调用super()之前不能使用this或super
  "no-throw-literal": 2,// 禁止抛出字面量错误 throw "error";
  "no-undef": 1,// 不能有未定义的变量
  "no-undef-init": 2,// 变量初始化时不能直接给它赋值为undefined
  "no-undefined": 2,// 不能使用undefined
  "no-unexpected-multiline": 2,// 避免多行表达式
  "no-underscore-dangle": 1,// 标识符不能以_开头或结尾
  "no-unneeded-ternary": 2,// 禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
  "no-unreachable": 2,// 不能有无法执行的代码
  "no-unused-expressions": 2,// 禁止无用的表达式
  "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数
  "no-useless-call": 2,//禁止不必要的call和apply
  "no-void": 2,//禁用void操作符
  "no-var": 0,//禁用var，用let和const代替
  "no-warning-comments": [1, { "terms": ["todo", "fixme", "xxx"], "location": "start" }],// 不能有警告备注
  "no-with": 2,// 禁用 with
  "array-bracket-spacing": [2, "never"],// 是否允许非空数组里面有多余的空格
  "arrow-parens": 0,// 箭头函数用小括号括起来
  "arrow-spacing": 0,// =>的前/后括号
  "accessor-pairs": 0,// 在对象中使用getter/setter
  "block-scoped-var": 0,// 块语句中使用var
  "brace-style": [1, "1tbs"],// 大括号风格
  "callback-return": 1,// 避免多次调用回调什么的
  "camelcase": 2,// 强制驼峰法命名
  "comma-dangle": [2, "never"],// 对象字面量项尾不能有逗号
  "comma-spacing": 0,// 逗号前后的空格
  "comma-style": [2, "last"],// 逗号风格，换行时在行首还是行尾
  "complexity": [0, 11],// 循环复杂度
  "computed-property-spacing": [0, "never"],//是否允许计算后的键名什么的
  "consistent-return": 0,// return 后面是否允许省略
  "consistent-this": [2, "that"],// this别名
  "constructor-super": 0,// 非派生类不能调用super，派生类必须调用super
  "curly": [2, "all"],// 必须使用 if(){} 中的{}
  "default-case": 2,// switch语句最后必须有default
  "dot-location": 0,// 对象访问符的位置，换行的时候在行首还是行尾
  "dot-notation": [0, { "allowKeywords": true }],//避免不必要的方括号
  "func-names": 0,//函数表达式必须有名字
  "func-style": [0, "declaration"],//函数风格，规定只能使用函数声明/函数表达式
  "generator-star-spacing": 0,//生成器函数*的前后空格
  "guard-for-in": 0,//for in循环要用if语句过滤
  "handle-callback-err": 0,//nodejs 处理错误
  "id-length": 0,//变量名长度
  "indent": [2, 4],//缩进风格
  "key-spacing": [0, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格
  "lines-around-comment": 0,//行前/行后备注
  "max-depth": [0, 4],// 嵌套块深度
  "max-len": [0, 80, 4],//字符串最大长度
  "max-nested-callbacks": [0, 2],// 回调嵌套深度
  "max-params": [0, 3],// 函数最多只能有3个参数
  "max-statements": [0, 10],// 函数内最多有几个声明
  "new-cap": 2,// 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
  "new-parens": 2,// new 时必须加小括号
  "newline-after-var": 2,// 变量声明后是否需要空一行
  "object-curly-spacing": [0, "never"],//大括号内是否允许不必要的空格
  "object-shorthand": 0,// 强制对象字面量缩写语法
  "one-var": 1,// 连续声明
  "operator-assignment": [0, "always"],//赋值运算符 += -=什么的
  "operator-linebreak": [2, "after"],//换行时运算符在行尾还是行首
  "padded-blocks": 0,//块语句内行首行尾是否要空行
  "prefer-spread": 0,//首选展开运算
  "prefer-reflect": 0,// 首选Reflect的方法
  "quote-props":[2, "always"],// 对象字面量中的属性名是否强制双引号
  "radix": 2,// parseInt 必须指定第二个参数
  "require-yield": 0,//生成器函数必须有yield
  "semi-spacing": [0, {"before": false, "after": true}],//分号前后空格
  "sort-vars": 0,// 变量声明时排序
  "space-after-keywords": [0, "always"],// 关键字后面是否要空一格
  "space-before-blocks": [0, "always"],// 不以新行开始的块{前面要不要有空格
  "space-before-function-paren": [0, "always"],// 函数定义时括号前面要不要有空格
  "space-in-parens": [0, "never"],// 小括号里面要不要有空格
  "space-infix-ops": 0,// 中缀操作符周围要不要有空格
  "space-return-throw-case": 2,// return throw case后面要不要加空格
  "space-unary-ops": [0, { "words": true, "nonwords": false }],// 一元运算符的前/后要不要加空格
  "spaced-comment": 0,// 注释风格要不要有空格什么的
  "use-isnan": 2,// 禁止比较时使用NaN，只能用isNaN()
  "valid-jsdoc": 0,// jsdoc规则
  "valid-typeof": 2,// 必须使用合法的typeof的值
  "vars-on-top": 2,// var必须放在作用域顶部
  "wrap-iife": [2, "inside"],// 立即执行函数表达式的小括号风格
  "wrap-regex": 0,// 正则表达式字面量用小括号包起来
  "yoda": [2, "never"]// 禁止尤达条件
}
```

## 参考文章

| 作者        | 文章名称                                                     |
| ----------- | ------------------------------------------------------------ |
| yuxiaoliang | [在 Typescript 项目中，如何优雅的使用 ESLint 和 Prettier](https://juejin.cn/post/6844903880006844424) |
| 爱心发电丶  | [Eslint该如何配置？Eslint使用以及相关配置说明](https://zhuanlan.zhihu.com/p/548306020) |
|             | [14 Linting Rules To Help You Write Asynchronous Code in JavaScript](https://maximorlov.com/linting-rules-for-asynchronous-code-in-javascript/) |
|             | [The best eslint rules for react projects](https://timjames.dev/blog/the-best-eslint-rules-for-react-projects-30i8) |

