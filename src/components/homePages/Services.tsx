"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, Button, Grid, Typography } from '@mui/material';
import useServicesInfo from '../useServicesInfo';
import { text } from 'stream/consumers';

const Services = () => {
   const partsInfo = useServicesInfo();

    
    console.log(partsInfo);
    return (
        <Box>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant='h6' sx={{ color: 'red' }}>
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
            <Box>
                <Grid container spacing={4} sx={{mt: '6px'}}>
                   {
                    partsInfo?.map((info: any) => 

                        <Grid key={info.service_id} item xs={12} sm={6} md={4} lg={4}>
                        <Card>
                        <CardMedia
                            sx={{ height: 220 }}
                            image={info.img}
                            title={info.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {info.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                             {info.description}
                            </Typography>
                            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <Typography variant='h6' color="red">
                                Price: {info.price}$
                            </Typography>
                            <Button size='small' sx={{backgroundColor: 'red', fontWeight: 600,}} variant="contained">Buy</Button>

                            </Box>
                        </CardContent>
                        <CardActions>
                        </CardActions>
                    </Card>
                        </Grid>
                    )
                   }
                </Grid>
                <Box sx={{display: 'flex',justifyContent: 'center', py: '16px'}}>
                <Button variant="outlined" sx={{ color: 'red', borderColor: 'red', fontWeight: 600}}>More Services</Button>
                </Box>

            </Box>
        </Box>
    );
};

export default Services;