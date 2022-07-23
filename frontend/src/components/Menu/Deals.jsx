import { Box, Button, Center, Heading } from '@chakra-ui/react'
import React from 'react'

const Deals = () => {
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
        </div>
    )
}

export default Deals
