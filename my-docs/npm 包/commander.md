> Create by **fall** on 12 Jul 2022<br/>
> Recently revised in 16 Nov 2023

# commander

`commander` 是 node.js 命令行解决方案。基本使用步骤：

1. 创建 `Command` 对象，得到一个程序（`program`）实例。其中一个程序包含一个或多个命令（`command`），一个命令中可包含多个命令选项（`option`）。
2. 配置命令与命令选项。使用 `.command` 方法配置命令名称、参数、描述信息，使用 `.option` 方法添加命令选项，包括选项名称、参数、描述、默认值等。
3. 注册命令处理函数。通过 `.action` 方法指定命令处理函数，或使用 `.on` 方法监听命令和选项添加自定义函数。
4. 解析用户命令行输入，匹配命令或选项后执行对应的处理函数。

## 概念

**单命令程序与多命令程序**

单命令程序即程序（`program`）中只包含一个命令，而每个程序本身包含一个顶层命令，故单命令程序不需要额外配置命令。而多命令程序需要配置多个命令，并为每个命令指定独立的处理函数或可执行程序。

**顶级命令、子命令**

以单命令程序 `create-react-app` 为例，在 `create-react-app <project-directory>` 中，`create-react-app` 就是顶级命令，且是唯一的命令，`<project-directory>` 是一个必填的命令参数。
 而多命令程序包含至少两个命令，如 `demo-cli exec <script>` 、`demo-cli setup [env]`，`demo-cli` 为顶级命令，`exec` 和 `setup` 为子命令。

**必填参数、可选参数、可变参数**

👆上面的`<script>`、`[env]` 就分别表示一个必填参数和一个可选参数。如果在其中添加`...` 符号（如 `<script...>`）则表示该参数为可变参数，解决一个参数名称中需要传入多个值的情况，如命令行执行 `demo-cli exec a b c`，参数 `script` 的值将解析成一个数组 `[a, b, c]`。

**选项**

选项可同时设置短选项与长选项，分别使用 `-` 与 `--` 标识，比如常见的 `-v` 与 `--version`。

**命令参数、选项参数**

命令后的参数即为命令参数，`--` 或 `-` 后的部分即为选项名与选项参数。以 `create-react-app <project-directory> --template <template-name> --use-npm` 为例。`create-react-app` 是一个命令（顶级），`<project-directory>` 是一个必填的命令参数，`--template <template-name>` 表示一个名为 `template` 的**选项**（长选项），其参数 `template-name` 必填。`use-npm` 也是一个选项，后面没有参数内容，表示 `use-npm` 是一个布尔值选项，命令行中输入了 `--use-npm` 则该选项值为 `true`，否则为 `false`。

## 使用

### 单命令程序

以 `create-react-app` 实现为例。

1. 创建一个程序（`program`）实例

```js
const { Command } = require('commander');
const packageJson = require('./package.json');
// 顺便设置程序名称及版本
const program = new Command(packageJson.name).version(packageJson.version);
复制代码
```

1. 配置命令、选项，及其处理函数

实现 `create-react-app <project-directory> --template <template-name> --use-npm` 为例：

```bash
# create-react-app <project-directory> --template <template-name> --use-npm
npx create-react-app my-app --template typescript --use-npm

```

**配置命令、设置命令处理函数**

由于 `create-react-app` 是只有一个命令，即 `create-react-app <project-directory>`，所以我们不再需要新增子命令，直接使用 `program` 作为顶级命令，添加顶级命令参数即可。

实现：

```js
let projectName;
program
  .arguments('<project-directory>') // 
  // .arguments('<must> [optional]') // 可设置多个命令参数
  .action((name, options, command) => { projectName = name; }) // 添加命令处理函数，函数参数与命令参数一一对应
  // ...
program.args() // 使用 .args() 获取命令参数

```

说明：

