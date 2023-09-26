import { FC, memo } from 'react'
import styles from './Post.module.scss'

type PostProps = {
  title: string
  date: string
  tags: string[]
  categories: string[]
  terms: string[]
}

export const Post: FC<PostProps> = memo(
  ({ title, date, categories, terms, tags }) => (
    <div className={styles.post}>
      <h2>{title}</h2>
      <span>{date}</span>
      <span>{tags}</span>
      <span>{categories}</span>
      <span>{terms}</span>
    </div>
  ),
)

Post.displayName = 'Post'
