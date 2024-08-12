import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const toast = useToast();
  console.log(id);
  async function singleData(id) {
    try {
      const {
        data: { data },
      } = await axios.get(
        `https://tata-1mg-backend.onrender.com/products/${id}`
      );
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    singleData(id);
  }, [id]);

  const addToCart = () => {
    // Retrieve the existing products from local storage
    const existingProducts = JSON.parse(localStorage.getItem("cart")) || [];

    // Update the data with existing products
    const updatedProducts = [...existingProducts, data];
    localStorage.setItem("cart", JSON.stringify(updatedProducts));

    toast({
      title: "Product added to cart",
      description: "Your item has been added to the cart successfully!",
      status: "success",
      duration: 3000, // Duration in milliseconds
      isClosable: true,
    });
  };

  return (
    <>
      <Flex
        flexDirection={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        justifyContent={"space-between"}
        alignItems={"center"}
        m="auto"
        p={20}
      >
        <Box boxShadow="base" p={5} ml="15%">
          <Image w={"180px"} src={data.img} />
        </Box>
        <Box p={10}>
          <Heading>{data.title}</Heading>
          <br />
          <Text fontSize={"18px"} fontWeight={"550"}>
            Price: Rs.{data.price}
          </Text>
          <br />
          <Button
            bg="tomato"
            color="white"
            _hover={{ background: "green", color: "white" }}
            onClick={addToCart}
          >
            Add To Cart
          </Button>
        </Box>
      </Flex>
    </>
  );
}

export default SingleProduct;
