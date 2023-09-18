import { FC, memo } from 'react'
import styles from './Post.module.scss'

type PostProps = {
  title: string
  date: string
}

export const Post: FC<PostProps> = memo(({ title, date }) => (
  <div className={styles.post}>
    <h2>{title}</h2>
    <span>{date}</span>
  </div>
))
