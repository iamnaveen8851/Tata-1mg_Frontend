import React from "react";
import FirstSlider from "./sliders/FirstSlider";
import SecondSlider from "./sliders/SecondSlider";
import ThirdSlider from "./sliders/ThirdSlider";
import BrandSlider from "./sliders/BrandSlider";
import Supplement from "./sliders/Supplement";
import PersonalCare from "./sliders/PersonalCare";
import FourSlider from "./sliders/FourSlider";
import FeaturedBrands from "./sliders/FeaturedBrands";
import SkinCare from "./sliders/SkinCare";
import PopularCare from "./sliders/PopularCombo";

function Homepage() {
  return (
    <>
      <FirstSlider />
      <SecondSlider />
      <br />
      <br />
      <ThirdSlider />
      <br />
      <br />
      <FeaturedBrands />

      <br />
      <br />
      <Supplement />
      <br />
      <br />
      <PersonalCare />
      <br />
      <br />
      <FourSlider />
      <br />
      <br />
      <BrandSlider />
      <br />
      <br />
      <SkinCare />
      <br />
      <br />
      <PopularCare />
    </>
  );
}

export default Homepage;
