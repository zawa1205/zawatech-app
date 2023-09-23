import { FC } from 'react'
import styles from './PostContent.module.scss'

type PostContentProps = {
  title: string
  date: string
  content: string
}

export const PostContent: FC<PostContentProps> = ({ title, date, content }) => (
  <div className={styles['content-wrapper']}>
    <h1>{title}</h1>
    <div
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  </div>
)
