import { Box, Button, Container, Divider, Grid, IconButton, Stack, TextField, Typography, styled } from '@mui/material';
import React from 'react';
import petBonz from '../../../Assets/Images/Homepage/pet-bonz.svg';
import { ArrowForward, Call, FiberManualRecord } from '@mui/icons-material';
import facebookIcon from "../../../Assets/Images/Homepage/icon-fb.svg"
import instagramIcon from "../../../Assets/Images/Homepage/icon-insta.svg"
import twitterIcon from "../../../Assets/Images/Homepage/icon-twitter.svg"
import whatsappIcon from "../../../Assets/Images/Homepage/icon-whatsapp.svg"

const socialsData = [
    {
        icon: facebookIcon,
        link: "https://www.facebook.com/mohammadrajuahmedbhuiyan/",
        alt: "Facebook",
        id: 1
    },
    {
        icon: instagramIcon,
        link: "https://www.facebook.com/mohammadrajuahmedbhuiyan/",
        alt: "Instagram",
        id: 2
    },
    {
        icon: twitterIcon,
        link: "https://www.facebook.com/mohammadrajuahmedbhuiyan/",
        alt: "Twitter",
        id: 3
    },
    {
        icon: whatsappIcon,
        link: "https://www.facebook.com/mohammadrajuahmedbhuiyan/",
        alt: "Whatsapp",
        id: 4

    }
]

const workingHours = [
    {
        id: 1,
        day: 'Mon - Fri',
        time: '8:00 AM - 7:00 PM'
    },
    {
        id: 2,
        day: 'Sat - Sun',
        time: '8:00 AM - 7:00 PM'
    },
    {
        id: 3,
        day: 'Mon - Fri',
        time: '8:00 AM - 7:00 PM'
    }
]

const usefulLink = [
    {
        id: 1,
        name: "Home",
        link: "/"
    },
    {
        id: 2,
        name: "Home",
        link: "/"
    },
    {
        id: 3,
        name: "Home",
        link: "/"
    },
    {
        id: 4,
        name: "Home",
        link: "/"
    },
    {
        id: 5,
        name: "Home",
        link: "/"
    },
    {
        id: 6,
        name: "Home",
        link: "/"
    },
    {
        id: 7,
        name: "Home",
        link: "/"
    },
    {
        id: 8,
        name: "Home",
        link: "/"
    },

]

const NewsletterInput = styled(TextField)({
    '&': {
        backgroundColor: 'white',
    },

    '& .MuiInputBase-input': {
        fontSize: '0.9rem',
    },

    '& label.Mui-focused': {
        color: '#A0AAB4',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#E0E3E7',
            display: 'none',
        },
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
            display: 'none'
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
            display: 'none'
        },
        borderRadius: '0.4rem',
        border: '1px solid #e3e3e3'
    },
});

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#f5f4f4', py: { xs: 2, md: 3, xl: 5 } }}>
            <Container>

                <Grid container spacing={{xs:2,sm:2,md:3,xl:5}}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{ mb: 2 }}>
                            <img style={{ height: 48 }} src={petBonz} alt="" />
                        </Box>
                        <Typography sx={{ color: '#1C103B', fontSize: '0.9rem', }}>
                            Tristique nulla aliquet enim tortor at auctor urna nunc. Massa enim nec dui nunc mattis enim ut tellus. Sed ut perspiciatis unde ...
                        </Typography>
                        <Box sx={{ mt: 2, display: 'flex', gap: 1, alignItems: 'center' }}>
                            <Call sx={{ color: '#9C5BF5', fontSize: '2.8rem' }} />
                            <Box>
                                <Typography component="a" sx={{
                                    color: '#1C103B',
                                    textDecoration: 'none',
                                    fontSize: '1.3rem',
                                    fontWeight: 600
                                }}
                                    href="tel:+9137563126"
                                >
                                    (913) 756-3126
                                </Typography>
                                <Typography sx={{ color: '#1C103B', fontSize: '0.8rem' }}>
                                    Got Questions? Call us 24/7
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{
                            height: 48,
                            display: 'flex',
                            alignItems: 'center',
                            mb: 2
                        }}>
                            <Typography sx={{ color: '#9C5BF5', fontWeight: 700, fontSize: '1.2rem' }}>
                                Working Hours
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {
                                workingHours.map((item) => (
                                    <Box key={item.id} sx={{
                                        display: 'flex',
                                        gap: 1,
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}>
                                        <Typography sx={{ fontSize: '0.9rem' }}>
                                            {item.day}:
                                        </Typography>
                                        <Typography sx={{ fontWeight: 600, fontSize: '0.9rem' }}>
                                            {item.time}
                                        </Typography>
                                    </Box>
                                ))
                            }

                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{
                            height: 48,
                            display: 'flex',
                            alignItems: 'center',
                            mb: 2
                        }}>
                            <Typography sx={{ color: '#9C5BF5', fontWeight: 700, fontSize: '1.2rem' }}>
                                Useful Links
                            </Typography>
                        </Box>
                        <Grid container spacing={2}>
                            {
                                usefulLink.map((item) => (
                                    <Grid item xs={6} key={item.id} >
                                        <Box sx={{
                                            display: 'flex',
                                            gap: 1,
                                            alignItems: 'center',
                                        }}>
                                            <FiberManualRecord sx={{
                                                fontSize: '0.7rem',
                                                color: item.id === 1 ? '#FF47A2' : '#FBD'
                                            }} />
                                            <Typography component="a" href={item.link} sx={{ fontSize: '0.9rem', textDecoration: 'none', color: '#1C103B' }}>
                                                {item.name}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))
                            }

                        </Grid>

                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{
                            height: 48,
                            display: 'flex',
                            alignItems: 'center',
                            mb: 2
                        }}>
                            <Typography sx={{ color: '#9C5BF5', fontWeight: 700, fontSize: '1.2rem' }}>
                                Newsletter
                            </Typography>
                        </Box>
                        <Typography sx={{ color: '#1C103B', fontSize: '0.9rem', }}>
                            Be first in the queue! Get our latest news straight to your inbox.
                        </Typography>
                        <Box sx={{ my: 3, display: 'flex', gap: 3 }}>
                            <NewsletterInput
                                placeholder='Email'
                                size='small'

                            />
                            <Button sx={{
                                backgroundColor: '#9C5BF5',
                                color: '#fff',
                                minWidth:0,
                                height:38,
                                '&:hover': {
                                    backgroundColor: '#9C5BF5',
                                },
                                "&:active": {
                                    transform: 'scale(0.9)'
                                },
                                transition: 'all 0.3s ease'

                            }}>
                                <ArrowForward />
                            </Button>
                        </Box>
                        <Stack direction="row" spacing={1} alignItems="center">
                            {
                                socialsData.map((social) => (
                                    <IconButton key={social.id} target='_blank' href={social.link}>
                                        <img src={social.icon} style={{
                                            height: '1.2rem',
                                            width: '1.2rem',
                                            filter: 'invert(48%) sepia(35%) saturate(5918%) hue-rotate(237deg) brightness(94%) contrast(105%)'
                                        }} alt="" />
                                    </IconButton>
                                ))
                            }

                        </Stack>
                    </Grid>
                </Grid>

                <Divider sx={{
                    my: 3
                }} />
                <Typography sx={{ color: '#675D6B', textAlign: 'center', fontSize: '0.8rem' }}>
                    NOOT ©  All rights reserved Copyrights {new Date().getFullYear()}
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;