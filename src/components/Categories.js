import React, { useCallback, useEffect, useState } from 'react';
import ProductData from '../assets/data/ProductData.json';
import { Box, Grid, Text, Image, VStack } from '@chakra-ui/react';
import { useScreenSize } from '../hooks/useScreenSize';

const Categories = () => {
    const screenSize = useScreenSize();
    const categories = ProductData.slice(0, 6);

    const imageResize = () => {
        if (screenSize === 'extraLarge') {
            return '250px'
        } if (screenSize === 'large') {
            return '250px'
        } if (screenSize === 'medium'){
            return '200px'
        } if (screenSize === 'small'){
            return '230px'
        } if (screenSize === 'extraSmall'){
            return '230px'
        } if (screenSize === 'mobile'){
            return '230px'
        }
    }

    const imagePosition = () => {
        if (screenSize === 'extraLarge') {
            return 25
        } if (screenSize === 'large') {
            return 25
        } if (screenSize === 'medium'){
            return 50
        } if (screenSize === 'small'){
            return 35
        } if (screenSize === 'extraSmall'){
            return 35
        }
    }

    const templateRows = useCallback(() => {
        if (screenSize === 'extraLarge') {
            return 'repeat(2, 1fr)'
        } if (screenSize === 'large') {
            return 'repeat(2, 1fr)'
        } if (screenSize === 'medium'){
            return 'repeat(2, 1fr)'
        } if (screenSize === 'small') {
            return 'repeat(3, 1fr)'
        } if (screenSize === 'extraSmall') {
            return 'repeat(3, 1fr)'
        } else {
            return 'repeat(1fr)'
        }
    },[screenSize])

    const templateColumns = useCallback(() => {
        if (screenSize === 'extraLarge') {
            return 'repeat(3, 1fr)'
        } if (screenSize === 'large') {
            return 'repeat(3, 1fr)'
        } if (screenSize === 'medium'){
            return 'repeat(3, 1fr)'
        } if (screenSize === 'small') {
            return 'repeat(2, 1fr)'
        } if (screenSize === 'extraSmall') {
            return 'repeat(2, 1fr)'
        } else {
            return 'repeat(6)'
        }
    },[screenSize])

    const [rows, setRows] = useState(templateRows());
    const [columns, setColumns] = useState(templateColumns());

    useEffect(() => {
        const handleResize = () => {
            setRows(templateRows());
            setColumns(templateColumns());
        }
        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, [templateRows, templateColumns]);

    return (
        <Box my={8} px={screenSize === 'mobile' ? 5 : 10} w='100%' display='flex' alignItems='center' justifyContent='center' overflow='hidden'>
            <Box w='1580px'>
                <Grid
                    templateRows={rows}
                    templateColumns={columns}
                    gap={8}
                >
                    {categories.map((item, index) => (
                        <Box
                            key={item}
                            index={index} 
                            bgGradient={index === 0 ? 'linear(to-br, #1a202c, black)' : index === 1 ? 'linear(to-br, gold, goldenrod)' : index === 2 ? 'linear(to-br, crimson, firebrick)' : index === 3 ? 'linear(to-br, whitesmoke, lightgray, lightgray)' : index === 4 ? 'linear(to-br, springgreen, mediumseagreen)' : 'linear(to-br, dodgerblue, royalblue)'}
                            borderRadius='3xl'
                            h='300px'
                        >
                            <Box position='relative' mx='25px' h='300px' display='flex' alignItems='center'>
                                <VStack align='stretch'>
                                    <Box>
                                        <Text color='white' fontWeight='bold' fontSize='30px' textTransform='capitalize'>{item.item}</Text>
                                        <Text color='white' fontSize='30px' textTransform='uppercase' fontWeight={900} opacity={index === 3 ? 0.5 : 0.3} style={{ letterSpacing: '-0.05em' }}>{item.category}</Text>
                                    </Box>
                                    <Box display='flex' zIndex={1}>
                                        <Box
                                            bg={index === 0 ? 'crimson' : index === 3 ? 'crimson' : 'white'}
                                            color={index === 1 ? 'goldenrod' : index === 2 ? 'crimson' : index === 4 ? 'mediumseagreen' : index === 5 ? 'royalblue' : 'white'}
                                            h='42px'
                                            w='130px'
                                            borderRadius='full'
                                            _hover={{ bg: index === 0 ? 'white' : '#1a202c', color: index === 0 ? '#1a202c' : 'white' }}
                                            transition='background-color 0.3s ease'
                                            as='button'
                                        >
                                            <Text fontWeight={300}>Browse</Text>
                                        </Box>
                                    </Box>
                                </VStack>
                                <Box position='absolute' top={imagePosition} right={0}>
                                    <Image src={item.img} w={imageResize} />
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

export default Categories;