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

      {/* White Space Between Sections */}
      <div className="bg-white w-full h-10 sm:h-16"></div>

      {/* Map Section */}
      <MapSection />

      {/* Full-Width Responsive SVG Wave */}
      <div className="relative w-screen min-w-full -mt-10 sm:-mt-20">
        <svg
          className="absolute left-0 w-screen min-w-full h-[50px] sm:h-[80px] md:h-[100px] lg:h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#004d40"
            fillOpacity="1"
            d="M0,60 Q72,100 144,60 T288,60 T432,60 T576,60 T720,60 T864,60 T1008,60 T1152,60 T1296,60 T1440,60 L1440,120 L0,120 Z"
          />
        </svg>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Location;
