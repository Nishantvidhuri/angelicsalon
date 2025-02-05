import React from "react";
import shopImage from "../../assets/Saloonimage.jpg"; // Ensure the correct path
import { MapPin, Phone, Clock, Calendar } from "lucide-react";

function MapSection() {
  return (
    <div className="relative w-full h-auto flex flex-col items-center justify-center">
      <div className="hidden md:block absolute top-0 right-40 w-[400px] p-5">
        <img
          src={shopImage}
          alt="Salon Interior"
          className="w-full h-60 object-cover rounded-t-lg"
        />

        <div className="relative -mt-6">
          <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
            <path
              fill="#B2B7AE"
              d="M0,60 Q72,100 144,60 T288,60 T432,60 T576,60 T720,60 T864,60 T1008,60 T1152,60 T1296,60 T1440,60 L1440,120 L0,120 Z"
            />
          </svg>
        </div>

        <div className="bg-[#B2B7AE] h-auto pt-10 p-5 rounded-b-lg font-jakarta text-black">
          <h2 className="text-2xl font-semibold">Salon & Shop</h2>

          <p className="flex items-start gap-2 mt-2">
            <MapPin size={20} className="text-black mt-1" />
            <span className="text-sm">
              Angelic Unisex Salon and Spa, 3rd Floor, Hotel K11 Building, Kasturi Tower,
              Panchakki, Haldwani 263139
            </span>
          </p>

          <p className="flex items-center gap-2 mt-2">
            <Phone size={20} className="text-black" />
            <span>+91-7464927777</span>
          </p>

          <p className="flex items-center gap-2 mt-2">
            <Clock size={20} className="text-black" />
            <span>Mon-Fri: 14:00 - 20:00</span>
          </p>

          <p className="flex items-center gap-2">
            <Calendar size={20} className="text-black" />
            <span>Sat: 09:00 - 17:00 | Sun: Closed</span>
          </p>
        </div>
      </div>

      <div className="relative w-full">
        <iframe
          title="Google Map"
          className="w-full h-[400px] md:h-screen rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14159.567682403225!2d79.5291875!3d29.2395625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09bf0dea04325%3A0x6e6b262db0c02392!2sAngelic%20Unisex%20Salon%20%26%20Spa!5e0!3m2!1sen!2sin!4v1707050601311!5m2!1sen!2sin&zoom=18"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="absolute bottom-[-5px] left-0 w-full">
          <svg
            className="w-full h-[50px] sm:h-[80px] md:h-[100px] lg:h-[120px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              fill="#004d40"
              fillOpacity="1"
              d="M0,60 Q72,100 144,60 T288,60 T432,60 T576,60 T720,60 T864,60 T1008,60 T1152,60 T1296,60 T1440,60 L1440,120 L0,120 Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default MapSection;
