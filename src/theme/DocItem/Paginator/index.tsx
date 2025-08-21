import React, { type ReactNode } from 'react'
import Paginator from '@theme-original/DocItem/Paginator'
import type PaginatorType from '@theme/DocItem/Paginator'
import type { WrapperProps } from '@docusaurus/types'
import Giscus from '@giscus/react'

type Props = WrapperProps<typeof PaginatorType>;

export default function PaginatorWrapper (props: Props): ReactNode {
  return (
    <>
      <Paginator {...props} />
      <div className='h-4'></div>
      <Giscus
        id="comments"
        repo="fall-zhang/fall-zhang.github.io"
        repoId="R_kgDOHd9XKQ="
        category="Announcements"
        categoryId="DIC_kwDOHd9XKc4Ctw9F"
        mapping="pathname"
        strict='1'
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="zh-CN"
        loading="lazy"
      />
    </>
  )
}
