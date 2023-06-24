import { Box, Button, Card, Container, TextField, Typography, styled, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import path from '../../../Assets/Images/Homepage/newsletter-path.png';
import circle from '../../../Assets/Images/Homepage/news-letter-circle.svg';
import dog1 from '../../../Assets/Images/Homepage/news-letter-dog-1.svg'
import dog2 from '../../../Assets/Images/Homepage/news-letter-dog-2.svg'
import dogShadow from '../../../Assets/Images/Homepage/dog-shadow.svg'


const CustomCard = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    backgroundColor: '#7C58D3',
    padding: theme.spacing(2),
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right',
    borderRadius: '8px',
    border: '1px solid #EBE5F7',
    position: 'relative',
    overflow: 'visible',
    transition: 'all 0.2s ease-in-out',
    '&:after': {
        content: '""',
        backgroundImage: `url(${path})`,
        backgroundRepeat: 'no-repeat',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 1,
        backgroundPosition: 'bottom right',
        zIndex: 1,
        pointerEvents: 'none',
        backgroundSize: 'contain'

    },
    '&:before': {
        content: '""',
        backgroundImage: `url(${circle})`,
        backgroundRepeat: 'no-repeat',
        // height: 191,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundPosition: 'bottom left',
        zIndex: 1,
        pointerEvents: 'none',
        backgroundSize: 'contain'
    },
    '&:hover > button': {
        color: '#FFDA47',
    },

}));



const NewsletterInput = styled(TextField)({
    '& .MuiInputBase-root': {
        color: 'white',
        height:40
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

const NewsLetter = () => {

    const xSmallDevice = useMediaQuery('(max-width:400px)');
    return (
        <Container sx={{ my: 3 }}>
            <CustomCard sx={{
                '&:before': {
                    height: { xs: 135, md: 191 },
                },
                '&:after': {
                    height: { xs: 105, md: 190 },
                }
            }}>

                {/* main content */}

                <Box sx={{
                    display: 'flex', justifyContent: 'center',
                    height: 1,
                    alignItems: { sm: 'center' },
                    minHeight: { xs: 310 },
                    mb: { xs: xSmallDevice ? 7 : 0, sm: 0 }
                }}>
                    <Box sx={{ textAlign: 'center', width: { xs: 1, md: '60%' }, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, position: 'relative', zIndex: 11111 }}>
                        <Typography sx={{ color: 'white', fontSize: { xs: '1.4rem', md: '2rem' }, fontWeight: 700 }}>
                            Get 20% Off Your First Purchase When You Use Petco Credit Card
                        </Typography>
                        <Typography sx={{ fontSize: '0.7rem', color: '#ffff', width: '90%' }}>
                            Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit.
                        </Typography>
                        <Box sx={{
                            display: 'flex', gap: 2,
                            justifyContent: 'center',
                            mt: 2
                        }}>
                            <NewsletterInput
                                
                                placeholder='Type your email'
                            />
                            <Button sx={{

                                border: '2px solid #FFDA47',
                                background: '#FFDA47',
                                textTransform: 'capitalize',
                                color: 'white',
                                "&:hover": {
                                    border: '2px solid #FFDA47',
                                    background: '#FFDA47',
                                },
                                height: 40,
                            }}>
                                Submit
                            </Button>
                        </Box>
                    </Box>
                </Box>
                {/* main content end */}


                {/* dogs */}


                <>

                    <Box sx={{
                        height: { xs: 90, md: '145px' },
                        position: 'absolute',
                        bottom: { xs: 0, md: '9px' },
                        zIndex: '111',
                        left: { xs: '-21px', md: '-70px' },
                        pointerEvents: 'none'
                    }}>
                        <img style={{ height: '100%' }} src={dog1} alt="" />
                    </Box>
                    <Box sx={{
                        height: { xs: 100, md: '185px' },
                        position: 'absolute',
                        bottom: { xs: 10, md: '20px' },
                        zIndex: '111',
                        right: '16px'
                    }}>
                        <Box sx={{
                            height: '100%',
                            position: 'relative',
                            pointerEvents: 'none'
                        }}>
                            <img style={{ height: '100%', position: 'relative', zIndex: 111 }} src={dog2} alt="" />
                            <Box sx={{
                                position: 'absolute',
                                bottom: '-9px',
                                left: { xs: 15, md: '34px' }
                            }}>
                                <img style={{
                                    width: '80px',
                                    transform: 'rotate(4deg)'
                                }} src={dogShadow} alt="" />
                            </Box>
                            <Box sx={{
                                position: 'absolute',
                                bottom: '-9px',
                                right: '-6px'
                            }}>
                                <img style={{
                                    width: '80px',
                                    transform: 'rotate(3deg)'
                                }} src={dogShadow} alt="" />
                            </Box>
                        </Box>

                    </Box>
                </>

            </CustomCard>
        </Container>
    );
};

export default NewsLetter;