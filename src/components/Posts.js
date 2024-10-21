import React from 'react';
import posts from '../assets/data/posts.json';
import { Box, VStack, Text, Image, SimpleGrid } from '@chakra-ui/react';
import { useScreenSize } from '../hooks/useScreenSize';

const Posts = () => {
    const screenSize = useScreenSize();
    const post = posts.slice(0, 6);

    const imageResize = () => {
        if (screenSize === 'extraLarge') {
            return '400px'
        } if (screenSize === 'large') {
            return '400px'
        } if (screenSize === 'medium'){
            return '350px'
        } if (screenSize === 'small'){
            return '300px'
        } if (screenSize === 'extraSmall'){
            return '250px'
        } if (screenSize === 'mobile'){
            return '250px'
        }
    }

    return (
        <Box w='100%' display='flex' justifyContent='center' alignItems='center' my={8} px={screenSize === 'mobile' ? 5 : 10}>
            <Box w='1580px'>
                <VStack>
                    <VStack>
                        <Text fontSize='40px' textTransform='capitalize' coolor='#1a202c' textAlign='center' fontWeight={800}>kabar terkini</Text>
                        <Text opacity={0.5}>cari tahu tentang kami</Text>
                    </VStack>
                    <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={2} py={10}>
                        {post.map((item, index) => (
                            <Box key={item} index={index} w={imageResize} h={imageResize} overflow='hidden'>
                                <Image src={item.img} objectFit='cover' w='100%' h='100%' />
                            </Box>
                        ))}
                    </SimpleGrid>
                </VStack>
            </Box>
        </Box>
    )
}

export default Posts;