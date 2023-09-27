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
  modified: string
  title: string
  tags: string[]
  categories: string[]
  terms: string[]
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
  const baseUrl = 'http://localhost:3000'
  const { data } = await getClient().query({
    query: SEARCH_POSTS,
    variables: { query: query, size: 4, offset: 0 },
  })

  const posts: Post[] = new Array()
  const hasMore = data?.posts.pageInfo.offsetPagination.hasMore

  data?.posts.nodes.map((post: any) => {
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

    posts.push({
      databaseId: post.databaseId,
      modified: post.modified,
      title: post.title,
      tags,
      categories,
      terms,
    })
  })

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
              <Post
                title={post.title}
                date={post.modified}
                tags={post.tags}
                categories={post.categories}
                terms={post.terms}
              />
            </Link>
          ))}
          {hasMore && <MorePosts />}
        </div>
        <div className={styles['right-contents']}>右</div>
      </div>
    </main>
  )
}
