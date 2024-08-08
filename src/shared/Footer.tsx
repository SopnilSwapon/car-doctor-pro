import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { LinkedIn } from '@mui/icons-material';
import Image from 'next/image';
import logo from '../../public/assets/logo.svg'

const Footer = () => {
    return (
        <Box
        sx={{backgroundColor: 'black', mx: 'auto', color: 'white', p: '10px', textAlign: 'center', pt:'40px'}}>
        <Container maxWidth='xl'>
            <Grid container spacing={4}>
            <Grid item sm={6} md={3} lg={3}>
                <Image src={logo} alt='logo'/>
                <Typography variant='body1'>
                    Eadnin Diaz is a Software & technologies engineering, A life coach who is also serial.
                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', mt: '4px'}}>
                <GoogleIcon/>
                <FacebookIcon/>
                 <TwitterIcon/>
                 <LinkedIn/>
                </Box>
            </Grid>
            <Grid item sm={6} md={3} lg={3} sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
              <Typography variant='h6'>
              About
              </Typography>
              <Typography variant='body1'>
                Home
              </Typography>
              <Typography variant='body1'>
                Service
              </Typography>
              <Typography variant='body1' >
                Contact
              </Typography>
            </Grid>
            <Grid item sm={6} md={3} lg={3} sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
              <Typography variant='h6'>
               Company
              </Typography>
              <Typography variant='body1'>
                Why car doctor?
              </Typography>
              <Typography variant='body1'>
                About
              </Typography>
            </Grid>
            <Grid item sm={6} md={3} lg={3} sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
              <Typography variant='h6'>
               Support
              </Typography>
              <Typography variant='body1'>
                Support center
              </Typography>
              <Typography variant='body1'>
                Feedback
              </Typography>
              <Typography variant='body1'>
                Accessibility
              </Typography>
            </Grid>
            </Grid>
        </Container>
    </Box>
    );
};

export default Footer;