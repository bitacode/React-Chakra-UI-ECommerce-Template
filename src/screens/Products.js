import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import ProductList from '../components/ProductList';
import Misc from '../components/Misc';
import Footer from '../components/Footer';
import Brands from '../components/Brands';

const Products = () => {
    return(
        <Box w='100%' h='100vh'>
            <VStack>
                <NavBar />
                <ProductList />
                <Brands />
                <Misc />
                <Footer />
            </VStack>
        </Box>
    )
}

export default Products;