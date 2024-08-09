import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box, Grid, Typography } from '@mui/material';

const Services = () => {
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
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Card>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Services;