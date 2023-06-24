import { Box, Rating, Typography } from '@mui/material';
import React, { memo } from 'react';

const ProductsCard = ({ product }) => {
    return (
        <Box sx={{
            display: 'flex', gap: {xs:2,sm:4},
            alignItems: 'center'
        }}>
            <Box sx={{
                width:180
            }}>
                <img style={{width:'100%'}} src={product.image} alt="" />
            </Box>
            <Box>
                <Typography sx={{
                    fontSize: {xs:'1rem',lg:'1.1rem'},
                    fontWeight: 600,
                    color: '#1C103B', 
                }}>
                    {product.name}
                </Typography>
                <Rating
                    value={product.rating}
                    readOnly
                    size='small'
                    sx={{mt:0.7}}
                />
                <Typography sx={{
                    fontSize:'0.8rem',fontWeight:500,
                    color:'#7C58D3',
                    mt:0.7
                }}>
                    $ {product.price}
                </Typography>
            </Box>
        </Box>
    );
};

export default memo(ProductsCard, (prev, next) => prev.product.id === next.product.id);