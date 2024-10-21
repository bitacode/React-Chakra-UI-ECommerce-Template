import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import Misc from '../components/Misc';
import Footer from '../components/Footer';
import ProductPresentation from '../components/ProductPresentation';
import Brands from '../components/Brands';

const Description = () => {

    return (
        <Box w='100%' h='100vh'>
            <VStack>
                <NavBar />
                <ProductPresentation />
                <Brands />
                <Misc />
                <Footer />
            </VStack>
        </Box>
    )
}

export default Description;