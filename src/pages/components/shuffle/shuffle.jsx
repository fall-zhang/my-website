import { useEffect, useRef } from 'react'
import styles from './index.module.css'
import ShuffleRandomText from './shuffle-text'
const ShuffleText = () => {
  const shuffleDOM = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    if (shuffleDOM.current) {
      const shuffle = new ShuffleRandomText(shuffleDOM.current)
      shuffle.start()
    }
  }, [])
  return <>
    <h2 className={styles.head} ref={shuffleDOM}>未来的前端艺术家</h2>
  </>
}

export {
  ShuffleText
}