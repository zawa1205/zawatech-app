import React from 'react'
import Head from 'next/head'
import { SEARCH_POSTS } from '@/graphql/queries'
import { getClient } from '@/lib/apolloClient'
import styles from './page.module.scss'
import { MorePosts } from '@/components/parts/MorePosts'
import { Post } from '@/components/parts/Post'
import Link from 'next/link'

type Post = {
  databaseId: number
  title: string
  date: string
}

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Search({ searchParams }: Props) {
  const query: string = searchParams['query']
    ? typeof searchParams['query'] === 'string'
      ? searchParams['query']
      : searchParams['query'].join(' ')
    : ''
  console.log(query)
  const baseUrl = 'http://localhost:3000'
  const { data } = await getClient().query({
    query: SEARCH_POSTS,
    variables: { query: query, size: 4, offset: 0 },
  })

  const posts = data?.posts.nodes
  const hasMore = data?.posts.pageInfo.offsetPagination.hasMore

  return (
    <main>
      <Head>
        <title>zawatech.com</title>
        <meta property="og:image" content={`${baseUrl}/api/og`} />
      </Head>
      <div className={styles['main-wrapper']}>
        <div className={styles['left-contents']}>左</div>

        <div className={styles['center-contents']}>
          {posts.map((post: Post) => (
            <Link
              href={`/post?p=${post.databaseId}`}
              key={post.databaseId}
              className={styles['post-link']}
            >
              <Post title={post.title} date={post.date} />
            </Link>
          ))}
          {hasMore && <MorePosts />}
        </div>
        <div className={styles['right-contents']}>右</div>
      </div>
    </main>
  )
}
