import clsx from 'clsx'
import Link from '@docusaurus/Link'
import svg1 from '@site/static/home-page/circle-four.svg'
import svg2 from '@site/static/home-page/circle-three.svg'
import svg3 from '@site/static/home-page/six-point.svg'
import svg4 from '@site/static/home-page/cube-1.svg'
import svg5 from '@site/static/home-page/cube-2.svg'
import svg6 from '@site/static/home-page/cube-3.svg'
import { FC, ReactNode, useState } from 'react'

const FeatureList = [
  {
    title: '2分钟环境搭建',
    link: '/blog/2分钟环境搭建',
    Svg: svg1,
    description: (
      <>
        像安装npm插件一样安装开发环境！ VS code 这个强大的工具都有哪些快捷键，以及开发中常用的插件。
      </>
    )
  },
  {
    title: '发现更多 npm 包',
    link: '/blog/npm前端包',
    Svg: svg2,
    description: (
      '不用再为找不到想要 npm 依赖而发愁，实现想做的功能前，先看看这里是否有吧'
    )
  },
  {
    title: 'git 功能查找',
    link: '/blog/git功能查找',
    Svg: svg3,
    description: (
      <>
        最实用的 git 功能查找笔记 一篇文章实现快速查找绝大多数功能，功能的意义，配置文件，以及功能的查找，一篇文章全部搞定。
      </>
    )
  }
]
const WorkList = [
  {
    title: 'fruit-nav',
    link: 'https://github.com/fall-zhang/fruit-nav',
    Svg: svg4,
    description: '鲜果导航，一个保持新鲜的导航。使用 ts 写的全栈应用'
  },
  {
    title: 'vue-fantable',
    link: 'https://github.com/fall-zhang/vue-fantable',
    Svg: svg5,
    description: '前端大型表格数据渲染解决方案、vue 实现 Excel '
  },
  {
    title: 'tillandsia-ui',
    link: 'https://github.com/fall-zhang/tillandsia-ui',
    Svg: svg6,
    description: '凤梨 UI，使用最少的配置，即可获取 UI 并添加到项目中。'
  }
]

function Feature ({ title, description, link, children }: {
  children: ReactNode
  title: string
  description: ReactNode
  link: string
}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="flex justify-center items-center">
        {children}
      </div>
      <div className="text--center padding-horiz--md">
        {/* <a href={link} target="_blank"><h3>{title}</h3></a> */}
        <Link
          style={{ fontSize: 24 }}
          to={link}>
          {title}
        </Link>
        <p>{description}
          <Link
            to={link}>
            了解更多
          </Link>
        </p>
      </div>
    </div>
  )
}

export default function HomepageFeatures () {
  const [renderList, setRenderList] = useState<'feature' | 'work'>(() => {
    if (Math.random() > 0.5) {
      return 'work'
    }
    return 'feature'
  })
  return (
    <section className='flex items-center py-6 w-full'>
      <div className="container">
        <div className="flex justify-center">
          <div className='flex items-center justify-center border border-(--ifm-link-hover-color) rounded'>
            <div className={clsx('px-6 py-1 cursor-pointer  ', renderList === 'work' && 'bg-(--ifm-link-hover-color)')} onClick={() => setRenderList('work')}>项目</div>
            <div className={clsx('px-6 py-1 cursor-pointer  ', renderList === 'feature' && 'bg-(--ifm-link-hover-color)')} onClick={() => setRenderList('feature')}>笔记</div>
          </div>
        </div>
        <div className="row">
          {renderList === 'feature' && FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} >
              {<props.Svg></props.Svg>}
            </Feature>
          ))}
          {renderList === 'work' && WorkList.map((props, idx) => (
            <Feature key={idx} {...props} >
              {<props.Svg></props.Svg>}
            </Feature>
          ))}
        </div>
      </div>
    </section>
  )
}
