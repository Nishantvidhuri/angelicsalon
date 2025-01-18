import React from 'react';
import organic from '../assets/organic.png';
import heart from '../assets/heart.png';
import natural from '../assets/natural.png';

import '../css/style.css';
import '@fontsource/playfair-display'; // All weights and styles

function SecondSection() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600 text-black pt-0 sm:pt-72 ">
      <div className="flex flex-wrap max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
          <header>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-black mb-4 sm:mb-6">
              Natural cuts &amp; styling
            </h1>
          </header>
          <p className="text-black leading-relaxed text-sm sm:text-lg lg:text-xl mb-6 font-serif">
            Designed to maintain your current colour, blend out a growing root, or balance your blonde while providing full and demi-permanent coverage. Our custom kit can disguise grey-white hair.
          </p>
          <button className="animated-button w-full sm:w-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span className="text ">Book an Appointment</span>
            <span className="circle"></span>
            <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 space-y-6">
          {/* Service 1 */}
          <div className="flex flex-wrap items-start">
            <div className="flex items-center justify-center w-12 sm:w-16 lg:w-20 h-auto">
              <img src={organic} alt="100% Natural Products" className="w-full" />
            </div>
            <div className="ml-4">
              <h4 className="text-lg sm:text-xl font-bold text-black font-[Playfair Display]">
                100% natural products
              </h4>
              <p className="text-black text-sm sm:text-base leading-relaxed font-[Poppins]">
                We are well equipped with years of hair know-how and ready to create your best look with natural products.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-wrap items-start">
            <div className="flex items-center justify-center w-12 sm:w-16 lg:w-20 h-auto">
              <img src={heart} alt="Cruelty Free" className="w-full" />
            </div>
            <div className="ml-4">
              <h4 className="text-lg sm:text-xl font-bold text-black font-[Playfair Display]">
                Cruelty free
              </h4>
              <p className="text-black-400 text-sm sm:text-base leading-relaxed font-[Poppins]">
                Hair is our passion, and our passion shows on every client that walks out of our doors full of confidence.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-wrap items-start">
            <div className="flex items-center justify-center w-12 sm:w-16 lg:w-20 h-auto">
              <img src={natural} alt="Non GMO" className="w-full" />
            </div>
            <div className="ml-4">
              <h4 className="text-lg sm:text-xl font-bold text-black font-[Playfair Display]">
                Non GMO
              </h4>
              <p className="text-black text-sm sm:text-base leading-relaxed font-[Poppins]">
                If you have a look you want but don't know how to achieve, we can work together to form a plan for your hair.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
