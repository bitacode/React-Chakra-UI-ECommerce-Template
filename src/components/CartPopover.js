import React, { useRef } from 'react';
import { Popover, PopoverBody, PopoverContent, PopoverTrigger, VStack, Text } from '@chakra-ui/react';
import {BiCartAlt} from 'react-icons/bi';

const CartPopOver = ({ children }) => {
    const initialFocusRef = useRef();

    return (
        <Popover
            trigger='hover'
            initialFocusRef={initialFocusRef}
            openDelay={100}
            closeDelay={100}
            autoFocus={false}
            offset={[-130, 10]}
        >
            <PopoverTrigger>
                {children}
            </PopoverTrigger>
            <PopoverContent rounded='2xl' border='0px 0px'>
                <PopoverBody px={100} py={10} shadow='lg' rounded='2xl' >
                    <VStack>
                        <BiCartAlt size='60px' opacity='20%' />
                        <Text color='gray.300' as='b' fontSize='14px' >CART IS EMPTY</Text>
                    </VStack>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

export default CartPopOver;