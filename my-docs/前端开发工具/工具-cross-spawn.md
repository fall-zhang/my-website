> Create by **fall** on: 2022-07-12
> Recently revised in: 2022-07-12

## cross-spawn

Node 提供 [child_process](http://nodejs.cn/api/child_process.html) 模块来创建子进程，其中 [child_process.spawn()](http://nodejs.cn/api/child_process.html#child_process_child_process_spawn_command_args_options) 方法的作用是使用指定的命令行参数创建异步子进程，`child_process.spawnSync()` 是其同步进程创建方法。

[`child_process.spawn(command[, args\][, options])`](http://nodejs.cn/api/child_process.html#child_process_options_stdio)，简介👇：

- `command`：`<string>` 将要运行的命令。
- `args`：`<string[]>` 字符串参数列表。
- `options`: `<Object>`
  - `cwd`：子进程的当前工作目录。
  - `stdio`：子进程的标准输入输出配置，值为 `'inherit'` 表示子进程将使用父进程的标准输入输出。详见[这里](https://link.juejin.cn?target=http%3A%2F%2Fnodejs.cn%2Fapi%2Fchild_process%2Foptions_stdio.html)
  - 省略其他选项...

`cross-spawn` 是 node `spawn` 和 `spawnSync` 的跨平台实现，使用方式完全一致，主要解决 node `spawn` 在 Windows 上存在的[问题](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fmoxystudio%2Fnode-cross-spawn%23why)。

```js
const spawn = require('cross-spawn');

// Spawn NPM asynchronously
const child = spawn('npm', ['list', '-g', '-depth', '0'], { stdio: 'inherit' });

// Spawn NPM synchronously
const result = spawn.sync('npm', ['list', '-g', '-depth', '0'], { stdio: 'inherit' });
```

## 参考文章

| 作者         | 链接                                       |
| ------------ | ------------------------------------------ |
| 工具我那都齐 | https://juejin.cn/post/6991820222701404190 |

