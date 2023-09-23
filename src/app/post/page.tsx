import React from 'react'
import Head from 'next/head'
import { GET_POST, GET_TOP } from '@/graphql/queries'
import { getClient } from '@/lib/apolloClient'
import styles from './page.module.scss'

type Post = {
  databaseId: number
  title: string
  date: string
}

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Post({ searchParams }: Props) {
  const postId: string = searchParams['p']?.toString() ?? '0'
  const baseUrl = 'http://localhost:3000'
  const { data } = await getClient().query({
    query: GET_POST,
    variables: { postId: postId },
  })

  const { title, modified, content } = data.post

  return (
    <main className={styles.main}>
      <Head>
        <title>zawatech.com</title>
        <meta property="og:image" content={`${baseUrl}/api/og`} />
      </Head>
      <div className={styles['main-wrapper']}>
        <div className={styles['left-contents']}>左</div>
        <div className={styles['center-contents']}>
          <h1>{title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </div>
        <div className={styles['right-contents']}>右</div>
      </div>
    </main>
  )
}
