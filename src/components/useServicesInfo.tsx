'use client'
import React from 'react';
import { useQuery } from '@tanstack/react-query';


const useServicesInfo = () => {
    const { data: partsInfo = [] } = useQuery({
        queryKey: ['partsInfo'],
        queryFn: async () => {
            const res = await fetch('/services.json'); // Adjusted file path
            return res.json();
        }
    });
    return partsInfo;
};

export default useServicesInfo;