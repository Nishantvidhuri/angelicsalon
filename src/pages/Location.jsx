import React from "react";

import SecondSection from "../components/contact/SecondSection";
import FirstSection from "../components/contact/FirstSection";
import ThirdSection from "../components/contact/ThirdSection";
import ForthSection from "../components/contact/ForthSection";
import MapSection from "../components/contact/MapSection";
import Footer from "../components/Footer";
import Navbar from "./Navbar";

function Location() {
  return (
    <div className="relative w-full h-auto">
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ForthSection />

      <div className="bg-white w-full h-10 sm:h-16"></div>
      <MapSection />

      
      

      <Footer />
    </div>
  );
}

export default Location;
