import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import serviceImg from '../../../Assets/Images/Homepage/our-service-1.svg';
import ServiceCard from './ServiceCard';


const ourserviceData = [
    {
        id: 1,
        title: 'Walking & Sitting',
        description: 'Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae eget dolor morbi',
        image: serviceImg,
        pricePerHour: 20
    },
    {
        id: 2,
        title: 'Walking & Sitting',
        description: 'Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae eget dolor morbi',
        image: serviceImg,
        pricePerHour: 20
    },
    {
        id: 3,
        title: 'Walking & Sitting',
        description: 'Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae eget dolor morbi',
        image: serviceImg,
        pricePerHour: 20
    },
    {
        id: 4,
        title: 'Walking & Sitting',
        description: 'Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae eget dolor morbi',
        image: serviceImg,
        pricePerHour: 20
    },
    {
        id: 5,
        title: 'Walking & Sitting',
        description: 'Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae eget dolor morbi',
        image: serviceImg,
        pricePerHour: 20
    },
    {
        id: 6,
        title: 'Walking & Sitting',
        description: 'Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae eget dolor morbi',
        image: serviceImg,
        pricePerHour: 20
    },

]

const OurServices = () => {
    return (
        <Box sx={{ mt: 8, mb: 4 }}>
            <Container>
                <Typography sx={{ color: '#7C58D3', textAlign: 'center', fontWeight: 600 }}>
                    OUR SERVICES
                </Typography>
                <Typography sx={{ color: '#0B0417', textAlign: 'center', fontWeight: 700, fontSize: {xs:'2rem',sm:'2.5rem',md:'3rem' }}}>
                    All Pet Care Services
                </Typography>
                <Box sx={{ mt: 4 }}>
                    <Grid container spacing={2}>
                        {
                            ourserviceData.map((service) => (
                                <ServiceCard key={service.id} service={service} />
                            ))
                        }
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default OurServices;