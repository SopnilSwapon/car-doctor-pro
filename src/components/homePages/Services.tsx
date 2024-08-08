import { Box, Typography } from '@mui/material';
import React from 'react';

const Services = () => {
    return (
        <Box>
            <Box sx={{textAlign: 'center'}}>
            <Typography variant='h6' sx={{color: 'red'}}>
                Services
            </Typography>
            <Typography variant='h3'>
                Our Services Area
            </Typography>
            <Typography variant='body1'>
            the majority have suffered alteration in some form, by injected humour, or randomised 
            <br />
             words which do not look even slightly believable. 
            </Typography>
            </Box>
        </Box>
    );
};

export default Services;