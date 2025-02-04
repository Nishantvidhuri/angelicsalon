import React from "react";
import heroContact from "../../assets/hero_contact.jpg"; // Adjust the path as needed

function FirstSection() {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div className="w-full">
        <img
          src={heroContact}
          alt="Background"
          className="w-full object-cover min-h-[50vh] md:min-h-[60vh]"
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center translate-x-[0%] sm:translate-x-[25%]  px-30 sm:px-10 translate-y-[-30%] sm:translate-y-[-70%] top-1/2">
        {/* Superheadline */}
        <span className="font-jakarta text-lg sm:text-xl font-extralight tracking-widest text-white uppercase mb-2">
          We are here for you
        </span>

        {/* Main Heading */}
        <h1 className="font-jakarta font-extralight text-white text-4xl sm:text-5xl md:text-6xl">
          Contact us
        </h1>

        {/* Description */}
        <p className="font-jakarta text-lg sm:text-xl md:text-2xl font-extralight text-white max-w-2xl mt-4">
          We are well equipped with years of hair know-how and ready to create
          your best look with natural products. Hair is our passion, and our
          passion shows on every client.
        </p>
      </div>

      {/* Wavy Divider */}
      <svg
        className="absolute bottom-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
      >
        <path
          fill="white"
          fillOpacity="1"
          d="M0,60 Q72,100,144,60 T288,60 T432,60 T576,60 T720,60 T864,60 T1008,60 T1152,60 T1296,60 T1440,60 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}

export default FirstSection;
