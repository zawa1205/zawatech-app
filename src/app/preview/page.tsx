'use client'

import React, { Suspense } from 'react'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'
import { PostContent } from '@/components/parts/PostContent'
import { Profile } from '@/components/parts/Profile'
import styles from './page.module.scss'
import Image from 'next/image'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

const fetcher = (url: string) => {
  return fetch(url).then((res) => res.json())
}

export default function Preview({ searchParams }: Props) {
  const baseUrl = 'http://localhost:3000'
  return (
    <main className={styles.main}>
      <div className={styles['main-wrapper']}>
        <div className={styles['left-contents']}></div>
        <div className={styles['center-contents']}>
          <Suspense fallback={<p>Loading feed...</p>}>
            <FetchRender searchParams={searchParams} />
          </Suspense>
        </div>
        <div className={styles['right-contents']}>
          <Profile />
        </div>
      </div>
    </main>
  )
}

function FetchRender({ searchParams }: Props) {
  const { data: session } = useSession()
  const postId: string = searchParams['p']?.toString() ?? '0'
  const { data, isLoading } = useSWR(`/api/post?p=${postId}`, fetcher)

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <Image src="/spinner.svg" width={60} height={60} alt="読み込み中" />
      </div>
    )
  }
  if (!data || !data.post || !(session && session.user?.role === 'admin'))
    return (
      <div className={styles['not-found']}>
        お探しの記事は見つかりませんでした
      </div>
    )

  const { title, modified, content } = data.post
  const categories: string[] = new Array()
  const tags: string[] = new Array()
  const terms: string[] = new Array()

  data.post.categories.nodes.map((category: { name: string }) => {
    categories.push(category.name)
  })
  data.post.tags.nodes.map((tag: { name: string }) => {
    tags.push(tag.name)
  })
  data.post.terms.nodes.map((term: { name: string }) => {
    terms.push(term.name)
  })

  return (
    <PostContent
      title={title}
      date={modified}
      content={content}
      categories={categories}
      tags={tags}
      terms={terms}
      postId={postId}
    />
  )
}
