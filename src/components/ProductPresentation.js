import React, { useState } from 'react';
import { Box, HStack, VStack, Image, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text, useColorMode } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useScreenSize } from '../hooks/useScreenSize';
import ProductData from '../assets/data/ProductData.json';
import DescriptionTabs from './DescriptionTabs';

const ImagePresentation = () => {
    const { id } = useParams();
    const { colorMode } = useColorMode();

    const [focus, setFocus] = useState(false);
    const [active, setActive] = useState(false);

    const product = ProductData[parseInt(id)]
    const borderColor = colorMode === 'dark' ? 'white' : '#1a202c';
    const hoverBg = colorMode === 'dark' ? 'white' : '#1a202c';
    const hoverColor = colorMode === 'dark' ? '#1a202c' : 'white';

    const screenSize = useScreenSize()

    const imagePlaceholderSize = () => {
        if (screenSize === 'extraLarge') {
            return '800px'
        } if (screenSize === 'large') {
            return '700px'
        } if (screenSize === 'medium') {
            return '650px'
        } if (screenSize === 'small') {
            return '800px'
        } if (screenSize === 'extraSmall') {
            return '700px'
        } if (screenSize === 'mobile') {
            return '65vw'
        }
    }

    const imageThumbnail = () => {
        if (screenSize === 'extraLarge') {
            return '180px'
        } if (screenSize === 'large') {
            return '180px'
        } if (screenSize === 'medium') {
            return '180px'
        } if (screenSize === 'small') {
            return '180px'
        } if (screenSize === 'extraSmall') {
            return '20vw'
        } if (screenSize === 'mobile') {
            return '20vw'
        } 
    }

    const Left = () => {
        if (screenSize === 'extraLarge') {
            return '-800px'
        } if (screenSize === 'large') {
            return '-700px'
        } if (screenSize === 'medium') {
            return '-650px'
        } if (screenSize === 'small') {
            return '-800px'
        } if (screenSize === 'extraSmall') {
            return '-700px'
        } if (screenSize === 'mobile') {
            return '-65vw'
        }
    }
    
    return (
        <Box w='100%' display='flex' justifyContent='center' alignItems='center' overflow='hidden' py={10} px={10}>
            <Box w='1580px'>
                { (screenSize !== 'small' && screenSize !== 'extraSmall' && screenSize !== 'mobile') ? 
                    <HStack alignItems='flex-start' gap={8}>
                        <Box flex={2}>
                            <Box w={imagePlaceholderSize} h={imagePlaceholderSize}  position='relative' display='flex' alignItems='center' justifyContent='flex-start' overflow='hidden'>
                                <Box position='absolute' left={!active ? 0 : Left} transition='left .3s ease-in-out'>
                                    <Image src={product.img} w={imagePlaceholderSize} h={imagePlaceholderSize} objectFit='contain' />
                                </Box>
                                <Box position='absolute' right={active ? 0 : Left} transition='right .3s ease-in-out'>
                                    <Image src={product.img2} w={imagePlaceholderSize} h={imagePlaceholderSize} objectFit='contain' />
                                </Box>
                            </Box>
                        </Box>
                        <Box flex={1}>
                            <Box>
                                <Text fontSize={45} fontWeight={800}>{product.item}</Text>
                                <Text fontSize={40} fontWeight={700}>{product.price}</Text>
                            </Box>
                            <Box display='flex' justifyContent='flex-start' alignItems='center' mt={10}>
                                <Box w='80px' h='45px' display='flex' alignItems='center' justifyItems='center' border={focus ? '2px' : '1px'} borderRadius='full' borderColor={borderColor} pr={1} mr={2}>
                                    <NumberInput allowMouseWheel defaultValue={1} min={1} focusBorderColor='transparent' onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}>
                                        <NumberInputField style={{ border: 'none' }} fontWeight={700} />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper style={{ border: 'none' }} />
                                            <NumberDecrementStepper style={{ border: 'none' }} />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </Box>
                                <Box bg='crimson' h='45px' w='180px' ml={2} borderRadius='full' color='white' _hover={{ bg: hoverBg, color: hoverColor }} transition='background-color 0.3s ease' as='button'>
                                    <Text fontWeight={300}>Add to cart</Text>
                                </Box>
                            </Box>
                            <Box display='flex' alignItems='center' justifyContent='flex-start' mt={10}>
                                <Text pr={1} fontWeight={300}>Category: </Text>
                                <Text color='crimson' textTransform='capitalize' fontWeight={300}>{product.category}</Text>
                            </Box>
                        </Box>
                    </HStack> : 
                    <VStack>
                        <Box w='100%' display='flex' alignItems='center' justifyContent='center'>
                            <Box w={imagePlaceholderSize} h={imagePlaceholderSize}  position='relative' display='flex' alignItems='center' justifyContent='flex-start' overflow='hidden'>
                                <Box position='absolute' left={!active ? 0 : Left} transition='left .3s ease-in-out'>
                                    <Image src={product.img} w={imagePlaceholderSize} h={imagePlaceholderSize} objectFit='contain' />
                                </Box>
                                <Box position='absolute' right={active ? 0 : Left} transition='right .3s ease-in-out'>
                                    <Image src={product.img2} w={imagePlaceholderSize} h={imagePlaceholderSize} objectFit='contain' />
                                </Box>
                            </Box>
                        </Box>
                        <Box w='100%'>
                            <HStack alignItems='flex-start' py='50px'>
                                <Box as='button' onClick={() => setActive(false)} opacity={active && .5} _hover={{ opacity: 1 }}>
                                    <Image src={product.img} w={imageThumbnail} h={imageThumbnail} />
                                </Box>
                                <Box as='button' onClick={() => setActive(true)} opacity={!active && .5} _hover={{ opacity: 1 }} >
                                    <Image src={product.img2} w={imageThumbnail} h={imageThumbnail} />
                                </Box>
                            </HStack>
                        </Box>
                        <Box w='100%'>
                            <Box>
                                <Text fontSize={45} fontWeight={800}>{product.item}</Text>
                                <Text fontSize={40} fontWeight={700}>{product.price}</Text>
                            </Box>
                            <Box display='flex' justifyContent='flex-start' alignItems='center' mt={12}>
                                <Box w='80px' h='45px' display='flex' alignItems='center' justifyItems='center' border={focus ? '2px' : '1px'} borderRadius='full' borderColor={borderColor} pr={1} mr={2}>
                                    <NumberInput defaultValue={1} min={1} focusBorderColor='transparent' onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}>
                                        <NumberInputField style={{ border: 'none' }} fontWeight={700} />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper style={{ border: 'none' }} />
                                            <NumberDecrementStepper style={{ border: 'none' }} />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </Box>
                                <Box bg='crimson' h='45px' w='180px' ml={2} borderRadius='full' color='white' _hover={{ bg: hoverBg, color: hoverColor }} transition='background-color 0.3s ease' as='button'>
                                    <Text fontWeight={300}>Add to cart</Text>
                                </Box>
                            </Box>
                            <Box display='flex' alignItems='center' justifyContent='flex-start' my={12}>
                                <Text pr={1} fontWeight={300}>Category: </Text>
                                <Text color='crimson' textTransform='capitalize' fontWeight={300}>{product.category}</Text>
                            </Box>
                        </Box>
                    </VStack>
                }
                { (screenSize !== 'small' && screenSize !== 'extraSmall' && screenSize !== 'mobile') && 
                    <HStack py='50px'>
                        <Box as='button' onClick={() => setActive(false)} opacity={active && .5} _hover={{ opacity: 1 }}>
                            <Image src={product.img} w={imageThumbnail} h={imageThumbnail} />
                        </Box>
                        <Box as='button' onClick={() => setActive(true)} opacity={!active && .5} _hover={{ opacity: 1 }} >
                            <Image src={product.img2} w={imageThumbnail} h={imageThumbnail} />
                        </Box>
                    </HStack>
                }
                <DescriptionTabs item={product.item} />
            </Box>
        </Box>
    )
}

export default ImagePresentation;;