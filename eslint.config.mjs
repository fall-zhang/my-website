import js from '@eslint/js'
import eslintReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import reactRefresh from 'eslint-plugin-react-refresh'

const eslintConfig = [
  { ignores: ['build','node_modules','.docusaurus'] },
  {
    name: 'app/files-to-lint',
    files: ['src/**/*.{js,mjs,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: globals.browser
    },
    plugins: {
      'react': eslintReact,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...eslintReact.configs.flat.recommended.rules, // This is not a plugin object, but a shareable config object
      ...eslintReact.configs.flat['jsx-runtime'].rules,
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      // js
      'max-lines-per-function': [
        2,
        { max: 300, skipComments: true, skipBlankLines: true }
      ],
      semi: [2, 'never'], // 语句不使用分号结尾
      'no-nested-ternary': 2,
      'no-console': 1,
      'no-debugger': 1, // 使用 debugger 会警告
      'no-multiple-empty-lines': [2, { max: 2 }], // 空行最多不能超过2行
      'no-trailing-spaces': 2, // 一行结束后面不要有空格
      'no-proto': 1, // 禁止使用__proto__属性
      quotes: [1, 'single'], // 引号类型 `` "" ''
      'prefer-promise-reject-errors': 2, // 使用 new Error 追踪错误
      'no-else-return': 2, // 如果 if 语句里面有 return ,后面不能跟 else 语句
      'arrow-body-style': 0,
      'jsx-a11y/label-has-for': 0,
      'no-confusing-arrow': 0,
      indent: [1, 2], // 两个空格表示换行
      'import/no-absolute-path': 'off', // 使用绝对路径引入
      'no-multi-spaces': 2, // 不能用多余的空格
      'eol-last': 0, // 文件以单一的换行符结束
      'no-unused-vars': 1, // 文件以单一的换行符结束
      eqeqeq: 1, // 必须使用全等
      'no-sparse-arrays': 2, // 禁止稀疏数组， [1,,2]
      'comma-dangle': ['error', 'never'], // 最后一个属性不允许有逗号
      'import/no-anonymous-default-export': 'off', // 最后一个属性不允许有逗号
      'no-param-reassign': [
        2,
        { props: true, ignorePropertyModificationsFor: ['draft'] }
      ],
      // 异步处理
      'no-promise-executor-return': 2, // 禁止 promise 中使用 return
      'no-await-in-loop': 2, // 禁止循环中使用 await
      'max-nested-callbacks': ['error', 3], // 异步最大回调数
      'no-return-await': 2,
      // react
      'react/prop-types': 0,
      'react/display-name': 'off',
      'react/no-this-in-sfc': 1,
      'react/jsx-uses-react': 'off', // React ^16.14.0 以及 V17 以后将支持新的语法转换器
      'react/react-in-jsx-scope': 'off' // 新的语法转换器不必引入 React
    }
  }
]

export default eslintConfig
