import React from 'react'
import { Box, Center, Button, HStack, Heading } from '@chakra-ui/react'
import BrowseCategories from './BrowseCategories'
// import Carousal from './Carousal'
import Footer from './Footer'
import Carousel from './Carousal'
const LandingPage = () => {
    return (
        <div>
            <Box bg='rgb(32,33,36)' w='100%' p={4} color='white' >
                <Center gap={5}>
                    LET'S ORDER FOE DELIVERY, PICK UP, OR DINE-IN
                    <Button background={"red"} borderRadius={20}>Start Order</Button>
                </Center>
            </Box>
            <Box bg='rgb(248,247,245)' w='100%' color='white'>
                <HStack spacing='8px' marginLeft="250px">
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
            <Box bg='rgb(248,247,245)' w='100%' p={4} color='black'>
                <Heading noOfLines={1} marginLeft="230px">
                    WELOCME TO KFC!
                </Heading>
            </Box>
            <BrowseCategories />
            <Carousel />
            <Footer />
        </div>
    )
}

export default LandingPage


