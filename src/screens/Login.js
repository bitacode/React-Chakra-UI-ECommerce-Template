import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import Account from '../components/Account';
import Brands from '../components/Brands';
import Misc from '../components/Misc';
import Footer from '../components/Footer';

const Login = () => {
    return(
        <Box w='100%' h='100vh'>
            <VStack>
                <NavBar />
                <Account />
                <Brands />
                <Misc />
                <Footer />
            </VStack>
        </Box>
    )
}

export default Login;