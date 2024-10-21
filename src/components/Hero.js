import React, { useEffect, useState, useCallback } from 'react';
import { Box, Text, VStack, Image, Stack, useColorMode } from '@chakra-ui/react';
import Slider from 'react-slick';
import HeroData from '../assets/data/HeroData.json';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useScreenSize } from '../hooks/useScreenSize';


const Hero = () => {
    const screenSize = useScreenSize();
    const { colorMode } = useColorMode();

    const bgGradient = colorMode === 'dark' ? 'linear(to-br, #1a202c, #1a202c, whitesmoke)' : 'linear(to-br, white, whitesmoke, crimson, firebrick)';
    const fontColor = colorMode === 'dark' ? 'white' : '#1a202c';

    const heroHeight = () => {
        if (screenSize === 'extraLarge') {
            return '875px'
        } if (screenSize === 'large') {
            return '875px'
        } if (screenSize === 'medium') {
            return '775px'
        } if (screenSize === 'small') {
            return '575px'
        } if (screenSize === 'extraSmall') {
            return '350px'
        } if (screenSize === 'mobile') {
            return '350px'
        }
    }

    const imageResize = () => {
        if (screenSize === 'extraLarge') {
            return '830px'
        } if (screenSize === 'large') {
            return '830px'
        } if (screenSize === 'medium') {
            return '830px'
        } if (screenSize === 'small') {
            return '630px'
        } if (screenSize === 'extraSmall') {
            return '450px'
        } if (screenSize === 'mobile') {
            return '50vw'
        }
    }

    const lineHeight = () => {
        if (screenSize === 'extraLarge') {
            return '165px'
        } if (screenSize === 'large') {
            return '165px'
        } if (screenSize === 'medium') {
            return '105px'
        } if (screenSize === 'small') {
            return '100px'
        } if (screenSize === 'extraSmall') {
            return '60px'
        } if (screenSize === 'mobile') {
            return '50px'
        }
    }

    const heroWidth = useCallback(() => {
        if (screenSize === 'extraLarge') {
          return '1580px';
        } else {
          return window.innerWidth - (screenSize === 'mobile' ? 50 :  85);
        }
      }, [screenSize]);

    const [hero, setHero] = useState(heroWidth());

    useEffect(() => {
        const handleResize = () => {
            setHero(heroWidth());
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [heroWidth]);

    const sologanSize = () => {
        if(screenSize === 'extraLarge'){
            return '190px'
        } if(screenSize === 'large') {
            return '190px'
        } else {
            return '10vw'
        }
    }

    const titleSize = () => {
        if (screenSize === 'extraLarge') {
            return '30px'
        } if (screenSize === 'large') {
            return '30px'
        } if (screenSize === 'medium') {
            return '25px'
        } if (screenSize === 'small') {
            return '20px'
        } if (screenSize === 'extraSmall') {
            return '18px'
        } if (screenSize === 'mobile') {
            return '16px'
        } 
    }

    const subTitleSize = () => {
        if (screenSize === 'extraLarge') {
            return '50px'
        } if (screenSize === 'large') {
            return '50px'
        } if (screenSize === 'medium') {
            return '45px'
        } if (screenSize === 'small') {
            return '40px'
        } if (screenSize === 'extraSmall') {
            return '35px'
        } if (screenSize === 'mobile') {
            return '30px'
        } 
    }

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocuse: true,
        mobileFirst: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: 'ease-in-out',
    }

    return (
        <Box w='100%' overflow='hidden' px={10}>
            <VStack>
                <Box w={hero} h={heroHeight}>
                    <Slider {...settings}>
                        {HeroData.map((item) => (
                            <Box item={item} position='relative' bgGradient={bgGradient} w='100%' h={heroHeight} borderRadius='3xl' display='flex' alignItems='center' justifyContent='center' >
                                <Box h='100%' display='flex' alignItems='center' justifyContent='center'>
                                    <Box w='90%' display='flex' alignItems='center' justifyContent='center'>
                                        <Stack>
                                            <Text color={fontColor} textTransform='capitalize' fontSize={titleSize} fontWeight={700}>
                                                mahadewa
                                            </Text>
                                            <Text color={fontColor} textTransform='capitalize' fontSize={subTitleSize} fontWeight={900}>
                                                toko online
                                            </Text>
                                            <Text color='white' textTransform='uppercase' fontSize={sologanSize} fontWeight={900} lineHeight={lineHeight} style={{ letterSpacing: '-0.05em' }}>
                                                terpercaya
                                            </Text>
                                            <Box display='flex' mt='20px' zIndex={1}>
                                                <Box
                                                    bg='crimson' h={screenSize !== 'mobile' ? '50px' : '45px'} w={screenSize !== 'extraSmall' && screenSize !== 'mobile' ? '200px' : '180px'} borderRadius='full' _hover={{ bg: '#1a202c' }} transition='background-color 0.3s ease' as='button'>
                                                    <Text color='white' fontSize={screenSize !== 'extraSmall' && screenSize !== 'mobile' ? '18px' : '16px'} fontWeight={300}>Belanja Sekarang</Text>
                                                </Box>
                                            </Box>
                                        </Stack>
                                    </Box>
                                    <Box position='absolute'>
                                        <Image src={item.img} w={imageResize} />
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </VStack>
        </Box>
    )
}

export default Hero;