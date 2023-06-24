import { CalendarMonth, Person } from '@mui/icons-material';
import { Box, Card, CardMedia, Grid, Typography } from '@mui/material';
import React, { memo } from 'react';

const PostCard = ({ post }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{
                boxShadow: 'none',
                borderRadius: 0,
                cursor: 'pointer',
            }}>
                <CardMedia
                    component="img"
                    image={post.image}
                    sx={{
                        height: 240,
                        borderRadius: 2
                    }}
                />
                <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Typography sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap:1,
                        fontSize:'0.8rem',
                        color:'#1C103B',
                        fontWeight:500
                    }}>
                        <Person fontSize='small' sx={{color:'#7C58D3'}} />

                        By {post.author}
                    </Typography>
                    <Typography sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap:1,
                        fontSize:'0.8rem',
                        color:'#1C103B',
                        fontWeight:500
                    }}>
                        <CalendarMonth fontSize='small' sx={{color:'#7C58D3'}} />

                        {post.date}
                    </Typography>
                </Box>

                <Typography sx={{
                    color:'#0E081E',
                    fontSize:'1.3rem',
                    fontWeight:700,
                    mt:2
                }}>
                    {post.title}
                </Typography>
                <Typography sx={{
                    color:'#1C103B',
                    fontSize:{xs:'0.8rem',xl:'0.9rem'},
                    fontWeight:500,
                    mt:1
                }}>
                    {post.description}
                </Typography>
            </Card>
        </Grid>
    );
};

export default memo(PostCard, (prevProps, nextProps) => prevProps.post.id === nextProps.post.id)