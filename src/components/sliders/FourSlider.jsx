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

function FourSlider() {
  const secondSlideArr = [
    {
      description: "Lipid Profile",
      price: 314,
    },
    {
      description: "CBC (Complete Blood Count",
      price: 279,
    },
    {
      description: "Thyroid Profile Total (T3, T4 & TSH)",
      price: 289,
    },
    {
      description: "KFT with Electrolytes ",
      price: 349,
    },
    {
      description: "LFT (Liver Function Test) Includes 11 tests",
      price: 289,
    },
    {
      description: "Vitamin B12",
      price: 339,
    },
    {
      description: "Frequent Pain Check Profile Includes 4 tests",
      price: 299,
    },
    {
      description: "Lipid Profile, Non Fasting Includes 8 tests",
      price: 319,
    },
    {
      description: "Coronavirus Covid-19 Test- RT-PCR ",
      price: 450,
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
        Pathology Tests | Up to 70% off
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

export default FourSlider;
