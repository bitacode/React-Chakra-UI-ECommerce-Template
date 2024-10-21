import React, { useState } from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ProductPlaceholder = ({ item }) => {
    const [hover, setHover] = useState(false);

    const navigate = useNavigate();

    return(
        <Box key={item} pb={5}>
            <Box h='350px' w='350px' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <Box display='flex' alignItems='center' justifyContent='center'>
                    <Box as='button' onClick={() => navigate(`/description/${item.id}`)}>
                        <Image src={item.img} w='250px' />
                    </Box>
                </Box>
                <Box mt={5}>
                    <Box as='button' fontWeight={hover && 'bold'} transition='font-weight .3s ease' onClick={() => navigate(`/description/${item.id}`)}>
                        <Text color={hover && 'crimson'} transition='color .3s ease'>{item.item}</Text>
                    </Box>
                    <Box position='relative' display='flex' alignItems='center' justifyContent='center' overflow='hidden' pt={12}>
                        <Box position='absolute' top={1} left={hover ? 0 : -40} transition='left .5s ease-in-out'>
                            <Box as='button' display='flex' alignItems='center' justifyContent='center' bg='crimson' w='130px' h='40px' borderRadius='full'>
                                <Text color='white' fontWeight={200}>Add To Cart</Text>
                            </Box>
                        </Box>
                        <Box position='absolute' top={3} left={hover ? 145 : 0} transition='left .5s ease-in-out'>
                            <Text fontSize={18} fontWeight='bold'>{item.price}</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ProductPlaceholder;