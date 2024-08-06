import { Box, Button, Center, Heading, Image, SimpleGrid, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const toast = useToast();
  const totalPrice = cartData.reduce((acc, product) => acc + product.price, 0);

  // Remove item from cart
  const handleRemove = (id) => {
    const updatedCartData = cartData.filter((product) => product._id !== id);
    setCartData(updatedCartData);
    localStorage.setItem("cart", JSON.stringify(updatedCartData));
  };

  // Checkout handler
  const handleCheckout = () => {
    toast({
      title: "Your Order has been placed",
      description: "Successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
      <Heading mt="2%" textAlign="center" fontSize="40px" textDecoration="underline">
        CART
      </Heading>
      {cartData.length > 0 ? (
        <SimpleGrid
          w="100%"
          p={10}
          gap={10}
          columns={{ base: 1, sm: 1, md: 2, lg: 2, xl: 2, "2xl": 2 }}
          m="auto"
        >
          <Box boxShadow="2xl" p="6">
            {cartData.map((product) => (
              <Box mt={10} key={product._id}>
                <Box>
                  <Image m="auto" h="200px" w="100px" src={product.img} />
                </Box>
                <Center display="grid">
                  <Text fontSize="16px" fontWeight="bold">{product.title}</Text>
                  <Text fontSize="16px" fontWeight="550">Rs. {product.price}</Text>
                  <Button
                    mt="5%"
                    _hover={{ background: "red", color: "white" }}
                    onClick={() => handleRemove(product._id)}
                  >
                    Remove Item
                  </Button>
                </Center>
              </Box>
            ))}
          </Box>
          <Box>
            <Box boxShadow="2xl" p="6">
              <Heading textAlign="center">Checkout Form</Heading>
              <Box
                display="flex"
                justifyContent="space-between"
                flexDirection={{ base: "column", sm: "column", md: "row" }}
                p={{ base: "10%", sm: "10", md: "2%" }}
              >
                <Text mt="2%" fontSize="20px" fontWeight="bold">
                  Total Price: ₹{totalPrice}
                </Text>
                <Button
                  mt="2%"
                  bg="green"
                  color="white"
                  _hover={{ background: "blue", color: "white" }}
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
              </Box>
              <br />
              <Box>
                <Heading fontSize="20px">WE ACCEPT:</Heading>
                <br />
                <Box>
                  <Image
                    w="300px"
                    h="30px"
                    src="https://assets.asosservices.com/asos-finance/images/marketing/single.png"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      ) : (
        <Box>
          <Center p={50} display="flex">
            <Heading fontWeight={400}>Your Cart is Empty :-( </Heading>
          </Center>
          <Center>
            <Link to="/">
              <Button
                bg="green"
                color="white"
                _hover={{ background: "blue", color: "white" }}
              >
                Go Back To Home
              </Button>
            </Link>
          </Center>
        </Box>
      )}
    </>
  );
}

export default Cart;
