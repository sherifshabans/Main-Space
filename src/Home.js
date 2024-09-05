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

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;

/*<thead class="thead-dark"><tr><th scope="col">#</th><th scope="col">Image</th><th scope="col">Product Name</th>
<th scope="col">Price</th>
<th scope="col">Original Price</th>
<th scope="col">Sale</th>
<th scope="col">Update</th>
<th scope="col">Delete</th>
</tr></thead> */