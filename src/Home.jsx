import Header from "./Header";
import MainSection from "./MainSection";
import BrandSection from "./BrandSection";
import ShopSection from "./ShopSection";
import FeaturedProducts from "./FeaturedProducts";
import TShirtPrinting from "./TShirtPrinting";
import FreeImages from "./FreeImages";
import Logos from "./Logos";
import Pricing from "./Pricing";
import WhatPeopleAreSaying from "./WhatPeopleAreSaying";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import React from "react";
function Home() {
  console.log("hi");

  return (
    <div>
      <Header />
      <MainSection />
      <BrandSection />
      <ShopSection />
      <FeaturedProducts />
      <TShirtPrinting />
      <FreeImages />
      <Logos />
      <Pricing />
      <WhatPeopleAreSaying />
      <Footer />
    </div>
  );
}

export default Home;
