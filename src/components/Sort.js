import React from 'react';
import { Box, Select } from '@chakra-ui/react';
import { css } from '@emotion/react';

const selectStyle = css`
  option {
    background-color: black;
    color: white;
  }
`;

const Sort = () => {
    return(
        <Box w='100%' h='100%' display='flex' alignItems='center' justifyContent='flex-end' >
            <Box>
                <Select placeholder='Default sorting' bg='black' borderRadius='full' color='white' h='50px' border='none' focusBorderColor='transparent' css={selectStyle} >
                    <option  value='option2'>Sort by popularity</option>
                    <option value='option2'>Sort by average rating</option>
                    <option value='option2'>Sort by latest</option>
                    <option value='option2'>Sort by price:low-high</option>
                    <option value='option2'>Sort by price:high-low</option>
                </Select>
            </Box>
        </Box>
    )
}

export default Sort;