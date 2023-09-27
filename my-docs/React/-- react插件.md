> Create by **fall** on：2021-12-24
> Recently revised in：2021-12-24

## 插件

### 创建项目

Vite、CreateReact、Next、Gatsby

### 状态管理

使用 react 自带的 useState、useReduce、useContent 

或者是：Redux 

### 远程数据请求

react-query

`React Query` 最初是为使用 `REST API` 而设计的，但是现在它也支持了 `GraphQL`。

如果缺少 `React` 项目专门的 `GraphQL` 库，建议使用 `Apollo Client`（当前最流行的）、`urql`（轻量级）

### 路由

如果使用 `Next.js` 或 `Gatsby.js` 之类的框架，路由就已经处理好了，如果没有，建议使用 `react-router`

### CSS

> 关于 CSS 插件可以查看 `8-React+CSS`



### 组件库

`Material UI` (MUI) (最流行)：[material-ui.com/](https://link.juejin.cn?target=https%3A%2F%2Fmaterial-ui.com%2F)

`Mantine` (最推荐)：[mantine.dev/](https://link.juejin.cn?target=https%3A%2F%2Fmantine.dev%2F)

`Chakra UI` (最推荐)：[chakra-ui.com/](https://link.juejin.cn?target=https%3A%2F%2Fchakra-ui.com%2F)

`Ant Design`（国内最流行）：[ant.design/](https://link.juejin.cn?target=https%3A%2F%2Fant.design%2F)

### 动画库

开发者会选择 `React Transition Group`，这样他们就可以使用 `React`组件来执行动画了

- `Framer Motion` (最推荐)：www.framer.com/motion/
- `react-spring` (也推荐一下)：www.github.com/react-sprin

### 可视化图表

如果想要从头开始开发一些图表，那么就没有办法绕过 `D3` 。这是一个很底层的可视化库，可以为你提供开发一些炫酷的图表所需的一切。

- `Recharts`：[recharts.org/](https://link.juejin.cn?target=http%3A%2F%2Frecharts.org%2F)
- `react-chartjs`：github.com/reactchartj
- `nivo`：[nivo.rocks
- `visx`：[github.com/airbnb/visx](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fairbnb%2Fvisx)

### 表单库

`React` 现在最受欢迎的表单库是 `React Hook Form`

集成 `yup` 或 `zod` 进行表单验证

### 类型检查

直接使用 TypeScript 或者是 PropTypes ，后者在项目中已经不常用了

### 代码风格

prettier + Eslint

### 身份认证

一个带有身份验证的服务端应用(例如 `GraphQL` 后端)。

案中的一种：

- `Firebase`：[www.robinwieruch.de/complete-fi…](https://link.juejin.cn?target=https%3A%2F%2Fwww.robinwieruch.de%2Fcomplete-firebase-authentication-react-tutorial%2F)
- `Auth0`：[auth0.com/](https://link.juejin.cn?target=https%3A%2F%2Fauth0.com%2F)
- `AWS Cognito`：[aws.amazon.com/cognito/](https://link.juejin.cn?target=https%3A%2F%2Faws.amazon.com%2Fcognito%2F)

### 测试

React 的测试，使用的是 jest

你可以使用 `react-test-renderer` 在你的 `Jest` 测试中渲染 `React` 组件。这已经足以使用 `Jest` 执行所谓的 `Snapshot Tests` 了：一旦运行测试，就会创建 `React` 组件中渲染的 `DOM` 元素的快照。当你在某个时间点再次运行测试时，将创建另一个快照，这个快照会和前一个快照进行 `diff`。如果存在差异，`Jest` 将发出警告，你要么接受这个快照，要么更改一下组件的实现。

最近 `React Testing Library (RTL)` 也比较流行（在 `Jest` 测试环境中使用）

### 数据结构

不可变数据结构

那么最受欢迎的选择之一是 `Immer` 。

### 国际化

这些是处理国际化的最流行的库：

- `FormatJS`：[github.com/formatjs/fo…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fformatjs%2Fformatjs)
- `react-i18next`：[github.com/i18next/rea…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fi18next%2Freact-i18next)

### 富文本编辑

`React` 中的富文本编辑器，就简单推荐下面几个，我也没太多用过：

- `Draft.js`：[draftjs.org/](https://link.juejin.cn?target=https%3A%2F%2Fdraftjs.org%2F)
- `Slate.js`：[www.slatejs.org/](https://link.juejin.cn?target=https%3A%2F%2Fwww.slatejs.org%2F)
- `ReactQuill`：https://github.com/zenoamaro/react-quill

### 时间处理

如果你的 `React` 应用程序需要大量处理日期、时间和时区，你可以引入一个库来为你管理这些事情：

- `date-fns`：[github.com/date-fns/da…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fdate-fns%2Fdate-fns)
- `Day.js`：[github.com/iamkun/dayj…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fiamkun%2Fdayjs)

### 客户端

`Electron` 是现在跨平台桌面应用程序的首选框架。但是，也存在一些替代方案：

- `Tauri`： (当前最新的) [github.com/tauri-apps/…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Ftauri-apps%2Ftauri)
- `NW.js`：[nwjs.io/](https://link.juejin.cn?target=https%3A%2F%2Fnwjs.io%2F)

### 移动端

首选解决方案仍然是 `React Native`。

### VR/AR

 `React` 中所熟悉的 `AR/VR` 库：

- `react-three-fiber`： (最流行的3D库，其中也有VR实现)[github.com/pmndrs/reac…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fpmndrs%2Freact-three-fiber)
- `react-360：[facebook.github.io/react-360/](https://link.juejin.cn?target=https%3A%2F%2Ffacebook.github.io%2Freact-360%2F)
- `aframe-react`：[github.com/supermedium…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fsupermedium%2Faframe-react)

### 原型设计

- `Sketch`：[www.sketch.com/](https://link.juejin.cn?target=https%3A%2F%2Fwww.sketch.com%2F)
- `Figma`：[www.figma.com/](https://link.juejin.cn?target=https%3A%2F%2Fwww.figma.com%2F)
- `Zeplin`：[zeplin.io/](https://link.juejin.cn?target=https%3A%2F%2Fzeplin.io%2F)
- `Excalidraw`：[excalidraw.com/](https://link.juejin.cn?target=https%3A%2F%2Fexcalidraw.com%2F)

### 文档

都在使用 `Storybook` 作为文档工具，不过也有一些其他好的方案：

- `Docusaurus`：[github.com/facebook/do…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Ffacebook%2Fdocusaurus)
- `Docz`：[github.com/doczjs/docz](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fdoczjs%2Fdocz)
- `Styleguidist`：[github.com/styleguidis…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fstyleguidist%2Freact-styleguidist)



## 参考文章

| 作者     | 链接                                       |
| -------- | ------------------------------------------ |
| ConardLi | https://juejin.cn/post/7085542534943883301 |

