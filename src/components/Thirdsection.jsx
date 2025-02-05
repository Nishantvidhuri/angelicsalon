import React from 'react';
import backgroundImage from '../assets/home_image_03.jpg'; // Update the path based on your project

function Thirdsection() {
  return (
    <div className="w-full h-full lg:h-screen flex flex-col font-jakarta lg:flex-row items-center">
      {/* Left Section */}
      <div className="bg-[#F5EDE2] w-full lg:w-1/2 flex flex-col gap-6 justify-center p-6 md:p-10 lg:p-20">
        <h3 className="text-xl md:text-2xl lg:text-3xl uppercase text-gray-500 tracking-wide">
          Get in Touch
        </h3>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mt-2">
          Book an appointment
        </h1>

        {/* Address & Contact */}
        <p className="text-sm md:text-md text-gray-700 mt-2">
          <strong>First Branch:</strong> Angelic Unisex Salon and Spa, 3rd floor, Hotel K11 Building, Kasturi Tower, Panchakki, Haldwani 263139 <br />
          <strong>Phone:</strong> +91-7464927777
        </p>

        {/* Call Button */}
        <button className="bg-black text-white px-6 py-3 mt-4 w-40 text-sm md:text-base">
          Call Now
        </button>
      </div>

      {/* Right Section - Image */}
      <div
        className="w-full lg:w-1/2 min-h-[300px] lg:h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>
    </div>
  );
}

export default Thirdsection;
