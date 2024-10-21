import React, { useRef } from 'react';
import { Badge, Box, Image, Menu, MenuButton, MenuItem, MenuList, Text, useColorMode, useDisclosure } from '@chakra-ui/react';
import { IoIosSearch } from 'react-icons/io';
import { BsBag } from 'react-icons/bs';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { useScreenSize } from '../hooks/useScreenSize';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import CartPopOver from './CartPopover';
import MenuModal from './MenuModal';
import CartDrawer from './CartDrawer';
import SearchModal from './SearchModal';

const NavBar = () => {
    const screenSize = useScreenSize();
    const menuRef = useRef();
    const drawerRef = useRef();
    const { colorMode } = useColorMode();

    const navigate = useNavigate();

    const { isOpen: isMenuOpen, onOpen: onMenuOpen, onClose: onMenuClose } = useDisclosure();
    const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
    const { isOpen: isSearchOpen, onOpen: onSearchOpen, onClose: onSearchClose } = useDisclosure();

    const page = window.location.pathname;

    const fontColorActive = colorMode === 'dark' ? 'white' : '#1a202c';
    const fontColorInctive = colorMode === 'light' ? 'gray' : '#8faec0';
    const loginColor = colorMode === 'dark' ? 'lightpink' : 'crimson';

    return (
        <Box w='100%' display='flex' alignItems='center' justifyContent='center' overflow='hidden' px={screenSize === 'mobile' ? 5 : 10}>
            <Box w='1580px' h='100px' display='flex' alignItems='center' justifyContent='flex-start'>
                <Box flex={1} display='flex' alignItems='center' justifyContent='flex-start'> 
                    <Box as='button' onClick={() => navigate('/')}>
                        <Image
                            src='/logo.png' w={50}
                        />
                    </Box>
                </Box>
                { screenSize !== 'extraSmall' && screenSize !== 'mobile' ? 
                    <>
                        <Box flex={7} display='flex' alignItems='center' justifyContent='flex-start' >
                            <Box pr={5} as='button' onClick={() => navigate('/')}>
                                <Text color={page === '/' ? fontColorActive : fontColorInctive} >Home</Text>
                            </Box>
                            <Box px={5}>
                                <Menu isLazy>
                                    <MenuButton color={page === '/products' ? fontColorActive : fontColorInctive}>Belanja</MenuButton>
                                    <MenuList>
                                        <MenuItem>
                                            <Box as='button' onClick={() => navigate('/products')}>
                                                Sub Menu
                                            </Box>
                                        </MenuItem>
                                        <MenuItem>Sub Menu</MenuItem>
                                        <MenuItem>Sub Menu</MenuItem>
                                        <MenuItem>Sub Menu</MenuItem>
                                    </MenuList>
                                </Menu>
                            </Box>
                            <Box px={5} as='button' >
                                <Text color={fontColorInctive}>Mahadewa.ID</Text>
                            </Box>
                            <Box px={5} as='button' >
                                <Text color={fontColorInctive}>Mahadewa E-Servis</Text>
                            </Box>
                        </Box>
                        <Box flex={1} display='flex' alignItems='center' justifyContent='flex-end'>
                            <Box pr={5} as='button' onClick={() => navigate('/login')}>
                                <Text color={page === '/login' && loginColor}>Login</Text>
                            </Box>
                            <Box px={5} as='button' onClick={onSearchOpen}>
                                <IoIosSearch size={20} />
                            </Box>
                            <SearchModal isSearchOpen={isSearchOpen} onSearchClose={onSearchClose} />
                            { screenSize !== 'medium' && screenSize !== 'small' ?
                                <>
                                    {page === '/cart' ?
                                        <Box display='flex' alignItems='center' justifyContent='center' as='button' px={5}>
                                            <Box position='relative' top={-3} right={-6}>
                                                <Badge variant='solid' colorScheme='red'>0</Badge>
                                            </Box>
                                            <BsBag size={20} />
                                        </Box> :
                                        <CartPopOver>
                                            <Box display='flex' alignItems='center' justifyContent='center' as='button' px={5}>
                                                <Box position='relative' top={-3} right={-6}>
                                                    <Badge variant='solid' colorScheme='red'>0</Badge>
                                                </Box>
                                                <BsBag size={20} />
                                            </Box>
                                        </CartPopOver>
                                    }
                                </> :
                                <>
                                    <Box display='flex' alignItems='center' justifyContent='center' as='button' px={5} onClick={page === '/cart' ? undefined : onDrawerOpen}>
                                        <Box position='relative' top={-3} right={-6}>
                                            <Badge variant='solid' colorScheme='red'>0</Badge>
                                        </Box>
                                        <BsBag size={20} />
                                    </Box>
                                    <CartDrawer drawerRef={drawerRef} isDrawerOpen={isDrawerOpen} onDrawerClose={onDrawerClose} />
                                </>
                            }
                        </Box>
                        <Box pl={5}>
                            <ColorModeSwitcher />
                        </Box>
                    </> :
                    <>
                        <Box flex={1} display='flex' alignItems='center' justifyContent='flex-end'>
                            { screenSize !== 'mobile' && 
                            <Box pr={5}>
                                <Text as='button'>Login</Text>
                            </Box>
                            }
                            <Box px={screenSize === 'mobile' ? 2.5 : 5} as='button' onClick={onSearchOpen}>
                                <IoIosSearch size={20} />
                            </Box>
                            <SearchModal isSearchOpen={isSearchOpen} onSearchClose={onSearchClose} screenSize={screenSize} />
                            <Box display='flex' alignItems='center' justifyContent='center' as='button' onClick={page === '/cart' ? undefined : onDrawerOpen} px={screenSize === 'mobile' ? 2.5 : 5}>
                                <Box position='relative' top={-3} right={-6}>
                                    <Badge variant='solid' colorScheme='red'>0</Badge>
                                </Box>
                                <BsBag size={20} />
                            </Box>
                            <CartDrawer drawerRef={drawerRef} isDrawerOpen={isDrawerOpen} onDrawerClose={onDrawerClose} /> 
                        </Box>
                        <Box px={screenSize === 'mobile' ? 2.5 : 5}>
                            <ColorModeSwitcher />
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='center' pl={screenSize === 'mobile' ? 2.5 : 5}>
                            <Box onClick={onMenuOpen} as='button'>
                                <HiOutlineMenuAlt3 size={20} />
                            </Box>
                        </Box>
                        <MenuModal screenSize={screenSize} menuRef={menuRef} isMenuOpen={isMenuOpen} onMenuClose={onMenuClose} />
                    </>
                }
            </Box>
        </Box>
    )
}

export default NavBar;