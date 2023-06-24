import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Numbers from './Components/Numbers';
import OurServices from './Components/OurServices';
import Banner from './Components/Banner';
import Products from './Components/Products';
import NewsLetter from './Components/NewsLetter';
import OurBlogs from './Components/OurBlogs';
import Contact from './Components/Contact';
import OtherPost from './Components/OtherPost';
import Footer from './Components/Footer';

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Numbers />
            <OurServices />
            <Banner />
            <Products />
            <NewsLetter/>
            <OurBlogs/>
            <Contact/>
            <OtherPost/>
            <Footer/>
        </div>
    );
};

export default Homepage;