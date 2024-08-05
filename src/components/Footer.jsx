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
  Text,
  Input,
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
      <Box p={10}>
        <Heading fontSize={18}>
          Stay Healthy with Tata 1mg: Your Favourite Online Pharmacy and
          Healthcare Platform
        </Heading>
        <br />
        <Heading fontSize={16}> We Bring Care to Health.</Heading>
        <br />
        Tata 1mg is India's leading digital healthcare platform. From doctor
        consultations on chat to online pharmacy and lab tests at home: we have
        it all covered for you. Having delivered over 25 million orders in 1000+
        cities till date, we are on a mission to bring "care" to "health" to
        give you a flawless healthcare experience.
        <br />
        <Heading fontSize={16}>
          {" "}
          <br />
          <br />
          Tata 1mg: Your Favourite Online Pharmacy!
        </Heading>
        <br />
        Tata 1mg is India's leading online chemist with over 2 lakh medicines
        available at the best prices. We are your one-stop destination for other
        healthcare products as well, such as over the counter pharmaceuticals,
        healthcare devices and homeopathy and ayurveda medicines.
        <br />
        <br />
        With Tata 1mg, you can buy medicines online and get them delivered at
        your doorstep anywhere in India! But, is ordering medicines online a
        difficult process? Not at all! Simply search for the products you want
        to buy, add to cart and checkout. Now all you need to do is sit back as
        we get your order delivered to you.
        <br />
        <br />
        In case you need assistance, just give us a call and we will help you
        complete your order.
        <br />
        <br />
        And there is more! At Tata 1mg, you can buy health products and
        medicines online at best discounts.
        <br />
        <br />
        Now, isn't that easy? Why go all the way to the medicine store and wait
        in line, when you have Tata 1mg Pharmacy at your service.
        <br />
        <br />
        <Heading fontSize={16}>The Feathers in Our Cap</Heading>
        <br />
        At Tata 1mg, our goal is to make healthcare understandable, accessible
        and affordable in India. We set out on our journey in 2015, and have
        come a long way since then. Along the way, we have been conferred with
        prestigious titles like BML Munjal Award for 'Business Excellence
        through Learning and Development', Best Online Pharmacy in India Award
        and Top 50 venture in The Smart CEO-Startup50 India. We have been
        selected as the only company from across the globe for SD#3 "Health &
        Well Being for all" by Unreasonable group, US State Department. In 2019
        alone we received three awards including the BMW Simply Unstoppable
        Award.
        <br />
        <br />
        <Heading fontSize={16}>The Services We Offer</Heading>
        <br />
        Tata 1mg is India's leading digital healthcare platform, where you can
        buy medicines online with discount. Buy medicine online in Delhi,
        Mumbai, Bangalore, Hyderabad, Pune, Gurgaon, Noida, Kolkata, Chennai,
        Ahmedabad, Lucknow and around a 1000 more cities. Besides delivering
        your online medicine order at your doorstep, we provide accurate,
        authoritative & trustworthy information on medicines and help people use
        their medicines effectively and safely.
        <br />
        <br />
        We also facilitate lab tests at home. You can avail over 2,000 tests and
        get tested by 120+ top and verified labs at the best prices. Need to
        consult a doctor? On our platform, you can talk to over 20 kinds of
        specialists in just a few clicks.
        <br />
        <br />
        Customer centricity is the core of our values. Our team of highly
        trained and experienced doctors, phlebotomists and pharmacists looks
        into each order to give you a fulfilling experience.
        <br />
        <br />
        We’ve made healthcare accessible to millions by giving them quality care
        at affordable prices. Customer centricity is the core of our values. Our
        team of highly trained and experienced doctors, phlebotomists and
        pharmacists looks into each order to give you a fulfilling experience.
        <br />
        <br />
        Visit our online medical store now, and avail online medicine purchase
        at a discount. Stay Healthy!
        <br />
      </Box>
      {/* Statistics */}
      <Box m={"auto"}>
        <br />
        <hr style={{ border: "1px solid #d1d1d1" }} />
        <br />

        <Heading textAlign={"center"} fontWeight={"400"} fontSize={"24px"}>
          INDIA’S LARGEST HEALTHCARE PLATFORM
        </Heading>
        <br />

        <Box
          w={"90%"}
          // border={"1px solid black"}
          display={"grid"}
          gridTemplateColumns={"repeat(3, 1fr)"}
          justifyContent={"space-around"}
          gap={10}
          alignItems={"center"}
          m={"auto"}
        >
          <Box>
            <Heading textAlign={"center"}>260m+</Heading>
            <Text textAlign={"center"}>Visitors</Text>
          </Box>
          <Box>
            <Heading textAlign={"center"}>31m+</Heading>
            <Text textAlign={"center"}>Orders Delivered</Text>
          </Box>
          <Box>
            <Heading textAlign={"center"}>1800+</Heading>
            <Text textAlign={"center"}>Cities</Text>
          </Box>
        </Box>

        {/* Sign up Form */}
        <br />
        <br />
        <hr style={{ border: "1px solid #d1d1d1" }} />
        <br />
        <Box
          display={"flex"}
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
          justifyContent={"space-around"}
          alignItems={"center"}
          // gap={20}

          m={"auto"}
        >
          <Box>
            <Heading fontSize={16}>Get the link to download App</Heading>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
            gap={2}
          >
            <Input
              w={"150%"}
              p={5}
              type="text"
              placeholder="Enter Phone Number"
            />
            <Button
              width={"60%"}
              _hover={{ background: "tomato" }}
              bg={"#f5837a"}
              color={"white"}
            >
              Send Link
            </Button>
          </Box>
        </Box>
      </Box>

      <br />
      <br />
      {/* Footer */}
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
        <hr style={{ border: "1px solid #b6b6b8" }} />
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
          <Box
            display={"flex"}
            w={"20%"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={2}
          >
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
