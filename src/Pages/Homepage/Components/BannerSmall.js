import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Card, Grid, Typography } from '@mui/material';
import React from 'react';


const BannerSmall = ({ data, firstCard }) => {

    const cardWidth = 94

    return (
        <Card sx={{
            boxShadow: 'none',
            height: 140,
            overflow: 'visible',
            display: 'flex',

        }}>

            <Box sx={{
                width: { xs: `calc(100% - ${cardWidth}px)` },
                p: { xs: 2, sm: 2, md: 2 },
                backgroundColor: '#ffda47',
                borderRadius: '8px 0px 0px 8px',
            }}>
                <Typography sx={{
                    color: '#0E081E',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: `calc(100% - ${15}px)`
                }}>
                    {data.title}
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

            <Box sx={{
                width: { xs: 0, md: cardWidth },
            }}>
                <Box sx={{
                    position: 'relative',

                }}>
                    <Box sx={{
                        height: 157,
                        position: 'absolute',
                        top: { xs: '-9px', md: firstCard ? '-16px' : '-9px' },
                        left: '-30px'
                    }}>
                        <img style={{
                            height: '100%',
                        }} src={data.image} alt="" />
                    </Box>
                </Box>
            </Box>


        </Card>
    );
};

export default BannerSmall;