import React from 'react'
import { GET_POST, GET_POST_META } from '@/graphql/queries'
import { getClient } from '@/lib/apolloClient'
import styles from './page.module.scss'
import { PostContent } from '@/components/parts/PostContent'
import { Profile } from '@/components/parts/Profile'
import { Metadata, ResolvingMetadata } from 'next'
import { decodeHtmlEscapes } from '@/utilities'
import { AdsenseLeft } from '@/components/parts/AdsenseLeft'
import { AdsenseRight } from '@/components/parts/AdsenseRight'
import { AdsenseRight2 } from '@/components/parts/AdsenseRight2'

type Post = {
  databaseId: number
  title: string
  date: string
}

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const postId: string = searchParams['p']?.toString() ?? '0'
  const { data } = await getClient().query({
    query: GET_POST_META,
    variables: { postId: postId },
  })
  const { title, excerpt } = data.post
  const terms: string[] = new Array()

  data.post.terms.nodes.map((term: { name: string }) => {
    terms.push(term.name)
  })
  const description = decodeHtmlEscapes(
    excerpt.substring(0, excerpt.indexOf('</p>')).replace('<p>', ''),
  )

  return {
    title: `${title} - zawatech`,
    openGraph: {
      url: `/post?p=${postId}`,
      images: `/api/og?title=${title}`,
      title: title,
      siteName: 'zawatech.com',
      description,
    },
    description,
  }
}

export default async function Post({ searchParams }: Props) {
  const postId: string = searchParams['p']?.toString() ?? '0'
  const { data } = await getClient().query({
    query: GET_POST,
    variables: { postId: postId },
  })

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
    <>
      <main className={styles.main}>
        <div className={styles['main-wrapper']}>
          <div className={styles['left-contents']}>
            <div className={styles['left-contents-sticky']}>
              <AdsenseLeft />
            </div>
          </div>
          <div className={styles['center-contents']}>
            <PostContent
              title={title}
              date={modified}
              content={content}
              categories={categories}
              tags={tags}
              terms={terms}
              postId={postId}
            />
          </div>
          <div className={styles['right-contents']}>
            <div className={styles['right-contents-sticky']}>
              <Profile />
              <AdsenseRight />
              <AdsenseRight2 />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
