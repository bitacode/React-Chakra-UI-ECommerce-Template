import React, { useState } from 'react';
import { Alert, AlertIcon, Box, Checkbox, Collapse, Flex, FormControl, FormLabel, HStack, Heading, Input, VStack, Text, useColorMode, useDisclosure, Textarea, TableContainer, Tbody, Tr, Th, Td, Table, InputGroup, InputRightElement, Divider, Center } from '@chakra-ui/react';
import { FaEye, FaEyeSlash  } from 'react-icons/fa';
import { css } from '@emotion/react';
import { useScreenSize } from '../hooks/useScreenSize';
import PostalSelect from './PostalSelect';

const BillingDetails = () => {
    const { colorMode } = useColorMode()
    const { isOpen, onToggle } = useDisclosure();
    const { isOpen: openLogin, onToggle: onLogin } = useDisclosure();

    const [show, setShow] = useState(false);

    const hoverBg = colorMode === 'dark' ? 'white' : '#1a202c';
    const hoverColor = colorMode === 'dark' ? '#1a202c' : 'white';
    const backGround = colorMode === 'dark' ? '#2d3c4c' : '#ebebeb'
    const bgPayment = colorMode === 'dark' ? '#681b32' : '#f8d0d8'
    const bgPaymentArrow = colorMode === 'dark' ? '#7f1a34' : '#f2aab9'
    const linkColor = colorMode === 'dark' ? 'lightskyblue' : 'steelblue';

    const screenSize = useScreenSize();

    const onClick = () => setShow(!show);

    return (
        <Box w='100%' display='flex' justifyContent='center' alignItems='flex-start' overflow='hidden' py={8} px={10}>
            <Box w='1580px'>
                <Alert status='info' variant='top-accent' bg={backGround}>
                    <AlertIcon />
                    <Box display='flex' flexWrap='wrap' alignItems='center' justifyContent='center'>
                        <Text>
                            Returning customer? 
                        </Text>
                        <span>&nbsp;&#8203;</span>
                        <Box as='button' onClick={onLogin}>
                            <Text color={linkColor}>
                                Click here to login
                            </Text>
                        </Box>
                    </Box>
                </Alert>
                <Collapse in={openLogin} animateOpacity>
                    <Box my={8} p={5} borderWidth={1} borderRadius='md' >
                        <Text mb={5}>If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing section.</Text>
                        { screenSize !== 'mobile' && screenSize !== 'small' && screenSize !== 'extraSmall' ?
                            <FormControl>
                                <HStack gap={5}>
                                    <VStack align='left'>
                                        <FormLabel display='flex'>
                                            <Text fontWeight='normal'>Username/Email</Text>
                                            <span>&nbsp;&#8203;</span>
                                            <Text fontWeight='normal' color='red'>*</Text>
                                        </FormLabel>
                                        <Input focusBorderColor={colorMode === 'dark' ? 'white' : 'black'} />
                                    </VStack>
                                    <VStack align='left'>
                                        <FormLabel display='flex' >
                                            <Text fontWeight='normal'>Password</Text>
                                            <span>&nbsp;&#8203;</span>
                                            <Text fontWeight='normal' color='red'>*</Text>
                                        </FormLabel>
                                        <InputGroup>
                                            <Input
                                                focusBorderColor={colorMode === 'dark' ? 'white' : 'black'}
                                                type={show ? 'text' : 'password'}
                                            />
                                            <InputRightElement>
                                                <Box as='button' onClick={onClick}>
                                                    { show ? 
                                                        <FaEyeSlash />:
                                                        <FaEye />
                                                    }
                                                </Box>
                                            </InputRightElement>
                                        </InputGroup>
                                    </VStack>
                                </HStack>
                                <VStack align='left' gap={5} mt={5}>
                                    <HStack gap={3}>
                                        <Box bg='crimson' h='40px' w='80px' borderRadius='md' color='white' _hover={{ bg: hoverBg, color: hoverColor }} transition='background-color 0.3s ease' as='button'>
                                            <Text fontWeight={300}>Login</Text>
                                        </Box>
                                        <Checkbox colorScheme='red'>
                                            <Text>Remember me</Text>
                                        </Checkbox>
                                    </HStack>
                                    <Box>
                                        <Text color={linkColor}>Lost your password?</Text>
                                    </Box>
                                </VStack>
                            </FormControl> :
                            <FormControl>
                                <VStack align='left'>
                                    <FormLabel display='flex'>
                                        <Text fontWeight='normal'>Username/Email</Text>
                                        <span>&nbsp;&#8203;</span>
                                        <Text fontWeight='normal' color='red'>*</Text>
                                    </FormLabel>
                                    <Input focusBorderColor={colorMode === 'dark' ? 'white' : 'black'} />
                                </VStack>
                                <VStack align='left' mt={5}>
                                    <FormLabel display='flex' >
                                        <Text fontWeight='normal'>Password</Text>
                                        <span>&nbsp;&#8203;</span>
                                        <Text fontWeight='normal' color='red'>*</Text>
                                    </FormLabel>
                                    <InputGroup>
                                        <Input
                                            focusBorderColor={colorMode === 'dark' ? 'white' : 'black'}
                                            type={show ? 'text' : 'password'}
                                        />
                                        <InputRightElement>
                                            <Box as='button' onClick={onClick}>
                                                { show ? 
                                                    <FaEyeSlash />:
                                                    <FaEye />
                                                }
                                            </Box>
                                        </InputRightElement>
                                    </InputGroup>
                                </VStack>
                                <VStack align='left' gap={5} mt={5}>
                                    <HStack gap={3}>
                                        <Box bg='crimson' h='40px' w='80px' borderRadius='md' color='white' _hover={{ bg: hoverBg, color: hoverColor }} transition='background-color 0.3s ease' as='button'>
                                            <Text fontWeight={300}>Login</Text>
                                        </Box>
                                        <Checkbox colorScheme='red'>
                                            <Text>Remember me</Text>
                                        </Checkbox>
                                    </HStack>
                                    <Box>
                                        <Text color={linkColor}>Lost your password?</Text>
                                    </Box>
                                </VStack>
                            </FormControl>
                        }
                    </Box>
                </Collapse>
                {screenSize !== 'mobile' && screenSize !== 'small' && screenSize !== 'extraSmall' ?
                    <Flex gap={10} my={10}>
                        <Box flex={1}>
                            <Heading >
                                Billing Details
                            </Heading>
                            <FormControl>
                                <HStack gap={5} my={5}>
                                    <VStack px={1} flex={1} alignItems='flex-start'>
                                        <FormLabel display='flex' alignItems='center' justifyContent='center'>
                                            <Text fontWeight='normal'>First Name</Text>
                                            <span>&nbsp;&#8203;</span>
                                            <Text fontWeight='normal' color='red'>*</Text>
                                        </FormLabel>
                                        <Input focusBorderColor={colorMode === 'dark' ? 'white' : 'black'} />
                                    </VStack>
                                    <VStack flex={1} alignItems='flex-start'>
                                        <FormLabel display='flex' alignItems='center' justifyContent='center'>
                                            <Text fontWeight='normal'>Last Name</Text>
                                            <span>&nbsp;&#8203;</span>
                                            <Text fontWeight='normal' color='red'>*</Text>
                                        </FormLabel>
                                        <Input focusBorderColor={colorMode === 'dark' ? 'white' : 'black'} />
                                    </VStack>
                                </HStack>
                                <VStack alignItems='flex-start' my={5}> 
                                    <FormLabel display='flex' alignItems='center' justifyContent='center'>
                                        <Text fontWeight='normal'>Address</Text>
                                        <span>&nbsp;&#8203;</span>
                                        <Text fontWeight='normal' color='red'>*</Text>
                                    </FormLabel>
                                    <Textarea
                                        resize='none'
                                        placeholder='Apple St No. 2, 4th Neighborhood 5th hamlet'
                                        focusBorderColor={colorMode === 'dark' ? 'white' : 'black'}
                                    />
                                </VStack>
                                <VStack flex={1} align='left' my={5}> 
                                    <FormLabel display='flex' alignItems='center' justifyContent='flex-start'>
                                        <Text fontWeight='normal'>Postal Code, District, City, Province</Text>
                                        <span>&nbsp;&#8203;</span>
                                        <Text fontWeight='normal' color='red'>*</Text>
                                    </FormLabel>
                                    <PostalSelect />
                                </VStack>
                                <HStack gap={5} my={5}>
                                    <VStack flex={1} alignItems='flex-start'>
                                        <FormLabel display='flex' alignItems='center' justifyContent='center'>
                                            <Text fontWeight='normal'>Phone Number</Text>
                                            <span>&nbsp;&#8203;</span>
                                            <Text fontWeight='normal' color='red'>*</Text>
                                        </FormLabel>
                                        <Input
                                            focusBorderColor={colorMode === 'dark' ? 'white' : 'black'}
                                            type='tel'
                                        />
                                    </VStack>
                                    <VStack flex={1} alignItems='flex-start'>
                                        <FormLabel display='flex' alignItems='center' justifyContent='center'>
                                            <Text fontWeight='normal'>Email</Text>
                                            <span>&nbsp;&#8203;</span>
                                            <Text fontWeight='normal' color='red'>*</Text>
                                        </FormLabel>
                                        <Input focusBorderColor={colorMode === 'dark' ? 'white' : 'black'} />
                                    </VStack>
                                </HStack>
                                <HStack gap={5} my={5}>
                                    <VStack flex={1} alignItems='flex-start'>
                                        <FormLabel display='flex' alignItems='center' justifyContent='center'>
                                            <Text fontWeight='normal'>Account Username</Text>
                                            <span>&nbsp;&#8203;</span>
                                            <Text fontWeight='normal' color='red'>*</Text>
                                        </FormLabel>
                                        <Input focusBorderColor={colorMode === 'dark' ? 'white' : 'black'} />
                                    </VStack>
                                    <VStack flex={1} alignItems='flex-start'>
                                        <FormLabel display='flex' alignItems='center' justifyContent='center'>
                                            <Text fontWeight='normal'>Account Password</Text>
                                            <span>&nbsp;&#8203;</span>
                                            <Text fontWeight='normal' color='red'>*</Text>
                                        </FormLabel>
                                        <InputGroup>
                                            <Input
                                                focusBorderColor={colorMode === 'dark' ? 'white' : 'black'}
                                                type={show ? 'text' : 'password'}
                                            />
                                            <InputRightElement>
                                                <Box as='button' onClick={onClick}>
                                                    { show ? 
                                                        <FaEyeSlash />:
                                                        <FaEye />
                                                    }
                                                </Box>
                                            </InputRightElement>
                                        </InputGroup>
                                    </VStack>
                                </HStack>
                            </FormControl>
                        </Box>
                        <Box flex={1}>
                            <Checkbox onChange={onToggle} colorScheme='red'>
                                <Heading size='lg'>
                                    Ship to a Different Address?
                                </Heading>
                            </Checkbox>
                            <FormControl>
                                <Collapse in={isOpen} animateOpacity>
                                    <HStack px={1} gap={5} my={5}>
                                        <VStack flex={1} alignItems='flex-start'>
                                            <FormLabel display='flex' alignItems='center' justifyContent='center'>
                                                <Text fontWeight='normal'>First Name</Text>
                                                <span>&nbsp;&#8203;</span>
                                                <Text fontWeight='normal' color='red'>*</Text>
                                            </FormLabel>
                                            <Input focusBorderColor={colorMode === 'dark' ? 'white' : 'black'} />
                                        </VStack>
                                        <VStack flex={1} my={5} alignItems='flex-start'>
                                            <FormLabel display='flex' alignItems='center' justifyContent='center'>
                                                <Text fontWeight='normal'>Last Name</Text>
                                                <span>&nbsp;&#8203;</span>
                                                <Text fontWeight='normal' color='red'>*</Text>
                                            </FormLabel>
                                            <Input focusBorderColor={colorMode === 'dark' ? 'white' : 'black'} />
                                        </VStack>
                                    </HStack>
                                    <VStack px={1} align='left' my={5}> 
                                        <FormLabel display='flex'>
                                            <Text fontWeight='normal'>Address</Text>
                                            <span>&nbsp;&#8203;</span>
                                            <Text fontWeight='normal' color='red'>*</Text>
                                        </FormLabel>
                                        <Textarea
                                            resize='none'
                                            placeholder='Apple St No. 2, 4th Neighborhood 5th hamlet'
                                            focusBorderColor={colorMode === 'dark' ? 'white' : 'black'}
                                        />
                                    </VStack>
                                    <VStack px={1} align='left' my={5}> 
                                        <FormLabel display='flex'>
                                            <Text fontWeight='normal'>Postal Code, District, City, Province</Text>
                                            <span>&nbsp;&#8203;</span>
                                            <Text fontWeight='normal' color='red'>*</Text>
                                        </FormLabel>
                                        <PostalSelect />
                                    </VStack>
                                </Collapse>
                                <VStack px={1} align='left' my={5}> 
                                    <FormLabel display='flex'>
                                        <Text fontWeight='normal'>Order Notes {`(optional)`}</Text>
                                    </FormLabel>
                                    <Textarea
                                        resize='none'
                                        placeholder='Notes about your order, e.g. special notes for delivery'
                                        focusBorderColor={colorMode === 'dark' ? 'white' : 'black'}
                                    />
                                </VStack>
                            </FormControl>
                        </Box>
                    </Flex> :
                    <Flex direction='column' gap={10} my={10}>
                        <Box flex={1}>
                            <Heading >
                                {screenSize}
                            </Heading>
                            <FormControl>
                                <VStack my={5} px={1} flex={1} alignItems='flex-start'>
                                    <FormLabel display='flex' alignItems='center' justifyContent='center'>
                                        <Text fontWeight='normal'>First Name</Text>
                                        <span>&nbsp;&#8203;</span>
                                        <Text fontWeight='normal' color='red'>*</Text>
                                    </FormLabel>
                                    <Input focusBorderColor={colorMode === 'dark' ? 'white' : 'black'} />
                                </VStack>
                                <VStack flex={1} my={5} alignItems='flex-start'>
                                    <FormLabel display='flex' alignItems='center' justifyContent='center'>
                                        <Text fontWeight='normal'>Last Name</Text>
                                        <span>&nbsp;&#8203;</span>
                                        <Text fontWeight='normal' color='red'>*</Text>
                                    </FormLabel>
                                    <Input focusBorderColor={colorMode === 'dark' ? 'white' : 'black'} />
                                </VStack>
                                <VStack alignItems='flex-start' my={5}> 
                                    <FormLabel display='flex' alignItems='center' justifyContent='center'>
                                        <Text fontWeight='normal'>Address</Text>
                                        <span>&nbsp;&#8203;</span>
                                        <Text fontWeight='normal' color='red'>*</Text>
                                    </FormLabel>
                                    <Textarea
                                        resize='none'
                                        placeholder='Apple St No. 2, 4th Neighborhood 5th hamlet'
                                        focusBorderColor={colorMode === 'dark' ? 'white' : 'black'}
                                    />
                                </VStack>
                                <VStack flex={1} align='left' my={5}> 
                                    <FormLabel display='flex' alignItems='center' justifyContent='flex-start'>
                                        <Text fontWeight='normal'>Postal Code, District, City, Province</Text>
                                        <span>&nbsp;&#8203;</span>
                                        <Text fontWeight='normal' color='red'>*</Text>
                                    </FormLabel>
                                    <PostalSelect />
                                </VStack>
                                <VStack flex={1} my={5} alignItems='flex-start'>
                                    <FormLabel display='flex' alignItems='center' justifyContent='center'>
                                        <Text fontWeight='normal'>Phone Number</Text>
                                        <span>&nbsp;&#8203;</span>
                                        <Text fontWeight='normal' color='red'>*</Text>
                                    </FormLabel>
                                    <Input
                                        focusBorderColor={colorMode === 'dark' ? 'white' : 'black'}
                                        type='tel'
                                    />
                                </VStack>
                                <VStack flex={1} my={5} alignItems='flex-start'>
                                    <FormLabel display='flex' alignItems='center' justifyContent='center'>
                                        <Text fontWeight='normal'>Email</Text>
                                        <span>&nbsp;&#8203;</span>
                                        <Text fontWeight='normal' color='red'>*</Text>
                                    </FormLabel>
                                    <Input focusBorderColor={colorMode === 'dark' ? 'white' : 'black'} />
                                </VStack>
                                <VStack flex={1} my={5} alignItems='flex-start'>
                                    <FormLabel display='flex' alignItems='center' justifyContent='center'>
                                        <Text fontWeight='normal'>Account Username</Text>
                                        <span>&nbsp;&#8203;</span>
                                        <Text fontWeight='normal' color='red'>*</Text>
                                    </FormLabel>
                                    <Input focusBorderColor={colorMode === 'dark' ? 'white' : 'black'} />
                                </VStack>
                                <VStack flex={1} my={5} alignItems='flex-start'>
                                    <FormLabel display='flex' alignItems='center' justifyContent='center'>
                                        <Text fontWeight='normal'>Account Password</Text>
                                        <span>&nbsp;&#8203;</span>
                                        <Text fontWeight='normal' color='red'>*</Text>
                                    </FormLabel>
                                    <InputGroup>
                                        <Input
                                            focusBorderColor={colorMode === 'dark' ? 'white' : 'black'}
                                            type={show ? 'text' : 'password'}
                                        />
                                        <InputRightElement>
                                            <Box as='button' onClick={onClick}>
                                                { show ? 
                                                    <FaEyeSlash />:
                                                    <FaEye />
                                                }
                                            </Box>
                                        </InputRightElement>
                                    </InputGroup>
                                </VStack>
                            </FormControl>
                        </Box>
                        <Box flex={1}>
                            <Checkbox onChange={onToggle} colorScheme='red'>
                                <Heading size='lg'>
                                    Ship to a Different Address?
                                </Heading>
                            </Checkbox>
                            <FormControl>
                                <Collapse in={isOpen} animateOpacity>
                                    <VStack flex={1} my={5} alignItems='flex-start'>
                                        <FormLabel display='flex' alignItems='center' justifyContent='center'>
                                            <Text fontWeight='normal'>First Name</Text>
                                            <span>&nbsp;&#8203;</span>
                                            <Text fontWeight='normal' color='red'>*</Text>
                                        </FormLabel>
                                        <Input focusBorderColor={colorMode === 'dark' ? 'white' : 'black'} />
                                    </VStack>
                                    <VStack flex={1} my={5} alignItems='flex-start'>
                                        <FormLabel display='flex' alignItems='center' justifyContent='center'>
                                            <Text fontWeight='normal'>Last Name</Text>
                                            <span>&nbsp;&#8203;</span>
                                            <Text fontWeight='normal' color='red'>*</Text>
                                        </FormLabel>
                                        <Input focusBorderColor={colorMode === 'dark' ? 'white' : 'black'} />
                                    </VStack>
                                    
                                    <VStack px={1} align='left' my={5}> 
                                        <FormLabel display='flex'>
                                            <Text fontWeight='normal'>Address</Text>
                                            <span>&nbsp;&#8203;</span>
                                            <Text fontWeight='normal' color='red'>*</Text>
                                        </FormLabel>
                                        <Textarea
                                            resize='none'
                                            placeholder='Apple St No. 2, 4th Neighborhood 5th hamlet'
                                            focusBorderColor={colorMode === 'dark' ? 'white' : 'black'}
                                        />
                                    </VStack>
                                    <VStack px={1} align='left' my={5}> 
                                        <FormLabel display='flex'>
                                            <Text fontWeight='normal'>Postal Code, District, City, Province</Text>
                                            <span>&nbsp;&#8203;</span>
                                            <Text fontWeight='normal' color='red'>*</Text>
                                        </FormLabel>
                                        <PostalSelect />
                                    </VStack>
                                </Collapse>
                                <VStack px={1} align='left' my={5}> 
                                    <FormLabel display='flex'>
                                        <Text fontWeight='normal'>Order Notes {`(optional)`}</Text>
                                    </FormLabel>
                                    <Textarea
                                        resize='none'
                                        placeholder='Notes about your order, e.g. special notes for delivery'
                                        focusBorderColor={colorMode === 'dark' ? 'white' : 'black'}
                                    />
                                </VStack>
                            </FormControl>
                        </Box>
                    </Flex>
                }
                <Heading size='lg'>Your Order</Heading>
                <TableContainer my={5} borderWidth={1} borderRadius='md'>
                    <Table>
                        <Tbody>
                            <Tr>
                                <Th>Product</Th>
                                <Td>
                                    <Box display='flex' alignItems='center' flexWrap='wrap' whiteSpace='normal' overflowWrap='break-word'>
                                        <Text>ACER A715-76G-54XS Charcoal Black</Text>
                                        <span>&nbsp;&#8203;</span>
                                        <span>&nbsp;&#8203;</span>
                                        <Text as='b'>×1</Text>
                                    </Box>
                                </Td>
                            </Tr>
                            <Tr>
                                <Th>Subtotal</Th>
                                <Td>
                                    <Box display='flex' alignItems='center' flexWrap='wrap' whiteSpace='normal' overflowWrap='break-word'>
                                        <Text as='b'>Rp 10.609.000</Text>
                                    </Box>
                                </Td>
                            </Tr>
                            <Tr>
                                <Th>Shipping</Th>
                                <Td>
                                    <Box display='flex' alignItems='center' flexWrap='wrap' whiteSpace='normal' overflowWrap='break-word'>
                                        <Text>Input your correct address to calculate the delivery cost</Text>
                                    </Box>
                                </Td>
                            </Tr>
                            <Tr>
                                <Th>Subtotal</Th>
                                <Td>
                                    <Box display='flex' alignItems='center' flexWrap='wrap' whiteSpace='normal' overflowWrap='break-word'>
                                        <Text as='b'>Rp 10.609.000</Text>
                                    </Box>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <Box borderRadius='md' px={5} mb={10} bg={bgPayment}>
                    <Box>
                        <Text fontSize='20px' py={5}>Bank Transfer</Text>
                    </Box>
                    <Box
                        position='relative'
                        w='100%'
                        py={2}
                        px={4}
                        bg={bgPaymentArrow}
                        css={css`
                            ::before {
                                content: '';
                                display: block;
                                border: 1em solid ${bgPaymentArrow};
                                border-right-color: transparent;
                                border-left-color: transparent;
                                border-top-color: transparent;
                                position: absolute;
                                left: 0;
                                top: -.75em;
                                margin: -1em 0 0 2em
                            }
                        `}
                    >
                        <Text>Do your payment directly to our bank account. Use you order ID as a payment reference. Your order won't be delivered until you finish your payment.</Text>
                    </Box>
                    <Center h='30px'>
                        <Divider borderColor='#cccccc' />
                    </Center>
                    <Box display='flex' alignItems='center' flexWrap='wrap' pb={5}>
                        <Text>
                            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our&nbsp;
                            <Text color={linkColor} href='#'>privacy policy.</Text>
                        </Text>
                    </Box>
                    <Box display='flex' w='100%' justifyContent='flex-end' pb={5}>
                        <Box bg='crimson' h='40px' w='130px' borderRadius='md' color='white' _hover={{ bg: hoverBg, color: hoverColor }} transition='background-color 0.3s ease' as='button'>
                            <Text fontWeight={300}>Place Order</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default BillingDetails;

