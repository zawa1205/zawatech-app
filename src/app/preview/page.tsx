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

  if (isLoading) return 'ローディング中'
  if (!data || !data.post || !(session && session.user?.role === 'admin'))
    return '記事はありません'

  return (
    <PostContent
      title={data.post.title}
      date={data.post.modified}
      content={data.post.content}
    />
  )
}
