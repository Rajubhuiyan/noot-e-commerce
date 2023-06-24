import { Box, Button, Card, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import mainBannerDog from '../../../Assets/Images/Homepage/main-dog-banner.svg';
import { ArrowForward } from '@mui/icons-material';
import BannerSmall from './BannerSmall';
import smallBannerDog from '../../../Assets/Images/Homepage/small-banner-dog.png';

const Banner = () => {
    return (
        <Container sx={{ my: 7 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8} >
                    <Card sx={{
                        p: { xs: 2, sm: 3, md: 6 },
                        backgroundColor: '#FCDCB5',
                        boxShadow: 'none',
                        borderRadius: '8px',
                    }}>
                        <Grid container alignItems="end" spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Box>
                                    <Typography sx={{
                                        fontSize: { xs: '1.5rem', sm: '1.6rem', md: '2rem' },
                                        color: '#0B0417',
                                        fontWeight: 600,
                                        lineHeight: '1.2',
                                    }}>
                                        Сheck Out Our Specials
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: '0.7rem',
                                        color: '#1C103B',
                                        mt: 1
                                    }}>
                                        Massa placerat duis ultricies lacus. Aliquet bibendum enim facilisis gravida neque convallis
                                    </Typography>
                                    <Button sx={{
                                        mt: 2,
                                        textTransform: 'none',
                                        color: '#7C58D3',
                                        fontWeight: 600,
                                    }}
                                        endIcon={<ArrowForward />}
                                        size='small'
                                    >
                                        Shop Now
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{
                                    height: 200,
                                    position: 'relative',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'end',
                                }}>
                                    <img style={{ height: '100%', transform: 'scaleX(-1)', }} src={mainBannerDog} alt="" />
                                    <Button sx={{
                                        position: 'absolute',
                                        top: -20,
                                        right: 0,
                                        backgroundColor: '#7C58D3',
                                        color: '#fff',
                                        '&:hover': {
                                            backgroundColor: '#7C58D3',
                                        }
                                    }}>
                                        Up to 50% off
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid container spacing={{xs:4,sm:2}}>
                        <Grid item xs={12} sm={6} md={12}>
                            <BannerSmall data={{
                                title: 'Luxury Fashion Collection',
                                image: smallBannerDog,
                            }}
                                firstCard
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={12}>
                            <BannerSmall data={{
                                title: 'Luxury Fashion Collection',
                                image: smallBannerDog,
                            }} />
                        </Grid>
                    </Grid>


                </Grid>
            </Grid>
        </Container >
    );
};

export default Banner;