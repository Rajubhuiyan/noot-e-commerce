import { Box, Button, Container, IconButton, Stack } from '@mui/material';
import React from 'react';
import facebookIcon from "../../../Assets/Images/Homepage/icon-fb.svg"
import instagramIcon from "../../../Assets/Images/Homepage/icon-insta.svg"
import twitterIcon from "../../../Assets/Images/Homepage/icon-twitter.svg"
import whatsappIcon from "../../../Assets/Images/Homepage/icon-whatsapp.svg"
import callIcon from "../../../Assets/Images/Homepage/phone-alt.svg"
import mailIcon from "../../../Assets/Images/Homepage/mail-icon.svg"


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




const Navbar = () => {
    return (
        <Box sx={{
            backgroundColor: '#9C5BF5',
        }}>
            <Container>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: 41,
                    alignItems: 'center'
                }}>
                    <Stack sx={{overflow:'auto'}} direction="row" spacing={1} alignItems="center">
                        {
                            socialsData.map((social) => (
                                <IconButton key={social.id} target='_blank' href={social.link}>
                                    <img src={social.icon} style={{
                                        height: '1.2rem',
                                        width: '1.2rem'
                                    }} alt="" />
                                </IconButton>
                            ))
                        }
                        <IconButton sx={{display:{sm:'none'}}} target='_blank' href={"tel:+8801602817341"}>
                            <img src={callIcon} style={{
                                height: '1.2rem',
                                width: '1.2rem'
                            }} alt="" />
                        </IconButton>
                        <IconButton sx={{display:{sm:'none'}}} target='_blank' href={"mailto:info@example.com"}>
                            <img src={mailIcon} style={{
                                height: '1.2rem',
                                width: '1.2rem'
                            }} alt="" />
                        </IconButton>

                    </Stack>
                    <Stack sx={{
                        display: { xs: 'none', sm: 'flex' },

                    }} direction="row" spacing={1} alignItems="center">
                        <Button size="small" sx={{ color: '#fff' }} href='tel:+8801602817341' startIcon={<img src={callIcon} alt="call-icon" />} >
                            +8801602817341
                        </Button>
                        <Button size="small" sx={{ color: '#fff' }} href='mailto:info@example.com' startIcon={<img src={mailIcon} alt="call-icon" />} >
                            info@example.com
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default Navbar;