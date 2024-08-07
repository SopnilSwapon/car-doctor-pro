import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

const Footer = () => {
    return (
        <Box>
        <Container>
            <Grid container spacing={4}>
            <Grid item>
                <Typography variant='h5'>
                    Bangladesh
                </Typography>
            </Grid>
            </Grid>
        </Container>
    </Box>

    //     <Box
    //   sx={{
    //     backgroundColor: 'primary.main',
    //     color: 'white',
    //     padding: '16px 0',
    //     mt: 'auto',
    //   }}
    // >
    //   <Container maxWidth="xl">
    //     <Grid container spacing={4}>
    //       <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
    //         <Typography variant="h6" gutterBottom>
    //           About Us
    //         </Typography>
    //         <Typography variant="body2">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //         </Typography>
    //       </Grid>
    //       <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
    //         <Typography variant="h6" gutterBottom>
    //           Services
    //         </Typography>
    //         <Typography variant="body2">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //         </Typography>
    //       </Grid>
    //       <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
    //         <Typography variant="h6" gutterBottom>
    //           Contact Us
    //         </Typography>
    //         <Typography variant="body2">
    //           Email: example@example.com
    //         </Typography>
    //         <Typography variant="body2">
    //           Phone: +123 456 7890
    //         </Typography>
    //       </Grid>
    //       {/* Add more Grid items as needed */}
    //     </Grid>
    //     <Box sx={{ textAlign: 'center', mt: 4 }}>
    //       <Typography variant="body2">
    //         © {new Date().getFullYear()} Your Company. All rights reserved.
    //       </Typography>
    //       <Link href="#" color="inherit" sx={{ ml: 1 }}>
    //         Privacy Policy
    //       </Link>
    //       <Link href="#" color="inherit" sx={{ ml: 1 }}>
    //         Terms of Service
    //       </Link>
    //     </Box>
    //   </Container>
    // </Box>
    
    );
};

export default Footer;