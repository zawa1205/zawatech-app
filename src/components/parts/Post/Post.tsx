import { FC, memo } from 'react'
import styles from './Post.module.scss'
import Image from 'next/image'
import { resolveDate } from '../../../utilities'

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
      <div>
        <h2>{title}</h2>

        {tags.length !== 0 && (
          <div className={styles['labels-wrapper']}>
            <div className={styles['label-icon']}>
              <Image src="/tag.svg" width={16} height={16} alt="タグ" />
            </div>
            <div className={styles.labels}>
              {tags.map((tag: string) => {
                return (
                  <span className={styles.label} key={`tag-${tag}-${date}`}>
                    {tag}
                  </span>
                )
              })}
            </div>
          </div>
        )}
        {categories.length !== 0 && (
          <div className={styles['labels-wrapper']}>
            <div className={styles['label-icon']}>
              <Image
                src="/category.svg"
                width={16}
                height={16}
                alt="カテゴリ"
              />
            </div>
            <div className={styles.labels}>
              {categories.map((category: string) => {
                return (
                  <span
                    className={styles.label}
                    key={`category-${category}-${date}`}
                  >
                    {category}
                  </span>
                )
              })}
            </div>
          </div>
        )}
      </div>
      <div className={styles['date']}>最終更新日：{resolveDate(date)}</div>
    </div>
  ),
)

Post.displayName = 'Post'
