import { Box, CircularProgress, Container, Typography } from '@mui/material';
import React from 'react';

const TempoLoader = () => {
    return (
        <Container>
            <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1,flexDirection:'column' }}>
            <CircularProgress size={40} />
            <Typography>
                Loading...
            </Typography>
        </Box>
        </Container>
    );
};

export default TempoLoader;