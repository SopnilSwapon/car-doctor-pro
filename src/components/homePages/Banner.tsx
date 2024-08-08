'use client'
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Typography } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const bannerInfo = [
  {
    title: 'Affordable Price For Car Servicing',
    description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
  },
  {
    title: 'Affordable Price For Car Servicing',
    description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
  },
  {
    title: 'Affordable Price For Car Servicing',
    description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
  },
  {
    title: 'Affordable Price For Car Servicing',
    description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
  },
];

const Banner = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = bannerInfo.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {bannerInfo.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                sx={{
                  height: '700px',
                  display: 'block',
                  maxWidth: "1500px",
                  overflow: 'hidden',
                  width: '97%',
                  mt: '60px',
                  pl: '40px',
                  backgroundImage: `linear-gradient(90.00deg, rgb(21, 21, 21),rgba(21, 21, 21, 0) 70%), url(assets/images/banner/${index + 1}.jpg)`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <Typography variant='h2' sx={{ color: 'white', fontSize: { sm: '1.5rem', xs: '2rem', md: '2rem', lg: '3rem' }, pt: '200px', width: { xs: '100%', sm: '100%', md: '50%', lg: '40%' }}}>
                  {step.title}
                </Typography>
                <Typography variant='body1' sx={{ color: 'white', width: { lg: '40%', md: '40%' }, fontSize: '18px', mb: '10px', }}>
                  {step.description}
                </Typography>
                <Button sx={{backgroundColor: 'red', mr: '10px', fontWeight: 600,}} variant="contained">Discover More</Button>
                <Button sx={{fontWeight: 600, mr: '10px', borderColor: 'white', color: 'white'}} variant="outlined">
                  Latest Project
                </Button>
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default Banner;