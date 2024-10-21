import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import TableCart from '../components/TableCart';
import Brands from '../components/Brands';
import Misc from '../components/Misc';
import Footer from '../components/Footer';

const Cart = () => {
    return (
        <Box w='100%' h='100vh'>
            <VStack>
                <NavBar />
                <TableCart />
                <Brands />
                <Misc />
                <Footer />
            </VStack>
        </Box>
    )
}

export default Cart;