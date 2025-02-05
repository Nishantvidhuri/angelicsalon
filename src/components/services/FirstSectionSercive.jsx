import React from "react";
import backgroundImage from "../../assets/hero_services.jpg"; // Adjust the path based on your project

function FirstSectionService() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center font-jakarta flex justify-center items-center px-6 sm:px-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "right center", 
      }}
    >
      <div className="flex flex-col justify-center text-center lg:text-left max-w-3xl lg:max-w-4xl lg:translate-x-[-50%]">
        <div className="flex gap-5 justify-center lg:justify-start">
          <svg
            className="mt-2"
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
        <h1 className="text-white text-5xl md:text-6xl lg:text-8xl font-jakarta">
          Our Services
        </h1>
        <p className="text-white text-md font-extralight font-jakarta mt-6 px-4 sm:px-0 max-w-xl mx-auto lg:mx-0">
          We are well equipped with years of hair know-how, and ready to create your best look with natural products. Hair is our passion, and our passion shows on every client.
        </p>
      </div>
    </div>
  );
}

export default FirstSectionService;
