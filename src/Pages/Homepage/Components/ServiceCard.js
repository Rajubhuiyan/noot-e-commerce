import { Box, Button, Card, Grid, Typography, styled } from '@mui/material';
import React, { memo } from 'react';
import bgImage from '../../../Assets/Images/Homepage/Paws.png';
import path from '../../../Assets/Images/Homepage/Path.png';
import { ArrowForward } from '@mui/icons-material';



const CustomCard = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    backgroundImage: `url(${bgImage})`,
    padding: theme.spacing(2),
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right',
    borderRadius: '8px',
    border: '1px solid #EBE5F7',
    position: 'relative',
    cursor: 'pointer', 
    '&:hover': {
        backgroundColor: '#7C58D3',
        color: '#fff',
    },
    transition: 'all 0.2s ease-in-out',
    '&:after': {
        content: '""',
        backgroundImage: `url(${path})`,
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 1,
        backgroundPosition: 'bottom right',
        zIndex:1,
        pointerEvents: 'none',
    },
    '&:hover > button': {
        color: '#FFDA47',
    }

}));

const ServiceCard = ({ service }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <CustomCard>
                <Box sx={{
                    display: 'flex',
                    gap: 1,
                    justifyContent: 'start',
                    alignItems: 'center',
                }}>
                    <img src={service.image} alt="" />
                    <Typography sx={{
                        fontSize: '1.3rem',
                        fontWeight: '600'
                    }}>
                        {service.title}
                    </Typography>
                </Box>
                <Typography sx={{ mt: 1, fontSize: '0.8rem' }}>
                    {service.description}
                </Typography>
                <Typography sx={{ mt: 1, fontSize: '0.8rem', fontWeight: 'bold' }}>
                    From ${service.pricePerHour}/hour
                </Typography>
                <Button sx={{
                    mt: 2,
                    textTransform: 'none',
                    color: '#7C58D3'
                }}
                    endIcon={<ArrowForward />}
                >
                    Get Service
                </Button>
            </CustomCard>
        </Grid>
    );
};

export default memo(ServiceCard, (prev, next) => {
    return prev.service.id === next.service.id
});