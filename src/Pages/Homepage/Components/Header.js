import { Avatar, Box, Button, Container, Divider, Drawer, Grid, IconButton, Typography, styled, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import headerBg from "../../../Assets/Images/Homepage/header-bg.png";
import dogImg from "../../../Assets/Images/Homepage/dog1.png";
import logoFrom from "../../../Assets/Images/Homepage/logo.svg";
import shoppingCart from "../../../Assets/Images/Homepage/shopping-cart.svg";
import shipping1 from "../../../Assets/Images/Homepage/shipping-fast.svg";
import shipping2 from "../../../Assets/Images/Homepage/shipping-fast (1).svg";
import shipping3 from "../../../Assets/Images/Homepage/shipping-fast (2).svg";
import shipping4 from "../../../Assets/Images/Homepage/shipping-fast (3).svg";
import { ChevronLeft, ChevronRight, MoreHoriz, MoreVert } from '@mui/icons-material';



const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: 0,
        }),
    }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));


const routeData = [
    {
        name: 'Home',
        link: '/',
        id: 1
    },
    {
        name: 'Service',
        link: '/service',
        id: 2

    },
    {
        name: 'Shop',
        link: '/shop',
        id: 3
    },
    {
        name: 'Blog',
        link: '/blog',
        id: 4
    },
    {
        name: 'Pages',
        link: '/pages',
        id: 5
    }
]

const advantagesData = [
    {
        id: 1,
        icon: shipping1,
        title: 'Trust & Safety',
        description: 'Velit euismod pellentes'
    },
    {
        id: 2,
        icon: shipping2,
        title: 'Discounts ',
        description: 'Bibendum ut tristique ',
    },
    {
        id: 3,
        icon: shipping3,
        title: 'Support ',
        description: 'Egestas quis ipsum velit',
    },
    {
        id: 4,
        icon: shipping4,
        title: 'Guarantee ',
        description: 'Convallis tellus id interdum ',
    }
]

const Header = () => {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const largeDevice = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box sx={{
            backgroundImage: `url(${headerBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top right',
            minHeight: 600,
            backgroundSize: 'contain',
            overflow: 'hidden'
        }}>
            <Container>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: { xs: 'end', md: 'space-between' },
                    my: 3,
                    alignItems: 'center'
                }}>
                    <Box sx={{
                        display: { xs: 'none', md: 'flex' },
                        flexDirection: 'row',
                        gap: 2, alignItems: 'center'
                    }}>
                        <img src={logoFrom} alt="" />
                        <Typography sx={{ color: '#7C58D3', fontSize: '1.3rem', fontWeight: 500, display: { xs: 'none', sm: 'block' } }}>
                            Petopia
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: { xs: 'none', md: 'flex' },
                        gap: 1,
                        alignItems: 'center'
                    }}>
                        {
                            routeData.map((route) => (
                                <Button key={route.link} sx={{ color: 'black' }} href={route.link} size='small'>
                                    {route.name}
                                </Button>
                            ))
                        }
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        gap: 1,
                        alignItems: 'center'
                    }}>
                        <Button sx={{
                            backgroundColor: 'white',
                            color: 'black',
                            '&:active': {
                                transform: 'scale(0.9)'
                            },
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                                backgroundColor: 'white'
                            }
                        }}
                            size='small'
                        >
                            <img src={shoppingCart} style={{ marginRight: '5px' }} alt="" /> (1 item)
                        </Button>
                        {/* if not large device will show drawer */}
                        {
                            !largeDevice && (
                                <div>
                                    <IconButton sx={{ color: 'white' }} onClick={handleDrawerOpen}>
                                        <MoreVert />
                                    </IconButton>
                                    <Drawer
                                        sx={{
                                            width: drawerWidth,
                                            flexShrink: 0,
                                            '& .MuiDrawer-paper': {
                                                width: drawerWidth,
                                            },
                                        }}
                                        variant="temporary"
                                        anchor="right"
                                        open={open}
                                        onClose={handleDrawerClose}
                                    >
                                        <DrawerHeader>
                                            <IconButton onClick={handleDrawerClose}>
                                                {theme.direction === 'rtl' ? <ChevronLeft /> : <ChevronRight />}
                                            </IconButton>
                                            <Box sx={{
                                                flexDirection: 'row',
                                                gap: 1, alignItems: 'center',
                                                display: 'flex',
                                                ml: 1
                                            }}>
                                                <img style={{ height: 40 }} src={logoFrom} alt="" />
                                                <Typography sx={{ color: '#7C58D3', fontSize: '1rem', fontWeight: 500, }}>
                                                    Petopia
                                                </Typography>
                                            </Box>
                                        </DrawerHeader>
                                        <Divider />
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexDirection: 'column',
                                            mt: 1
                                        }}
                                            onClick={handleDrawerClose}
                                        >
                                            {
                                                routeData.map((route) => (
                                                    <Button key={route.link}  sx={{ color: 'black', width: 1 }} href={route.link} size='small'>
                                                        {route.name}
                                                    </Button>
                                                ))
                                            }
                                        </Box>
                                    </Drawer>
                                </div>
                            )
                        }
                    </Box>
                </Box>


                <Box sx={{ my: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Typography sx={{ color: '#7C58D3' }}>
                                    We care for your pets
                                </Typography>
                                <Typography sx={{ color: '#0E081E', fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.3rem' }, fontWeight: 700, lineHeight: 1.2, my: 1 }}>
                                    We Help You Care for Animals with Nutrition
                                </Typography>
                                <Typography sx={{ color: '#1C103B', fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                                    All offers are subject to availability. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Consectetur a erat nam at. Potenti nullam ac tortor vitae purus faucibus ornare.
                                </Typography>
                            </Box>

                            {/* advantage side */}


                            <Box sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    {
                                        advantagesData.map((advantage) => (
                                            <Grid key={advantage.id}  item xs={12} sm={6} md={6}>
                                                <Box sx={{ display: 'flex', gap: 1 }}>
                                                    <Box sx={{
                                                        borderRadius: '8px',
                                                        border: '2px solid #EBE5F7',
                                                        background: '#FBF9FF',
                                                        width: '66px',
                                                        height: '60px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}>
                                                        <img src={advantage.icon} alt="" />
                                                    </Box>
                                                    <Box sx={{
                                                        width: `calc(100% - 66px)`
                                                    }}>
                                                        <Typography sx={{ color: '#0E081E', fontWeight: 600, fontSize: '1.2rem' }}>
                                                            {advantage.title}
                                                        </Typography>
                                                        <Typography>
                                                            {advantage.description}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box alignItems="center" sx={{ height: 1, display: { xs: 'none', md: 'flex' } }}>
                                <Box sx={{
                                    height: { xs: 300, sm: 300, md: 600 }
                                }}>
                                    <img style={{
                                        width: 'auto',
                                        height: '100%'
                                    }} src={dogImg} alt="" />
                                </Box>
                            </Box>
                        </Grid>

                    </Grid>
                </Box >
            </Container >
        </Box >
    );
};

export default Header;