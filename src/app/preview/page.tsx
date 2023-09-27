'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'
import { PostContent } from '@/components/parts/PostContent'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

const fetcher = (url: string) => {
  return fetch(url).then((res) => res.json())
}

export default function App({ searchParams }: Props) {
  const { data: session } = useSession()
  const postId: string = searchParams['p']?.toString() ?? '0'
  const { data, isLoading } = useSWR(`/api/post?p=${postId}`, fetcher)

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

  if (isLoading) return 'ローディング中'
  if (!data || !data.post || !(session && session.user?.role === 'admin'))
    return '記事はありません'

  return (
    <PostContent
      title={title}
      date={modified}
      content={content}
      categories={categories}
      tags={tags}
      terms={terms}
    />
  )
}
