import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/actions/productAction";
import {
  Badge,
  Box,
  Image,
  Text,
  IconButton,
  Select,
  Checkbox,
  useToast, // Import useToast from Chakra UI
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function SearchResults({ searchResults }) {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [sortByPrice, setSortByPrice] = useState("");
  const [filterByTitle, setFilterByTitle] = useState("");
  const toast = useToast(); // Initialize toast

  useEffect(() => {
    dispatch(fetchData(sortByPrice, filterByTitle));
  }, [dispatch, sortByPrice, filterByTitle]);

  const handleCheckboxChange = (value) => {
    setFilterByTitle(value);
  };

  const addToCart = (product) => {
    // Retrieve the existing products from local storage
    const existingProducts = JSON.parse(localStorage.getItem("cart")) || [];

    // Update the data with existing products
    const updatedProducts = [...existingProducts, product];
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
      {/* sort filter  */}
      <Box
        w={"79%"}
        ml={{
          base: 0,
          md: 0,
          lg: 0,
          xl: "18%",
        }}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Text fontSize={18} fontWeight={"600"}>
            Products
          </Text>
        </Box>
        <Box
          w={"25%"}
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          gap={5}
        >
          SortBy
          <Select
            value={sortByPrice}
            onChange={(e) => setSortByPrice(e.target.value)}
          >
            <option value="">Relevance</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </Select>
        </Box>
      </Box>

      <Box display={"flex"} justifyContent={"space-around"}>
        {/* products */}
      </Box>
      <Box
        p={10}
        w={"85%"}
        display={"grid"}
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        justifyContent={"flex-end"}
        alignItems={"center"}
        gap={5}
        ml={"auto"}
      >
        {searchResults.map((product) => (
          <Link to={`/products/${product._id}`} key={product._id}>
            <Box
              p={5}
              boxShadow={"lg"}
              m={"auto"}
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
                <Text fontSize={14} mb={1}>
                  MRP ₹
                </Text>
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
                onClick={() => addToCart(product)} // Add this line to handle click
              />
            </Box>
          </Link>
        ))}
      </Box>
    </>
  );
}

export default SearchResults;
