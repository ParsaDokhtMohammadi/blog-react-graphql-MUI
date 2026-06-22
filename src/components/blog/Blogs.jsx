import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_BLOGS } from '../../graphql/queries'
import { Grid } from '@mui/material'
import CardEL from '../shared/CardEL'

const Blogs = () => {

  const {loading , data , error} = useQuery(GET_BLOGS)


  if(loading) return <div>loading...</div>
  if(error)  return <div>{error.message}</div>
  return (
    <Grid container spacing={2} >
      {data.posts.map(post=>(
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
            <CardEL data={post}/>
        </Grid>
      ))}
    </Grid>
  )
}

export default Blogs
 