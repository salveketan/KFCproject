import { Box, Button, Divider, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from "axios"
import { CgShoppingBag } from "react-icons/cg"
import { useDispatch, useSelector } from 'react-redux';
import { fetch_data } from '../../redux/product/action';
// import { store } from '../../redux/store';

const Products = () => {

    const product = useSelector(store => store.productData.product.product);

    // console.log(product);

    
    const dispatch = useDispatch();

    // const [product, setProduct] = useState([]);

    useEffect(() => {
        getData()
    }, []);

    const getData = () => {
        fetch("https://kfcbackendketan.herokuapp.com/product")
            .then(x => x.json())
            .then(data => {
                dispatch(fetch_data(data))
            });
    };

    // const getData = () => {
    //     const data = axios.get('https://kfcbackendketan.herokuapp.com/product')
    // .then(function (response) {
    //     (response.data.product[1]);
    // })
    // .catch(function (error) {
    //     console.log(error);
    // })
    //   }
    // console.log(product);



    return (
        <div>
            <Box bg='blue' w='100%' p={4} color='white'>
                This is the Box
            </Box>
            <Divider />
            <Box bg='blue' w='100%' p={7} color='white'>
                <Box>
                    <Heading as='h5' size='sm'>
                        CHIKEN BUCKETS
                    </Heading>
                    <SimpleGrid columns={[1, null, 2]} spacing='40px'>

                        {product?.map((e) => (
                            e?.CHICKENBUCKETS.map((a)=>{
                               return(
                                
                                   <Box bg='tomato' >
                                       <Box bg='red'  ><Image borderRadius={"10px"} src={a.image_url}></Image></Box>
                                       <Box >
                                           <Heading color={"black"} as='h5' size='sm' fontFamily={"National 2 Regular"} fontStyle={"normal"} fontWeight={"600"} fontSize={"16px"} lineHeight={"43px"}  >
                                               {a.title}
                                           </Heading>
                                       </Box>
                                       <Box bg='red' display={"flex"} color={"black"}>
                                           <img src="https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg" alt="*" />
                                           <Text marginLeft={"5px"} fontSize='xs'>Non veg -Serves 2-3</Text>
                                       </Box>
                                       <Box bg='green' display={"flex"}>
                                           <Text color={"black"} as='s' marginRight={"5px"}> ₹{a.price} </Text>
                                           <Text color={"red"} > ₹{a.price - 43}  </Text>
                                       </Box>
                                       <Box bg='pink'>
                                           <Text fontSize='sm' color={"black"}> {a.desc}</Text>
                                       </Box>
                                       <Button bg={"rgb(228,0,43)"} textAlign={"center"} marginLeft={"100px"} marginTop={"20px"}>
                                           <Text fontSize='sm' w={"150px"} display="flex" gap={3} > ADD TO CART < CgShoppingBag size={20} /></Text>
                                       </Button>
                                   </Box>
                               )
                               
                            })
                        ))}

                    </SimpleGrid>
                </Box>
                <Box>
                    <Heading as='h5' size='sm'>
                        CHIKEN BUCKETS
                    </Heading>
                    <SimpleGrid columns={[1, null, 2]} spacing='40px'>

                        {/* {product.CHICKENBUCKETS?.map((e) => (
                            <Box bg='tomato' >
                                <Box bg='red' >
                                    <img src={e.image_url} alt="image" />
                                </Box>
                                <Box bg='black'>
                                    <Text fontFamily={"National 2 Regular"}>
                                        {e.title}
                                    </Text>
                                </Box>
                                <Box bg='green' display={"flex"}>
                                    <Text as='s' marginRight={"5px"}> ₹{e.price} </Text>
                                    <Text > ₹{e.price - 43}  </Text>
                                </Box>
                                <Box bg='pink'>
                                    <Heading as='h5' size='sm'>
                                        {e.desc}
                                    </Heading>
                                </Box>
                                <Button colorScheme='blue'>
                                    ADD TO CART
                                    < CgShoppingBag />
                                </Button>
                            </Box>
                        ))} */}
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
