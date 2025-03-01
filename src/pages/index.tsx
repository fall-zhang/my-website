import React from 'react'
import clsx from 'clsx'
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import styles from './index.module.css'
import ShuffleText from '@site/src/components/shuffle/shuffle'
import RandomLogo from '@site/src/components/random-logo/random-logo'
function HomepageHeader () {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero ', styles.heroBanner)}>
      <div className={clsx('container',styles.container)}>
        <div className={styles.headerText}>
          {/* <h1 className="hero__title">Fall</h1> */}
          <RandomLogo />
          {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
          <ShuffleText />
        </div>
        <div className=''>
          <img src="./svg/media-work.svg" height={512} width={512} alt="" />
        </div>
      </div>
    </header>
  )
}

export default function Home () {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      {/* <HomeIntroduce /> */}
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
