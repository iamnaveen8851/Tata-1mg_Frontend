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

function PersonalCare() {
  const secondSlideArr = [
    {
      img: "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443647_skinn.webp?format=auto",
    },
    {
      img: "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443670_hairr.webp?format=auto",
    },
    {
      img: "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443681_sexuall.webp?format=auto",
    },
    {
      img: "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443695_orall.webp?format=auto",
    },
    {
      img: "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443705_elderly.webp?format=auto",
    },
    {
      img: "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443714_baby.webp?format=auto",
    },
    {
      img: "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443722_womenn.webp?format=auto",
    },
    {
      img: "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443735_menn.webp?format=auto",
    },
    {
      img: "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443746_pett.webp?format=auto",
    },
  ];

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
        Personal care
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
            <Image
              src={slider.img}
              alt={slider.title}
              w={"100%"}
              maxW={"200px"}
              h={"auto"}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default PersonalCare;
