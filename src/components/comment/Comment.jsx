import React from 'react'
import { GET_COMMENTS_BY_SLUG } from '../../graphql/queries'
import { useQuery } from '@apollo/client'
import Loader from '../shared/Loader'
import { Avatar, Box, Grid, Typography } from '@mui/material'


const Comments = ({ slug }) => {
    const { loading, data, error } = useQuery(GET_COMMENTS_BY_SLUG, {
        variables: {
            slug: slug
        }
    })
    if (loading) return <Loader />
    if (error) return <div>{error.message}</div>
    return (
        <Grid container spacing={2} sx={{
            boxShadow: "rgba(0,0,0,0.4) 0px 4px 12px",
            borderRadius: 4,
            py: 1,
            mt: 8,
        }}>
            <Grid xs={12} sx={{ m: 2, width: "100%" }}>
                <Typography component="p" variant='h6' color="primary" sx={{ fontWeight: 700 }}>کامنت ها</Typography>
                {data.comments.map(comment => (
                    <Grid xs={12} key={comment.id} sx={{ m: 2, p: 1, border: "1px solid silver", borderRadius: 4 }}>
                        <Box component="div" sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                            <Avatar>{comment.name[0]}</Avatar>
                            <Typography component="span" variant='p' color="primary" sx={{ fontWeight: 700, mr: 1 }}>{comment.name}</Typography>
                        </Box>
                        <Typography component="p" variant='p' sx={{ fontWeight: 700, mr: 1 }}>{comment.text}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default Comments
