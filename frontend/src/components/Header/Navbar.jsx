import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    // Collapse,
    // Icon,
    // Link,
    // Popover,
    // PopoverTrigger,
    // PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Divider,
    Image,
    Heading,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    // ChevronDownIcon,
    // ChevronRightIcon,
} from '@chakra-ui/icons';
// BsPersonCircle
// import {  } from "react"
import { BsPersonCircle } from "react-icons/bs";
import { Link, Navigate } from 'react-router-dom';
export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();

    const handle = () => {
        <Navigate to="/addtocart" replace={true} />
    }

    return (
        <Box bg={"white"} >
            <Flex

                color={useColorModeValue('gray.600', 'white')}
                minH={'100px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                // p={10}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex

                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>

                <Flex justify={{ base: 'center', md: 'start' }} width="80%" minH={'50px'} p={5}>
                    <Text
                        marginLeft={110}

                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')}>
                        <Link to={"/"}>
                            <img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" />
                        </Link>
                    </Text>
                    <Text display={{ base: 'none', md: 'flex' }} marginLeft={50} >

                        <Heading as='h3' size='xs' color="black" cursor={"pointer"} href={'/menu'}>
                            <Link to={"/menu"}>Menu</Link>
                        </Heading>
                    </Text>
                    <Text display={{ base: 'none', md: 'flex' }} marginLeft={30}>

                        <Heading as='h3' size='xs' color="black" cursor={"pointer"}>
                            <Link to={"/deals"}>Deals</Link>
                        </Heading>
                    </Text>

                    {/* <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex> */}
                </Flex>

                <Stack

                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}
                    width="300px"
                >

                    {/* <Button
                        as={'a'}
                        fontSize={'sm'}
                        fontWeight={400}
                        variant={'link'}
                        href={'#'}>
                        <BsPersonCircle color='black' />
                        Sign In
                    </Button> */}
                    <Box display={"flex"} gap={3} marginTop={4}>
                        <BsPersonCircle color='black' size={25} />

                        <Heading as='h5' size='sm' w={"60px"} color="black" cursor={"pointer"}>

                            <Link to={"/signin"}>Sign In</Link>
                        </Heading>
                        <Divider orientation='vertical' />
                    </Box>


                    <Link to={"/addtocart"}>
                        <Box
                            display={{ base: 'none', md: 'inline-flex' }}
                            width="50px"
                        >


                            <Heading as='h6' size='xs' marginTop={4} color="black">
                                ₹0
                            </Heading>
                            <Image href={'/signin'} cursor={"pointer"} src={"https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"} />

                        </Box>
                    </Link>
                </Stack>
            </Flex>

            {/* <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse> */}
        </Box>
    );
}

// const DesktopNav = () => {
//     const linkColor = useColorModeValue('gray.600', 'gray.200');
//     const linkHoverColor = useColorModeValue('gray.800', 'white');
//     const popoverContentBgColor = useColorModeValue('white', 'gray.800');

//     return (
//         <Stack direction={'row'} spacing={4}>
//             {NAV_ITEMS.map((navItem) => (
//                 <Box key={navItem.label}>
//                     <Popover trigger={'hover'} placement={'bottom-start'}>
//                         <PopoverTrigger>
//                             <Link
//                                 p={2}
//                                 href={navItem.href ?? '#'}
//                                 fontSize={'sm'}
//                                 fontWeight={500}
//                                 color={linkColor}
//                                 _hover={{
//                                     textDecoration: 'none',
//                                     color: linkHoverColor,
//                                 }}>
//                                 {navItem.label}
//                             </Link>
//                         </PopoverTrigger>

//                         {navItem.children && (
//                             <PopoverContent
//                                 border={0}
//                                 boxShadow={'xl'}
//                                 bg={popoverContentBgColor}
//                                 p={4}
//                                 rounded={'xl'}
//                                 minW={'sm'}>
//                                 <Stack>
//                                     {navItem.children.map((child) => (
//                                         <DesktopSubNav key={child.label} {...child} />
//                                     ))}
//                                 </Stack>
//                             </PopoverContent>
//                         )}
//                     </Popover>
//                 </Box>
//             ))}
//         </Stack>
//     );
// };

