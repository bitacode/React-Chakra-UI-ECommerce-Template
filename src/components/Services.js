import React from 'react';
import ServicesData from '../assets/data/ServicesData.json';
import { Box, Grid, HStack, Image, Text, VStack, useColorMode } from '@chakra-ui/react';
import { useScreenSize } from '../hooks/useScreenSize';

const Services = () => {
    const screenSize = useScreenSize();
    const { colorMode } = useColorMode();

    const sloganFontSize = () => {
        if (screenSize === 'extraLarge') {
            return '16px'
        } if (screenSize === 'large') {
            return '16px'
        } if (screenSize === 'medium') {
            return '16px'
        } if (screenSize === 'small') {
            return '16px'
        } if (screenSize === 'extraSmall') {
            return '14px'
        }
    }

    const templateColumns = () => {
        if (screenSize === 'extraLarge') {
            return 'repeat(4, 1fr)'
        } if (screenSize === 'large') {
            return 'repeat(4, 1fr)'
        } if (screenSize === 'medium') {
            return 'repeat(4, 1fr)'
        } if (screenSize === 'small') {
            return 'repeat(4, 1fr)'
        } if (screenSize === 'extraSmall') {
            return 'repeat(4, 1fr)'
        } if (screenSize === 'mobile') {
            return 'repeat(2, 1fr)'
        }
    }

    return (
        <Box width='100%' my={8} px={screenSize === 'mobile' ? 5 : 10} display='flex' alignItems='center' justifyContent='center'>
            <Box w='1580px'>
                <Grid
                    templateColumns={templateColumns}
                    gap={8}
                >
                    {ServicesData.map((item) => (
                        <Box key={item}>
                            { screenSize === 'extraLarge' ? 
                                <HStack>
                                    <Box px={8}>
                                        <Image src={colorMode === 'dark' ? item.img2 : item.img1} />
                                    </Box>
                                    
                                    <Box>
                                        <Text fontWeight='bold' textTransform='capitalize' >{item.title}</Text>
                                        <Text textTransform='capitalize' fontSize={sloganFontSize} fontWeight={300} opacity={0.5}>{item.slogan}</Text>
                                    </Box>
                                </HStack>
                                : screenSize === 'large' ? 
                                <HStack>
                                    <Box px={8}>
                                        <Image src={colorMode === 'dark' ? item.img2 : item.img1} />
                                    </Box>
                                    
                                    <Box>
                                        <Text fontWeight='bold' textTransform='capitalize' >{item.title}</Text>
                                        <Text textTransform='capitalize' fontWeight={300} opacity={0.5}>{item.slogan}</Text>
                                    </Box>
                                </HStack> : 
                                <VStack>
                                    <Box px={8} h='60px'>
                                        <Image src={colorMode === 'dark' ? item.img2 : item.img1} />
                                    </Box>
                                    <Box>
                                        <Text fontWeight='bold' textTransform='capitalize' >{item.title}</Text>
                                        <Text textTransform='capitalize' fontSize={sloganFontSize} fontWeight={300} opacity={0.5}>{item.slogan}</Text>
                                    </Box>
                                </VStack>
                            }
                        </Box>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

export default Services;