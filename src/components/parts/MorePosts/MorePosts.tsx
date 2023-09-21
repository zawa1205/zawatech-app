'use client'
import useSWR from 'swr'
import { FC, useState } from 'react'
import { Button } from '../Button'
import styles from './Moreposts.module.scss'
import { Post } from '../Post'

const fetcher = (url: string) => {
  return fetch(url).then((res) => res.json())
}

type Post = {
  databaseId: number
  title: string
  modified: string
}

export const MorePosts: FC = () => {
  const [offset, setOffset] = useState(5)
  const [hasMore, setHasMore] = useState(true)
  const [posts, setPosts] = useState(new Array())
  const { data } = useSWR(`/api/posts?offset=${offset}&size=5`, fetcher)
  console.log(data)
  console.log(posts)

  const getMore = () => {
    setHasMore(data.hasMore)
    setPosts([...posts, ...data.posts])
    setOffset(offset + 5)
  }

  return (
    <>
      {posts.map((post: Post) => (
        <Post title={post.title} date={post.modified} key={post.databaseId} />
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
