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

function PopularCare() {
  const secondSlideArr = [
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/97fd33b22a134f6abfad3306a94a9c82.jpg",
      title: "Combo Pack of Volini",
      price: 587,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cr9a2p0evnuzwvw5ksp1.jpg",
      title: "Acne Care Combo of Cetaphil Oily Skin",
      price: 825,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/6e7569ffbb794db79bf9c34af8310198.jpg",
      title: "Himalaya Wellness Pure Herbs",
      price: 408,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/if0qou7t1ptcaaowcigp.jpg",
      title: "Accu-Check Active Combo of Glucomet",
      price: 1931,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/38b86c6a33f744afac80ed36d4bb87ba.jpg",
      title: "Tata 1mg Diabetes Care Combo Pack",
      price: 562,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/lvtn5rrf1guolsh7lrfx.jpg",
      title: "OneTouch Select Plus Glucometer",
      price: 2333,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/oexechydeypou9aw45xc.jpg",
      title: "Pain Relief Combo of Dr Ortho Oil 120ml",
      price: 541,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qdkxnbhl24dgn02m7fc4.jpg",
      title: "Anti-oxidants Combo of Organic India",
      price: 615,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/g6phmkjrdbw3x4nngxlr.jpg",
      title: "Oral Care Combo of Listerine Mouth Wash",
      price: 593,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/bolfsewohhzisrq5kcao.jpg",
      title: "Cackle's Combo Pack of Super Japanese",
      price: 1015,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qir6i2zlhzeddxa4mqt0.jpg",
      title: "Immunity Care Combo of 1mg Panch",
      price: 1195,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/8bd580a5fdf044b096302ab1d65e36b4.jpg",
      title: "Dr Batra's Combo Pack",
      price: 632,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/1b2a7bd6b5124f1b9d8d32ebeb4cb492.jpg",
      title: "Tata 1mg Combo Pack of Tejasya",
      price: 373,
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
            //   pl={10}
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

export default PopularCare;
