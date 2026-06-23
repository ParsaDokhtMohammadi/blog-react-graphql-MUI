import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router'
import { GET_AUTHOR_BY_SLUG } from '../../graphql/queries'
import { Avatar, Container, Grid, Typography } from '@mui/material'
import sanitizeHtml from 'sanitize-html'
import CardEL from '../shared/CardEL'
import Loader from '../shared/Loader'

const AuthorPage = () => {

    const { authorSlug } = useParams()

    const { loading, data, error } = useQuery(GET_AUTHOR_BY_SLUG, {
        variables: {
            slug: authorSlug
        }
    })
    if(loading) return <Loader/>
    if (error) return <div>{error.message}</div>
    const {author} = data
    return (
        <Container maxWidth="lg" sx={{ mt: 4 , display: "flex", flexDirection: "column", alignItems: "center" , justifyContent: "center" }}>
            <Grid container sx={{ mt: 4 , display: "flex", flexDirection: "column", alignItems: "center" , justifyContent: "center" }}>
                <Grid xs={12} sx={{ mt: 4 , display: "flex", flexDirection: "column", alignItems: "center" , justifyContent: "center" }}>
                    <Avatar src={author.avatar.url} alt={author.name} sx={{ mb: 2 ,width:250, height: 250 }} />
                    <Typography component="h3" variant='h5' fontWeight={700}>{author.name}</Typography>
                    <Typography component="p" variant='h5' fontWeight={700} color='textSecondary'>{author.field} </Typography>
                </Grid>
                <Grid xs={12}>
                    <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(author.description.html)  }}/>
                </Grid>
                <Grid xs={12} sx={{mt:6}}>
                    <Typography component="h3" variant='h5' sx={{fontWeight:700}}>مقالات {author.name}</Typography>
                    <Grid container spacing={2} sx={{mt:2, display:"flex", alignItems:"center" , justifyContent:"center" , width:"100%"}}>
                        {author.posts.map(post=>(
                            <Grid xs={12} sm={6} md={4} key={post.id}  >
                                <CardEL data={post}></CardEL>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AuthorPage
