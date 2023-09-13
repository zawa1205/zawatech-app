import { gql } from "@apollo/client";

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
`;

export const GET_PREVIEW = gql`
  query GetPreview($postId: ID!) {
    # post(id: "383", idType: DATABASE_ID) {
    # post(id: "410", asPreview: true, idType: DATABASE_ID) {
    post(id: $postId, asPreview: true, idType: DATABASE_ID) {
      content
      title
    }
  }
`;
