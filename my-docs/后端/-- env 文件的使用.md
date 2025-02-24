> Create by **fall** on ——
> Recently revised in 11 Oct 2023

> 注：Node v20.6.0 版本开始，版本内置了对 .env 文件的支持，也许不再需要 dotenv 了。

## 常见文件配置

`.env` 文件表示配置文件

建议所有的变量都大写并且通过 `_` 进行连接

```
# 这里写注释
VUE_APP_PINK_WEB="http://192.168.56.20:8087"
VUE_APP_PINK_PIC="192.168.80.201:8087"
```

配置出来的 value 只支持 string 类型。并且，如果想使用 `$` 符号作为文本，须通过 `\$` 进行转义

```
VUE_APP_ID=true
```

## 配置文件命名

除了 `.env` 文件之外，还可以使用以下命令

- `.env.local` 只会在本地启用，一般会在 `.gitignore` 中进行配置，被忽略掉
- `.env.development` 只会在开发环境下使用，`npm run dev` 一般默认使用该
- `.env.production` 只会在生产环境下使用，`npm run dev` 一般默认使用该
- `.env.[mode]` 其它自定义的模式
- `.env.[mode].local` 只会在本地启用的自定义的模式

优先级：`.env.[mode].local` `.env.[mode]` > `.env.local` > `.env`

## 获取配置文件

node 环境下，可以通过 `process.env` 获取到对应的属性
vite 中，可以通过 `import.global.env` 调用获取（在构建时会被替换为对应的静态字符串），且变量命名必须以 `VITE_` 开头

> 不建议将敏感信息放入到生产环境变量中，会作为字符串替换掉属性

### 指定对应的文件

大小写是否敏感？不敏感

示例：

如果同一个目录下出现以下内容：

```
VUE_APP_callBackURL="加班？"
VUE_APP_CALLBACKURL="嘛玩意"
```

如果两个字段同时在一个文件中出现，将只解析一个（我的环境下测试后，只提供了前者）



## 命令

```bash
node --env-file .env env1.js
```

21.7.0 中也添加了 

```js
process.loadEnvFile();
```

