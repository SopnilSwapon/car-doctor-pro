'use client'
import { Box, Button, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import contactLogo from '../../../public/assets/images/login/login.svg'
import { useForm } from "react-hook-form"
const ContactPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = async (data:any) =>{
        console.log(data)
      } 
    
    return (
        <Box sx={{mt: "180px",  minHeight:'calc(100vh - 300px)'}} >
            
         <Box sx={{display: 'flex', flexDirection: {lg: 'row', md: 'row', sm: 'column', xs: 'column'}}}>
         <Box sx={{width: '95%', display: 'flex', justifyContent: 'center'}}>
            
            <Image src={contactLogo} alt='contact logo'/>
         </Box>
         <Box sx={{flexGrow: 1, width: '100%', px: '10px'}}>
            <Typography textAlign='center' variant='h3'>
             Please Contact With Us.
            </Typography>
         <Typography textAlign='center' variant='body1'>
                If you want to contact us please fill up the form.Also You can give feedback & share your opinion. If You need any long discussion please full free to contact us we will reach out as soon as possible.
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      {/* <input defaultValue="test" {...register("example")} /> */}
        <TextField sx={{display: 'block', mt:'16px', width: {lg: '60%', md: '65%', sm:'100%', xs: '100%'}, mx: 'auto'}} fullWidth type='text' label="Type Your Name" {...register('name')} variant="outlined" />
        <TextField sx={{display: 'block', width: {lg: '60%', md: '65%'}, mx: 'auto', my: '16px'}} fullWidth type='email' label="Type Your Email" {...register('email')} variant="outlined" />
        <TextField sx={{display: 'block', width: {lg: '60%', md: '65%'}, mx: 'auto'}} fullWidth type='text' label="Your Message" multiline
          rows={4}
          {...register('message')} variant="outlined" />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <Button type='submit' size='large' sx={{ backgroundColor: 'red', fontWeight: 600,  display: 'block', width: {lg: '60%', md: '65%'}, mx: 'auto', my: '16px'}} variant="contained">Submit</Button>
    </form>
         </Box>
         </Box>
        </Box>
    );
};

export default ContactPage;