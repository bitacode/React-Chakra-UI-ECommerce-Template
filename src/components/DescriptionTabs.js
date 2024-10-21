import React from 'react';
import { Divider, Box, Flex, Text, Image, VStack, Tabs, TabList, Tab, TabIndicator, TabPanels, TabPanel, FormControl, FormLabel, Input, Textarea, useColorMode, HStack } from '@chakra-ui/react';
import { useScreenSize } from '../hooks/useScreenSize';
import Ratings from './Ratings';

const DescriptionTabs = ({ item }) => {
    const { colorMode } = useColorMode();
    
    const color = colorMode === 'dark' ? 'white' : 'black';
    const inputColor = colorMode === 'dark' ? '#202a38' : 'whitesmoke';
    const hoverBg = colorMode === 'dark' ? 'white' : '#1a202c';
    const hoverColor = colorMode === 'dark' ? '#1a202c' : 'white';

    const screenSize = useScreenSize();

    const handleRatingChange = (value) => {
        console.log('Selected rating:', value);
    };

    const width = () => {
        if (screenSize === 'extraLarge') {
            return '75%'
        } if (screenSize === 'large') {
            return '75%'
        } if (screenSize === 'medium') {
            return '75%'
        } if (screenSize === 'small') {
            return '100%'
        } if (screenSize === 'extraSmall') {
            return '100%'
        } if (screenSize === 'mobile') {
            return '100%'
        }
    }

    return (
        <>
            <Divider />
            <Tabs align='flex-start' variant='unstyled'>
                <Flex pb='60px' justifyContent='center' alignItems='center'>
                    <TabList gap={10}>
                        <Tab _selected={{ color: color }} color='gray'>
                            <Text fontWeight={700}>Description</Text>
                        </Tab>
                        <Tab _selected={{ color: color }} color='gray'>
                            <Text fontWeight={700}>{'Reviews (0)'}</Text>
                        </Tab>
                    </TabList>
                    <TabIndicator mt='-40px' height='2px' bg='crimson' borderRadius='1px' />
                </Flex>
                <TabPanels>
                    <TabPanel>
                        <Box display='flex' alignItems='center' justifyContent='center'>
                            <VStack alignItems='flex-start' justifyContent='center' w={width}>
                                <Text fontSize={25} fontWeight={800} pb={5}>Description</Text>
                                <Text color='gray'>
                                    • Graphics : NVIDIA® GeForce® GTX 1650 Graphics<br />
                                    • Processor : Intel® Core™ i5-12450H processor (12MB cache, up to 4-40Ghz)<br />
                                    • OS : Windows 11 Home<br />
                                    • Memory : 1*8GB DDR4<br />
                                    • Storage : 512GB SSD<br />
                                    • Inch, Res, Ratio, Panel : 15-6″ FHD, IPS, Refresh rate 144Hz<br />
                                    Free Office Home & Student 2021<br />
                                </Text>
                                <Box pt={2}>
                                    <Image src='https://belanja.mahadewa.id/wp-content/uploads/2023/09/tokopedia-icon-266x300.png' w='80px' />
                                </Box>
                            </VStack>
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box display='flex'  alignItems='center' justifyContent='center'>
                            <VStack alignItems='flex-start' justifyContent='center' w={width}>
                                <Box fontSize={25} fontWeight={800} pb={10}>
                                    <Text>Reviews</Text>
                                </Box>
                                <Box>
                                    <Text color='gray' pb={10} fontWeight={300}>There are no reviews yet.</Text>
                                </Box>
                                <Box>
                                    <Text fontSize={20} fontWeight={800} pb={1}>Be the first to review "{item}"</Text>
                                    <Text fontWeight={300}>Your email address will not be published. Required fields are marked *</Text>
                                </Box>
                                <Box display='flex' alignItems='center' justifyContent='center' pt={2}>
                                    <Text as='b'>Your rating *</Text>
                                    <Box pl={5}>
                                        <Ratings defaultValue={0} onChange={handleRatingChange} />
                                    </Box>
                                </Box>
                                <Box w='100%' mt={10}>
                                    <FormControl>
                                        { screenSize !== 'mobile' ? 
                                            <HStack mb={10}>
                                                <Box w='100%' mr={5}>
                                                    <FormLabel>
                                                        <Text color='gray' fontWeight={300}>Name *</Text>
                                                    </FormLabel>
                                                    <Input
                                                        variant='unstyled'
                                                        bg={inputColor}
                                                        borderRadius='full'
                                                        h='45px'
                                                        px={5}
                                                        fontWeight={300}
                                                    />
                                                </Box>
                                                <Box w='100%' ml={5}>
                                                    <FormLabel>
                                                        <Text color='gray' fontWeight={300}>Email *</Text>
                                                    </FormLabel>
                                                    <Input
                                                        variant='unstyled'
                                                        bg={inputColor}
                                                        borderRadius='full'
                                                        h='45px'
                                                        px={5}
                                                        fontWeight={300}
                                                    />
                                                </Box>
                                            </HStack> : 
                                            <VStack alignItems='center' justifyContent='center' mb={10}>
                                                <Box w='100%' mb={10}>
                                                    <FormLabel>
                                                        <Text color='gray' fontWeight={300}>Name *</Text>
                                                    </FormLabel>
                                                    <Input
                                                        variant='unstyled'
                                                        bg={inputColor}
                                                        borderRadius='full'
                                                        h='45px'
                                                        px={5}
                                                        fontWeight={300}
                                                    />
                                                </Box>
                                                <Box w='100%'>
                                                    <FormLabel>
                                                        <Text color='gray' fontWeight={300}>Email *</Text>
                                                    </FormLabel>
                                                    <Input
                                                        variant='unstyled'
                                                        bg={inputColor}
                                                        borderRadius='full'
                                                        h='45px'
                                                        px={5}
                                                        fontWeight={300}
                                                    />
                                                </Box>
                                            </VStack>
                                        }
                                        <Box w='100%' mb={5}>
                                            <FormLabel>
                                                <Text color='gray' fontWeight={300}>Your Review *</Text>
                                            </FormLabel>
                                            <Textarea
                                                resize='none'
                                                variant='unstyled'
                                                bg={inputColor}
                                                borderRadius='3xl'
                                                style={{ height: '250px', width: '100%' }}
                                                px={5}
                                                py={5}
                                            />
                                        </Box>
                                        <Box display='flex' alignItems='center' justifyContent={screenSize === 'mobile' ? 'center' : 'flex-end'}>
                                            <Box bg='crimson' h='45px' w={screenSize === 'mobile' ? '100%' : '180px'} ml={2} borderRadius='full' color='white' _hover={{ bg: hoverBg, color: hoverColor }} transition='background-color 0.3s ease' as='button'>
                                                <Text fontWeight={300}>Submit</Text>
                                            </Box>
                                        </Box>
                                    </FormControl>
                                </Box>
                            </VStack>
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default DescriptionTabs;