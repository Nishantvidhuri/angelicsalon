import React from 'react'
import Navbar from '../../pages/Navbar'
import heroContact from '../../assets/hero_contact.jpg'; // Adjust the path as needed
function FirstSection() {
  return (
    <div>
       
      {/* Background Image */}
      <div className=" inset-0">
        <img
          src={heroContact}
          alt="Background"
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 sm:px-10">
        {/* Superheadline */}
        <span className="font-jakarta text-2xl font-extralight tracking-widest text-white uppercase mb-2">
          We are here for you
        </span>

        {/* Main Heading */}
        <h1 className="font-jakarta font-extralight text-white  text-5xl sm:text-6xl ">
          Contact us
        </h1>

        {/* Description */}
        <p className="font-jakarta text-3xl font-extralight text-white  sm:text-xl max-w-2xl mt-4">
          We are well equipped with years of hair know-how and ready to create
          your best look with natural products. Hair is our passion, and our
          passion shows on every client.
        </p>
      </div>

      {/* Wavy Divider */}
      <svg
        className="absolute -bottom-1 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
      >
        <path
          fill="white"
          fillOpacity="1"
          d="M0,60 Q72,100,144,60 T288,60 T432,60 T576,60 T720,60 T864,60 T1008,60 T1152,60 T1296,60 T1440,60 L1440,120 L0,120 Z"
        ></path>
      </svg>
    
    </div>
  )
}

export default FirstSection