import { useQuery } from '@apollo/client'
import { GET_AUTHORS } from '../../graphql/queries'
import { Avatar, Divider, Grid, Typography } from '@mui/material'
import { Fragment } from 'react'
import { Link } from 'react-router'

const Authors = () => {

  const { loading, data, error } = useQuery(GET_AUTHORS)

  if (loading) return <div>loading...</div>
  if (error) return <div>{error.message}</div>
  const { authors } = data
  return (
    <Grid container spacing={2} sx={{ p: 2, boxShadow: "rgba(0,0,0,0.2) 0px 4px 12px ", borderRadius: 4 }}>
      {authors.map((author, index) => (
        <Fragment key={author.id}>
          <Grid size={{ xs: 12 }}>
            <Link to={`/author/${author.slug}`} style={{ display: "flex", alignItems: "center" }}>
              <Avatar src={author.avatar.url} alt={author.name} sx={{ ml: 2 }} />
              <Typography variant="p" component="p" color="textSecondary">{author.name}</Typography>
            </Link>
          </Grid>
          {index !== authors.length - 1 && (
            <Grid size={{ xs: 12 }} >
              <Divider sx={{ mb: 1 }} />
            </Grid>
          )}
        </Fragment>
      ))
      }
    </Grid >
  )
}

export default Authors
