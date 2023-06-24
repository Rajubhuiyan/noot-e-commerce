import { Box, CircularProgress, Container, Typography } from '@mui/material';
import React from 'react';

const ErrorComponent = ({ error }) => {
    return (
        <Container>
            <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, flexDirection: 'column' }}>
                <Typography sx={{
                    fontSize: '8rem',
                    fontWeight: 700,
                    lineHeight: 1
                }}>
                    {
                        error?.response?.data?.statusCode || '404'
                    }
                </Typography>
                <Typography sx={{

                    color: 'red',
                }}>
                    {
                        error?.response?.data?.message || 'Something went wrong!'
                    }
                </Typography>
            </Box>
        </Container>
    );
};

export default ErrorComponent;