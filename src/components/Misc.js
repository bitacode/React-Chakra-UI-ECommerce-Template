import React from 'react';
import { Box, Grid, Image, Input, InputGroup, InputRightElement, Stack, Text } from '@chakra-ui/react';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { useScreenSize } from '../hooks/useScreenSize';

const Misc = () => {
    const screenSize = useScreenSize();

    const sloganFontSize = () => {
        if (screenSize === 'extraLarge') {
            return '16px'
        } if (screenSize === 'large') {
            return '16px'
        } if (screenSize === 'medium') {
            return '14px'
        } if (screenSize === 'small') {
            return '14px'
        } if (screenSize === 'extraSmall') {
            return '14px'
        } if (screenSize === 'mobile') {
            return '14px'
        }
    }

    const templateColumns = () => {
        if (screenSize === 'extraLarge') {
            return '1fr 1fr 1fr 2fr'
        } if (screenSize === 'large') {
            return '1fr 1fr 1fr 2fr'
        } if (screenSize === 'medium') {
            return '1fr 1fr 1fr 2fr'
        } if (screenSize === 'small') {
            return '1fr 1fr 1fr 2fr'
        } if (screenSize === 'extraSmall') {
            return 'repeat(2, 1fr)'
        } if (screenSize === 'mobile') {
            return 'repeat(1, 4fr)'
        }
    }

    const marginY = () => {
        if (screenSize === 'extraLarge') {
            return 8
        } if (screenSize === 'large') {
            return 8
        } if (screenSize === 'medium') {
            return 8
        } if (screenSize === 'small') {
            return 8
        } if (screenSize === 'extraSmall') {
            return 20
        } if (screenSize === 'mobile') {
            return 20
        }
    }

    return (
        <Box w='100%' h={screenSize === 'mobile' ? '600px' : '300px'} display='flex' justifyContent='center' alignItems='center' my={marginY} px={screenSize === 'mobile' ? 5 : 10}>
            <Box w='1580px'>
                <Grid
                    templateColumns={templateColumns}
                    gap={8}
                >
                    <Box>
                        <Box mb='50px'>
                            <Image
                                src='/logo.png' w={50}
                            />
                        </Box>
                        <Box my='50px'>
                            <Text opacity={0.5} fontSize={sloganFontSize}>
                                Belanja murah dan terpercaya
                            </Text>
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='flex-start' >
                            <Box mr={8} opacity={0.5} _hover={{ opacity: 1 }} transition='opacity .3s ease' as='button'>
                                <FaInstagram />
                            </Box>
                            <Box mr={8} opacity={0.5} _hover={{ opacity: 1 }} transition='opacity .3s ease' as='button'>
                                <FaFacebookF />
                            </Box>
                            <Box mr={8} opacity={0.5} _hover={{ opacity: 1 }} transition='opacity .3s ease' as='button'>
                                <FaYoutube />
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Box fontWeight={700} mb={8}>
                            <Text>Quick Links</Text>
                        </Box>
                        <Stack alignItems='flex-start'>
                            <Box _hover={{ color: 'crimson' }} transition='color .3s ease' as='button'>
                                <Text textTransform='capitalize' fontWeight={300}>Home</Text>
                            </Box>
                            <Box _hover={{ color: 'crimson' }} transition='color .3s ease' as='button'>
                                <Text textTransform='capitalize' fontWeight={300}>About</Text>
                            </Box>
                            <Box _hover={{ color: 'crimson' }} transition='color .3s ease' as='button'>
                                <Text textTransform='capitalize' fontWeight={300}>Shop</Text>
                            </Box>
                        </Stack>
                    </Box>
                    <Box>
                        <Box fontWeight={700} mb={8}>
                            <Text>Contact</Text>
                        </Box>
                        <Text textTransform='capitalize' fontWeight={300}>mahadewa computer</Text>
                    </Box>
                    <Box>
                        <Box mb={5}>
                            <Text textTransform='capitalize' fontSize='18px' fontWeight={700}>
                                subscribe ke email kami
                            </Text>
                        </Box>
                        <Box mb={5}>
                            <Text textTransform='capitalize' fontSize='26px' fontWeight={900}>untuk update terbaru</Text>
                        </Box>
                        <Box>
                            <Box display='flex' alignItems='center' justifyContent='flex-start' w='100%' h='58px' borderRadius='3xl' bgGradient='linear(to-br, whitesmoke, #cecece)'>
                                <Box w='100%' display='flex' alignItems='center' justifyContent='center'>
                                    <InputGroup size='lg' mx={1.5}>
                                        <Input
                                            w='100%'
                                            h='48px'
                                            mx={6}
                                            autoFocus={false}
                                            variant='unstyled'
                                            placeholder='Email Anda'
                                            color='gray'
                                            fontWeight={300}
                                            _placeholder={{ opacity: 0.4, color:'black' }}
                                        />
                                        <InputRightElement w='150px'>
                                            <Box display='flex' alignItems='center' justifyContent='center' bg='crimson' boxShadow='0px 4px 20px rgba(220, 20, 60, 0.6)' w='150px' h='45px' borderRadius='3xl' as='button' _hover={{ bg: '#1a202c', boxShadow:'0px 4px 20px rgba(26, 32, 44, 0.6)' }} transition='background-color .3s ease'>
                                                <Text color='white' fontSize='14px' fontWeight={300}>
                                                    Subscribe
                                                </Text>
                                            </Box>
                                        </InputRightElement>
                                    </InputGroup>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Box>
        </Box>
    )
}

export default Misc;