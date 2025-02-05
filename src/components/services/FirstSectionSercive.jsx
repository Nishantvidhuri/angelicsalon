import React from "react";
import backgroundImage from "../../assets/hero_services.jpg"; // Adjust the path based on your project

function FirstSectionService() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center font-jakarta"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="h-full flex flex-col -translate-x-[25%] justify-center items-center">
      <div className="flex gap-5">
      <svg className="mt-2"
      width="50"
      height="10"
      viewBox="0 0 50 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 0 5 Q 5 0, 10 5 T 20 5 T 30 5 T 40 5 T 50 5 "
        stroke="white"
        strokeWidth="2"
        fill="transparent"
      />
    </svg>
        <h1 className="text-white text-xl mb-12">WHAT WE DO & HOW</h1>
      </div>
        <h1 className="text-white text-8xl font-jakarta font-">Our Services</h1>
        <p className="text-white text-md font-extralight font-jakarta w-[500px]  mt-12  px-4 max-w-2xl text-left">
        We are well equipped with years of hair know-how, and ready to create your best look with natural products. Hair is our passion, and our passion shows on every client.
        </p>
      </div>
    </div>
  );
}

export default FirstSectionService;
