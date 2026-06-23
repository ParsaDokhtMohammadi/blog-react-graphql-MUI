import React from 'react'
import { GET_COMMENTS_BY_SLUG } from '../../graphql/queries'
import { useQuery } from '@apollo/client'
import Loader from '../shared/Loader'

const Comments = ({slug}) => {
    const {loading , data , error} = useQuery(GET_COMMENTS_BY_SLUG, {
        variables: {
            slug: slug
        }
    })
    if(loading) return <Loader/>
    if(error) return <div>{error.message}</div>
  return (
    <div>
      
    </div>
  )
}

export default Comments
