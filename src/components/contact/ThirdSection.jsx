import React from "react";
import contactImage from "../../assets/contact_third_division.jpg"; // Ensure this path is correct
import { FaPhone } from "react-icons/fa";
import image from "../../assets/angelic salon.png";

function ThirdSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full bg-[#F7F1E8]">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={contactImage}
          alt="Gift Voucher"
          className="object-cover w-full md:w-[700px] h-auto md:h-screen -translate-x-0 md:-translate-x-12"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-5 sm:px-10 md:pl-40 mt-6 md:mt-0">
        {/* Logo Image */}
        <img src={image} alt="Angelic Salon" className="w-32 sm:w-40 mb-3" />

        {/* Heading */}
        <h2 className="font-dancing text-3xl sm:text-4xl font-bold">Gift Voucher</h2>

        {/* Description */}
        <p className="text-gray-600 mt-4 max-w-md">
          Available for all occasions, for a specific treatment or monetary amount.
          Please call us or email us for more details.
        </p>

        {/* Contact Button */}
        <div className="mt-6">
          <button className="flex items-center gap-2 bg-black text-white px-5 sm:px-6 py-3 rounded-md text-sm sm:text-base">
            <FaPhone /> +91 | 7464927777
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
