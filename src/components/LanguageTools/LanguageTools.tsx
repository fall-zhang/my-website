import clsx from 'clsx'
import $s from './index.module.css'

type UsingTool = {
  name: string,
  imgStyle:'big' | 'small'
  image: string
  noteUrl: string
}
const usingToolList:UsingTool[] = [
  {
    name: 'HTML5',
    image: 'logo/HTML5_logo_and_wordmark.svg',
    noteUrl: '',
    imgStyle: 'small'
  },
  {
    name: 'CSS3',
    image: 'logo/CSS3_logo.svg',
    noteUrl: '',
    imgStyle: 'small'
  },
  {
    name: 'JavaScript',
    image: 'logo/JavaScript_logo.svg',
    noteUrl: '',
    imgStyle: 'small'
  },
  {
    name: 'Typescript',
    image: 'logo/Typescript_logo.svg',
    noteUrl: '',
    imgStyle: 'small'
  },
  {
    name: 'Vue.js',
    image: 'logo/Vue.js_Logo_2.svg',
    noteUrl: '',
    imgStyle: 'small'
  },
  {
    name: 'Vite',
    image: 'logo/Vite.svg',
    noteUrl: '',
    imgStyle: 'small'
  },
  {
    name: 'React',
    image: 'logo/React_logo.svg',
    noteUrl: '',
    imgStyle: 'small'
  },
  {
    name: 'Node.js',
    image: 'logo/Node.js_logo.svg',
    noteUrl: '',
    imgStyle: 'big'
  },
  {
    name: 'Less',
    image: 'logo/LESS_Logo.svg',
    noteUrl: '',
    imgStyle: 'big'
  },
  {
    name: 'Sass',
    image: 'logo/Sass_Logo_Color.svg',
    noteUrl: '',
    imgStyle: 'big'
  },
  {
    name: 'tailwindcss',
    image: 'logo/tailwindcss.svg',
    noteUrl: '',
    imgStyle: 'big'
  },
  {
    name: 'Npm',
    image: 'logo/Npm-logo.svg',
    noteUrl: '',
    imgStyle: 'big'
  },
  {
    name: 'ESLint',
    image: 'logo/ESLint_logo.svg',
    noteUrl: '',
    imgStyle: 'small'
  },
  {
    name: 'docusaurus',
    image: 'logo/docusaurus_keytar.svg',
    noteUrl: '',
    imgStyle: 'small'
  },
  {
    name: 'pnpm',
    image: 'logo/pnpm_logo.svg',
    noteUrl: '',
    imgStyle: 'small'
  },
  {
    name: 'Docker',
    image: 'logo/Docker.svg',
    noteUrl: '',
    imgStyle: 'small'
  },
  {
    name: 'tauri',
    image: 'logo/tauri.svg',
    noteUrl: '',
    imgStyle: 'small'
  },
  {
    name: 'linux',
    image: 'logo/linux.svg',
    noteUrl: '',
    imgStyle: 'small'
  },
  {
    name: 'Rust',
    image: 'logo/Rust_logo.svg',
    noteUrl: '',
    imgStyle: 'small'
  },
  {
    name: 'nestjs',
    image: 'logo/nestjs.svg',
    noteUrl: '',
    imgStyle: 'small'
  },
  {
    name: 'Next_logo',
    image: 'logo/Next_logo.svg',
    noteUrl: '',
    imgStyle: 'big'
  },
  {
    name: 'Markdown',
    image: 'logo/Markdown-mark.svg',
    noteUrl: '',
    imgStyle: 'big'
  },
  {
    name: 'Git',
    image: 'logo/Git-logo.svg',
    noteUrl: '',
    imgStyle: 'big'
  },
  {
    name: '跨平台',
    image: 'logo/mobile-desktop.svg',
    noteUrl: '',
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
            <a key={index} className={$s.imageItem}>
              <img className={clsx($s.smallImage, $s[tool.imgStyle])} src={tool.image} alt={tool.name} />
            </a>)
          )
        }
        {/* <img className={$s.smallImage} src="logo/HTML5_logo_and_wordmark.svg" alt="" />
        <img className={$s.smallImage} src="logo/Node.js_logo.svg" alt="" />
        <img className={$s.bigImage} src="logo/six-point.svg" alt="" /> */}
      </div>
    </div>
  )
}
