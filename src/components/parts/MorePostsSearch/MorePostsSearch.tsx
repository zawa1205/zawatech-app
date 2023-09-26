'use client'
import useSWR from 'swr'
import { FC, useState } from 'react'
import { Button } from '../Button'
import styles from './MorePostsSearch.module.scss'
import { Post } from '../Post'
import Link from 'next/link'

const fetcher = (url: string) => {
  return fetch(url).then((res) => res.json())
}

type Post = {
  databaseId: number
  title: string
  modified: string
}

export const MorePostsSearch: FC<{ query: string[] }> = ({ query }) => {
  const [offset, setOffset] = useState(5)
  const [hasMore, setHasMore] = useState(true)
  const [posts, setPosts] = useState(new Array())
  const { data } = useSWR(
    `/api/search?offset=${offset}&size=5&query=${query.join(' ')}`,
    fetcher,
  )

  const getMore = () => {
    setHasMore(data.hasMore)
    setPosts([...posts, ...data.posts])
    setOffset(offset + 5)
  }

  return (
    <>
      {posts.map((post: Post) => (
        <Link
          href={`/post?p=${post.databaseId}`}
          key={post.databaseId}
          className={styles['post-link']}
        >
          <Post title={post.title} date={post.modified} />
        </Link>
      ))}

      {data && 5 <= data.total && hasMore && (
        <div className={styles['button-wrapper']}>
          <Button
            text="さらに読み込む"
            size="m"
            shape="square"
            outlined
            onClickHandler={getMore}
          />
        </div>
      )}
    </>
  )
}
