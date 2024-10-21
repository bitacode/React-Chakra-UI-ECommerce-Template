import React from 'react';
import PriceTag from './PriceTag';
import ProductData from '../assets/data/ProductData.json';
import { Box, Grid, Image, Text, VStack } from '@chakra-ui/react';
import { useScreenSize } from '../hooks/useScreenSize';

const Products = () => {
    const screenSize = useScreenSize();
    const products = ProductData.slice(7, 11);

    const templateColumns = () => {
        if (screenSize === 'extraLarge') {
            return 'repeat(4, 1fr)'
        } if (screenSize === 'large') {
            return 'repeat(3, 1fr)'
        } if (screenSize === 'medium') {
            return 'repeat(2, 1fr)'
        } if (screenSize === 'small') {
            return 'repeat(2, 1fr)'}
    }

    return (
        <Box w='100%' display='flex' justifyContent='center' alignItems='center' overflow='hidden' my={8} px={screenSize === 'mobile' ? 5 : 10}>
            <Box w='1580px'>
                <VStack>
                    <VStack>
                        <Text fontSize='40px' textTransform='capitalize' coolor='#1a202c' textAlign='center' fontWeight={800}>produk terbaru</Text>
                        <Text opacity={0.5}>paling banyak dicari</Text>
                    </VStack>
                    <Grid
                        templateColumns={templateColumns}
                        gap={8}
                        py={20}
                    >
                        {products.map((product, index) => (
                            <Box w='350px' product={product} index={index} mb={screenSize !== 'extraLarge' && 10}>
                                <Box display='flex' alignItems='center' justifyContent='center'>
                                    <Image src={product.img} w='250px' />
                                </Box>
                                <PriceTag item={product.item} price={product.price} screenSize={screenSize} />
                            </Box>
                        ))}
                    </Grid>
                </VStack>
            </Box>
        </Box>
    )
}

export default Products;