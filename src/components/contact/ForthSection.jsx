import React from 'react';
import ImageCarousel from '../contact/ImageCarousel';

function ForthSection() {
  return (
    <div className="w-screen h-screen  ">
      {/* Main Container */}
      <div className=" w-screen h-screen  flex flex-col md:flex-row items-center justify-between border-b pb-10">
        {/* Left Side */}
        <div className="w-full md:w-1/2 md:text-left pl-40">
          <h4 className="font-jakarta text-xl pl-36 font-extralight mb-20">Salon & Shop</h4>
          <h2 className="text-6xl font-jakarta  mt-2 mb-20">Opening hours</h2>
          <button
  className="relative text-sm sm:text-lg ml-[18%] mt-16 sm:mt-0 lg:text-xl text-black"
  style={{ textDecoration: 'none' }}
>
  Book an appointment
  <span
    className="absolute left-0 bottom-[-15px]  w-full h-[3px]"
    style={{
      background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30'%3E%3Cpath fill='none' stroke='black' stroke-width='4' d='M0 15 Q 25 0 50 15 T 100 15'/%3E%3C/svg%3E") repeat-x`,
      height: '12px',
    }}
  ></span>
</button>

        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-[1px] h-96 bg-gray-400"></div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 mt-6 ml-20 translate-x-28  px-10 md:mt-0 text-center md:text-left">
          <p className="font-jakarta text-3xl mb-20 font-extralight">
            <span className="font-jakarta text-3xl font-extralight">Working days</span> / 14:00 - 20:00
          </p>
          <p className="font-jakarta text-2xl pl-32 font-extralight text-black mb-20 mt-2">
            <span className="">Saturday</span> / 09:00 - 17:00
          </p>
          <p className="font-jakarta text-2xl font-extralight mt-2 pl-52">
            <span className="">Sunday</span> / Closed
          </p>
        </div>
      </div>
      <ImageCarousel />


     
    </div>
  );
}

export default ForthSection;
