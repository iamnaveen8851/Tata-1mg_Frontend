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

function Supplement() {
  const secondSlideArr = [
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/6f6b13b658044bd893e14ff0010809aa.jpg",
      title: "Hair-O-Tin Tablet",
      price: 223,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/5030a73827d24bdd81ceab6f5eb0f137.jpg",
      title: "Inlife Japnese Collagen Peptide",
      price: 899,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/jqjwbayqlojmiyfz2h8a.jpg",
      title: "VedaneQ Collagen Capsule",
      price: 749,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/042a59da19874c64a7fecb8525774ae1.jpg",
      title: "Oziva Plant Based Collagen Builder",
      price: 859,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/a146ad4358a14fd19384ce595348ec2d.jpg",
      title: "Nirvasa Skin Radiance Gummies",
      price: 579,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cacb40dc6b1d4ce699a50899af3c1d7a.jpg",
      title: "Inlife Japanese Collagen Peptide ",
      price: 899,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/djo74ekvcnk4gesytfjn.jpg",
      title: "Swisse Beauty Collagen Glow",
      price: 1481,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/f00c407b2da5413bac12125ea98c83a7.jpg",
      title: "TrueBasics Marine Collagen",
      price: 499,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/7a85a18c26494dd9a5fc5557d534e8ec.jpg",
      title: "Tata 1mg Hair Biotin",
      price: 236,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/418fceb139764fd0a60099012afa1f28.jpg",
      title: "Labyrinth Nutrition Plant Based Collagen",
      price: 493,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/4b532363ac664d0eb68a6187e0ebb89e.jpg",
      title: "TrueBasics Advanced Joint Strength UC",
      price: 1299,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/b3a5d3f9cf4643dc9c97bf21facfc250.jpg",
      title: "Oziva Plant-Based Collagen Builder",
      price: 849,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/46b02e8b817d4596a065398cba833774.jpg",
      title: "Navigen-UC Tablet",
      price: 499,
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
              w={"180px"}
            //   maxW={"200px"}
              h={"200px"}
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
              price : ₹{" "}{slider.price}
            </Text>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default Supplement;
