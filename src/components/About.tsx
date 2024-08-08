import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import mechanic from '../../public/assets/images/about_us/person.jpg'
import parts from '../../public/assets/images/about_us/parts.jpg'

const About = () => {
    return (
       <Box sx={{width: '96%', pb: {md: '200px', lg: '200px'}, pl: {lg: '40px', md: '40px'}, display: 'flex', flexDirection: {xs: 'column-reverse', sm: 'column-reverse', md: 'row', lg: 'row',}, columnGap: {lg: '230px', md: '180px', sm: '100px'}, justifyContent: 'space-around'}}>
       <Box sx={{position: 'relative'}}>
       <Image width={500} src={mechanic} alt='mechanic'/>
       <Box sx={{position : {lg: 'absolute', md: 'absolute', sm: 'relative'}, left: {lg:'200px', md: '100px'}, bottom: {lg: '-150px', md: '-150px'}}}>
       <Image width={500} src={parts} alt='mechanic'/>
        
       </Box>
       </Box>
       <Box sx={{flexGrow: 1, width: '100%'}}>
         <Typography variant='h6' sx={{color: 'red'}}>
          About
         </Typography>
         <Typography variant='h4'>
          We are qualified & experience in this field.
         </Typography>
         <Typography variant='body1' sx={{mt: '10px'}}>
         There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
         <br />
         the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
         </Typography>
       </Box>
       </Box>
    );
};

export default About;