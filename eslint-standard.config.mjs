import pluginImport from 'eslint-plugin-import'
import pluginPromise from 'eslint-plugin-promise'

export default {
  // files: ['**/*.{tsx,ts}'],
  // ignores: ['**/temp.js', '**/release/**/*.js'],
  plugins: {
    import: pluginImport,
    promise: pluginPromise
  },
  rules: {
    'no-var': 'warn',
    'object-shorthand': ['warn', 'properties'],
    'accessor-pairs': ['error', { setWithoutGet: true, enforceForClassMembers: true }],
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': ['error', {
      allowImplicit: false,
      checkForEach: false
    }],
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    camelcase: ['error', {
      allow: ['^UNSAFE_'],
      properties: 'never',
      ignoreGlobals: true
    }],
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'never'
    }],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
    curly: ['error', 'multi-line'],
    'default-case-last': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': ['error', { allowKeywords: true }],
    'eol-last': 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }], // 必须使用全等
    'func-call-spacing': ['error', 'never'],
    'generator-star-spacing': ['error', { before: true, after: true }],
    indent: [1, 2], // 两个空格表示换行
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'multiline-ternary': ['error', 'always-multiline'],
    'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true }],
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-caller': 'error',
    'no-debugger': 'warn',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-parens': ['error', 'functions'],
    'no-floating-decimal': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 'error',
    'no-mixed-operators': ['error', {
      groups: [
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: true
    }],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['error', { max: 2 }], // 空行最多不能超过2行
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error', // 禁止使用__proto__属性
    'no-return-assign': ['error', 'except-parens'],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-sparse-arrays': 'error', // 禁止稀疏数组， [1,,2]
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error', // 行尾不能有多余空格
    'no-undef-init': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-unreachable-loop': 'error',
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true
    }],
    'no-unused-vars': ['error', {
      args: 'none',
      caughtErrors: 'none',
      ignoreRestSiblings: true,
      vars: 'all'
    }],
    'no-use-before-define': ['error', { functions: false, classes: false, variables: false }],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
    'one-var': ['error', { initialized: 'never' }],
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before', '|>': 'before' } }],
    'padded-blocks': ['error', { blocks: 'never', switches: 'never', classes: 'never' }],
    'prefer-const': ['error', { destructuring: 'all' }],
    'prefer-promise-reject-errors': 'error', // 使用 new Error 追踪错误
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
    'quote-props': ['error', 'as-needed'],
    quotes: ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: false }],

    'rest-spread-spacing': ['error', 'never'],
    semi: ['warn', 'never'], // 语句不使用分号结尾
    'semi-spacing': ['error', { before: false, after: true }],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'spaced-comment': ['error', 'always', {
      line: { markers: ['*package', '!', '/', ',', '='] },
      block: { balanced: true, markers: ['*package', '!', ',', ':', '::', 'flow-include'], exceptions: ['*'] }
    }],
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
    'yield-star-spacing': ['error', 'both'],
    yoda: ['error', 'never'],

    'no-promise-executor-return': 1, // 禁止 promise 中使用 return
    'no-await-in-loop': 2, // 禁止循环中使用 await
    'no-else-return': 2, // 如果 if 语句里面有 return 后面不能跟 else 语句
    'max-nested-callbacks': ['error', 4], // 最大回调嵌套数
    'no-return-await': 2,
    'max-lines-per-function': [
      2,
      { max: 300, skipComments: true, skipBlankLines: true }
    ],
    'no-confusing-arrow': 2,
    'no-nested-ternary': 2,
    'no-console': 1,
    'no-param-reassign': [
      2,
      { props: true, ignorePropertyModificationsFor: ['draft'] }
    ],
    'import/no-anonymous-default-export': 'off', // 禁止匿名函数导出
    'import/export': 'error',
    'import/first': 'error',
    'import/no-absolute-path': ['error', { esmodule: true, commonjs: true, amd: false }],
    'import/no-duplicates': 'error',
    'import/no-named-default': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'promise/param-names': 'error'
  }
}
