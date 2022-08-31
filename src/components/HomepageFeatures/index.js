import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '2分钟环境搭建',
    link: '/blog/2分钟环境搭建',
    Svg: require('@site/static/home-page/cube-1.svg').default,
    description: (
      <>
        像安装npm插件一样安装开发环境！ VS code 这个强大的工具都有哪些快捷键，以及开发中常用的插件。
      </>
    ),
  },
  {
    title: 'TypeScript 声明？声明空间？',
    link: '/blog/TypeScript声明',
    Svg: require('@site/static/home-page/circle-three.svg').default,
    description: (
      <>
        声明空间：就是声明类型和声明变量所在的不同空间。 全局模块：就是任何文件都可以访问的模块。
      </>
    ),
  },
  {
    title: 'git 功能查找',
    link: '/blog/git功能查找',
    Svg: require('@site/static/home-page/six-point.svg').default,
    description: (
      <>
        最实用的 git 功能查找笔记 一篇文章实现快速查找绝大多数功能，功能的意义，配置文件，以及功能的查找，一篇文章全部搞定。
      </>
    ),
  },
];

function Feature ({ Svg, title, description, link }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
  );
}

export default function HomepageFeatures () {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
