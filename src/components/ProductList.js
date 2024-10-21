import React from 'react';
import { Box, VStack, Text, Flex, HStack, Grid } from '@chakra-ui/react';
import { useScreenSize } from '../hooks/useScreenSize';
import Sort from './Sort';
import SearchProduct from './SearchProduct';
import CategoryAccordion from './CategoryAccordion';
import ProductPlaceholder from './ProductPlaceholder';
import ProductData from '../assets/data/ProductData.json';

const ProductList = () => {
    const screenSize = useScreenSize();
    const products = ProductData.slice(7, 11);

    const templateColumns = () => {
        if (screenSize === 'extraLarge') {
            return 'repeat(3, 1fr)'
        } if (screenSize === 'large') {
            return 'repeat(3, 1fr)'
        } if (screenSize === 'medium') {
            return 'repeat(2, 1fr)'
        } if (screenSize === 'small') {
            return 'repeat(2, 1fr)'}
    }

    return (
        <Box w='100%' display='flex' justifyContent='center' alignItems='center' overflow='hidden' py={8} px={screenSize === 'extraLarge' ? 10 : 0}>
            <Box w='1580px'>
                { (screenSize !== 'extraLarge' && screenSize !== 'large') ? 
                    <Flex w='100%'>
                        <VStack w='100%'>
                            <SearchProduct />
                            <Box w='90%' py={8}>
                                <CategoryAccordion screenSize={screenSize} />
                            </Box>
                            { screenSize === 'mobile' ? 
                                <VStack w='90%' alignItems='flex-start'>
                                    <Box flex={1}>
                                        <Text fontSize={25} fontWeight={900}>
                                            All
                                        </Text>
                                        <Text>
                                            Showing result
                                        </Text>
                                    </Box>
                                    <Box pt={1}>
                                        <Sort />
                                    </Box>
                                </VStack> :
                                    <HStack w='90%'>
                                    <Box flex={1}>
                                        <Text fontSize={25} fontWeight={900}>
                                            All
                                        </Text>
                                        <Text>
                                            Showing result
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Sort />
                                    </Box>
                                </HStack>
                            }
                            <Box py={10} w='100%' display='flex' alignItems='center' justifyContent='center'>
                                <Grid
                                    templateColumns={templateColumns}
                                >
                                    {products.map((item) => (
                                        <ProductPlaceholder item={item} />
                                    ))}
                                </Grid>
                            </Box>
                        </VStack>
                    </Flex> :
                    <Flex w='100%' gap={10}>
                        <VStack flex={1}>
                            <VStack w='100%'>
                                <SearchProduct />
                                <Box py={8} w='90%'>
                                    <CategoryAccordion />
                                </Box>
                            </VStack>
                        </VStack>
                        <VStack flex={1} >
                            <HStack w='100%'>
                                <Box flex={1}>
                                    <Text fontSize={25} fontWeight={900}>
                                        All
                                    </Text>
                                    <Text>
                                        Showing result
                                    </Text>
                                </Box>
                                <Box flex={1}>
                                    <Sort />
                                </Box>
                            </HStack>
                            <Box py={10} w='100%'>
                                <Grid
                                    templateColumns='repeat(3, 1fr)'
                                >
                                    {products.map((item) => (
                                        <ProductPlaceholder item={item} />
                                    ))}
                                </Grid>
                            </Box>
                        </VStack>
                    </Flex>
                }
            </Box>
        </Box>
    )
}

export default ProductList;