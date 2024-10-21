import React from 'react';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text, VStack } from '@chakra-ui/react';

const CategoryAccordion = ({ screenSize }) => {
    return (
        <Accordion allowToggle>
            <AccordionItem border='none'>
                <AccordionButton _hover={{backgroundColor: 'none' }}>
                    <Box as='span' flex={1} textAlign='left'>
                        <Text fontSize={20} as='b'>Kategori</Text>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                    <VStack pl={10} pt={5} alignItems='flex-start' justifyContent='center'>
                        <Box as='button' pb={ screenSize === 'mobile' && 2 } _hover={{ color: 'crimson' }} transition='color .3s ease-in-out'>
                            <Text fontSize={ screenSize === 'mobile' && '18px' } _hover={{ fontWeight: 'bold' }} transition='font-weight .3s ease-in-out'>Headset</Text>
                        </Box>
                        <Box as='button' pb={ screenSize === 'mobile' && 2 } _hover={{ color: 'crimson' }} transition='color .3s ease-in-out'>
                            <Text fontSize={ screenSize === 'mobile' && '18px' } _hover={{ fontWeight: 'bold' }} transition='font-weight .3s ease-in-out'>Networking</Text>
                        </Box>
                        <Box as='button' pb={ screenSize === 'mobile' && 2 } _hover={{ color: 'crimson' }} transition='color .3s ease-in-out'>
                            <Text fontSize={ screenSize === 'mobile' && '18px' } _hover={{ fontWeight: 'bold' }} transition='font-weight .3s ease-in-out'>Notebook</Text>
                        </Box>
                        <Box as='button' pb={ screenSize === 'mobile' && 2 } _hover={{ color: 'crimson' }} transition='color .3s ease-in-out'>
                            <Text fontSize={ screenSize === 'mobile' && '18px' } _hover={{ fontWeight: 'bold' }} transition='font-weight .3s ease-in-out'>PC Desktop</Text>
                        </Box>
                        <Box as='button' pb={ screenSize === 'mobile' && 2 } _hover={{ color: 'crimson' }} transition='color .3s ease-in-out'>
                            <Text fontSize={ screenSize === 'mobile' && '18px' } _hover={{ fontWeight: 'bold' }} transition='font-weight .3s ease-in-out'>Printing</Text>
                        </Box>
                        <Box as='button' pb={ screenSize === 'mobile' && 2 } _hover={{ color: 'crimson' }} transition='color .3s ease-in-out'>
                            <Text fontSize={ screenSize === 'mobile' && '18px' } _hover={{ fontWeight: 'bold' }} transition='font-weight .3s ease-in-out'>Speaker</Text>
                        </Box>
                        <Box as='button' _hover={{ color: 'crimson' }} transition='color .3s ease-in-out'>
                            <Text fontSize={ screenSize === 'mobile' && '18px' } _hover={{ fontWeight: 'bold' }} transition='font-weight .3s ease-in-out'>Storage</Text>
                        </Box>
                    </VStack>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default CategoryAccordion;