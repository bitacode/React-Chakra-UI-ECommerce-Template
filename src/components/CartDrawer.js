import React from 'react';
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Text, VStack } from '@chakra-ui/react';
import { BiCartAlt } from 'react-icons/bi';

const CartDrawer = ({ isDrawerOpen, onDrawerClose, drawerRef }) => {
    return(
        <Drawer placement='left' finalFocusRef={drawerRef} isOpen={isDrawerOpen} onClose={onDrawerClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader>
                    <Text fontWeight='normal' fontSize='18px'>Shopping Basket</Text>
                    <DrawerCloseButton borderRadius='full' />
                </DrawerHeader>
                <DrawerBody>
                    <VStack mt={10}>
                        <BiCartAlt size='60px' opacity='20%' />
                        <Text color='gray.300' as='b' fontSize='14px'>CART IS EMPTY</Text>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default CartDrawer;