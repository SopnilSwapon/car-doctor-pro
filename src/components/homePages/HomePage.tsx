import { Box, Typography } from '@mui/material';
import React from 'react';
import Banner from './Banner';
import About from '../About';

const HomePage = () => {
    return (
        <Box sx={{ width: '100%'}}>
            <Banner></Banner>
            <About></About>
        </Box>
    );
};

export default HomePage;