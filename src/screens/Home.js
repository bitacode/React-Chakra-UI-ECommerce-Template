import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Services from '../components/Services';
import MainPromo from '../components/MainPromo';
import Products from '../components/Products';
import SecondaryPromo from '../components/SecondaryPromo';
import Posts from '../components/Posts';
import Brands from '../components/Brands';
import Misc from '../components/Misc';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <Box w='100%' h='100vh'>
            <VStack>
                <NavBar />
                <Hero />
                <Categories />
                <Services />
                <MainPromo />
                <Products />
                <SecondaryPromo />
                <Posts />
                <Brands />
                <Misc />
                <Footer />
            </VStack>
        </Box>
    )
}

export default Home;