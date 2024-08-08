import { Box, Typography } from '@mui/material';
import React from 'react';
import Banner from './Banner';
import About from '../About';
import Services from './Services';

const HomePage = () => {
    return (
        <Box sx={{ width: '100%'}}>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </Box>
    );
};

export default HomePage;