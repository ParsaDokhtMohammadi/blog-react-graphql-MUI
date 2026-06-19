import React from 'react'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import BookIcon from '@mui/icons-material/Book';

const Header = () => {
    return (
        <AppBar position="static" >
            <Container maxWidth="xl">
                <Toolbar >
                    <Typography variant="h5" component="h1" fontWeight="bold" sx={{ flexGrow: 1 }}>وبلاگ من</Typography>
                    <BookIcon />
                </Toolbar>
            </Container>
        </AppBar>


    )
}

export default Header
