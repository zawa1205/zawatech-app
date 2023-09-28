import { gql } from '@apollo/client'

export const SEARCH_POSTS = gql`
  query SearchPosts($query: String!, $size: Int!, $offset: Int!) {
    posts(
      where: {
        search: $query
        offsetPagination: { size: $size, offset: $offset }
      }
    ) {
      pageInfo {
        offsetPagination {
          hasMore
          hasPrevious
          total
        }
      }
      nodes {
        databaseId
        modified
        title
        tags {
          nodes {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
        terms {
          nodes {
            name
          }
        }
      }
    }
  }
`

export const GET_PREVIEW = gql`
  query GetPreview($postId: ID!) {
    post(id: $postId, asPreview: true, idType: DATABASE_ID) {
      tags {
        nodes {
          name
        }
      }
      content
      categories {
        nodes {
          name
        }
      }
      terms {
        nodes {
          name
        }
      }
      title
      databaseId
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
        databaseId
        modified
        title
        tags {
          nodes {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
        terms {
          nodes {
            name
          }
        }
      }
    }
  }
`

export const GET_POST = gql`
  query GetPost($postId: ID!) {
    post(id: $postId, idType: DATABASE_ID) {
      content
      databaseId
      modified
      title
      excerpt
      categories {
        nodes {
          name
        }
      }
      tags {
        nodes {
          name
        }
      }
      terms {
        nodes {
          name
        }
      }
    }
  }
`

export const GET_POST_META = gql`
  query GetPost($postId: ID!) {
    post(id: $postId, idType: DATABASE_ID) {
      title
      excerpt
      terms {
        nodes {
          name
        }
      }
    }
  }
`
