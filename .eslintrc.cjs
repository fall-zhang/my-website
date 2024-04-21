module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'eslint-config-standard'],
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // js
    'no-else-return': 2, // 如果 if 语句里面有 return 后面不能跟 else 语句
    indent: [2, 2],
    'max-lines-per-function': [
      2,
      { max: 300, skipComments: true, skipBlankLines: true }
    ],
    semi: [2, 'never'], // 语句不使用分号结尾
    'no-confusing-arrow': 2,
    'no-nested-ternary': 2,
    'no-console': 1,
    'no-debugger': 1, // 使用 debugger 会警告
    'no-multiple-empty-lines': [2, { max: 2 }], // 空行最多不能超过2行
    'no-multi-spaces': 2, // 不能用多余的空格
    'no-trailing-spaces': 2, // 一行结束后面不要有空格
    eqeqeq: 1, // 必须使用全等
    'no-proto': 1, // 禁止使用__proto__属性
    'no-sparse-arrays': 2, // 禁止稀疏数组， [1,,2]
    quotes: [1, 'single'], // 引号类型 `` "" ''
    'no-param-reassign': [
      2,
      { props: true, ignorePropertyModificationsFor: ['draft'] }
    ],
    // 异步处理
    'no-promise-executor-return': 2, // 禁止 promise 中使用 return
    'no-await-in-loop': 2, // 禁止循环中使用 await
    'max-nested-callbacks': ['error', 3], // 异步最大回调数
    'no-return-await': 2,
    'prefer-promise-reject-errors': 2, // 使用 new Error 追踪错误
    // react
    'react/no-this-in-sfc': 0,
    'react/prop-types': 0,
    'react/display-name': 'off',
    // typescript
    '@typescript-eslint/no-this-alias': 0 // 是否禁止 this 的别名
  }
}
