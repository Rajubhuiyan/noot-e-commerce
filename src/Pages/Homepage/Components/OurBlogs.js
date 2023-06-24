import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import postImg from '../../../Assets/Images/Homepage/post-img.png';
import PostCard from './PostCard';
import { useQuery } from 'react-query'; 
import TempoLoader from '../../../SharedComponents/TempoLoader';
import ErrorComponent from '../../../SharedComponents/ErrorComponent';

// const postData = [
//     {
//         id: 1,
//         title: '5 Crazy Things Dogs Do When Left Alone At Home',
//         image: postImg,
//         description: 'Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.',
//         date: '12/12/2021',
//         author: 'Raju Ahmed'

//     },
//     {
//         id: 2,
//         title: '5 Crazy Things Dogs Do When Left Alone At Home',
//         image: postImg,
//         description: 'Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.',
//         date: '12/12/2021',
//         author: 'Raju Ahmed'

//     },
//     {
//         id: 3,
//         title: '5 Crazy Things Dogs Do When Left Alone At Home',
//         image: postImg,
//         description: 'Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.',
//         date: '12/12/2021',
//         author: 'Raju Ahmed'

//     }
// ]

const OurBlogs = () => {


    const { isLoading, error, data: postData } = useQuery('ourBlogsData', async () => {
        await new Promise((resolve) => setTimeout(resolve, 300));
        const response = await fetch('/fakeData/ourBlogsData.json');
        return response.json();
    });
 

// here we can show the skeleton , i didnt do cause dont have time
if (isLoading) return <TempoLoader />
if (error) return <ErrorComponent error={error} />

    return (
        <Container sx={{ mt: 4 }}>
            <Typography sx={{ color: '#7C58D3', textAlign: 'center', fontWeight: 700 }}>
                OUR BLOG
            </Typography>
            <Typography sx={{ color: '#0B0417', fontSize: '1.7rem', textAlign: 'center', fontWeight: 700 }}>
                Latest Post
            </Typography>

            <Grid container spacing={2} sx={{ my: 3 }}>
                {
                    postData.map(post => (
                        <PostCard
                            key={post.id}
                            post={post}
                        />
                    ))
                }
            </Grid>
        </Container>
    );
};

export default OurBlogs;