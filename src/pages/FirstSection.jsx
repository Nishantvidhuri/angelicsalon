import React from 'react';
import bgImage from '../assets/bgImage.png';
import ImageCarousel from '../components/ImageCarousel';

import '../css/style.css';
import tagline1 from '../assets/tagline-1.png'
import tagline2 from '../assets/tagline-2.png'

import '@fontsource/playfair-display'; // All weights and styles

function FirstSection() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute top-0 w-full h-full">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full sm:h-fit object-cover object-[70%] translate-y- sm:object-center"
        />
      </div>

      {/* Black Gradient Overlay for xs screens */}
      <div className="absolute top-0 w-full h-full bg-gradient-to-t from-black via-black/30 to-transparent sm:bg-none"></div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center px-5 translate-y-20 sm:px-10 lg:px-[10%] gap-5 pt-40 sm:pt-28 lg:pt-40">
        {/* Content Section */}
        <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left">
          {/* Main Heading */}
          
          <img src={tagline1}/>
          <img src={tagline2}/>


          {/* Buttons */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-5 mt-4">
            {/* First Button */}
            <button className="mt-20 sm:mt-0 learn-more bg-[#282936] text-white sm:bg-transparent sm:text-inherit rounded-full">
  <span aria-hidden="true" className="circle">
    <span className="icon arrow"></span>
  </span>
  <span className="button-text text-white sm:text-inherit">Shop Now</span>
</button>


            {/* Second Button */}
            <button
              className="relative text-sm sm:text-lg mt-16 sm:mt-0 lg:text-xl text-white"
              style={{ textDecoration: 'none' }}
            >
              Book an appointment
              <span
                className="absolute left-0 bottom-[-6px] w-full h-[3px]"
                style={{
                  background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30'%3E%3Cpath fill='none' stroke='white' stroke-width='4' d='M0 15 Q 25 0 50 15 T 100 15'/%3E%3C/svg%3E") repeat-x`,
                  height: '12px',
                }}
              ></span>
            </button>
          </div>

          {/* Image Carousel */}
          <div className="mt-10 sm:mt-40 h-40 xs:w-3/4">
            <ImageCarousel />
          </div>
        </div>
      </div>

      {/* Wavy Divider */}
      <svg
        className="absolute bottom-0 translate-y-0 sm:translate-y-72 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
      >
        <path
  fill="#4B5563"
  fillOpacity="1"
  d="M0,60 Q72,100 144,60 T288,60 T432,60 T576,60 T720,60 T864,60 T1008,60 T1152,60 T1296,60 T1440,60 L1440,120 L0,120 Z"
/>


      </svg>
    </div>
  );
}

export default FirstSection;
