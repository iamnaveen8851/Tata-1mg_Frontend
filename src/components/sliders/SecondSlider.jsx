import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

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
      backgroundColor="lightgrey"
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
      backgroundColor="rgba(0, 0, 0, 0.16)"
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

function SecondSlider() {
  const secondSlideArr = [
    {
      img: "https://onemg.gumlet.io/a56b26a0-30f1-4977-96f8-7acf1b3e0e02.png?format=auto",
      title: "Diabetes",
    },
    {
      img: "https://onemg.gumlet.io/629aaf65-515f-4069-b730-28618f78597b.png?format=auto",
      title: "Heart Care",
    },
    {
      img: "https://onemg.gumlet.io/b251c9cf-8d88-4fb8-8c3c-7b328caa9f70.png?format=auto",
      title: "Stomach Care",
    },
    {
      img: "https://onemg.gumlet.io/573d8a1a-edd0-46a5-a0fe-01a1c2bcc8f2.png?format=auto",
      title: "Liver Care",
    },
    {
      img: "https://onemg.gumlet.io/a1af8b43-2836-483d-8709-99eff1cc6f70.png?format=auto",
      title: "Bone, Joint & Muscle Care",
    },
    {
      img: "https://onemg.gumlet.io/96f9ed8a-ba62-426c-bd66-6762f40f3370.png?format=auto",
      title: "Kidney Care",
    },
    {
      img: "https://onemg.gumlet.io/730dbe50-4bdc-4fa8-9a09-93bc5d6c6f38.png?format=auto",
      title: "Derma Care",
    },
    {
      img: "https://onemg.gumlet.io/8051e79c-6152-440e-b402-8d1ba8d7c82e.png?format=auto",
      title: "Respiratory Care",
    },
    {
      img: "https://onemg.gumlet.io/1627c0d3-a6ed-470a-8b18-94baa9fdbcfc.png?format=auto",
      title: "Eye Care",
    },
  ];

  const settings = {
    dots: true,
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
    <Box
      w={"100%"} m={"auto"} boxShadow={"lg"}
      position="relative"
    >
      <Text fontSize={18}>Shop by health concerns</Text>
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
            <Text
              fontSize={"13px"}
              fontWeight={"600"}
              textAlign={"center"}
              mt={2}
            >
              {slider.title}
            </Text>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default SecondSlider;
