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


export const GET_AUTHORS = gql`
  query {
    authors {
			id
      name
      slug
      avatar{
        url
      }
      
    }
  }
`


export const GET_AUTHOR_BY_SLUG = gql`  query getAuthorBySlug($slug:String!) {
    author(where : {slug:$slug}) {
      name
      field
      description {
        html
      }
      slug
      avatar{
        url
      }
      posts{
        coverImage{
          url
        }
        id
        slug
        title
      }
      
    }
  }
  `