import React from 'react';
import contactImage from '../../assets/contact_third_division.jpg'; // Ensure this path is correct
import { FaPhone } from 'react-icons/fa';
import image from '../../assets/angelic salon.png'

function ThirdSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full h-[85%] bg-[#F7F1E8]">
      {/* Left Side - Image */}
      <div className="h-full flex justify-center w-full overflow-hidden">
        <img src={contactImage} alt="Gift Voucher" className="-translate-x-36 object-cover scale-125" />
      </div>
      
      {/* Right Side - Content */}
      <div className="w-full md:w-1/2   md:text-left">
       <img className='-translate-x-10' src={image}/>
       
        <h2 className="font-dancing text-4xl font-bold mt-2">Gift voucher</h2>
        <p className="text-gray-600 mt-4 -translate-x-40">
          Available for all occasions, for a specific treatment or monetary amount.
          Please call us or email us for more details.
        </p>
        
        {/* Contact Button */}
        <div className="mt-6">
          <button className="flex items-center gap-2 bg-black text-white px-6 py-3 ">
            <FaPhone /> +91| 7464927777
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;