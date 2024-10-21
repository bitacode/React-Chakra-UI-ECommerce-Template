import React from 'react';
import { Box, Grid, Text } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box w='100%' h='80px' bg='crimson' display='flex' alignItems='center' justifyContent='center' overflow='hidden'>
            <Box w='1580px'>
                <Grid
                    templateColumns='repeat(2, 1fr)'
                >
                    <Box display='flex' alignItems='center' justifyContent='flex-start'>
                        <Text fontWeight={200} color='white' opacity={0.5}>
                            © 2024 bitacode. All rights reserved.
                        </Text>
                    </Box>
                    <Box display='flex' alignItems='center' justifyContent='flex-end'>
                        <Text fontWeight={200} color='white' opacity={0.5}>
                            Privacy Policy . Term Condition
                        </Text>
                    </Box>
                    
                </Grid>
                
            </Box>
        </Box>
    )
}

export default Footer;