> Create by **fall** on:2022-05-07
> Recently revised in:2022-05-30

## jest

测试环境搭建

安装依赖

```json
{
  "jest": "^24.0.0",
  "babel-jest": "^26.1.0",
  "@babel/preset-env": "^7.10.4",
  // 如果有 vue
  "vue-jest": "^5.0.0-alpha.3",
  "@vue/test-utils": "^2.0.0-beta.9"
}
```

配置 `babel.config.js`

```js
module.exports = {
  presets: [
    [
      "@babel/preset-env", { 
        targets: { 
          node: "current" 
        } 
      }
    ]
  ],
}
```

配置 `jest.config.js`

```js
module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\js$": "babel-jest",
  },
  moduleFileExtensions: ["vue", "js", "json", "jsx", "ts", "tsx", "node"],
  testMatch: ["**/tests/**/*.spec.js", "**/__tests__/**/*.spec.js"],
  moduleNameMapper: {
    "^main(.*)$": "<rootDir>/src$1",
  },
};
```

启动所用的脚本 `"test": "jest --runInBand"`

测试代码文件 `test/example.test.js`

```js
import HelloWorld from "main/components/HelloWorld.vue";
import { shallowMount } from "@vue/test-utils";

describe("aaa", () => {
  test("should ", () => {
    const wrapper = shallowMount(HelloWorld, {
      props: {
        msg: "hello,vue3",
      },
    });
    expect(wrapper.text()).toMatch("hello,vue3");
  });
});
```

为 `lint` 添加 `jest` 环境，避免报错

```js
module.exports = {
  env: {
    jest: true
  },
}
```





## 参考文章

| 作者   | 链接                                       |
| ------ | ------------------------------------------ |
| 杨村长 | https://juejin.cn/post/6910014283707318279 |

