import React from 'react';
import pdImg from '../../../Assets/Images/Homepage/pd-img-1.png'
import { Container, Divider, Grid, Stack, Typography } from '@mui/material';
import ProductsCard from './ProductsCard';

const productsData = [
    {
        id: 1,
        title: 'Featured Products',
        child: [
            {
                id: 1,
                name: 'Detachable Gravity Bowl Food Feeder',
                rating: 5,
                price: 200,
                image: pdImg
            },
            {
                id: 2,
                name: 'Detachable Gravity Bowl Food Feeder',
                rating: 5,
                price: 200,
                image: pdImg
            },
            {
                id: 3,
                name: 'Detachable Gravity Bowl Food Feeder',
                rating: 5,
                price: 200,
                image: pdImg
            },
        ]
    },
    {
        id: 2,
        title: 'On Sale Products',
        child: [
            {
                id: 1,
                name: 'Detachable Gravity Bowl Food Feeder',
                rating: 5,
                price: 200,
                image: pdImg
            },
            {
                id: 2,
                name: 'Detachable Gravity Bowl Food Feeder',
                rating: 5,
                price: 200,
                image: pdImg
            },
            {
                id: 3,
                name: 'Detachable Gravity Bowl Food Feeder',
                rating: 5,
                price: 200,
                image: pdImg
            },
        ]
    },
    {
        id: 3,
        title: 'Top Rated Products',
        child: [
            {
                id: 1,
                name: 'Detachable Gravity Bowl Food Feeder',
                rating: 5,
                price: 200,
                image: pdImg
            },
            {
                id: 2,
                name: 'Detachable Gravity Bowl Food Feeder',
                rating: 5,
                price: 200,
                image: pdImg
            },
            {
                id: 3,
                name: 'Detachable Gravity Bowl Food Feeder',
                rating: 5,
                price: 200,
                image: pdImg
            },
        ]
    }
]

const Products = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                {
                    productsData.map((item) => (
                        <Grid key={item.id} item xs={12} sm={6} md={4}>
                            <Typography sx={{
                                color: '#0E081E',
                                fontSize: {xs:'1.3rem',lg:'1.5rem'},
                                fontWeight: 700,
                                mb: {xs:3,sm:5}
                            }}>
                                {item.title}
                            </Typography>

                            <Stack
                                spacing={2}
                                divider={<Divider />}
                            >
                                {
                                    item.child.map((product) => (
                                        <ProductsCard
                                        key={product.id}
                                        product={product}
                                        />
                                    ))
                                }
                            </Stack>

                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default Products;