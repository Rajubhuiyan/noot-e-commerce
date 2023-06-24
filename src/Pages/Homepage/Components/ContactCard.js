import { Avatar, Card, Grid, Typography } from '@mui/material';
import React from 'react';

const ContactCard = ({ contact }) => {
    return (
        <Grid item xs={12} sm={6} md={3} >
            <Card sx={{
                boxShadow: 0,
                borderRadius: 2,
                border: '1px solid #EBE5F7',
                p: 2,
                py:3,
                '&:hover': {
                    border: '1px solid #7C58D3', 
                    '& .MuiAvatar-root': {
                        backgroundColor: '#7C58D3',
                    }, 
                    '& .MuiSvgIcon-root': {
                        color: '#fff',
                    }
                },
                '& .MuiAvatar-root': {
                    backgroundColor: '#EBE5F7',
                    transition: 'all 0.2s ease-in-out',
                },
                '& .MuiSvgIcon-root': {
                    color: '#7C58D3',
                    transition: 'all 0.2s ease-in-out',
                }, 
                transition: 'all 0.1s ease-in-out',
                position: 'relative',
                cursor: 'pointer',
                textAlign: 'center',
                overflow: 'visible', 
            }}>
                <Typography gutterBottom sx={{ fontSize: '1.2rem', fontWeight: 700 }}>
                    {contact.title}
                </Typography>
                <Typography gutterBottom sx={{
                    fontSize: '0.8rem'
                }}>
                    {contact.info1}
                </Typography>
                <Typography sx={{
                    fontSize: '0.8rem'
                }}>
                    {contact.info2}
                </Typography>

                <Avatar sx={{
                    position: 'absolute',
                    top: -25,
                    left: '50%',
                    transform: 'translateX(-50%)',
                }} >
                    {contact.icon}
                </Avatar>
            </Card>
        </Grid>
    );
};

export default ContactCard;