> Create by **fall** on 12 Sep 2023
> Recently revised in 12 Sep 2023

## Vitest

### 编写测试

```js
// sum.js
export function sum(a, b) {
  return a + b
}
```

```js
// sum.test.js
import { expect, test } from 'vitest'
import { sum } from './sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
```

配置脚本

```json
{
  "script":{
    "test":"vitest"
  }
}
```

最后执行 `npm run test` 就可以执行测试

### 配置文件

会读取 `vite.config.ts` 以匹配插件并设置 Vite 的部分配置内容，也可以创建 `vitest.config.ts`，优先级将会更高。

也可以在命令行指定配置文件，例如 `vitest --config ./path/to/vitest.config.ts`。

如果使用 Vite，需要在最顶行添加 `/// <reference types="vitest" />` 内容

```js
/// <reference types="vitest" />
import { defineConfig } from 'vite'
```

如果不使用 Vite 作为构建工具，您可以使用配置文件中的 `test` 属性来配置 Vitest：

> Vite 和 Vitest 使用两个单独的配置文件，Vitest 将覆盖您的 Vite 文件，而不是扩展它。
>
> 因此建议 Vite 和 Vitest 使用相同的文件，而不是创建两个单独的文件。

```ts
import { defineConfig } from 'vitest/config'
export default defineConfig({
  test: {
    // ...
  },
})
```

## 参考文章

| 作者/文章名称 | 链接 |
| ------------- | ---- |
|               |      |
|               |      |
|               |      |