- 使用 `.arguments()` 方法可设置多个顶级命令参数，比如`.arguments('<must1> <must2> [optional1] [rest...]')`，如果想使用可变参数（`...`），只能在最后一个参数中使用。
- 使用 `.action()` 方法添加命令处理函数。函数参数与命令参数一一对应，并附带两个额外参数 `options` 和 `command`，分别表示命令上解析出的选项信息和该命令对象本身。
- 在单命令程序中可以不使用 `.action()`，因为没有子命令，可以直接使用 `program.args()` 获取解析后的顶级命令参数即可。

**配置选项、处理选项**

```bash
# npx create-react-app <project-directory> --template <template-name> --use-npm
npx create-react-app my-app --template typescript --use-npm

```

说明：

- `--template` 选项表示使用 `typescript` 模板，`--use-npm` 表示项目使用 `npm`（默认为 `yarn`）。

- `--use-npm` 是一个 `布尔型选项`，命令行中使用选项名时，其选项参数值为 `true`，否则为 `false`

- 选项的类型分为 必填参数选项、可选参数选项、布尔型选项、取反选项

  - `--template <template-name>` 表示 `template` 是一个`必填参数选项`，选项参数必填。如使用 `[]` 则表示一个`可选参数选项`。
  - `--use-npm` 是一个 `布尔型选项`，命令行中使用选项名时，其选项参数值为 `true`，否则为 `false`。

实现：

```js
program
  .arguments('<project-directory>') // 为最顶层命令指定命令参数
  .option('--template <path-to-template>', 'specify a template for the created project')
  .option('--use-npm')
  // ...
  .on('--help', () => {
    console.log(
      `    Only ${chalk.green('<project-directory>')} is required.`
    );
    // ... 省略其他 help log
  })
  .parse(process.argv);

const { template, useNpm } = program.opts(); // { template: 'typescript', useNpm: true }
createApp(name, template, useNpm)

```

说明：

- 使用`.option()` 方法给命令添加选项。该方法有三个参数，分别为 `短选项名称, 长选项名称 选项参数`，`描述`，`默认值`。例如：

```js
.option(
  '-c, --cheese <type>', // 长、短选项名称使用逗号分隔，选项名称与选项参数使用空格分隔
  'add the specified type of cheese', // 描述
  'blue' // 默认值
)

```

- 如果需要在一个选项中允许用户输入多个选项参数，使用 `...` 设置为可变参数，参数值返回数组。例如：

```js
program
  .option('-n, --number <numbers...>', 'specify numbers')
  .option('-l, --letter [letters...]', 'specify letters');
  .parse(); // 命令行参数解析

// 执行：demo-cli -n 1 2 3 --letter a b c
console.log('Options: ', program.opts());
// Options:  { number: [ '1', '2', '3' ], letter: [ 'a', 'b', 'c' ] }

```

- 在单命令程序中，所有选项都是顶级命令选项，可以直接使用 `program.opts()` 获取解析后的选项值。对于多个单词的长选项，需要使用驼峰法获取，如 `--use-npm` 选项通过 `program.opts().useNpm` 获取
- 使用 `.on()` 方法可以监听选项，配置选项处理函数。上面示例中，用户输入 `--help` 选项即会输出自定义的帮助信息。 `.on()` 用于在多命令程序中监听子命令、注册处理函数（👇会提到）。

1. 解析参数

使用 `.parse()` 解析参数，默认解析 `process.argv`。

```js
program.parse(); // 相当于 program.parse(process.argv);

```

`process` 即进程对象，`process.argv` 返回数组，即 `[启动 Node.js 进程的可执行文件的绝对路径名, 当前正在执行 JavaScript 文件的路径, ...启动 Node.js 进程时传入的命令行参数]`。

例如命令行中执行 `create-react-app my-app --template typescript --use-npm`，`process.argv` 返回：

```js
[
  '/Users/user/.nvm/versions/node/v14.17.0/bin/node',
  '/Users/user/Desktop/create-react-app/node_modules/.bin/create-react-app',
  'my-app',
  '--template',
  'typescript',
  '--use-npm'
]

```

完整示例：

