import { Box, Divider, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const Products = () => {
    return (
        <div>
            <Box bg='blue' w='100%' p={4} color='white'>
                This is the Box
            </Box>
            <Divider />
            <Box bg='blue' w='100%' p={4} color='white'>
                <Box>
                    <Heading as='h5' size='sm'>
                        CHIKEN BUCKETS
                    </Heading>
                    <SimpleGrid columns={[1, null, 2]} spacing='40px'>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                    </SimpleGrid>
                </Box>
                <Box>
                    <Heading as='h5' size='sm'>
                        CHIKEN BUCKETS
                    </Heading>
                    <SimpleGrid columns={[1, null, 2]} spacing='40px'>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                    </SimpleGrid>
                </Box>
                <Box>
                    <Heading as='h5' size='sm'>
                        CHIKEN BUCKETS
                    </Heading>
                    <SimpleGrid columns={[1, null, 2]} spacing='40px'>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                    </SimpleGrid>
                </Box>
                <Box>
                    <Heading as='h5' size='sm'>
                        CHIKEN BUCKETS
                    </Heading>
                    <SimpleGrid columns={[1, null, 2]} spacing='40px'>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                    </SimpleGrid>
                </Box>
                <Box>
                    <Heading as='h5' size='sm'>
                        CHIKEN BUCKETS
                    </Heading>
                    <SimpleGrid columns={[1, null, 2]} spacing='40px'>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                    </SimpleGrid>
                </Box>
            </Box>

        </div>
    )
}

export default Products
