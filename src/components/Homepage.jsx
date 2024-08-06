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
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <Link to={"/products"}>
        <FirstSlider />
      </Link>
      <Link to={"/products"}>
        <SecondSlider />
      </Link>
      <br />
      <br />
      <Link to={"/products"}>
        <ThirdSlider />
      </Link>
      <br />
      <br />
      <Link to={"/products"}>
        <FeaturedBrands />
      </Link>

      <br />
      <br />
      <Link to={"/products"}>
        <Supplement />
      </Link>
      <br />
      <br />
      <Link to={"/products"}>
        <PersonalCare />
      </Link>
      <br />
      <br />
      <Link to={"/products"}>
        <FourSlider />
      </Link>
      <br />
      <br />
      <Link to={"/products"}>
        <BrandSlider />
      </Link>
      <br />
      <br />
      <Link to={"/products"}>
        <SkinCare />
      </Link>
      <br />
      <br />
      <Link to={"/products"}>
        <PopularCare />
      </Link>
    </>
  );
}

export default Homepage;
