import React, { useState } from 'react';
import { Box, Text, Select, Input, Stack, useColorMode, TableContainer, Table, Tbody, Td, Tr, Collapse, useDisclosure, Th } from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md';
import { useScreenSize } from '../hooks/useScreenSize';
import { css } from '@emotion/react';
import countries from '../assets/data/countries.json';

const TableCost = () => {
    const [selected, setSelected] = useState('');

    const { isOpen, onToggle } = useDisclosure();
    const { colorMode } = useColorMode();

    const screenSize =  useScreenSize();

    const hoverBg = colorMode === 'dark' ? 'white' : '#1a202c';
    const hoverColor = colorMode === 'dark' ? '#1a202c' : 'white';
    const tableFontColor = colorMode === 'dark' ? '#a0aec0' : '#4a5568';
    const tableBg = colorMode === 'dark' ? 'gray.700' : 'gray.100';
    const linkColor = colorMode === 'dark' ? 'lightskyblue' : 'steelblue';

    const onSelectChange = (event) => {
        setSelected(event.target.value);
    }

    return (
        <Stack gap={5} overflow='hidden'>
            { screenSize !== 'small' && screenSize !== 'extraSmall' && screenSize !== 'mobile' ? 
                <TableContainer borderWidth={1} borderRadius='md'>
                    <Table>
                        <Tbody>
                            <Tr>
                                <Th bg={tableBg}>Subtotal:</Th>
                                <Td>Rp 10.609.000</Td>
                            </Tr>
                            <Tr>
                                <Th bg={tableBg}>Shipping:</Th>
                                <Td>
                                    <Stack>
                                        <Text textAlign='right'>Please input your address below to calculate the delivery cost</Text>
                                        <Box display='flex' alignItems='center' justifyContent='flex-start'>
                                            <Box as='button'  onClick={onToggle}>
                                                <Text color={linkColor} cursor='pointer'>Calculate shipping</Text>
                                            </Box>
                                            <span>&nbsp;&#8203;</span>
                                            <MdLocalShipping size={20} color={linkColor} />
                                        </Box>
                                        <Collapse in={isOpen} animateOpacity>
                                            <Stack>
                                                <Select placeholder='Select a country/region...' value={selected} onChange={onSelectChange} mx='unset' my='unset' focusBorderColor={colorMode === 'dark' ? 'white' : 'black'}  >
                                                    {countries.map((item) => (
                                                        <option key={item.name} value={item.name}>
                                                            {item.name}
                                                        </option>
                                                    ))}
                                                </Select>
                                                <Input placeholder='City' focusBorderColor={colorMode === 'dark' ? 'white' : 'black'} />
                                                <Input placeholder='Postal Code/ZIP' focusBorderColor={colorMode === 'dark' ? 'white' : 'black'} />
                                                <Box display='flex' alignItems='center' justifyContent='flex-end'>
                                                    <Box bg='crimson' h='40px' w='100px' borderRadius='md' color='white' _hover={{ bg: hoverBg, color: hoverColor }} transition='background-color 0.3s ease' as='button'>
                                                        <Text fontWeight={300}>Update</Text>
                                                    </Box>
                                                </Box>
                                                
                                            </Stack>
                                        </Collapse>
                                    </Stack>
                                </Td>
                            </Tr>
                            <Tr>
                                <Th bg={tableBg}>Total:</Th>
                                <Td>Rp 10.609.000</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer> :
                <TableContainer whiteSpace='wrap' borderWidth={1} borderRadius='md'>
                    <Table>
                        <Tbody>
                            <Tr>
                                <Td
                                    px={3}
                                    py={3}
                                    css={css`
                                        ::before {
                                            content: 'SUBTOTAL: ';
                                            font-size: 12px;
                                            color: ${tableFontColor};
                                            font-weight: bold;
                                            float: left;
                                        }
                                `} textAlign='right'>
                                    <Box as='span'>Rp 10.609.000</Box>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td
                                    px={3}
                                    py={3}
                                    css={css`
                                        ::before {
                                            content: 'SHIPPING: ';
                                            font-size: 12px;
                                            color: ${tableFontColor};
                                            font-weight: bold;
                                            float: left;
                                        }
                                `} textAlign='right'>
                                    <Box as='span'>Please input your address below to calculate the delivery cost</Box>
                                    <Box as='span'>
                                        <Box py={2} display='flex' alignItems='center' justifyContent='flex-end'>
                                            <Box as='button'  onClick={onToggle}>
                                                <Text color={linkColor} cursor='pointer'>Calculate shipping</Text>
                                            </Box>
                                            <span>&nbsp;&#8203;</span>
                                            <MdLocalShipping size={20} color={linkColor} />
                                        </Box>
                                        <Collapse in={isOpen} animateOpacity>
                                            <Stack>
                                                <Select placeholder='Select a country/region...' value={selected} onChange={onSelectChange} mx='unset' my='unset' focusBorderColor={colorMode === 'dark' ? 'white' : 'black'}  >
                                                    {countries.map((item) => (
                                                        <option key={item.name} value={item.name}>
                                                            {item.name}
                                                        </option>
                                                    ))}
                                                </Select>
                                                <Input placeholder='City' focusBorderColor={colorMode === 'dark' ? 'white' : 'black'} />
                                                <Input placeholder='Postal Code/ZIP' focusBorderColor={colorMode === 'dark' ? 'white' : 'black'} />
                                                <Box display='flex' alignItems='center' justifyContent='flex-end'>
                                                    <Box bg='crimson' h='40px' w='100px' borderRadius='md' color='white' _hover={{ bg: hoverBg, color: hoverColor }} transition='background-color 0.3s ease' as='button'>
                                                        <Text fontWeight={300}>Update</Text>
                                                    </Box>
                                                </Box>
                                            </Stack>
                                        </Collapse>
                                    </Box>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td
                                    px={3}
                                    py={3}
                                    css={css`
                                        ::before {
                                            content: 'TOTAL: ';
                                            font-size: 12px;
                                            color: ${tableFontColor};
                                            font-weight: bold;
                                            float: left;
                                        }
                                `} textAlign='right' border='none'>
                                    <Box as='span'>Rp 10.609.000</Box>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            }
                <Box bg='crimson' h='60px' borderRadius='md' color='white' _hover={{ bg: hoverBg, color: hoverColor }} transition='background-color 0.3s ease' as='button'>
                    <Text fontSize='20px' as='b'>Proceed to Checkout</Text>
                </Box> 
        </Stack>
    )
}

export default TableCost;

