"use client"
import useServicesInfo from '@/hooks/useServicesInfo';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
interface ParamsType {
    service_id: number;
}

const DetailsPage = ({ params }: { params: ParamsType }) => {
    const allParts = useServicesInfo();
    const singleParts = allParts.find((p: any) => p.service_id == params.service_id)
    return (
        <Box sx={{ mt: '120px', minHeight: 'calc(100vh - 304px)', }}>
            <Typography sx={{ textAlign: 'center', fontWeight: 600 }} variant='h3'>
                {singleParts?.title}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { sm: 'row', xs: 'column', md: 'row', lg: 'row' }, columnGap: '30px' }}>
                <Box sx={{ width: '100%', height: '100%' }}>
                    <Image height={500} width={600} src={singleParts?.img} alt={singleParts?.title} />
                </Box>
                <Box>
                    <Typography variant='body1'>
                        <Typography sx={{ fontWeight: 600 }}>Description : </Typography>
                        {singleParts?.description}
                    </Typography>
                    {
                        singleParts?.facility.map((fac: any , index: number)=>
                            <Box key={index}>
                            <Typography>
                                {fac?.name}
                            </Typography>
                            <Typography>
                                {fac?.details}
                            </Typography>
                            </Box>
                        )
                    }
                    <Typography variant='h6' color="red">
                        Price: {singleParts?.price}$
                    </Typography>
                    <Button size='small' sx={{ backgroundColor: 'red', fontWeight: 600, }} variant="contained">Buy</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default DetailsPage;