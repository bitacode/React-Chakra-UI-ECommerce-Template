import React, { useState } from 'react';
import { Box, Checkbox, Flex, FormLabel, HStack, VStack, Input, InputGroup, InputRightElement, Text, useColorMode, Divider, FormControl } from '@chakra-ui/react';
import { FaEye, FaEyeSlash  } from 'react-icons/fa';
import { useScreenSize } from '../hooks/useScreenSize';

const Account = () => {
    const { colorMode } = useColorMode();

    const [show, setShow] = useState(false);

    const inputColor = colorMode === 'dark' ? '#202a38' : 'whitesmoke';
    const hoverBg = colorMode === 'dark' ? 'white' : '#1a202c';
    const hoverColor = colorMode === 'dark' ? '#1a202c' : 'white';
    const linkColor = colorMode === 'dark' ? 'lightskyblue' : 'steelblue';

    const screenSize = useScreenSize();

    const onClick = () => setShow(!show);



    return (
        <Box w='100%' display='flex' justifyContent='center' alignItems='flex-start' overflow='hidden' py={8} px={10}>
            <Box w='1580px' mb={20}>
                {screenSize !== 'extraSmall' && screenSize !== 'mobile' ?
                <Flex>
                    <FormControl w='100%' h='100%' display='flex' alignItems='center' justifyContent='center'>
                        <Box>
                            <Box>
                                <Text fontWeight='bold' fontSize='40px' mb={10}>Sign In</Text>
                            </Box>
                            <FormLabel>
                                <HStack>
                                    <Text fontWeight={300}>Username </Text>
                                    <Text color='red' fontWeight={300}>*</Text>
                                </HStack>
                            </FormLabel>
                            <Input
                                variant='unstyled'
                                bg={inputColor}
                                borderRadius='full'
                                h='45px'
                                w='400px'
                                px={5}
                                mb={8}
                                fontWeight={300}
                            />
                            <FormLabel>
                                <HStack>
                                    <Text fontWeight={300}>Password </Text>
                                    <Text color='red' fontWeight={300}>*</Text>
                                </HStack>
                            </FormLabel>
                            <InputGroup w='400px'>
                                <Input
                                    variant='unstyled'
                                    type={show ? 'text' : 'password'}
                                    bg={inputColor}
                                    borderRadius='full'
                                    h='45px'
                                    px={5}
                                    mb={5}
                                    fontWeight={300}
                                />
                                <InputRightElement mt={.5}>
                                    <Box as='button' onClick={onClick}>
                                        {show ? 
                                            <FaEyeSlash /> :
                                            <FaEye />
                                        }
                                    </Box>
                                </InputRightElement>
                            </InputGroup>
                            <HStack gap={5} mb={5}>
                                <Box display='flex' alignItems='center' justifyContent='flex-start'>
                                    <Box bg='crimson' h='45px' w='100px' ml={2} borderRadius='full' color='white' _hover={{ bg: hoverBg, color: hoverColor }} transition='background-color 0.3s ease' as='button'>
                                        <Text fontWeight={300}>Login</Text>
                                    </Box>
                                </Box>
                                <Checkbox colorScheme='red'>Remember me</Checkbox>
                            </HStack>
                            <Text color={linkColor}>Forget your password?</Text>
                        </Box>
                    </FormControl>
                    <FormControl w='100%' h='100%' display='flex' alignItems='center' justifyContent='center'>
                        <Box>
                            <Box>
                                <Text fontWeight='bold' fontSize='40px' mb={10}>Sign Up</Text>
                            </Box>
                            <FormLabel>
                                <HStack>
                                    <Text fontWeight={300}>Username </Text>
                                    <Text color='red' fontWeight={300}>*</Text>
                                </HStack>
                            </FormLabel>
                            <Input
                                variant='unstyled'
                                bg={inputColor}
                                borderRadius='full'
                                h='45px'
                                w='400px'
                                px={5}
                                mb={8}
                                fontWeight={300}
                            />
                            <FormLabel>
                                <HStack>
                                    <Text fontWeight={300}>Email </Text>
                                    <Text color='red' fontWeight={300}>*</Text>
                                </HStack>
                            </FormLabel>
                            <Input
                                variant='unstyled'
                                bg={inputColor}
                                borderRadius='full'
                                h='45px'
                                w='400px'
                                px={5}
                                mb={8}
                                fontWeight={300}
                            />
                            <FormLabel>
                                <HStack>
                                    <Text fontWeight={300}>Password </Text>
                                    <Text color='red' fontWeight={300}>*</Text>
                                </HStack>
                            </FormLabel>
                            <InputGroup w='400px'>
                                <Input
                                    variant='unstyled'
                                    type={show ? 'text' : 'password'}
                                    bg={inputColor}
                                    borderRadius='full'
                                    h='45px'
                                    px={5}
                                    mb={5}
                                    fontWeight={300}
                                />
                                <InputRightElement mt={.5}>
                                    <Box as='button' onClick={onClick}>
                                        {show ? 
                                            <FaEyeSlash /> :
                                            <FaEye />
                                        }
                                    </Box>
                                </InputRightElement>
                            </InputGroup>
                            <Checkbox colorScheme='red' mb={5}>
                                <Text w='100%' display='flex'>
                                    I aggree with the<span>&nbsp;&#8203;</span><Text color={linkColor} as='button'> Terms & Privacy Policy</Text>
                                </Text>
                            </Checkbox>
                            <HStack gap={5} mb={5}>
                                <Box w='100%' display='flex' alignItems='center' justifyContent='flex-start'>
                                    <Box bg='crimson' h='45px' w='120px' ml={2} borderRadius='full' color='white' _hover={{ bg: hoverBg, color: hoverColor }} transition='background-color 0.3s ease' as='button'>
                                        <Text fontWeight={300}>Register</Text>
                                    </Box>
                                </Box>
                            </HStack>
                        </Box>
                    </FormControl>
                </Flex> :
                <VStack gap={10}>
                    <FormControl w='100%' h='100%' display='flex' alignItems='center' justifyContent='center'>
                        <Box w='100%'>
                            <Box>
                                <Text fontWeight='bold' fontSize='40px' mb={10}>Sign In</Text>
                            </Box>
                            <FormLabel>
                                <HStack>
                                    <Text fontWeight={300}>Username </Text>
                                    <Text color='red' fontWeight={300}>*</Text>
                                </HStack>
                            </FormLabel>
                            <Input
                                variant='unstyled'
                                bg={inputColor}
                                borderRadius='full'
                                h='45px'
                                px={5}
                                mb={8}
                                fontWeight={300}
                            />
                            <FormLabel>
                                <HStack>
                                    <Text fontWeight={300}>Password </Text>
                                    <Text color='red' fontWeight={300}>*</Text>
                                </HStack>
                            </FormLabel>
                            <InputGroup>
                                <Input
                                    variant='unstyled'
                                    type={show ? 'text' : 'password'}
                                    bg={inputColor}
                                    borderRadius='full'
                                    h='45px'
                                    px={5}
                                    mb={5}
                                    fontWeight={300}
                                />
                                <InputRightElement mt={.5}>
                                    <Box as='button' onClick={onClick}>
                                        {show ? 
                                            <FaEyeSlash /> :
                                            <FaEye />
                                        }
                                    </Box>
                                </InputRightElement>
                            </InputGroup>
                            <HStack gap={5} mb={5}>
                                <Box display='flex' alignItems='center' justifyContent='flex-start'>
                                    <Box bg='crimson' h='45px' w='100px' ml={2} borderRadius='full' color='white' _hover={{ bg: hoverBg, color: hoverColor }} transition='background-color 0.3s ease' as='button'>
                                        <Text fontWeight={300}>Login</Text>
                                    </Box>
                                </Box>
                                <Checkbox colorScheme='red'>Remember me</Checkbox>
                            </HStack>
                            <Text color={linkColor}>Forget your password?</Text>
                        </Box>
                    </FormControl>
                    <Divider />
                    <FormControl w='100%' h='100%' display='flex' alignItems='center' justifyContent='center'>
                        <Box w='100%'>
                            <Box>
                                <Text fontWeight='bold' fontSize='40px' mb={10}>Sign Up</Text>
                            </Box>
                            <FormLabel>
                                <HStack>
                                    <Text fontWeight={300}>Username </Text>
                                    <Text color='red' fontWeight={300}>*</Text>
                                </HStack>
                            </FormLabel>
                            <Input
                                variant='unstyled'
                                bg={inputColor}
                                borderRadius='full'
                                h='45px'
                                px={5}
                                mb={8}
                                fontWeight={300}
                            />
                            <FormLabel>
                                <HStack>
                                    <Text fontWeight={300}>Email </Text>
                                    <Text color='red' fontWeight={300}>*</Text>
                                </HStack>
                            </FormLabel>
                            <Input
                                variant='unstyled'
                                bg={inputColor}
                                borderRadius='full'
                                h='45px'
                                px={5}
                                mb={8}
                                fontWeight={300}
                            />
                            <FormLabel>
                                <HStack>
                                    <Text fontWeight={300}>Password </Text>
                                    <Text color='red' fontWeight={300}>*</Text>
                                </HStack>
                            </FormLabel>
                            <InputGroup>
                                <Input
                                    variant='unstyled'
                                    type={show ? 'text' : 'password'}
                                    bg={inputColor}
                                    borderRadius='full'
                                    h='45px'
                                    px={5}
                                    mb={5}
                                    fontWeight={300}
                                />
                                <InputRightElement mt={.5}>
                                    <Box as='button' onClick={onClick}>
                                        {show ? 
                                            <FaEyeSlash /> :
                                            <FaEye />
                                        }
                                    </Box>
                                </InputRightElement>
                            </InputGroup>
                            <Checkbox colorScheme='red' mb={5}>
                                <Text>
                                    I aggree with the<span>&nbsp;&#8203;</span><Text color={linkColor} as='button'> Terms & Privacy Policy</Text>
                                </Text>
                            </Checkbox>
                            <HStack gap={5} mb={5}>
                                <Box w='100%' display='flex' alignItems='center' justifyContent='flex-start'>
                                    <Box bg='crimson' h='45px' w='100px' ml={2} borderRadius='full' color='white' _hover={{ bg: hoverBg, color: hoverColor }} transition='background-color 0.3s ease' as='button'>
                                        <Text fontWeight={300}>Register</Text>
                                    </Box>
                                </Box>
                            </HStack>
                        </Box>
                    </FormControl>
                </VStack>
                }
            </Box>
        </Box>
    )
}

export default Account;