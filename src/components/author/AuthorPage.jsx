import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router'
import { GET_AUTHOR_BY_SLUG } from '../../graphql/queries'

const AuthorPage = () => {

    const {authorSlug} = useParams()

    const { loading, data, error } = useQuery(GET_AUTHOR_BY_SLUG, {
        variables: {
            slug: authorSlug
        }
    })
    if (loading) return <div>loading...</div>
    if (error) return <div>{error.message}</div>
    console.log(data)
  return (
    <div>
      nice
    </div>
  )
}

export default AuthorPage
