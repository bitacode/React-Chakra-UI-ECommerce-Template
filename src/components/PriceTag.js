import React, { useState } from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

const PriceTag = ({price, item, screenSize}) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <Box mt={5} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            { screenSize === 'mobile' ? 
                <VStack>
                    <Text transition='color 0.3s ease' color={isHover && 'crimson'} fontWeight={isHover && 600} >{item}</Text>
                    <Box position='relative'>
                        <Box h='35px' alignItems='center' display='flex' opacity={isHover ? 0: 1} transition='opacity 0.3s ease-in-out' >
                            <Text fontSize='20px' fontWeight={600} >{price}</Text>
                        </Box>
                        <Box display='flex' position='absolute' top={0}>
                            <Box
                                bg='crimson' h='35px' w='120px' borderRadius='full' color='white' opacity={isHover ? 1 : 0} transition='opacity 0.3s ease-in-out' as='button'>
                                <Text textTransform='capitalize' fontSize='14px' fontWeight={300}>add to cart</Text>
                            </Box>
                        </Box>
                    </Box>
                </VStack> :
                <>
                    <Text transition='color 0.3s ease' color={isHover && 'crimson'} fontWeight={isHover && 600} >{item}</Text>
                    <Box position='relative'>
                        <Box h='35px' alignItems='center' display='flex' opacity={isHover ? 0: 1} transition='opacity 0.3s ease-in-out' >
                            <Text fontSize='20px' fontWeight={600} >{price}</Text>
                        </Box>
                        <Box display='flex' position='absolute' top={0}>
                            <Box
                                bg='crimson' h='35px' w='120px' borderRadius='full' color='white' opacity={isHover ? 1 : 0} transition='opacity 0.3s ease-in-out' as='button'>
                                <Text textTransform='capitalize' fontSize='14px' fontWeight={300}>add to cart</Text>
                            </Box>
                        </Box>
                    </Box>
                </>
            }
        </Box>
    )
}

export default PriceTag;