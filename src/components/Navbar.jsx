import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  // Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Icon,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useMediaQuery,
  Flex,
  Select,
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SearchIcon } from "@chakra-ui/icons";
import { MdLocationOn } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [modalType, setModalType] = useState(""); // Track which modal to show
  const [popoverOpen, setPopoverOpen] = useState(false); // Manage popover visibility
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (inputValue === "") {
      setIsFocused(false);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const openLoginModal = () => {
    setModalType("login");
    onOpen();
  };

  const openSignUpModal = () => {
    setModalType("signup");
    onOpen();
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleSearchChange = async (e) => {
    setSearchQuery(e.target.value);
    try {
      const {
        data: { data },
      } = await axios.get(
        `https://tata-1mg-backend.onrender.com/products?search=${searchQuery}`
      );

      setSearchResults(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearch = async (searchQuery) => {
    // navigate("/products");
    try {
      const {
        data: { data },
      } = await axios.get(
        `https://tata-1mg-backend.onrender.com/products?search=${searchQuery}`
      );
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Box
        boxShadow="xs"
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        m={"auto"}
        gap={10}
        p={2}
        position={"sticky"}
        top={0}
        bg={"white"}
        // position={"sticky"}
        // top={0}
        zIndex={10}
      >
        {/* Hamburger Icon for Mobile */}
        {/* {!isLargerThan768 && ( */}
        <IconButton
          display={{
            base: "block",
            sm: "block",
            md: "block",
            lg: "block",
            xl: "none",
            "2xl": "none",
          }}
          icon={<FaBars />}
          variant="outline"
          onClick={openDrawer}
          // ml={1}
        />
        {/* )} */}

        {/* Logo */}
        <Link to="/">
          <Image
            maxW={{
              base: "70%",
              sm: "70%",
              md: "70%",
              lg: "70%",
              xl: "80%",
              "2xl": "80%",
            }} // Ensure the logo size does not increase
            h={"auto"}
            src="https://www.1mg.com/images/tata_1mg_logo.svg"
          />
        </Link>

        {isLargerThan768 && (
          <Box
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "none",
              xl: "flex",
              "2xl": "flex",
            }}
            alignItems={"center"}
            gap={2}
          >
            <Link style={{ fontSize: "13px" }}>MEDICINES</Link>
            <Link
              style={{
                fontSize: "13px",
                display: "flex",
                textDecoration: "none",
              }}
            >
              LAB TESTS &nbsp;
              <Text
                mt={"1%"}
                borderRadius={5}
                fontSize={11}
                color={"white"}
                bg={"tomato"}
              >
                &nbsp; SAFE &nbsp;
              </Text>
            </Link>
            <Link
              style={{
                fontSize: "13px",
                display: "flex",
                textDecoration: "none",
              }}
            >
              CONSULT DOCTORS
            </Link>
            <Link
              style={{
                fontSize: "13px",
                display: "flex",
                textDecoration: "none",
              }}
            >
              CANCER CARE
            </Link>
            <Link
              style={{
                fontSize: "13px",
                display: "flex",
                textDecoration: "none",
              }}
            >
              PARTNERSHIPS &nbsp;
              <Text
                mt={"1%"}
                borderRadius={5}
                fontSize={11}
                color={"white"}
                bg={"tomato"}
              >
                &nbsp; NEW &nbsp;
              </Text>
            </Link>
            <Link
              style={{
                fontSize: "13px",
                display: "flex",
                textDecoration: "none",
              }}
            >
              CARE PLAN &nbsp;
              <Text
                mt={"1%"}
                borderRadius={5}
                fontSize={11}
                color={"white"}
                bg={"tomato"}
              >
                &nbsp; SAVE MORE &nbsp;
              </Text>
            </Link>
          </Box>
        )}

        <Box display={"flex"} alignItems={"center"} gap={2}>
          {isLargerThan768 ? (
            <>
              <Text
                fontSize={14}
                _hover={{ cursor: "pointer" }}
                onClick={openLoginModal}
              >
                Login
              </Text>
              <Modal isOpen={isOpen && modalType === "login"} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader fontSize={25}>Login</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    {/* Slider */}
                    <Box m={"auto"} w={"60%"}>
                      <Slider {...settings}>
                        <div>
                          <img
                            style={{ marginLeft: "30%" }}
                            src="https://www.1mg.com/images/login-signup/Home-Delivery-of-Medicines.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            style={{ marginLeft: "30%" }}
                            src="https://www.1mg.com/images/login-signup/Your-Go-To-Health-App.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            style={{ marginLeft: "30%" }}
                            src="https://www.1mg.com/images/login-signup/Lab-Tests-at-Home.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            style={{ marginLeft: "30%" }}
                            src="https://www.1mg.com/images/login-signup/Health-Related-Queries.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            style={{ marginLeft: "30%" }}
                            src="https://www.1mg.com/images/login-signup/Know-Your-Medicines.png"
                            alt=""
                          />
                        </div>
                        {/* Add more slides as needed */}
                      </Slider>
                    </Box>
                    <br />
                    <br />
                    {/* Login Form */}
                    <Box>
                      <Text fontSize={14} color={"gray"} textAlign={"left"}>
                        Get access to your orders, lab tests & doctor
                        consultations
                      </Text>
                    </Box>
                    <br />
                    <br />

                    <FormControl position="relative">
                      <FormLabel
                        position="absolute"
                        top={isFocused || inputValue ? "-10px" : "50%"}
                        left="0"
                        transform={
                          isFocused || inputValue
                            ? "scale(0.8) translateY(-100%)"
                            : "translateY(-50%)"
                        }
                        transformOrigin="left top"
                        transition="all 0.2s ease-in-out"
                        color={isFocused ? "tomato" : "gray"}
                      >
                        Enter Mobile Number
                      </FormLabel>
                      <Input
                        type="number"
                        value={inputValue}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        borderBottom={
                          isFocused
                            ? "2px solid tomato"
                            : "2px solid transparent"
                        }
                        variant="unstyled"
                        paddingTop="20px"
                      />
                    </FormControl>
                  </ModalBody>

                  <br />
                  <br />
                  <ModalFooter display={"grid"} justifyContent={"center"}>
                    <Box>
                      <Button colorScheme="white" bg={"tomato"} w={"100%"}>
                        LOGIN
                      </Button>
                      <br />
                      <br />
                      <Text color={"gray"}>
                        New on 1mg? &nbsp;{" "}
                        <Link color={"tomato"} onClick={openSignUpModal}>
                          Sign Up
                        </Link>
                      </Text>
                    </Box>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              |
              <Text
                fontSize={14}
                _hover={{ cursor: "pointer" }}
                onClick={openSignUpModal}
              >
                Sign Up
              </Text>
              <Modal
                isOpen={isOpen && modalType === "signup"}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader fontSize={25}>Sign Up</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    {/* Slider */}
                    <Box m={"auto"} w={"60%"}>
                      <Slider {...settings}>
                        <div>
                          <img
                            style={{ marginLeft: "30%" }}
                            src="https://www.1mg.com/images/login-signup/Home-Delivery-of-Medicines.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            style={{ marginLeft: "30%" }}
                            src="https://www.1mg.com/images/login-signup/Your-Go-To-Health-App.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            style={{ marginLeft: "30%" }}
                            src="https://www.1mg.com/images/login-signup/Lab-Tests-at-Home.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            style={{ marginLeft: "30%" }}
                            src="https://www.1mg.com/images/login-signup/Health-Related-Queries.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            style={{ marginLeft: "30%" }}
                            src="https://www.1mg.com/images/login-signup/Know-Your-Medicines.png"
                            alt=""
                          />
                        </div>
                        {/* Add more slides as needed */}
                      </Slider>
                    </Box>
                    <br />
                    <br />
                    {/* Signup Form */}
                    <Box>
                      <Text fontSize={14} color={"gray"} textAlign={"left"}>
                        Please enter your Mobile number to receive One Time
                        Password (OTP)
                      </Text>
                    </Box>
                    <br />
                    <br />

                    <FormControl position="relative">
                      <FormLabel
                        position="absolute"
                        top={isFocused || inputValue ? "-10px" : "50%"}
                        left="0"
                        transform={
                          isFocused || inputValue
                            ? "scale(0.8) translateY(-100%)"
                            : "translateY(-50%)"
                        }
                        transformOrigin="left top"
                        transition="all 0.2s ease-in-out"
                        color={isFocused ? "tomato" : "gray"}
                      >
                        Enter Mobile Number
                      </FormLabel>
                      <Input
                        type="number"
                        value={inputValue}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        borderBottom={
                          isFocused
                            ? "2px solid tomato"
                            : "2px solid transparent"
                        }
                        variant="unstyled"
                        paddingTop="20px"
                      />
                    </FormControl>
                  </ModalBody>

                  <br />
                  <br />
                  <ModalFooter display={"grid"} justifyContent={"center"}>
                    <Box>
                      <Button colorScheme="white" bg={"tomato"} w={"100%"}>
                        Sign Up
                      </Button>
                      <br />
                      <br />
                      <Text textAlign={"center"} color={"gray"}>
                        Have an account? &nbsp;{" "}
                        <Link color={"tomato"} onClick={openLoginModal}>
                          Login
                        </Link>
                      </Text>
                      <br />
                      <Text fontSize={14} textAlign={"center"}>
                        By signing up, you agree to our Terms and Conditions &
                        Privacy Policy
                      </Text>
                    </Box>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              &nbsp;
              <Text fontSize={15}>Offers</Text>
              &nbsp;
              {/* Cart Icon Popover */}
              <Link to={"/cart"}>
                <Popover
                  variant="none"
                  isOpen={popoverOpen}
                  onOpen={() => setPopoverOpen(true)}
                  onClose={() => setPopoverOpen(false)}
                  closeOnBlur={false} // Prevent closing when clicking outside
                >
                  <PopoverTrigger>
                    <Button
                      onMouseEnter={() => setPopoverOpen(true)}
                      onMouseLeave={() => setPopoverOpen(false)}
                      leftIcon={<Icon as={FaShoppingCart} />}
                      variant="none"
                    >
                      {/* Cart Icon Button */}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    onMouseEnter={() => setPopoverOpen(true)} // Keep popover open on hover
                    onMouseLeave={() => setPopoverOpen(false)} // Close popover when mouse leaves
                  >
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Shopping Cart</PopoverHeader>
                    <PopoverBody>
                      {/* Add cart contents here */}
                      Your cart is empty.
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Link>
              &nbsp;
              <Link fontSize={14}>Need Help?</Link>
            </>
          ) : (
            <Popover
              variant="none"
              isOpen={popoverOpen}
              onOpen={() => setPopoverOpen(true)}
              onClose={() => setPopoverOpen(false)}
              closeOnBlur={false} // Prevent closing when clicking outside
            >
              <PopoverTrigger>
                <Button
                  onMouseEnter={() => setPopoverOpen(true)}
                  onMouseLeave={() => setPopoverOpen(false)}
                  leftIcon={<Icon as={FaShoppingCart} />}
                  variant="none"
                >
                  {/* Cart Icon Button */}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                onMouseEnter={() => setPopoverOpen(true)} // Keep popover open on hover
                onMouseLeave={() => setPopoverOpen(false)} // Close popover when mouse leaves
              >
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Shopping Cart</PopoverHeader>
                <PopoverBody>
                  {/* Add cart contents here */}
                  Your cart is empty.
                </PopoverBody>
              </PopoverContent>
            </Popover>
          )}
        </Box>
      </Box>
      {/* for hamburger menu */}
      <Drawer
        isOpen={!isLargerThan768 && isDrawerOpen}
        placement="left"
        onClose={closeDrawer}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontWeight={"bold"}>TATA 1mg</DrawerHeader>
          <DrawerBody>
            <Link fontSize={13} onClick={closeDrawer}>
              MEDICINES
            </Link>
            <Link
              fontSize={13}
              display={"flex"}
              style={{ textDecoration: "none" }}
              onClick={closeDrawer}
            >
              LAB TESTS &nbsp;
              <Text
                mt={"1%"}
                borderRadius={5}
                fontSize={11}
                color={"white"}
                bg={"tomato"}
              >
                &nbsp; SAFE &nbsp;
              </Text>
            </Link>
            <Link fontSize={13} onClick={closeDrawer}>
              CONSULT DOCTORS
            </Link>
            <Link fontSize={13} onClick={closeDrawer}>
              CANCER CARE
            </Link>
            <Link
              fontSize={13}
              display={"flex"}
              style={{ textDecoration: "none" }}
              onClick={closeDrawer}
            >
              PARTNERSHIPS &nbsp;
              <Text
                mt={"1%"}
                borderRadius={5}
                fontSize={11}
                color={"white"}
                bg={"tomato"}
              >
                &nbsp; NEW &nbsp;
              </Text>
            </Link>
            <Link
              fontSize={13}
              display={"grid"}
              justifyContent={"left"}
              gap={2}
              style={{ textDecoration: "none" }}
              onClick={closeDrawer}
            >
              CARE PLAN &nbsp;
              <Text
                mt={"1%"}
                borderRadius={5}
                fontSize={11}
                color={"white"}
                bg={"tomato"}
              >
                &nbsp; SAVE MORE &nbsp;
              </Text>
            </Link>
            <Link fontSize={14} onClick={openLoginModal}>
              Login
            </Link>
            <Link fontSize={14} onClick={openSignUpModal}>
              Sign Up
            </Link>
            <Link fontSize={15} onClick={closeDrawer}>
              Offers
            </Link>
            <Link fontSize={14} onClick={closeDrawer}>
              Need Help?
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Search bar and Location  Box  */}

      <Box
        // border={"0.5px solid black"}
        bg={"white"}
        position={"sticky"}
        top={14}
        zIndex={10}
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "column",
          xl: "row",
          "2xl": "row",
        }}
        p={1}
        gap={{
          base: 1,
        }}
        boxShadow="xs"
        alignItems={"center"}
      >
        <Box
          w={{
            base: "80%",
            sm: "80%",
            md: "70%",
            lg: "60%",
            xl: "60%",
            "2xl": "60%",
          }}
          display={"flex"}
          justifyContent={"space-around"}
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "column",
            xl: "row",
            "2xl": "row",
          }}
          gap={{
            base: 4,
            sm: 4,
            md: 3,
            lg: 2,
            xl: 1,
            "2xl": 1,
          }}
          alignItems={"center"}
        >
          {/* Add location Box */}
          <InputGroup borderRadius={"5px"} ml={2} bg={"#EDF2F7"} w={"45%"}>
            <InputLeftElement pointerEvents="none">
              <Icon as={MdLocationOn} color="grey" />
            </InputLeftElement>
            <Select
              icon=""
              pl={1}
              textAlign={"center"}
              fontWeight={650}
              fontSize={"14px"}
              borderColor="transparent" // Remove the default border color
              focusBorderColor="transparent" // Remove the border color when focused
            >
              <option value="">Select-Location</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
              <option value="bangalore">Bangalore</option>
              <option value="chennai">Chennai</option>
              <option value="kolkata">Kolkata</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="pune">Pune</option>
              <option value="ahmedabad">Ahmedabad</option>
            </Select>
          </InputGroup>

          {/* Seach Box */}
          {/* <InputGroup borderRadius={"5px"} bg={"#EDF2F7"} color={"black"}>
            <Input
              borderColor="transparent" // Remove the default border color
              focusBorderColor="transparent" // Remove the border color when focused
              placeholder="Search for Medicines and Health Products"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <InputRightElement>
              <IconButton
                aria-label="Search"
                icon={<SearchIcon />}
                variant="ghost"
                onClick={handleSearch}
              />
            </InputRightElement>
          </InputGroup> */}
          <InputGroup
            borderRadius={"5px"}
            bg={"#EDF2F7"}
            color={"black"}
            position="relative"
          >
            <Input
              borderColor="transparent"
              focusBorderColor="transparent"
              placeholder="Search for Medicines and Health Products"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <InputRightElement>
              <IconButton
                aria-label="Search"
                icon={<SearchIcon />}
                variant="ghost"
                onClick={() => handleSearch(searchQuery)}
              />
            </InputRightElement>

            {/* Search Results Box */}
            {searchQuery && (
              <Box
                position="absolute"
                top="100%"
                left={0}
                right={0}
                bg="white"
                borderRadius="md"
                boxShadow="md"
                zIndex={20}
                maxHeight="300px"
                overflowY="auto"
              >
                {searchResults.length > 0 ? (
                  searchResults.map((product) => (
                    <Box
                      key={product.id}
                      p={2}
                      borderBottom="1px solid #e2e8f0"
                    >
                      <Text fontSize="sm">{product.title}</Text>
                    </Box>
                  ))
                ) : (
                  <Text p={2} textAlign="center">
                    No results found
                  </Text>
                )}
              </Box>
            )}
          </InputGroup>
        </Box>

        {/* right box */}
        <Box
          display={"flex"}
          justifyContent={"space-around"}
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "column",
            xl: "row",
            "2xl": "row",
          }}
          gap={{
            base: 4,
          }}
          mr={5}
        >
          <Text>QUICK BUY! Get 15% off on medicines*</Text>
          <Button bg={"tomato"} colorScheme="white">
            Quick order
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
