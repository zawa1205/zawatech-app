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
  modified: string
  title: string
  tags: string[]
  categories: string[]
  terms: string[]
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
    const fetchedPosts = new Array()

    data?.posts?.map((post: any) => {
      const tags = new Array()
      const categories = new Array()
      const terms = new Array()

      post?.tags?.nodes.map((tag: any) => {
        tags.push(tag.name)
      })
      post?.categories?.nodes.map((category: any) => {
        categories.push(category.name)
      })
      post?.terms?.nodes.map((term: any) => {
        terms.push(term.name)
      })

      fetchedPosts.push({
        databaseId: post.databaseId,
        modified: post.modified,
        title: post.title,
        tags,
        categories,
        terms,
      })
    })

    setHasMore(data.hasMore)
    setPosts([...posts, ...fetchedPosts])
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
          <Post
            title={post.title}
            date={post.modified}
            tags={post.tags}
            categories={post.categories}
            terms={post.terms}
          />
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
