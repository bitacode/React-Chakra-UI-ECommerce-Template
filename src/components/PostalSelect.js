import React, { useState } from 'react';
import { Box, Text, Collapse, Input, useDisclosure, useColorMode } from '@chakra-ui/react';
import { BiChevronDown } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import postal_codes from '../assets/data/postal_code.json';

const PostalSelect = () => {
    const { colorMode } = useColorMode();
    const { isOpen, onToggle } = useDisclosure();

    const [search, setSearch] = useState('');
    const [selectedResult, setSelectedResult] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const placeholderColor = colorMode === 'dark' ? '#50545d' : '#78889f';
    const postalColor = colorMode === 'dark' ? 'white' : '#1a202c';
    const hoverColor = colorMode === 'dark' ? '#202a38' : '#ebebeb';

    const formattedData = postal_codes.flatMap(data => {
        const { province, postal } = data;
        return Object.keys(postal).flatMap(provinceCode =>
            postal[provinceCode].map(postalItem => ({
                postal_code: postalItem.postal_code,
                sub_district: postalItem.sub_district,
                city: postalItem.city,
                province_name: province[provinceCode].province_name
            }))
        );
    });

    const handleSearchChange = async (e) => {
        const query = e.target.value.toLowerCase();
        setSearch(query);
    
        if (query.length >= 3) {
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 500));

            const filteredResults = formattedData.filter(item =>
                item.postal_code.toLowerCase().includes(query) ||
                item.sub_district.toLowerCase().includes(query) ||
                item.city.toLowerCase().includes(query) ||
                item.province_name.toLowerCase().includes(query)
            );
            setResults(filteredResults);
            setLoading(false);
        } else {
            setResults([]);
            setLoading(false);
        }
    };

    const handleResultClick = (result) => {
        const selectedResultText = `${result.postal_code}, ${result.sub_district}, ${result.city}, ${result.province_name}`;
        setSelectedResult(selectedResultText);
        setSearch('');
        setResults([]);
        onToggle();
    };

    return (
        <>
            <Box as='button' w='100%' display='flex' alignItems='center' borderWidth={1} borderRadius='md' px={5} py={2} onClick={selectedResult ? undefined : onToggle}>
                <Text color={selectedResult ? postalColor : placeholderColor}>{selectedResult || 'Type some letters to see options'}</Text>
                <Box flex={1} align='right'>
                    { selectedResult ? 
                        <MdClose as='button' onClick={() => setSelectedResult('')} />  :
                        <BiChevronDown />
                    }
                </Box>
            </Box>
            <Collapse in={isOpen} w='100%' offsetY='10px' >
                <Box w='100%' borderWidth={1} borderRadius='md' px={2} py={2}>
                    <Input
                        value={search}
                        onChange={handleSearchChange}
                        focusBorderColor={colorMode === 'dark' ? 'white' : 'black'}
                    />
                    <Box maxH='200px' overflowY='auto'>
                    {loading ? (
                        <Box pt={5}>
                            <Text>Searching...</Text>
                        </Box>
                    ) : search.length === 0 ? (
                        <Box pt={5}>
                            <Text>Type at least 3 characters</Text>
                        </Box>
                    ) : results.length === 0 ? (
                        <Box pt={5}>
                            <Text>Results not found</Text>
                        </Box>
                    ) : (
                        results.map((result, index) => (
                        <Box key={index} as='button' _hover={{ bg: hoverColor }} w='100%' py={2} px={5} display='flex' alignItems='center' justifyContent='flex-start' onClick={() => handleResultClick(result)}>
                            <Text>{`${result.postal_code}, ${result.sub_district}, ${result.city}, ${result.province_name}`}</Text>
                        </Box>
                        ))
                    )}
                    </Box>
                </Box>
            </Collapse>
        </>
    )
}

export default PostalSelect;