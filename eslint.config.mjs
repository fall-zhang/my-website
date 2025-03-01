import standard from './eslint-standard.config.mjs'
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
    // 对引入的内容进行排序：是否忽略大小写
    // 'sort-imports': ["error", { "ignoreCase": false }],
    // 交给 tslint 处理
    // 'no-unused-vars': 'off',
    // 异步处理
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
  standard, // js 标准配置
  ...tslint.configs.recommended,
  defaultConfig
]
