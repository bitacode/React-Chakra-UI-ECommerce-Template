import React from 'react';
import { Box, InputGroup, Input, InputRightElement } from '@chakra-ui/react';
import { IoIosSearch } from 'react-icons/io';

const SearchProduct = () => {
    return (
        <Box display='flex' alignItems='center' justifyContent='flex-start' w='90%' h='52px' borderRadius='3xl' bgGradient='linear(to-bl, whitesmoke, whitesmoke, #cecece)'>
            <Box w='100%' display='flex' alignItems='center' justifyContent='center'>
                <InputGroup mx={1}>
                    <Input
                        w='100%'
                        h='40px'
                        mx={6}
                        autoFocus={false}
                        variant='unstyled'
                        placeholder='Cari...'
                        color='gray'
                        fontWeight={300}
                        _placeholder={{ opacity: 0.4, color:'black' }}
                    />
                    <InputRightElement w='50px'>
                        <Box display='flex' alignItems='center' justifyContent='center' bg='crimson' boxShadow='0px 4px 20px rgba(220, 20, 60, 0.6)' w='40px' h='40px' borderRadius='3xl' as='button' >
                            <IoIosSearch color='white' size='20px' />
                        </Box>
                    </InputRightElement>
                </InputGroup>
            </Box>
        </Box>
    )
}

export default SearchProduct;