import React from 'react';
import { Modal, ModalBody, ModalContent, Box, VStack, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, useColorMode } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

const MenuModal = ({ menuRef, isMenuOpen, onMenuClose, screenSize }) => {
    const navigate = useNavigate();
    const { colorMode } = useColorMode();

    const page = window.location.pathname;
    const fontColorActive = colorMode === 'dark' ? 'white' : '#1a202c';
    const fontColorInctive = colorMode === 'light' ? 'gray' : '#8faec0';

    return (
        <Modal size='full' isOpen={isMenuOpen} motionPreset='slideInTop' scrollBehavior='inside'>
            <ModalContent ref={menuRef}>
                <ModalBody display='flex' alignItems='center' justifyContent='center'>
                    <VStack>
                        <Box mb={4}>
                            <Box p={1} border='1px' borderRadius='full' as='button' onClick={onMenuClose}>
                                <MdClose size={20} />
                            </Box>
                        </Box>
                        <Box my={4} as='button' onClick={() => navigate('/')}>
                            <Text fontSize='22px' color={page === '/' ? fontColorActive : fontColorInctive}>Home</Text>
                        </Box>
                        <Accordion allowToggle>
                            <AccordionItem  border='none'>
                                <AccordionButton style={{ margin: 'unset', padding: 'unset' }} _hover={{backgroundColor: 'none' }}>
                                    <Box my={4} flex={1} textAlign='center'>
                                        <Text fontSize='22px' color={page === '/products' ? fontColorActive : fontColorInctive}>Belanja</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel>
                                    <VStack>
                                        <Box mb={2} as='button' onClick={() => navigate('/products')}>
                                            <Text fontSize='18px'>Sub Menu</Text>    
                                        </Box>
                                        <Box my={2} as='button' onClick={() => navigate('/products')}>
                                            <Text fontSize='18px'>Sub Menu</Text>    
                                        </Box>
                                        <Box my={2} as='button' onClick={() => navigate('/products')}>
                                            <Text fontSize='18px'>Sub Menu</Text>    
                                        </Box>
                                        <Box mt={2} as='button' onClick={() => navigate('/products')}>
                                            <Text fontSize='18px'>Sub Menu</Text>    
                                        </Box>
                                    </VStack>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                        <Box my={4}>
                            <Text fontSize='22px' color={fontColorInctive}>Mahadewa.ID</Text>
                        </Box>
                        <Box my={4}>
                            <Text fontSize='22px' color={fontColorInctive}>Mahadewa E-Servis</Text>
                        </Box>
                        {screenSize === 'mobile' &&
                            <Box my={4} as='button' onClick={() => navigate('/login')}>
                                <Text fontSize='22px' color={page === '/login' ? fontColorActive : fontColorInctive}>Login</Text>
                            </Box>
                        }
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default MenuModal;