import React from 'react';
import { CircularProgress, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import ProductsCard from './ProductsCard';
import { useQuery } from 'react-query';
import TempoLoader from '../../../SharedComponents/TempoLoader';
import ErrorComponent from '../../../SharedComponents/ErrorComponent';



const Products = () => {
    const { isLoading, error, data: productsData } = useQuery('productsData', async () => {
        await new Promise((resolve) => setTimeout(resolve, 300));
        const response = await fetch('/fakeData/productsData.json');
        return response.json();
    });


    // here we can show the skeleton , i didnt do cause dont have time
    if (isLoading) return <TempoLoader />
    if (error) return <ErrorComponent error={error} />

    return (
        <Container>
            <Grid container spacing={2}>
                {
                    productsData.map((item) => (
                        <Grid key={item.id} item xs={12} sm={6} md={4}>
                            <Typography sx={{
                                color: '#0E081E',
                                fontSize: { xs: '1.3rem', lg: '1.5rem' },
                                fontWeight: 700,
                                mb: { xs: 3, sm: 5 }
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