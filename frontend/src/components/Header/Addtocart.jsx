import { Box, Button, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartdata } from '../../redux/product/action'
import { CgShoppingBag } from "react-icons/cg"

const AddToCart = () => {
  const cartData = useSelector(store => store.productData.cart.cart);
  // console.log(cartData);

  const dispatch = useDispatch();
  useEffect(() => {
    fetchCartdata(dispatch)
  }, [])


  let deleteItem = async (id) => {
    // console.log(id)
    await fetch(`http://localhost:5000/cart/${id}`, {
      method: "DELETE",
    })
    fetchCartdata(dispatch)
    alert("Item is remove from cart")
  }


  return (
    <div>
      <Box bg='tomato' w='100%' p={4} color='white'  >
        <Box bg="black" w='60%' gap="5px" margin="auto">
          <Heading as='h6' size='lg'>
            Total No. of item in cart :
          </Heading>
          <Heading as='h6' size='lg'>
            total :
          </Heading>
          <Heading as='h6' size='lg'>
            payment
          </Heading>
        </Box>
        <Box bg='red' w='60%' p={4} color='white' margin="auto">
          cart

          <SimpleGrid columns={[1, null, 2]} spacing='40px'>
            {/* <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box> */}

            {
              cartData?.map((e) =>
                // console.log(e);
                <Box bg='tomato' >
                  <Box bg='red'  ><Image borderRadius={"10px"} src={e.image_url}></Image></Box>
                  <Box >
                    <Heading color={"black"} as='h5' size='sm' fontFamily={"National 2 Regular"} fontStyle={"normal"} fontWeight={"600"} fontSize={"16px"} lineHeight={"43px"}  >
                      {e.title}
                    </Heading>
                  </Box>
                  <Box bg='red' display={"flex"} color={"black"}>
                    <img src="https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg" alt="*" />
                    <Text marginLeft={"5px"} fontSize='xs'>Non veg -Serves 2-3</Text>
                  </Box>
                  <Box bg='green' display={"flex"}>
                    <Text color={"black"} as='s' marginRight={"5px"}> ₹{e.price}</Text>
                    <Text color={"red"} > ₹{e.price - 43}  </Text>
                  </Box>
                  <Box bg='pink'>
                    <Text fontSize='sm' color={"black"}>{e.desc}</Text>
                  </Box>

                  <Button bg={"rgb(228,0,43)"} textAlign={"center"} marginLeft={"100px"} marginTop={"20px"} onClick={() => deleteItem(e._id)} >
                    <Text fontSize='sm' w={"150px"} display="flex" gap={3} > Remove < CgShoppingBag size={20} /></Text>
                  </Button>
                </Box>

              )
            }
          </SimpleGrid>



        </Box>

      </Box>
    </div>
  )
}

export default AddToCart
