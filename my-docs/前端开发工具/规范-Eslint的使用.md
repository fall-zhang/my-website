> Create by **fall** on 2020-08
> Recently revised in 2022-07-11

## Eslint

官方网址：https://cn.eslint.org/docs/rules/

作为一个语法检查工具，可以用来保证代码书写格式的绝对正确。任何错误（语法）都能被查找出来。

一般作为配置项配置在 `.eslintrc.js` 中，或者可能配置在 `package.json` 中作为配置项。

```js
module.exports = {
  globals:{
    ref:true, // 设置一些自定义的全局变量，保证使用时不会出现报错
  },
  root: true,  // 用来告诉 eslint 找当前配置文件
  env: {  // 指定你想启用的环境，下面的配置指定为 node 环境
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],  // 格式化代码插件
  parserOptions: { // 语法分析器版本
    ecmaVersion: 2020,
  },
  rules: {  // 语法规则
    //  "规则名": [错误等级值, 规则配置],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: { //用来指定eslint解析器的
    parser: "babel-eslint"
  }
};
```

错误等级分为三种

- `off` 或者 `0` 表示关闭规则
- `warn` 或者 `1` 打开规则，表示警告，打印黄色字体（黄色波浪线）
- `error` 或者 `2` 打开规则，并且作为错误，打印红色字体（红色波浪线）

## TypeScript

TypeScript 也是使用 eslint 进行格式化，tslint 已经不再维护，而是合并到 eslint 中

## 推荐配置

### vue

```json
{
  rules: {
    // vue
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 4
      },
      multiline: {
        max: 1
      }
    }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/html-indent': ['error', 2],
    'vue/script-indent': ['error', 2],
    'vue/html-quotes': ['error', 'single'],
    'vue/multi-word-component-names': ['off'],
    // js
    quotes: ['error', 'single'], // 单引号
    indent: ['error', 2], // 2 行缩进
    semi: ['error', 'never'], // 禁止使用分号
    'no-debugger': 'warn', // 使用 debugger 会警告
    'no-else-return': 'error', // 如果 if 语句里面有 return ,后面不能跟 else 语句
    'space-infix-ops': ['error', { int32Hint: false }], // 要求操作符周围有空格
    'no-multi-spaces': 'error', // 禁止多个空格
    'no-multiple-empty-lines': ['error', { max: 2 }], // 空行最多不能超过2行
    'no-whitespace-before-property': 'error', // 禁止在属性前使用空格
    'space-before-blocks': 'error', // 在块之前强制保持一致的间距
    'no-trailing-spaces': 'error', // 一行结束后面不要有空格
    'space-before-function-paren': ['error', 'never'], // 在“ function”定义打开括号之前强制不加空格
    'space-in-parens': ['error', 'never'], // 强制括号左右的不加空格
    'spaced-comment': ['error', 'always'], // 注释间隔
    'template-tag-spacing': ['error', 'always'], // 在模板标签及其文字之间需要空格
    'no-var': 'error', // 禁止使用 var
    'prefer-destructuring': ['error',{// 优先使用数组和对象解构
        array: false,
        object: false
      }, {
        enforceForRenamedProperties: false
      }],
    // 组件名称为多个单词，忽略的组件名称
    'comma-dangle': ['error', 'never'], // 最后一个属性不允许有逗号
    'arrow-spacing': 'error', // 箭头函数空格
    'prefer-template': 'error',
    'template-curly-spacing': 'error',
    'quote-props': ['error', 'as-needed'], // 对象字面量属性名称使用引号
    'object-curly-spacing': ['error', 'always'], // 强制在花括号中使用一致的空格
    'no-unneeded-ternary': 'error', // 禁止可以表达为更简单结构的三元操作符
    'no-restricted-syntax': ['error', 'WithStatement', 'BinaryExpression[operator="in"]'], // 禁止with/in语句
    'no-lonely-if': 'error', // 禁止 if 语句作为唯一语句出现在 else 语句块中
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }], // 要求方法链中每个调用都有一个换行符
    // 路径别名设置
    'no-submodule-imports': ['off', '/@'],
    'no-implicit-dependencies': ['off', ['/@']],
    // typescript
    '@typescript-eslint/no-explicit-any': 'warn' // 类型可以使用any
  }
}
```

### React

```json
{
  rules: {
    // js
    'no-else-return': 2, //如果 if 语句里面有 return ,后面不能跟 else 语句
    'arrow-body-style': 0,
    'jsx-a11y/label-has-for': 0,
    'max-lines-per-function': [
      2,
      { max: 320, skipComments: true, skipBlankLines: true }
    ],
    semi: [2, 'never'], //语句不使用分号结尾
    'no-confusing-arrow': 0,
    'no-nested-ternary': 0,
    'no-console': 1,
    'no-debugger': 1, //使用 debugger 会警告
    'no-multiple-empty-lines': [2, { max: 2 }], // 空行最多不能超过2行
    'no-multi-spaces': 2, // 不能用多余的空格
    'no-trailing-spaces': 2, // 一行结束后面不要有空格
    'eol-last': 0, // 文件以单一的换行符结束
    eqeqeq: 1, //必须使用全等
    'no-proto': 1, // 禁止使用__proto__属性
    'no-sparse-arrays': 2, // 禁止稀疏数组， [1,,2]
    quotes: [1, 'single'], // 引号类型 `` "" ''
    // 'consistent-this': [2, 'that'],// this别名
    'no-param-reassign': [
      2,
      { props: true, ignorePropertyModificationsFor: ['draft'] }
    ],
    'react/no-this-in-sfc': 0,
    'react/prop-types': 0,
    'comma-dangle': ['error', 'never'], // 最后一个属性不允许有逗号
    'react/display-name': 'off'
  }
}
```



## Eslint 语法配置清单



> P.S.我认为经常使用的会优先排列在前面

```json
{
  "no-alert": 0,// 禁止使用alert confirm prompt
  "no-array-constructor": 2,// 禁止使用数组构造器，箭头函数
  "no-console": 2,// 禁止使用 console
  "no-const-assign": 2,// 禁止修改const声明的变量
  "no-debugger": 2,//禁止使用 debugger
  "no-empty-label": 2,// 禁止使用空 label  
  "no-invalid-this": 2,// 禁止无效的this，只能用在构造器，类，对象字面量
  "no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
  "no-multi-spaces": 1,// 不能用多余的空格
  "no-multi-str": 2,//字符串不能用\换行
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
  "quote-props":[2, "always"],//对象字面量中的属性名是否强制双引号
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
