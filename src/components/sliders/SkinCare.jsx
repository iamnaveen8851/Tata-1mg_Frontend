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

function SkinCare() {
  const secondSlideArr = [
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/3f1dcb4a12ea4af5b5627abe6db34cd0.jpg",
      title: "Venusia Max Intensive Moisturizing Lotion",
      price: 1005,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/2fe5d1a5dbd64ea09349711c8c00fbd4.jpg",
      title: "CeraVe Moisturising Lotion for Dry",
      price: 520,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/tobacjfovqlzz3v12u5w.jpg",
      title: "Lacto Calamine Daily Cleansing Wipes",
      price: 69,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/x59orit293eaoo4srldc.jpg",
      title: "Savlon Germ Protection Wipes",
      price: 49,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/21e177529079430cab79f5055e8587a5.jpg",
      title: "C-Vit Facial Liposomal Serum with AntiOx",
      price: 2850,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/88216bf6e3694ff9a66125b4045e9373.jpg",
      title: "Sesderma Azelac RU",
      price: 2650,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qwe4rarags0phxarlz8g.jpg",
      title: "Lacto Calamine Oil Control Wipes ",
      price: 74.3,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cf320bc174e84ce58a7f803c6cdd53bb.jpg",
      title: "Venusia Max Intensive Moisturizing Lotion",
      price: 705,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/c2661631-300c-45a4-a7c3-f46fe9fca127.jpeg",
      title: "Ahaglow Advanced Skin Rejuvenating",
      price: 693,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/80e2d53e1c36474eb3e6b9480a7ef2e3.jpg",
      title: "Cetaphil Moisturising Cream",
      price: 503,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/c8be7d3b06ef4cd28507bfa8fcdf600e.jpg",
      title: "Bioderma Sebium Hydra Moisturiser",
      price: 1195,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/62ee5a32eff740818ad0e4649773fff5.jpg",
      title: "Cetaphil DAM Daily Advance Ultra",
      price: 466,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/8afe47628c9644e3be8a31bc37b95dd8.jpg",
      title: "Venusia Max Intensive Moisturizing Cream",
      price: 590,
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
        Collagen | supplement of the week
      </Text>
      <Slider {...settings}>
        {secondSlideArr.map((slider, i) => (
          <Box
            _hover={{ boxShadow: "base" }}
            p={7}
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
              pl={9}
              w={"100px"}
              //   maxW={"200px"}
              h={"140px"}
            />
            <Text
              fontSize={"13px"}
              fontWeight={"600"}
              textAlign={"center"}
              mt={2}
            >
              {slider.title}
            </Text>
            <Text
              fontSize={"13px"}
              fontWeight={"600"}
              textAlign={"center"}
              mt={2}
            >
              price : ₹ {slider.price}
            </Text>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default SkinCare;
