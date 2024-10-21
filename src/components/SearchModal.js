import React from 'react';
import { Box, InputGroup, Input, Modal, ModalBody, ModalContent, Divider } from '@chakra-ui/react';
import { MdClose } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';

const SearchModal = ({ isSearchOpen, onSearchClose }) => {
    return (
        <Modal size='full' motionPreset='slideInTop' isOpen={isSearchOpen} >
            <ModalContent>
                <ModalContent>
                    <ModalBody w='100%' display='flex' alignItems='center' justifyContent='center'>
                        <Box w='1580px'>
                            <Box position='absolute' top={5} right={5}>
                                <Box p={2} border='1px' borderRadius='full' as='button' onClick={onSearchClose} >
                                    <MdClose size={15} />
                                </Box>
                            </Box>
                            <Box>
                                <InputGroup>
                                    <Box w='100%'>
                                        <Input variant='unstyle' borderColor='gray' bg='transparent' _focus={{ bg: 'transparent' }} fontSize={30} px={0} py={10} />
                                        <Divider borderColor='gray' />
                                    </Box>
                                    <Box display='flex' alignItems='center' justifyContent='start'>
                                            <BiSearch size={30} color='gray' />
                                        </Box>
                                </InputGroup>
                            </Box>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </ModalContent>
        </Modal>
    )
}

export default SearchModal;