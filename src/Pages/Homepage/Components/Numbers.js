import React from 'react';
import bg from '../../../Assets/Images/Homepage/number-bg.png'
import pets from '../../../Assets/Images/Homepage/pets.svg'
import img1 from '../../../Assets/Images/Homepage/pet.svg'
import img2 from '../../../Assets/Images/Homepage/canned-food.svg'
import img3 from '../../../Assets/Images/Homepage/shopping-bag.svg'
import { Box, Container, Grid, Typography } from '@mui/material';


const numbersData = [
    {
        id: 1,
        title: 'Sutisfide Cliens',
        number: 1000,
        icon: pets
    },
    {
        id: 2,
        title: 'Years Experience',
        number: 1000,
        icon: img1
    },
    {
        id: 3,
        title: 'Brands Available',
        number: 1000,
        icon: img2

    },
    {
        id: 4,
        title: 'Products for pets',
        number: 1000,
        icon: img3

    }
]

const Numbers = () => {
    return (
        <Container >
            <Box sx={{
                backgroundImage: `url(${bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                px: {xs:2,sm:4},
                py:{xs:2,sm:8},
                borderRadius:2
            }}>
                <Grid container spacing={2}>
                    {
                        numbersData.map((item) => (
                            <Grid key={item.id} item xs={12} sm={6} md={3}>
                                <Box sx={{
                                    display: 'flex',
                                    gap: 1,
                                    justifyContent: 'center',
                                }}>
                                    <img src={item.icon} alt="" />
                                    <Box>
                                        <Typography sx={{
                                            fontSize: '2rem',
                                            fontWeight: 'bold',
                                            color: '#fff'
                                        }}>
                                            {item.number}+
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: '0.9rem',
                                            color: '#fff'
                                        }}>
                                            {item.title}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Numbers;