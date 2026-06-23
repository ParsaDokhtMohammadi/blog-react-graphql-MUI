import { Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const CommentForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')
  return (
    <Grid container  sx={{boxShadow:"rgba(0,0,0,0.4) 0px 4px 12px",borderRadius:4, py:1 , mt:5 , display:"flex", flexDirection:"column", alignItems:"start" , justifyContent:"center" }}>
        <Grid xs={12} sx={{m:2,width:"100%"}}>
            <Typography component="p" variant='h6' color="primary"  sx={{fontWeight:700}}>فرم ارسال کامنت</Typography>
        </Grid>
        <Grid xs={12} sx={{m:2,width:"calc(100% - 30px)"}}>
            <TextField label="نام کاربری" variant="outlined" fullWidth sx={{width:"100%"}} value={name} onChange={(e)=>setName(e.target.value)} />
        </Grid>
        <Grid xs={12} sx={{m:2,width:"calc(100% - 30px)"}}>
            <TextField label="ایمیل" variant="outlined" fullWidth sx={{width:"100%"}} value={email} onChange={(e)=>setEmail(e.target.value)} />
        </Grid>
        <Grid xs={12} sx={{m:2,width:"calc(100% - 30px)"}}>
            <TextField label="متن کامنت" variant="outlined" multiline fullWidth sx={{width:"100%"}} value={text} onChange={(e)=>setText(e.target.value)} />
        </Grid>
    </Grid>
  )
}

export default CommentForm
