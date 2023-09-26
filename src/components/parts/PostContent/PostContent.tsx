import { FC } from 'react'
import styles from './PostContent.module.scss'
import './innerHtml.scss'

type PostContentProps = {
  title: string
  date: string
  content: string
  categories: string[]
  tags: string[]
  terms: string[]
}

export const PostContent: FC<PostContentProps> = ({
  title,
  date,
  content,
  categories,
  tags,
  terms,
}) => {
  return (
    <div className={styles['content-wrapper']}>
      <h1>{title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </div>
  )
}
