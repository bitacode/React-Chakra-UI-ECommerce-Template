import React from 'react';
import { Box, Text, Table, Tbody, Td, Th, Thead, Tr, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, useColorMode, TableContainer } from '@chakra-ui/react';
import { IoMdClose } from 'react-icons/io';
import { useScreenSize } from '../hooks/useScreenSize';
import { css } from '@emotion/react';
import TableCost from './TableCost';

const TableCart = () => {
    const { colorMode } = useColorMode();

    const screenSize = useScreenSize();

    const hoverBg = colorMode === 'dark' ? 'white' : '#1a202c';
    const hoverColor = colorMode === 'dark' ? '#1a202c' : 'white';
    const tableFontColor = colorMode === 'dark' ? '#a0aec0' : '#4a5568';
    
    return (
        <Box w='100%' display='flex' justifyContent='center' alignItems='center' overflow='hidden' py={8} px={10}>
            <Box w='1580px'>
				<Box display='flex' alignItems='center' justifyContent='center'>
					<Text fontWeight='bold' fontSize='40px' mb={10}>Cart</Text>
				</Box>
				{ screenSize !== 'small' && screenSize !== 'extraSmall' && screenSize !== 'mobile' ? 
                    <>
						<TableContainer borderWidth={1} borderRadius='md' >
							<Table>
								<Thead>
									<Tr>
										<Th></Th>
										<Th>Product</Th>
										<Th>Price</Th>
										<Th>Quantity</Th>
										<Th>Subtotal</Th>
									</Tr>
								</Thead>
								<Tbody>
									<Tr>
										<Td>
											<Box as='button' _hover={{ color: 'red' }}>
												<IoMdClose />
											</Box>
										</Td>
										<Td>
											<Text _hover={{ color: 'steelblue' }} as='button'>
												ACER A715-76G-54XS Charcoal Black
											</Text>
										</Td>
										<Td>Rp 10.609.000</Td>
										<Td>
											<NumberInput allowMouseWheel defaultValue={1} min={1} maxW={16} size='xs' focusBorderColor={colorMode === 'dark' ? 'white' : 'black'} >
												<NumberInputField />
												<NumberInputStepper>
													<NumberIncrementStepper />
													<NumberDecrementStepper />
												</NumberInputStepper>
											</NumberInput>
										</Td>
										<Td>Rp 10.609.000</Td>
									</Tr>
									<Tr>
										<Td></Td>
										<Td></Td>
										<Td></Td>
										<Td></Td>
										<Td border='none' display='flex' alignItems='center' justifyContent='flex-end' py={2} px={2}>
											<Box bg='crimson' h='40px' w='150px' borderRadius='md' color='white' _hover={{ bg: hoverBg, color: hoverColor }} transition='background-color 0.3s ease' as='button'>
												<Text fontWeight={300}>Update Cart</Text>
											</Box>
										</Td>
									</Tr>
								</Tbody>
							</Table>
						</TableContainer>
                        <Box mt='60px' mb={20} display='flex' alignItems='center' justifyContent='center'> 
                            <Box flex={1} />
                            <TableCost />
                        </Box>
                    </> :
                    <>
						<TableContainer whiteSpace='wrap' borderWidth={1} borderRadius='md'>
							<Table>
								<Tbody>
									<Tr>
										<Td px={3} py={3}>
											<Box as='button' _hover={{ color: 'red' }}>
												<IoMdClose />
											</Box>
										</Td>
									</Tr>
									<Tr>
										<Td
											px={3}
											py={3}
											css={css`
												::before {
													content: 'PRODUCT: ';
													font-size: 12px;
													color: ${tableFontColor};
													font-weight: bold;
													float: left;
												}
										`} textAlign='right'>
											<Box as='span'>ACER A715-76G-54XS Charcoal Black</Box>
										</Td>
									</Tr>
									<Tr>
										<Td
											px={3}
											py={3}
											css={css`
												::before {
													content: 'PRICE: ';
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
													content: 'QUANTITY: ';
													font-size: 12px;
													color: ${tableFontColor};
													font-weight: bold;
													float: left;
												}
										`} textAlign='right'>
											<Box display='flex' justifyContent='flex-end' alignItems='center'>
												<NumberInput allowMouseWheel defaultValue={1} min={1} maxW={16} size='xs' focusBorderColor={colorMode === 'dark' ? 'white' : 'black'} >
													<NumberInputField />
													<NumberInputStepper>
														<NumberIncrementStepper />
														<NumberDecrementStepper />
													</NumberInputStepper>
												</NumberInput>
											</Box>
										</Td>
									</Tr>
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
										<Td border='none' px={3} py={3}>
											<Box bg='crimson' h='40px' w='100%' borderRadius='md' color='white' _hover={{ bg: hoverBg, color: hoverColor }} transition='background-color 0.3s ease' as='button'>
												<Text fontWeight={300}>Update Cart</Text>
											</Box>
										</Td>
									</Tr>
								</Tbody>
							</Table>
						</TableContainer>
                        <Box mt='30px'>
                            <TableCost />
                        </Box>
                    </>
                }
            </Box>
        </Box>
    )
}

export default TableCart;

