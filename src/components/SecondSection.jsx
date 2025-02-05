import React from 'react';
import organic from '../assets/organic.png';
import heart from '../assets/heart.png';
import natural from '../assets/natural.png';

import '../css/style.css';
import '@fontsource/playfair-display'; 

function SecondSection() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black pt-0 sm:pt-">
      <div className="flex flex-wrap max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
        <div className="flex gap-5">
      <svg className="mt-3"
      width="50"
      height="10"
      viewBox="0 0 50 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 0 5 Q 5 0, 10 5 T 20 5 T 30 5 T 40 5 T 50 5 "
        stroke="black"
        strokeWidth="2"
        fill="transparent"
      />
    </svg>
        <h1 className="text-black text-2xl mb-12">ANGELIC SALON</h1>
      </div>
          <header>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif  mb-4 sm:mb-6">
              Natural cuts &amp; styling
            </h1>
          </header>
          <p className=" leading-relaxed text-sm sm:text-lg lg:text-xl mb-6 font-serif">
            Designed to maintain your current colour, blend out a growing root, or balance your blonde while providing full and demi-permanent coverage. Our custom kit can disguise grey-white hair.
          </p>
         <button className='bg-black w-60 h-16 font-jakarta text-white'>
          BOOK AN APPOINTMENT
         </button>

        </div>

        
        <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 space-y-6">
          
          <div className="flex items-center gap-4">
            <div className="w-12 sm:w-16 lg:w-20 h-auto flex-shrink-0">
              <img src={organic} alt="100% Natural Products" className="w-full" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold  font-[Playfair Display]">
                100% natural products
              </h4>
              <p className=" text-sm sm:text-base leading-relaxed font-[Poppins]">
                We are well equipped with years of hair know-how and ready to create your best look with natural products.
              </p>
            </div>
          </div>

          
          <div className="flex items-center gap-4">
            <div className="w-12 sm:w-16 lg:w-20 h-auto flex-shrink-0">
              <img src={heart} alt="Cruelty Free" className="w-full" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold  font-[Playfair Display]">
                Cruelty free
              </h4>
              <p className=" text-sm sm:text-base leading-relaxed font-[Poppins]">
                Hair is our passion, and our passion shows on every client that walks out of our doors full of confidence.
              </p>
            </div>
          </div>

          
          <div className="flex items-center gap-4">
            <div className="w-12 sm:w-16 lg:w-20 h-auto flex-shrink-0">
              <img src={natural} alt="Non GMO" className="w-full" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold  font-[Playfair Display]">
                Non GMO
              </h4>
              <p className=" text-sm sm:text-base leading-relaxed font-[Poppins]">
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
