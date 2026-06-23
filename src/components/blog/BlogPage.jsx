import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router'
import { GET_POST_BY_SLUG } from '../../graphql/queries'
import Loader from '../shared/Loader'

const BlogPage = () => {

const {blogSlug} = useParams()

const { loading, data, error } = useQuery(GET_POST_BY_SLUG, {
  variables: {
    slug: blogSlug
  }
})

  if(loading) return <Loader/>
  if (error) return <div>{error.message}</div>
  const {post} = data
  console.log(post)

  return (
    <div>
      
    </div>
  )
}

export default BlogPage
