import { Call } from '@mui/icons-material';
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ContactCard from './ContactCard';


const contactData = [
    {
        id: 1,
        title: 'Phone',
        icon: <Call />,
        info1: '+880 123 456 789',
        info2: '+880 123 456 789'
    },
    {
        id: 2,
        title: 'Email',
        icon: <Call />,
        info1: '+880 123 456 789',
        info2: '+880 123 456 789'
    },
    {
        id: 3,
        title: 'Address',
        icon: <Call />,
        info1: '+880 123 456 789',
        info2: '+880 123 456 789'
    },
    {
        id: 4,
        title: 'Open Hours',
        icon: <Call />,
        info1: '+880 123 456 789',
        info2: '+880 123 456 789'
    }
]

const Contact = () => {
    return (
        <Box sx={{ backgroundColor: '#f5f4f4', py: { xs: 2, md: 3, xl: 4 } }}>
            <Container>
                <Typography sx={{ color: '#7C58D3', textAlign: 'center', fontWeight: 700 }}>
                    OUR CONTACTS
                </Typography>
                <Typography sx={{ color: '#0B0417', fontSize: '1.7rem', textAlign: 'center', fontWeight: 700 }}>
                    Contacts
                </Typography>
                <Typography sx={{ color: '#1C103B', textAlign: 'center', fontWeight: 500,mb:6 }}>
                    Massa enim nec dui nunc mattis enim ut tellus
                </Typography>
                <Grid container spacing={{xs:4,md:2}}>
                    {
                        contactData.map(contact => (
                            <ContactCard
                            key={contact.id}
                            contact={contact}
                            />
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;