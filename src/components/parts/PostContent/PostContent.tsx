import { FC } from 'react'
import styles from './PostContent.module.scss'
import './innerHtml.scss'
import Image from 'next/image'
import Link from 'next/link'
import { AdsensePageBottom } from '../AdsensePageBottom/AdsensePageBottom'

type PostContentProps = {
  title: string
  date: string
  content: string
  categories: string[]
  tags: string[]
  terms: string[]
  postId: string
}

export const PostContent: FC<PostContentProps> = ({
  title,
  date,
  content,
  categories,
  tags,
  terms,
  postId,
}) => {
  return (
    <div className={styles['content-wrapper']}>
      <h1>{title}</h1>
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
            <Image src="/category.svg" width={16} height={16} alt="カテゴリ" />
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
      <div className={styles['buttons-top']}>
        <Link
          href={encodeURI(
            `https://twitter.com/share?url=https://zawatech.com/post?p=${postId}&text=${title}`,
          )}
          target="_blank"
        >
          <div
            className={`${styles['button-top-wrapper']} ${styles['x-button-top-wrapper']}`}
          >
            <Image src="/xLogo.svg" width={12} height={12} alt="X" />
            この記事をポストする
          </div>
        </Link>
        <Link
          href={encodeURI(
            `https://social-plugins.line.me/lineit/share?url=https://zawatech.com/post?p=${postId}&text=${title}`,
          )}
          target="_blank"
        >
          <div
            className={`${styles['button-top-wrapper']} ${styles['line-button-top-wrapper']}`}
          >
            この記事をLINEでシェア
          </div>
        </Link>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
      <div className={styles['buttons-bottom']}>
        <Link
          href={encodeURI(
            `https://twitter.com/share?url=https://zawatech.com/post?p=${postId}&text=${title}`,
          )}
          target="_blank"
        >
          <div
            className={`${styles['button-bottom-wrapper']} ${styles['x-button-bottom-wrapper']}`}
          >
            <Image src="/xLogo.svg" width={16} height={16} alt="X" />
            この記事をポストする
          </div>
        </Link>
        <Link
          href={encodeURI(
            `https://social-plugins.line.me/lineit/share?url=https://zawatech.com/post?p=${postId}&text=${title}`,
          )}
          target="_blank"
        >
          <div
            className={`${styles['button-bottom-wrapper']} ${styles['line-button-bottom-wrapper']}`}
          >
            この記事をLINEでシェア
          </div>
        </Link>
      </div>
      <AdsensePageBottom />
    </div>
  )
}
