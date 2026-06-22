import { gql } from "@apollo/client";

export const GET_BLOGS = gql`
  query {
    posts {
      id
      title
      slug
      coverImage {
        url
      }
      author {
        id
        name
        avatar {
            url
        }
      }
    }
  }
`