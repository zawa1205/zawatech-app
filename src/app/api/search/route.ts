import { SEARCH_POSTS } from '@/graphql/queries'
import { getClient } from '@/lib/apolloClient'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query') ?? ''
  const offset = searchParams.get('offset')
  const size = searchParams.get('size')

  const { data } = await getClient().query({
    query: SEARCH_POSTS,
    variables: {
      query: query,
      size: Number(size),
      offset: Number(offset),
    },
  })

  return NextResponse.json({
    posts: data.posts.nodes,
    hasMore: data.posts.pageInfo.offsetPagination.hasMore,
    total: data.posts.pageInfo.offsetPagination.total,
  })
}
