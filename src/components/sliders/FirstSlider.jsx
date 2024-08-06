import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";

import Slider from "react-slick";
function FirstSlider() {
  const firstSliderArr = [
    "https://onemg.gumlet.io/da224d39-f2b6-4dbc-8e5a-6facdcb97674_1696417645.png?w=842&h=200&format=auto",
    "https://onemg.gumlet.io/b737c289-248e-4c09-91f3-2c51171d5c6c_1717566852.png?w=842&h=200&format=auto",
    "https://onemg.gumlet.io/6e69b9f0-bc77-465b-8877-95784219853d_1715928287.png?w=842&h=200&format=auto",
    "https://onemg.gumlet.io/9de5fa29-8400-4ec9-8021-1173a6f511b4_1718967770.png?w=842&h=200&format=auto",
    "https://onemg.gumlet.io/9a60f3ca-e2b0-4c37-b7a6-aabee14d2780_1721116938.png?w=842&h=200&format=auto",
    "https://onemg.gumlet.io/e84d656e-bd74-4e1b-a822-af2a2b035846_1708002794.jpg?w=842&h=200&format=auto",
    "https://onemg.gumlet.io/3d9636d0-d22c-465c-9710-24d5519fa468_1712576949.png?w=842&h=200&format=auto",
    "https://onemg.gumlet.io/e0686aa4-1aab-4f47-a576-696dcec8cf12_1709298575.png?w=842&h=200&format=auto",
    "https://onemg.gumlet.io/20a26983-288b-4e9a-bac7-256e0c0d0832_1705995212.png?w=842&h=200&format=auto",
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: (dots) => (
      <Box
        position="absolute"
        bottom="1px"
        left="50%"
        transform="translateX(-50%)"
        zIndex="1"
      >
        {dots}
      </Box>
    ),
    customPaging: (i) => (
      <Box
        w="8px"
        h="8px"
        bg="grey"
        borderRadius="full"
        mx="2px"
        _hover={{
          bg: "gray.500",
        }}
      ></Box>
    ),
  };
  return (
    <>
      <Box display={"flex"} justifyContent={"space-around"} gap={0}>
        <Box
          w={{
            base: "80%",
            xl: "70%",
          }}
          position="relative" // Ensure the position is relative for the absolute positioning of dots
        >
          {/* Slider */}
          <Slider {...settings}>
            {firstSliderArr.map((slider, i) => (
              <Box key={i}>
                <Image
                  w={{
                    base: "100%",
                    "2xl": "100%",
                  }}
                  h={{
                    base: "70px",
                    xl: "210px",
                    "2xl": "210px",
                  }}
                  src={slider}
                  alt=""
                />
              </Box>
            ))}
          </Slider>
        </Box>
        <Box>
          <Image
            h={{
              base: "70px",
              xl: "210px",
              "2xl": "210px",
            }}
            src="https://onemg.gumlet.io/diagnostics%2F2024-01%2F1706088937_1948x800+%2827%29.png"
            alt=""
          />
        </Box>
      </Box>
      <Box
        m={"auto"}
        //    borderBottom={"1px solid black"}
        p={7}
        boxShadow={"base"}
      >
        <Heading
          textAlign={"center"}
          fontSize={"25px"}
          fontWeight={600}
          color={"#718096"}
        >
          Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform
        </Heading>
      </Box>

      <Box p={8}>
        <Image src="https://onemg.gumlet.io/marketing/d037f049-0426-43b5-b365-c89ccd788d2d.png" />
      </Box>
    </>
  );
}

export default FirstSlider;
