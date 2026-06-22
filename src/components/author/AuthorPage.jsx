import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router'
import { GET_AUTHOR_BY_SLUG } from '../../graphql/queries'
import { Avatar, Container, Grid, Typography } from '@mui/material'

const AuthorPage = () => {

    const { authorSlug } = useParams()

    const { loading, data, error } = useQuery(GET_AUTHOR_BY_SLUG, {
        variables: {
            slug: authorSlug
        }
    })
    if (loading) return <div>loading...</div>
    if (error) return <div>{error.message}</div>
    return (
        <Container maxWidth="lg" sx={{ mt: 4 , display: "flex", flexDirection: "column", alignItems: "center" , justifyContent: "center" }}>
            <Grid container>
                <Grid xs={12} sx={{ mt: 4 , display: "flex", flexDirection: "column", alignItems: "center" , justifyContent: "center" }}>
                    <Avatar src={data.author.avatar.url} alt={data.author.name} sx={{ mb: 2 ,width:250, height: 250 }} />
                    <Typography component="h3" variant='h5' fontWeight={700}>{data.author.name}</Typography>
                    <Typography component="p" variant='h5' fontWeight={700} color='textSecondary'>{data.author.field} </Typography>
                </Grid>

            </Grid>
        </Container>
    )
}

export default AuthorPage