```js
const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .arguments('<project-directory>') // 为最顶层命令指定命令参数
  .action(name => { projectName = name; }) // 添加命令处理函数
  .usage(`${chalk.green('<project-directory>')} [options]`) // 修改帮助信息中的首行提示信息
  // 添加选项
  .option('--verbose', 'print additional logs')
  .option(
    '--scripts-version <alternative-package>',
    'use a non-standard version of react-scripts'
  )
  .option(
    '--template <path-to-template>',
    'specify a template for the created project'
  )
  .option('--use-npm')
  .option('--use-pnp')
  .allowUnknownOption() // 允许输入未知选项。默认情况下在在命令行上输入未知的选项会提示异常。
  // .allowExcessArguments(false) // 过多参数将报错。默认情况下，传入过多的参数并不报错
  // 监听 `--help` 选项，输出自定义帮助信息 
  .on('--help', () => {
    console.log(
      `    Only ${chalk.green('<project-directory>')} is required.`
    );
    // ... 省略其他 log
  })
  .parse(process.argv); // 解析命令行参数
// 使用选项参数
const { verbose, scriptsVersion, template, useNpm, usePnp } = program.opts();
createApp(projectName, verbose, scriptsVersion, template, useNpm, usePnp);

```

### 多命令程序

与单命令程序相比，多命令程序即程序中包含多个子命令。需要使用 `.command()` 添加子命令，并为每个命令指定处理函数或独立的可执行程序。

下面示例中添加了两个命令（`setup` 与 `exec`），并使用 `.action` 分别注册命令处理函数：

```js
const { Command } = require('commander');
const program = new Command();

program
  .version('0.0.1')
  // 设置通用的选项。通过 program.opts() 获取选项
  .option('-c, --config <path>', 'set config path', './deploy.conf');

program
  .command('setup [env]') // 添加 'setup' 命令，命令参数 'env' 设置为可选
  .description('run setup commands for all envs') // 添加命令描述
  .option('-s, --setup_mode <mode>', 'Which setup mode to use', 'normal') // 添加此命令下的选项
  // 添加命令处理函数
  .action((env, options) => {
    env = env || 'all';
    console.log('read config from %s', program.opts().config);
    console.log('setup for %s env(s) with %s mode', env, options.setup_mode);
  });

program
  .command('exec <script>') // 添加 'exec' 命令，命令参数 'script' 设置为必填
  .alias('ex') // 设置命令别名
  .description('execute the given remote cmd')
  .option('-e, --exec_mode <mode>', 'Which exec mode to use', 'fast')
  .action((script, options) => {
    console.log('read config from %s', program.opts().config);
    console.log('exec "%s" using %s mode and config %s', script, options.exec_mode, program.opts().config);
  })
  // 添加额外的帮助信息，与内建的帮助一同展示，'after' 表示在内建帮助信息之后进行展示
  .addHelpText('after', `
    Examples:
      $ deploy exec sequential
      $ deploy exec async`
  );
  
program.parse(process.argv); // 解析命令行参数

```

说明：

- 使用 `.command()` 方法添加子命令，支持设置一个或多个命令参数，比如 `.command('<username> [password]')`。
- 使用 `.description()` 方法给命令添加描述信息。方法还可传递第二个参数，设置命令中参数的描述信息（见示例👇）。
- 使用 `.action()` 给命令注册处理函数时，与 `.action()` 的参数与命令参数一一对应，并附加两个额外参数，即`options`（解析出的选项）、`command（该命令对象自身）`（见示例👇）。

```js
program
  .version('0.1.0')
  .arguments('<username> [password]')
  .description('test command', {
    username: 'user to login',
    password: 'password for user, if required'
  })
  .action((username, password) => {
    console.log('username:', username);
    console.log('environment:', password || 'no password given');
  });
```

## 参考文章

| 作者         | 链接                                       |
| ------------ | ------------------------------------------ |
| 工具我那都齐 | https://juejin.cn/post/6991820222701404190 |