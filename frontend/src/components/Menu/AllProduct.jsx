import { Box, Button, Center, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import Products from './Products'
import Footer from "../Body/Footer"
const AllProduct = () => {
    return (
        <div>
            <Box bg='rgb(32,33,36)' w='100%' p={4} color='white'>
                <Center gap={5}>
                    <Heading as='h4' size='xs'>
                        LET'S ORDER FOE DELIVERY, PICK UP, OR DINE-IN
                    </Heading>
                    <Button background={"rgb(228,0,43)"} borderRadius={20}>Start Order</Button>
                </Center>
            </Box>

            <Box bg='red' w='100%' color='white' >
                <Flex columns={[1, null, 2]} marginLeft={20}>
                    <Box w='25rem' bg='red.900' h="400px" position={"fixed"}>
                        <Box bg='rgb(248,247,245)' w='100%' color='white'>
                            <HStack spacing='8px' marginLeft="80px">
                                <Box w='10px' bg='rgb(228,0,43)' color="rgb(228,0,43)">
                                    1
                                </Box>
                                <Box w='10px' bg='rgb(228,0,43)' color="rgb(228,0,43)">
                                    2
                                </Box>
                                <Box w='10px' bg='rgb(228,0,43)' color="rgb(228,0,43)">
                                    3
                                </Box>
                            </HStack>
                        </Box>
                        <Heading color={"black"} as='h1' size='md' marginLeft={10} fontFamily={"National 2 Condensed"} fontStyle={"normal"} fontWeight={"700"} fontSize={"30px"} lineHeight={"43px"} letterSpacing={"1px"} textTransform={"uppercase"} paddingBottom={"1vw"}>
                            KFC MENU
                        </Heading>
                        <Text fontSize='md' marginLeft={10}>CHIKEN BUCKETS</Text>
                        <Text fontSize='md' marginLeft={10}>NEW LAUNCH</Text>
                        <Text fontSize='md' marginLeft={10}>BIRYANI BUCKETS</Text>
                        <Text fontSize='md' marginLeft={10}>BOX MEALS</Text>
                        <Text fontSize='md' marginLeft={10}>BURGERS</Text>
                        <Text fontSize='md' marginLeft={10}>BEVERAGES</Text>
                    </Box>
                    <Box w='60rem' bg='red.800' marginLeft={"400px"}>
                        <Products />
                    </Box>
                </Flex>
            </Box>
            <Footer />

        </div>
    )
}

export default AllProduct
