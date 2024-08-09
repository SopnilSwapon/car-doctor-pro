import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import contactLogo from '../../../public/assets/images/login/login.svg'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  example: string
  exampleRequired: string
}
const page = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    
      console.log(watch("example"))
    return (
        <Box sx={{mt: "180px",  minHeight:'calc(100vh - 300px)'}} >
            
         <Box sx={{display: 'flex'}}>
         <Box>
            
            <Image src={contactLogo} alt='contact logo'/>
         </Box>
         <Box>
            <Typography textAlign='center' variant='h3'>
             Please Contact Us.
            </Typography>
         <Typography textAlign='center' variant='body1'>
                If you want to contact us please fill up the form.Also You can give feedback & share your opinion. If You need any long discussion please full free to contact us we will reach out as soon as possible.
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
         </Box>
         </Box>
        </Box>
    );
};

export default page;