import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

// Custom arrow components
function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      position="absolute"
      top="50%"
      left="10px"
      transform="translateY(-50%)"
      cursor="pointer"
      zIndex="1"
      color="tomato"
      backgroundColor="white"
      borderRadius="50%"
      p={2} // Increase padding for bigger button
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxShadow="md"
    >
      <ChevronLeftIcon boxSize={8} /> {/* Increase arrow size */}
    </Box>
  );
}

function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      position="absolute"
      top="50%"
      right="10px"
      transform="translateY(-50%)"
      cursor="pointer"
      zIndex="1"
      color="tomato"
      backgroundColor="white"
      borderRadius="50%"
      p={2} // Increase padding for bigger button
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxShadow="md"
    >
      <ChevronRightIcon boxSize={8} /> {/* Increase arrow size */}
    </Box>
  );
}

function ThirdSlider() {
  const secondSlideArr = [
    {
      description:
        "Comprehensive Gold Full Body Checkup with Smart Report Includes 88 tests",
      price: 2249,
    },
    {
      description:
        "Comprehensive Silver Full Body Checkup with Smart Report Includes 80 tests",
      price: 1899,
    },
    {
      description:
        "Comprehensive Platinum Full Body Checkup with Smart Report Includes 101 tests",
      price: 3599,
    },
    {
      description:
        "Senior Citizen Comprehensive Package Male with Smart Report Includes 84 tests",
      price: 3749,
    },
    {
      description: "Good Health Smart Package Includes 3 tests",
      price: 399,
    },
    {
      description:
        "Good Health Silver Package with Smart Report Includes 65 tests",
      price: 699,
    },
    {
      description:
        "Good Health Gold Package with Smart Report Includes 72 tests",
      price: 999,
    },
    {
      description:
        "Good Health Platinum Package with Smart Report Includes 74 tests",
      price: 1499,
    },
    {
      description:
        "Senior Citizen Advanced Package with Smart Report Includes 61 tests",
      price: 1675,
    },
    {
      description:
        "Women Wellness Premium Package with Smart Report Includes 45 tests",
      price: 1889,
    },
    {
      description:
        "Men Health Premium Package with Smart Report Includes 44 tests",
      price: 1889,
    },
  ];

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    centerMode: true,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box w={"100%"} m={"auto"} boxShadow={"lg"} position="relative">
      <Text fontSize={18} ml={"3%"}>
        Full body health checkups
      </Text>
      <Slider {...settings}>
        {secondSlideArr.map((slider, i) => (
          <Box
            _hover={{ boxShadow: "base" }}
            p={4}
            key={i}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            w={{ base: "80%", sm: "60%", md: "50%", lg: "20%" }}
          >
            <Text>{slider.description}</Text>
            <Text
              fontSize={"13px"}
              fontWeight={"600"}
              textAlign={"center"}
              mt={2}
            >
              Price : ₹{slider.price}
            </Text>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default ThirdSlider;
