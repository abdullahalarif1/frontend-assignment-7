import React from "react";
import Banner from "./Banner";
import WinterClothes from "./WinterClothes";
import DonorTestimonials from "./DonorTestimonials";
import ColdWetherSafetyTips from "./ColdWetherSafetyTips";
import AboutUs from "./AboutUs";
import SuccessStories from "./SuccesStories";
import GallerySection from "./Gallery";

const Home = () => {
  return (
    <div>
      <Banner />
      <WinterClothes />
      <DonorTestimonials />
      <GallerySection />
      <ColdWetherSafetyTips />
      <SuccessStories />
      <AboutUs />
    </div>
  );
};

export default Home;
