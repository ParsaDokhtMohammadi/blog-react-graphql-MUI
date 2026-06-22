import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router'

const CardEL = ({ data }) => {
    return (
        <Card sx={{ boxShadow: "rgba(0,0,0,0.2) 0px 4px 12px ", borderRadius: 4 }}>
            <CardHeader
                avatar={<Avatar src={data.author.avatar.url} alt={data.title} sx={{ ml: 2 }} />}
                title={
                    <Typography variant="p" component="p" color="textSecondary">{
                        data.author.name
                    }</Typography>
                } />
            <CardMedia component="img" height="194" image={data.coverImage.url} alt={data.title} loading="lazy" />
            <CardContent>
                <Typography variant="h6" component="h3" color="textPrimary" fontWeight="600" sx={{ mb: 2 }}>{data.title}</Typography>
            </CardContent>
            <Divider variant='middle' sx={{ mb: 1 }} />
            <CardActions >
                {/* <Link to={`/blog/${data.slug}`}>  style={{ textDecoration: 'none' , width: '100%' }} */}
                    <Button variant="outlined" size="small" color="primary" sx={{ width: "100%", borderRadius: 3 , fontWeight: 600 }}>
                        مطالعه مقاله
                    </Button>
                {/* </Link> */}
            </CardActions>

        </Card>
    )
}

export default CardEL
