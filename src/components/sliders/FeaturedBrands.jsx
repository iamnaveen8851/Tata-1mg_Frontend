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

function FeaturedBrands() {
  const secondSlideArr = [
    {
      img: "https://onemg.gumlet.io/diagnostics%2F2024-08%2F1722837032_Tynor+1.png?format=auto",
    },
    {
      img: "https://onemg.gumlet.io/diagnostics%2F2024-08%2F1722582677_Dabur.png?format=auto",
    },
    {
      img: "https://onemg.gumlet.io/diagnostics%2F2024-08%2F1722923510_AVP.png?format=auto",
    },
    {
      img: "https://onemg.gumlet.io/diagnostics%2F2024-08%2F1722923522_Optimum+Nutrition.png?format=auto",
    },
    {
      img: "https://onemg.gumlet.io/diagnostics%2F2024-08%2F1722836971_Morepen.png?format=auto",
    },
    {
      img: "https://onemg.gumlet.io/diagnostics%2F2024-08%2F1722923538_Pentasure.png?format=auto",
    },
    {
      img: "https://onemg.gumlet.io/diagnostics%2F2024-08%2F1722923550_Cetaphil.png?format=auto",
    },
    {
      img: "https://onemg.gumlet.io/diagnostics%2F2024-06%2F1719206984_Tata+1mg.png?format=auto",
    },
    {
      img: "https://onemg.gumlet.io/diagnostics%2F2024-06%2F1719206972_tejasya.png?format=auto",
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
        Featured brands
      </Text>
      <Slider {...settings}>
        {secondSlideArr.map((slider, i) => (
          <Box
            _hover={{ boxShadow: "base" }}
            p={6}
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

export default FeaturedBrands;
