import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { GET_POSTS } from '@/graphql/queries'
import { getClient } from '@/lib/apolloClient'
import styles from './page.module.scss'

type Post = {
  id: string
  title: string
}

export default async function Home() {
  const baseUrl = 'http://localhost:3000'

  const { data } = await getClient().query({ query: GET_POSTS })
  const posts = data?.posts.edges.map(({ node }: any) => node)

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
            <div key={post.id}>
              <h2>{post.title}</h2>
              {/* <Image
              src={`${baseUrl}/api/og?title=${post.title}`}
              alt=""
              width={'400'}
              height={'200'}
            /> */}
            </div>
          ))}
        </div>
        <div className={styles['right-contents']}>右</div>
      </div>
    </main>
  )
}
