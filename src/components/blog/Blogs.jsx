import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_BLOGS } from '../../graphql/queries'

const Blogs = () => {

  const {loading , data , error} = useQuery(GET_BLOGS)


  if(loading) return <div>loading...</div>
  if(error)  return <div>{error.message}</div>
  console.log(data)
  return (
    <div>
      blogs
    </div>
  )
}

export default Blogs
 