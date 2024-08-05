import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useState } from "react";

function Dropdown() {
  const [isOpenFirst, setIsOpenFirst] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);
  const [isOpenFour, setIsOpenFour] = useState(false);
  const [isOpenFive, setIsOpenFive] = useState(false);
  const [isOpenSix, setIsOpenSix] = useState(false);
  const [isOpenSeven, setIsOpenSeven] = useState(false);
  const [isOpenEight, setIsOpenEight] = useState(false);

  return (
    <>
      {/* Dropdown Menu */}
      <SimpleGrid
        columns={{
          base: 2,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 9,
          "2xl": 9,
        }}
        m={"auto"}
        // border={"1px solid black"}
        justifyContent={"space-around"}
      >
        <Box
          // border={"1px solid black"}
          onMouseEnter={() => setIsOpenFirst(true)}
          onMouseLeave={() => setIsOpenFirst(false)}
        >
          <Menu isOpen={isOpenFirst}>
            <MenuButton
              variant={"none"}
              fontSize={14}
              as={Button}
              bg={"none"}
              rightIcon={<ChevronDownIcon />}
              _hover={{ color: "tomato" }}
            >
              Health Resource Center
            </MenuButton>
            <MenuList borderRadius={"5px"}>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                All Diseases
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                All Medicines
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Medicines by Therapeutic Class
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box
          ml={{
            base: 0,
            xl: "5%",
          }}
          // border={"1px solid black"}
          onMouseEnter={() => setIsOpenTwo(true)}
          onMouseLeave={() => setIsOpenTwo(false)}
        >
          <Menu isOpen={isOpenTwo}>
            <MenuButton
              variant={"none"}
              fontSize={14}
              as={Button}
              bg={"none"}
              rightIcon={<ChevronDownIcon />}
              _hover={{ color: "tomato" }}
              ml={{
                base: 0,
                xl: "25%",
              }}
            >
              Vitamins & Nutrition
            </MenuButton>
            <MenuList borderRadius={"5px"}>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Multivitamins
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Vitamin D
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Global Supplements
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Vitamin C
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Box
          ml={{
            base: 0,
            xl: "50%",
          }}
          // border={"1px solid black"}
          onMouseEnter={() => setIsOpenThree(true)}
          onMouseLeave={() => setIsOpenThree(false)}
        >
          <Menu isOpen={isOpenThree}>
            <MenuButton
              variant={"none"}
              fontSize={14}
              as={Button}
              bg={"none"}
              rightIcon={<ChevronDownIcon />}
              _hover={{ color: "tomato" }}
            >
              Stomach Care
            </MenuButton>
            <MenuList borderRadius={"5px"}>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Constipation
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Acidity
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Pre and Probiotics
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Indigestion
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Box
          ml={{
            base: 0,
            xl: "50%",
          }}
          // border={"1px solid black"}
          onMouseEnter={() => setIsOpenFour(true)}
          onMouseLeave={() => setIsOpenFour(false)}
        >
          <Menu isOpen={isOpenFour}>
            <MenuButton
              variant={"none"}
              fontSize={14}
              as={Button}
              bg={"none"}
              rightIcon={<ChevronDownIcon />}
              _hover={{ color: "tomato" }}
            >
              Feminine Care
            </MenuButton>
            <MenuList borderRadius={"5px"}>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Sanitary Pads
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Breast Pumps
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Hair Removal
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Intimate Wash & Wipes
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Toilet Sanitaries
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Menstrual Cup & Tampons
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Box
          ml={{
            base: 0,
            xl: "60%",
          }}
          // border={"1px solid black"}
          onMouseEnter={() => setIsOpenFive(true)}
          onMouseLeave={() => setIsOpenFive(false)}
        >
          <Menu isOpen={isOpenFive}>
            <MenuButton
              variant={"none"}
              fontSize={14}
              as={Button}
              bg={"none"}
              rightIcon={<ChevronDownIcon />}
              _hover={{ color: "tomato" }}
            >
              Healthy Snacks
            </MenuButton>
            <MenuList borderRadius={"5px"}>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Peanut Butter
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Honey
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Granola & Protein Bars
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Oats
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Muesli & Cereals
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box
          ml={{
            base: 0,
            xl: "70%",
          }}
          // border={"1px solid black"}
          onMouseEnter={() => setIsOpenSix(true)}
          onMouseLeave={() => setIsOpenSix(false)}
        >
          <Menu isOpen={isOpenSix}>
            <MenuButton
              variant={"none"}
              fontSize={14}
              as={Button}
              bg={"none"}
              rightIcon={<ChevronDownIcon />}
              _hover={{ color: "tomato" }}
            >
              Ayurveda Products
            </MenuButton>
            <MenuList borderRadius={"5px"}>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Ayurvedic Medicines
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Sexual Wellness
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Bone, Joint and Muscle Care
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Ayurvedic Stomach Care
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Diabetic Care
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Box
          ml={{
            base: 0,
            xl: "90%",
          }}
          // border={"1px solid black"}
          onMouseEnter={() => setIsOpenSeven(true)}
          onMouseLeave={() => setIsOpenSeven(false)}
        >
          <Menu isOpen={isOpenSeven}>
            <MenuButton
              variant={"none"}
              fontSize={14}
              as={Button}
              bg={"none"}
              rightIcon={<ChevronDownIcon />}
              _hover={{ color: "tomato" }}
            >
              Pet Care
            </MenuButton>
            <MenuList borderRadius={"5px"}>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Pet Grooming
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Pet Health Care
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Box
          ml={{ base: 0, xl: "70%" }}
          // border={"1px solid black"}
          onMouseEnter={() => setIsOpenEight(true)}
          onMouseLeave={() => setIsOpenEight(false)}
        >
          <Menu isOpen={isOpenEight}>
            <MenuButton
              variant={"none"}
              fontSize={14}
              as={Button}
              bg={"none"}
              rightIcon={<ChevronDownIcon />}
              _hover={{ color: "tomato" }}
            >
              Nutritional Drinks
            </MenuButton>
            <MenuList borderRadius={"5px"}>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Green Tea & Herbal Tea
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Adult Daily Nutrition
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Kids Nutrition (2-15 Yrs)
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Women Nutrition
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Apple Cider Vinegar
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Diabetes Nutrition
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Specialized Nutrition
              </MenuItem>
              <MenuItem
                _hover={{ color: "tomato" }}
                fontSize={12}
                fontWeight={"bold"}
              >
                Green Coffee
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default Dropdown;
