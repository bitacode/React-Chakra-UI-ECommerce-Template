import React from 'react';
import { Box, Flex, Text, Image, Spacer, Grid, VStack } from '@chakra-ui/react';
import { useScreenSize } from '../hooks/useScreenSize';

const MainPromo = () => {
    const screenSize = useScreenSize();

    const imagePosition = () => {
        if (screenSize === 'extraLarge') {
            return 400
        } if (screenSize === 'large') {
            return 400
        } if (screenSize === 'medium') {
            return 250
        } if (screenSize === 'small') {
            return 200
        }
    }

    const imageResize = () => {
        if (screenSize === 'extraLarge') {
            return '400px'
        } if (screenSize === 'large') {
            return '400px'
        } if (screenSize === 'medium') {
            return '400px'
        } if (screenSize === 'small') {
            return '320px'
        } if (screenSize === 'extraSmall') {
            return '320px'
        } if (screenSize === 'mobile') {
            return '38vw'
        }
    }

    const containerHeight = () => {
        if (screenSize === 'extraLarge') {
            return '520px'
        } if (screenSize === 'large') {
            return '520px'
        } if (screenSize === 'medium') {
            return '520px'
        } if (screenSize === 'small') {
            return '440px'
        } if (screenSize === 'extraSmall') {
            return '880px'
        } if (screenSize === 'mobile') {
            return '890px'
        }
    }

    const containerBottom = () => {
        if (screenSize === 'extraLarge') {
            return 10
        } if (screenSize === 'large') {
            return 10
        } if (screenSize === 'medium') {
            return 10
        } if (screenSize === 'small') {
            return 10
        } if (screenSize === 'extraSmall') {
            return 'unset'
        } if (screenSize === 'mobile') {
            return 'unset'
        }
    }

    const containerTop = () => {
        if (screenSize === 'extraLarge') {
            return 'unset'
        } if (screenSize === 'large') {
            return 'unset'
        } if (screenSize === 'medium') {
            return 'unset'
        } if (screenSize === 'small') {
            return 'unset'
        } if (screenSize === 'extraSmall') {
            return 260
        } if (screenSize === 'mobile') {
            return 260
        }
    }

    const promoHeight = () => {
        if (screenSize === 'extraLarge') {
            return '380px'
        } if (screenSize === 'large') {
            return '380px'
        } if (screenSize === 'medium') {
            return '380px'
        } if (screenSize === 'small') {
            return '300px'
        } if (screenSize === 'extraSmall') {
            return '580px'
        } if (screenSize === 'mobile') {
            return '580px'
        }
    }

    const maxW = () => {
        if (screenSize === 'extraLarge') {
            return '200px'
        } if (screenSize === 'large') {
            return '200px'
        } if (screenSize === 'medium') {
            return '190px'
        } if (screenSize === 'small') {
            return '190px'
        }
    }

    const lineHeight = () => {
        if (screenSize === 'extraLarge') {
            return 2
        } if (screenSize === 'large') {
            return 2
        } if (screenSize === 'medium') {
            return 2
        } if (screenSize === 'small') {
            return 'unset'
        } if (screenSize === 'extraSmall') {
            return '.98'
        } if (screenSize === 'mobile') {
            return '.98'
        }
    }

    const mainFontSize = () => {
        if (screenSize === 'extraLarge') {
            return '120px'
        } if (screenSize === 'large') {
            return '120px'
        } if (screenSize === 'medium') {
            return '100px'
        } if (screenSize === 'small') {
            return '100px'
        } if (screenSize === 'extraSmall') {
            return '55px'
        } if (screenSize === 'mobile') {
            return '55px'
        }
    }

    const descFontSize = () => {
        if (screenSize === 'extraLarge') {
            return '16px'
        } if (screenSize === 'large') {
            return '16px'
        } if (screenSize === 'medium') {
            return '16px'
        } if (screenSize === 'small') {
            return '14px'
        }
    }

    return (
        <Box w='100%' my={8} px={screenSize === 'mobile' ? 5 : 10} display='flex' alignItems='center' justifyContent='center' overflow='hidden'>
            <Box w='1580px'>
                <Box position='relative'>

                    <Box h={containerHeight} display='flex' alignItems='flex-end'>
                        <Box position='absolute' bottom={containerBottom} top={containerTop} h={promoHeight} w='100%' display='flex' alignItems='center' justifyContent='center' bgGradient='linear(to-br, #f42c37, firebrick)' px={screenSize !== 'extraLarge' && 20} _hover={{ boxShadow:'0px 4px 30px rgba(244, 44, 55, 0.6)' }} transition='box-shadow 0.3s ease' borderRadius='3xl'>
                            { (screenSize !== 'extraSmall' && screenSize !== 'mobile') ? 
                            <Flex w='100%' alignItems='center' justifyContent='center' gap={8}>
                                <Box w='50%' display='flex' alignItems='center' justifyContent={screenSize === 'extraLarge' ? 'center' : 'flex-start'}>
                                    <Box>
                                        <Text color='white' fontWeight={300} style={{ letterSpacing: '0.1em' }} >diskon 20%</Text>
                                        <Text color='white' textTransform='uppercase' fontSize={mainFontSize} whiteSpace='pre-line' lineHeight='.7' maxW={maxW} style={{ letterSpacing: '-0.1em', overflowWrap: 'break-word' }} fontWeight={900}>
                                            12/12
                                        </Text>
                                        <Text color='white' fontWeight={300} style={{ letterSpacing: '0.1em' }} >12 des - 31 des</Text>
                                    </Box>
                                </Box>
                                <Spacer />
                                <Box w='50%' display='flex' alignItems='center' justifyContent='center'>
                                    <Box>
                                        <Text color='white' textTransform='capitalize' fontSize='18px' fontWeight={600}>mahadewa</Text>
                                        <Text color='white' textTransform='capitalize' fontSize='40px' lineHeight={lineHeight} fontWeight={900}>
                                            12/12 sale
                                        </Text>
                                        <Text w='300px' color='white' whiteSpace='pre-line' fontWeight={300} fontSize={descFontSize}>
                                            ayo dapatkan produk ini dengan potongan harga spesial khusus hari ini!
                                        </Text>
                                        <Box display='flex' mt={8}>
                                            <Box
                                                bg='white' h='42px' w='120px' borderRadius='full' color='#f42c37' _hover={{ bg: '#1a202c', color: 'white' }} transition='background-color 0.3s ease' as='button'>
                                                <Text fontWeight={300}>Shop</Text>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Flex> :
                            <Grid
                                templateColumns='repeat(1, 3fr)'
                                gap={10}
                            >
                                <Box display='flex' alignItems='center' justifyContent='center'>
                                    <Box position='absolute' bottom={500} >
                                        <Image src='products/headset.png' w={imageResize} />
                                    </Box>
                                </Box>
                                <VStack>
                                    <Text color='white' fontWeight={300} style={{ letterSpacing: '0.1em' }} pb={3} >diskon 20%</Text>
                                    <Text color='white' textTransform='uppercase' fontSize={mainFontSize} whiteSpace='pre-line' lineHeight='.7' style={{ letterSpacing: '-0.1em', overflowWrap: 'break-word' }} fontWeight={900}>
                                        12/12
                                    </Text>
                                    <Text color='white' fontWeight={300} style={{ letterSpacing: '0.1em' }} pt={3} >12 des - 31 des</Text>
                                </VStack>
                                <VStack>
                                    <Text color='white' textTransform='capitalize' fontSize='16px' fontWeight={600}>mahadewa</Text>
                                    <Text color='white' textTransform='capitalize' fontSize='35px' textAlign='center' lineHeight={lineHeight} fontWeight={900}>
                                        12/12 sale
                                    </Text>
                                    <Text maxW='350px' color='white' whiteSpace='pre-line' textAlign='center' fontWeight={300} fontSize={descFontSize}>
                                        ayo dapatkan produk ini dengan potongan harga spesial khusus hari ini!
                                    </Text>
                                    <Box display='flex' mt={8}>
                                        <Box
                                            bg='white' h='42px' w='120px' borderRadius='full' color='#f42c37' _hover={{ bg: '#1a202c', color: 'white' }} transition='background-color 0.3s ease' as='button'>
                                            <Text fontWeight={300}>Shop</Text>
                                        </Box>
                                    </Box>
                                </VStack>
                            </Grid>
                            }
                            { (screenSize !== 'extraSmall' && screenSize !== 'mobile') && 
                                <Box position='absolute' bottom={20} left={imagePosition}>
                                    <Image src='products/headset.png' w={imageResize} />
                                </Box>
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default MainPromo;