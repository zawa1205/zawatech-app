import { GET_POST } from '@/graphql/queries'
import { getClientAuth } from '@/lib/authApolloClient'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const postId = searchParams.get('p')

  if (!postId) {
    return NextResponse.json({
      post: null,
    })
  }

  const { data } = await getClientAuth().query({
    query: GET_POST,
    variables: { postId: postId },
  })

  return NextResponse.json({
    post: data.post,
  })
}
