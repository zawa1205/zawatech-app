import { gql } from '@apollo/client'

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      edges {
        node {
          id
          title
          #   content
        }
      }
    }
  }
`

export const GET_PREVIEW = gql`
  # query GetPreview {
  query GetPreview($postId: ID!) {
    # post(id: "383", idType: DATABASE_ID) {
    post(id: $postId, asPreview: true, idType: DATABASE_ID) {
      # post(id: "410", idType: DATABASE_ID) {
      title
      content
    }
  }
`

export const GET_TOP = gql`
  query GetTop($size: Int!, $offset: Int!) {
    posts(where: { offsetPagination: { size: $size, offset: $offset } }) {
      pageInfo {
        offsetPagination {
          hasMore
          hasPrevious
          total
        }
      }
      nodes {
        title
        date
        databaseId
      }
    }
  }
`
