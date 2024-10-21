import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import Brands from '../components/Brands';
import Misc from '../components/Misc';
import Footer from '../components/Footer';
import BillingDetails from '../components/BillingDetails';

const Checkout = () => {
    return (
        <Box w='100%' h='100vh'>
            <VStack>
                <NavBar />
                <BillingDetails />
                <Brands />
                <Misc />
                <Footer />
            </VStack>
        </Box>
    )
}

export default Checkout;