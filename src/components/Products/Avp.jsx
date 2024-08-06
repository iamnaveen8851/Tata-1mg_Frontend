import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/actions/action";
import { Badge, Box, Image, Text, IconButton } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

function Avp() {
  const data = useSelector((state) => state.avpReducer.data);
  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      {/* sort filter  */}

      <Box
        p={10}
        w={"80%"}
        display={"grid"}
        gridTemplateColumns={"repeat(4, 1fr)"}
        justifyContent={"space-around"}
        alignItems={"center"}
        gap={5}
        m={"auto"}
      >
        {data.map((product) => (
          <Box
            p={5}
            boxShadow={"lg"}
            m={"auto"}
            key={product.id}
            position="relative"
            height="350px" // Fixed height for consistent card size
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            borderRadius="md"
            overflow="hidden" // Ensure content does not overflow
          >
            {/* Image */}
            <Box>
              <Image
                src={product.img}
                alt={product.title}
                objectFit="cover"
                width="100%"
                height="100px" // Fixed height for image
                mb={3} // Margin bottom to separate from the title
              />
            </Box>

            {/* Title and details */}
            <Box flex="1">
              <Text fontSize={16} fontWeight="bold" mb={2}>
                {product.title}
              </Text>
              <Text fontSize={12} color={"grey"} mb={2}>
                {product.storage}
              </Text>
              <Text fontSize={18} mb={2}>
                <Badge colorScheme="green">{product.rating}</Badge>
              </Text>
              <Text fontSize={14} mb={1}>MRP ₹</Text>
              <Text fontSize={16} fontWeight="semibold">
                {product.price}
              </Text>
            </Box>

            {/* Cart icon button */}
            <IconButton
              icon={<FaShoppingCart />}
              position="absolute"
              bottom={2}
              right={2}
              aria-label="Add to Cart"
              variant="outline"
              size="sm"
            />
          </Box>
        ))}
      </Box>
    </>
  );
}

export default Avp;
