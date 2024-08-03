import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Icon,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaMedium,
} from "react-icons/fa";
import React from "react";

function Footer() {
  return (
    <>
      <Box bg={"#edede8"} p={12}>
        <SimpleGrid
          columns={{
            base: 2,
            sm: 2,
            md: 2,
            lg: 5,
            xl: 5,
            "2xl": 5,
          }}
          justifyContent={"space-around"}
          alignItems={"center"}
          m={"auto"}
          spacing={10}
        >
          <Box
            display={"grid"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Heading fontSize={15}>Know Us</Heading>
            <br />
            <a href="" style={{ fontSize: "13px" }}>
              About Us
            </a>
            <a href="" style={{ fontSize: "13px" }}>
              Contact Us
            </a>
            <a href="" style={{ fontSize: "13px" }}>
              Press Coverage
            </a>
            <a href="" style={{ fontSize: "13px" }}>
              Careers
            </a>
            <a href="" style={{ fontSize: "13px" }}>
              Business Partership
            </a>
            <a href="" style={{ fontSize: "13px" }}>
              Become a Health Partner
            </a>
            <a href="" style={{ fontSize: "13px" }}>
              Corporate Governance
            </a>
          </Box>
          <Box
            display={"grid"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Heading fontSize={15}>Our Policies</Heading>
            <br />
            <a href="" style={{ fontSize: "13px" }}>
              Privacy Policy
            </a>
            <a href="" style={{ fontSize: "13px" }}>
              Terms and Conditions
            </a>
            <a href="" style={{ fontSize: "13px" }}>
              Editorial Policy
            </a>
            <a href="" style={{ fontSize: "13px" }}>
              Return Policy
            </a>
            <a href="" style={{ fontSize: "13px" }}>
              IP Policy
            </a>
            <a href="" style={{ fontSize: "13px" }}>
              Grievance Redressal Policy
            </a>
            <a href="" style={{ fontSize: "13px" }}>
              Fake Jobs and Fraud Disclaimer
            </a>
          </Box>
          <Box
            display={"grid"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Heading mb={5} fontSize={15}>
              {" "}
              Our Services
            </Heading>
            {/* <br /> */}
            <br />
            <a href="" style={{ fontSize: "13px" }}>
              Order Medicines
            </a>
            <a href="" style={{ fontSize: "13px" }}>
              Book Lab Tests
            </a>
            <a href="" style={{ fontSize: "13px" }}>
              Consult a Doctor
            </a>
            <a href="" style={{ fontSize: "13px" }}>
              Ayurveda Articles
            </a>
            <a href="" style={{ fontSize: "13px" }}>
              Hindi Articles
            </a>
            <a href="" style={{ fontSize: "13px" }}>
              Care Plan
            </a>
          </Box>
          <Box
            display={"grid"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Heading mb={2} fontSize={15}>
              Connect
            </Heading>
            {/* <br /> */}
            <br />
            <a href="" style={{ fontSize: "13px" }}>
              Social Links
            </a>

            <Box
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
              gap={{
                base: "5px",
                md: "10px",
                lg: "15px",
                xl: "15px",
                "2xl": "15px",
              }}
              mt={4}
              w={"50%"}
            >
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={FaFacebook} boxSize={6} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={FaInstagram} boxSize={6} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={FaTwitter} boxSize={6} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={FaYoutube} boxSize={6} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={FaLinkedinIn} boxSize={6} />
              </a>
              <a
                href="https://medium.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={FaMedium} boxSize={6} />
              </a>
            </Box>
            <a href="">Want daily dose of health?</a>
            <Button
              width={"50%"}
              _hover={{ background: "tomato" }}
              bg={"#f5837a"}
              color={"white"}
            >
              SIGN UP
            </Button>
          </Box>
          <Box
            display={"grid"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Heading fontSize={15}>Download Our App</Heading>
            <br />

            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px" }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play Store"
                style={{ height: "40px" }}
              />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px" }}
            >
              <img
                src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                alt="App Store"
                style={{ height: "135px" }}
              />
            </a>
          </Box>
        </SimpleGrid>

        <br />
        <hr style={{ border: "1px solid grey" }} />
        <br />
        <Box
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          // gap={10}
          m={"auto"}
          w={"40%"}
        >
          <Box>
            <Image
              w={"100px"}
              src="https://static.legitscript.com/seals/729605.png"
            />
          </Box>
          <Box>
            <Image
              w={"140px"}
              src="https://onemg.gumlet.io/iso_certification_03_07_2024.jpg"
            />
          </Box>
        </Box>

        <br />
        <Heading fontSize={17} textAlign={"center"}>
          India's only LegitScript and ISO/ IEC 27001:2022 certified online
          healthcare platform
        </Heading>

        <br />
        <br />
        {/* Accordion */}
        <Box>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Heading fontSize={15}>Know more about Tata 1mg</Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <br />
                <Heading fontSize={16}>
                  {" "}
                  Access medical and health information
                </Heading>
                <br />
                Tata 1mg provides you with medical information which is curated,
                written and verified by experts, accurate and trustworthy. Our
                experts create high-quality content about medicines, diseases,
                lab investigations, Over-The-Counter (OTC) health products,
                Ayurvedic herbs/ingredients, and alternative remedies.
                <br />
                <br />
                <Heading fontSize={16}>Order medicines</Heading>
                <br />
                online Get free medicine home delivery in over 1800 cities
                across India. You can also order Ayurvedic, Homeopathic and
                other Over-The-Counter (OTC) health products. Your safety is our
                top priority. All products displayed on Tata 1mg are procured
                from verified and licensed pharmacies.
                <br />
                <br />
                <Heading fontSize={16}>Book lab tests</Heading>
                <br />
                Book any lab tests and preventive health packages from certified
                labs and get tested from the comfort of your home. Enjoy free
                home sample collection, view reports online and consult a doctor
                online for free.
                <br />
                <br />
                <Heading fontSize={16}> Consult a doctor online</Heading>
                <br />
                Got a health query? Consult doctors online from the comfort of
                your home for free. Chat privately with our registered medical
                specialists to connect directly with verified doctors. Your
                privacy is guaranteed.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        <br />
        <br />
        <Box
          display={"flex"}
          justifyContent={"space-around"}
          m={"auto"}
          gap={10}
          w={"95%"}
        >
          <Box color={"gray"}>
            © 2024 Tata 1mg. All rights reserved. All medicines are dispensed in
            compliance with the Drugs and Cosmetics Act, 1940 and Drugs and
            Cosmetics Rules, 1945. We do not process requests for Schedule X and
            habit forming drugs.
          </Box>
          <Box display={"flex"} w={"20%"} justifyContent={"space-between"} alignItems={"center"} gap={2}>
            <Box>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                alt="Visa"
                style={{ height: "50px" }}
              />
            </Box>
            <Box>
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/rupay-logo-icon.png"
                alt="Rupay"
                style={{ height: "70px", width: "80px" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
