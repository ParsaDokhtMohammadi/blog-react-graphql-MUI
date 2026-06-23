import { useQuery } from '@apollo/client'
import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { GET_POST_BY_SLUG } from '../../graphql/queries'
import Loader from '../shared/Loader'
import { Avatar, Box, Container, Grid, Typography } from '@mui/material'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import sanitizeHtml from "sanitize-html"
import CommentForm from '../comment/CommentForm'
import Comments from '../comment/Comment'

const BlogPage = () => {
const navigate = useNavigate()
const {blogSlug} = useParams()

const { loading, data, error } = useQuery(GET_POST_BY_SLUG, {
  variables: {
    slug: blogSlug
  }
})

  if(loading) return <Loader/>
  if (error) return <div>{error.message}</div>
  const {post} = data

  return (
    <Container >
      <Grid container >
        <Grid xs={12} sx={{mt:9 , display:"flex", justifyContent:"space-between" , alignItems:"center" ,width:"100%"}}>
            <Typography component="h2" variant='h4' sx={{fontWeight:700}}>{post.title}</Typography>
            <ArrowBackRoundedIcon onClick={()=>navigate(-1)} sx={{cursor:"pointer"}}/>
        </Grid>
        <Grid xs={12} sx={{mt:6}}>
          <img src={post.coverImage.url} alt={post.title} style={{width:"100%" , borderRadius:"15px"}}/>
        </Grid>
        <Grid xs={12} sx={{mt:6}} sx={{display:"flex" , alignItems:"center" ,width:"100%"}}>
          <Avatar src={post.author.avatar.url} alt={post.author.name} sx={{ ml: 2 ,width:80, height: 80 }} />
          <Box component="div">
          <Typography variant="h5" component="p" sx={{ml:2}}>{post.author.name}</Typography>
          <Typography variant="h5" component="p" color="textSecondary" sx={{ml:2}}>{post.author.field}</Typography>
          </Box>
        </Grid>
        <Grid xs={12} sx={{mt:6}}>
          <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content.html)  }}/>
        </Grid>
        <Grid xs={12} sx={{mt:6 , width:"100%"}}>
          <CommentForm slug={blogSlug}/>
        </Grid>
        <Grid xs={12} sx={{mt:6 , width:"100%"}}>
          <Comments slug={blogSlug}></Comments>
        </Grid>
      </Grid>
    </Container>
  )
}

export default BlogPage
