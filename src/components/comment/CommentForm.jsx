import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { SEND_COMMENT } from '../../graphql/mutations'
import { useMutation } from '@apollo/client'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'

const CommentForm = ({ slug }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')

    const [sendComment, { data, loading, error }] = useMutation(SEND_COMMENT, { variables: { name, email, text, slug } })

    const sendHandler = () => {
        if (!name || !email || !text) return toast.warning("لطفا تمام فیلدها را پر کنید", {
            position: "top-center"
        })
        sendComment()
    }


    if(data) toast.success("کامت شما با موفقیت ارسال شد", {
            position: "top-center"
        })

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
        <Grid xs={12} sx={{m:2,width:"calc(100% - 30px)"}}>
         {loading ? (
               <Button variant="contained" sx={{width:"100%"}} 
            >درحال ارسال...</Button>
         ):(   <Button variant="contained" sx={{width:"100%"}} 
            onClick={sendHandler}
            >ارسال</Button>)}
        </Grid>
        <ToastContainer/>
    </Grid >
  )
}

export default CommentForm
