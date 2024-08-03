import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  Link,
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
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa"; // Importing cart icon from react-icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [modalType, setModalType] = useState(""); // Track which modal to show
  const [popoverOpen, setPopoverOpen] = useState(false); // Manage popover visibility

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

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        m={"auto"}
        gap={10}
      >
        {/* left box of nav */}
        <Box
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          gap={2}
          w={"70%"}
        >
          <Image
            w={"10%"}
            h={"10%"}
            src="https://www.1mg.com/images/tata_1mg_logo.svg"
          />
          <Link fontSize={13}>MEDICINES</Link>
          <Link
            fontSize={13}
            display={"flex"}
            style={{ textDecoration: "none" }}
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
          <Link fontSize={13}>CONSULT DOCTORS</Link>
          <Link fontSize={13}>CANCER CARE</Link>
          <Link
            fontSize={13}
            display={"flex"}
            style={{ textDecoration: "none" }}
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
            display={"flex"}
            style={{ textDecoration: "none" }}
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

        {/* Right box of nav */}
        <Box
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          gap={2}
        >
          {/* login */}
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
                {/* Slider  */}
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
                {/* Login Form  */}
                <Box>
                  <Text fontSize={14} color={"gray"} textAlign={"left"}>
                    Get access to your orders, lab tests & doctor consultations
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
                      isFocused ? "2px solid tomato" : "2px solid transparent"
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
          |{/* Sign up */}
          <Text
            fontSize={14}
            _hover={{ cursor: "pointer" }}
            onClick={openSignUpModal}
          >
            Sign Up
          </Text>
          <Modal isOpen={isOpen && modalType === "signup"} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader fontSize={25}>Sign Up</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {/* Slider  */}
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
                    Please enter your Mobile number to receive One Time Password
                    (OTP)
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
                      isFocused ? "2px solid tomato" : "2px solid transparent"
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
          &nbsp;
          <Link fontSize={14}>Need Help?</Link>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
