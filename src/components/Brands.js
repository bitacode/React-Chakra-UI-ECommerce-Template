import React, { useState, useEffect, useCallback } from 'react';
import { Box, Flex, Image, VStack, useColorMode } from '@chakra-ui/react';
import { useScreenSize } from '../hooks/useScreenSize';

const Brands = () => {
    const screenSize = useScreenSize();
    const { colorMode } = useColorMode();

    const backGround = colorMode === 'dark' ? '#202a38' : '#ebebeb'
    const filter = colorMode === 'dark' ? 'invert(100%)' : 'invert(0)'

    const imageResize = () => {
        if (screenSize === 'extraLarge') {
            return '130px'
        } if (screenSize === 'large') {
            return '130px'
        } if (screenSize === 'medium') {
            return '130px'
        } if (screenSize === 'small') {
            return '110px'
        } if (screenSize === 'extraSmall') {
            return '110px'
        }
    }

    const brandWidth = useCallback(() => {
        if (screenSize === 'extraLarge') {
          return '1580px';
        } else {
          return window.innerWidth - 85;
        }
      }, [screenSize]);

    const [brand, setBrand] = useState(brandWidth());

    useEffect(() => {
        const handleResize = () => {
            setBrand(brandWidth());
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [brandWidth]);

    return (
        <Box bg={backGround} width='100%' display='flex' justifyContent='center' alignItems='center' h={screenSize !== 'mobile' ? '230px' : '750px'} overflow='hidden' my={8}>
            <Box w={brand}>
                { screenSize !== 'mobile' ? 
                    <Flex alignItems='center' justifyContent='center'>
                        <Box w='280px' display='flex' alignItems='center' justifyContent='center'><Image src='/brands/apple.png' filter='invert(80%)' _hover={{ filter: filter }} transition='filter .3s ease' w={imageResize} /></Box>
                        <Box w='280px' display='flex' alignItems='center' justifyContent='center'><Image src='/brands/asus.png' filter='invert(80%)' _hover={{ filter: filter }} transition='filter .3s ease' w={imageResize} /></Box>
                        <Box w='280px' display='flex' alignItems='center' justifyContent='center'><Image src='/brands/intel.png' filter='invert(80%)' _hover={{ filter: filter }} transition='filter .3s ease' w={imageResize} /></Box>
                        <Box w='280px' display='flex' alignItems='center' justifyContent='center'><Image src='/brands/samsung-2.png' filter='invert(80%)' _hover={{ filter: filter }} transition='filter .3s ease' w={imageResize} /></Box>
                        <Box w='280px' display='flex' alignItems='center' justifyContent='center'><Image src='/brands/sony.png' filter='invert(80%)' _hover={{ filter: filter }} transition='filter .3s ease' w={imageResize} /></Box>
                    </Flex> :
                    <VStack>
                        <Box w='280px' display='flex' alignItems='center' justifyContent='center'><Image src='/brands/apple.png' filter='invert(80%)' _hover={{ filter: filter }} transition='filter .3s ease' w='120px' objectFit='contain' h='130px' /></Box>
                        <Box w='280px' display='flex' alignItems='center' justifyContent='center'><Image src='/brands/asus.png' filter='invert(80%)' _hover={{ filter: filter }} transition='filter .3s ease' w='120px' objectFit='contain' h='130px' /></Box>
                        <Box w='280px' display='flex' alignItems='center' justifyContent='center'><Image src='/brands/intel.png' filter='invert(80%)' _hover={{ filter: filter }} transition='filter .3s ease' w='120px' objectFit='contain' h='130px' /></Box>
                        <Box w='280px' display='flex' alignItems='center' justifyContent='center'><Image src='/brands/samsung-2.png' filter='invert(80%)' _hover={{ filter: filter }} transition='filter .3s ease' w='120px' objectFit='contain' h='130px' /></Box>
                        <Box w='280px' display='flex' alignItems='center' justifyContent='center'><Image src='/brands/sony.png' filter='invert(80%)' _hover={{ filter: filter }} transition='filter .3s ease' w='120px' objectFit='contain' h='130px' /></Box>
                    </VStack>
                }
            </Box>
        </Box>
    )
}


export default Brands;