// const DesktopSubNav = ({ label, href, subLabel }) => {
//     return (
//         <Link
//             href={href}
//             role={'group'}
//             display={'block'}
//             p={2}
//             rounded={'md'}
//             _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
//             <Stack direction={'row'} align={'center'}>
//                 <Box>
//                     <Text
//                         transition={'all .3s ease'}
//                         _groupHover={{ color: 'pink.400' }}
//                         fontWeight={500}>
//                         {label}
//                     </Text>
//                     <Text fontSize={'sm'}>{subLabel}</Text>
//                 </Box>
//                 <Flex
//                     transition={'all .3s ease'}
//                     transform={'translateX(-10px)'}
//                     opacity={0}
//                     _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
//                     justify={'flex-end'}
//                     align={'center'}
//                     flex={1}>
//                     <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
//                 </Flex>
//             </Stack>
//         </Link>
//     );
// };

// const MobileNav = () => {
//     return (
//         <Stack
//             bg={useColorModeValue('white', 'gray.800')}
//             p={4}
//             display={{ md: 'none' }}>
//             {NAV_ITEMS.map((navItem) => (
//                 <MobileNavItem key={navItem.label} {...navItem} />
//             ))}
//         </Stack>
//     );
// };

// const MobileNavItem = ({ label, children, href }) => {
//     const { isOpen, onToggle } = useDisclosure();

//     return (
//         <Stack spacing={4} onClick={children && onToggle}>
//             <Flex
//                 py={2}
//                 as={Link}
//                 href={href ?? '#'}
//                 justify={'space-between'}
//                 align={'center'}
//                 _hover={{
//                     textDecoration: 'none',
//                 }}>
//                 <Text
//                     fontWeight={600}
//                     color={useColorModeValue('gray.600', 'gray.200')}>
//                     {label}
//                 </Text>
//                 {children && (
//                     <Icon
//                         as={ChevronDownIcon}
//                         transition={'all .25s ease-in-out'}
//                         transform={isOpen ? 'rotate(180deg)' : ''}
//                         w={6}
//                         h={6}
//                     />
//                 )}
//             </Flex>

//             <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
//                 <Stack
//                     mt={2}
//                     pl={4}
//                     borderLeft={1}
//                     borderStyle={'solid'}
//                     borderColor={useColorModeValue('gray.200', 'gray.700')}
//                     align={'start'}>
//                     {children &&
//                         children.map((child) => (
//                             <Link key={child.label} py={2} href={child.href}>
//                                 {child.label}
//                             </Link>
//                         ))}
//                 </Stack>
//             </Collapse>
//         </Stack>
//     );
// };

// // interface NavItem {
// //     label: string;
// //     subLabel?: string;
// //     children?: Array<NavItem>;
// //     href?: string;
// // }

// const NAV_ITEMS = [
//     {
//         label: 'Inspiration',
//         children: [
//             {
//                 label: 'Explore Design Work',
//                 subLabel: 'Trending Design to inspire you',
//                 href: '#',
//             },
//             {
//                 label: 'New & Noteworthy',
//                 subLabel: 'Up-and-coming Designers',
//                 href: '#',
//             },
//         ],
//     },
//     {
//         label: 'Find Work',
//         children: [
//             {
//                 label: 'Job Board',
//                 subLabel: 'Find your dream design job',
//                 href: '#',
//             },
//             {
//                 label: 'Freelance Projects',
//                 subLabel: 'An exclusive list for contract work',
//                 href: '#',
//             },
//         ],
//     },
//     {
//         label: 'Learn Design',
//         href: '#',
//     },
//     {
//         label: 'Hire Designers',
//         href: '#',
//     },
// ];
