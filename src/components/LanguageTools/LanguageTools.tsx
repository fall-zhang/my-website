import clsx from 'clsx'
import $s from './index.module.css'
import Link from '@docusaurus/Link'

type UsingTool = {
  name: string,
  imgStyle: 'big' | 'small'
  image: string
  noteUrl: string
}
const usingToolList: UsingTool[] = [
  {
    name: 'HTML5',
    image: 'logo/HTML5_logo_and_wordmark.svg',
    noteUrl: '/docs/HTML和CSS/1.1-HTML基础',
    imgStyle: 'small'
  },
  {
    name: 'CSS3',
    image: 'logo/CSS3_logo.svg',
    noteUrl: '/docs/HTML和CSS/2.1-CSS选择器',
    imgStyle: 'small'
  },
  {
    name: 'JavaScript',
    image: 'logo/JavaScript_logo.svg',
    noteUrl: '/docs/JavaScript%20&%20TypeScript/1.1-JS基础知识',
    imgStyle: 'small'
  },
  {
    name: 'Typescript',
    image: 'logo/Typescript_logo.svg',
    noteUrl: '/docs/JavaScript%20&%20TypeScript/TypeScript/1.1-认识TS',
    imgStyle: 'small'
  },
  {
    name: 'Vue.js',
    image: 'logo/Vue.js_Logo_2.svg',
    noteUrl: '/docs/Vue/1.1-Vue介绍',
    imgStyle: 'small'
  },
  {
    name: 'Vite',
    image: 'logo/Vite.svg',
    noteUrl: '/docs/npm%20包/vite',
    imgStyle: 'small'
  },
  {
    name: 'React',
    image: 'logo/React_logo.svg',
    noteUrl: '/docs/React/1.1-React核心概念',
    imgStyle: 'small'
  },
  {
    name: 'Node.js',
    image: 'logo/Node.js_logo.svg',
    noteUrl: '/docs/后端/1.1-node基础',
    imgStyle: 'big'
  },
  {
    name: 'Less',
    image: 'logo/LESS_Logo.svg',
    noteUrl: '/docs/HTML和CSS/4.2-CSS预处理器',
    imgStyle: 'big'
  },
  {
    name: 'Sass',
    image: 'logo/Sass_Logo_Color.svg',
    noteUrl: '/docs/HTML和CSS/4.2-CSS预处理器',
    imgStyle: 'big'
  },
  {
    name: 'tailwindcss',
    image: 'logo/tailwindcss.svg',
    noteUrl: '/docs/npm%20包/tailwindcss',
    imgStyle: 'big'
  },
  {
    name: 'Npm',
    image: 'logo/Npm-logo.svg',
    noteUrl: '/blog/npm前端包',
    imgStyle: 'big'
  },
  {
    name: 'ESLint',
    image: 'logo/ESLint_logo.svg',
    noteUrl: '/docs/npm%20包/eslint',
    imgStyle: 'small'
  },
  {
    name: 'docusaurus',
    image: 'logo/docusaurus_keytar.svg',
    noteUrl: 'https://github.com/fall-zhang/fall-zhang.github.io',
    imgStyle: 'small'
  },
  {
    name: 'pnpm',
    image: 'logo/pnpm_logo.svg',
    noteUrl: '/docs/npm%20包/pnpm',
    imgStyle: 'small'
  },
  {
    name: 'Docker',
    image: 'logo/Docker.svg',
    noteUrl: '/docs/后端/docker/1.1-docker',
    imgStyle: 'small'
  },
  {
    name: 'tauri',
    image: 'logo/tauri.svg',
    noteUrl: '/docs/多平台开发/3.1-tauri%20搭建',
    imgStyle: 'small'
  },
  {
    name: 'linux',
    image: 'logo/Linux.svg',
    noteUrl: '/docs/Linux%20&%20命令行/1.1-linux',
    imgStyle: 'small'
  },
  {
    name: 'Rust',
    image: 'logo/Rust_logo.svg',
    noteUrl: '/docs/其它语言/rust/1.1-语言基础',
    imgStyle: 'small'
  },
  {
    name: 'nestjs',
    image: 'logo/nestjs.svg',
    noteUrl: '/docs/后端/5.1-nestjs',
    imgStyle: 'small'
  },
  {
    name: 'Next_logo',
    image: 'logo/Next_logo.svg',
    noteUrl: '/docs/后端/next/1.1-next%20概述',
    imgStyle: 'big'
  },
  {
    name: 'Markdown',
    image: 'logo/Markdown-mark.svg',
    noteUrl: 'https://github.com/fall-zhang/full-stack-note',
    imgStyle: 'big'
  },
  {
    name: 'Git',
    image: 'logo/Git-logo.svg',
    noteUrl: '/docs/git工具',
    imgStyle: 'big'
  },
  {
    name: '跨平台',
    image: 'logo/mobile-desktop.svg',
    noteUrl: '/docs/多平台开发/1.1-移动端适配',
    imgStyle: 'big'
  }
]
export const LanguageTools = () => {
  return (
    <div className={clsx($s.toolsContainer, ' ')}>
      <h2 className={$s.toolsHeader}>Language & Tools</h2>
      <p className={$s.toolsDescription}>笔记快速导航</p>
      <div className={clsx($s.imageContainer, 'container')}>
        {
          usingToolList.map((tool, index) => (
            <Link to={tool.noteUrl} key={index} className={$s.imageItem}>
              <img className={clsx($s.smallImage, $s[tool.imgStyle])} title={tool.name} src={tool.image} alt={tool.name} />
            </Link>)
          )
        }
        {/* <img className={$s.smallImage} src="logo/HTML5_logo_and_wordmark.svg" alt="" />
        <img className={$s.smallImage} src="logo/Node.js_logo.svg" alt="" />
        <img className={$s.bigImage} src="logo/six-point.svg" alt="" /> */}
      </div>
    </div>
  )
}
