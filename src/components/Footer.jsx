import React from "react";
import logo from "../assets/angelic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-[#004d40] text-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Left Section */}
        <div className="space-y-6 text-center md:text-left">
          <img src={logo} alt="Angelic Logo" className="mx-auto md:mx-0 w-60" />
          <p className="text-sm leading-relaxed">
            Experience luxury wellness at Angelic Salon & Spa today.
          </p>
          <div className="space-y-4 text-sm">
            <p>
              <strong>First Branch:</strong> Angelic unisex salon and spa,
              3rd floor, hotel k11 building, Kasturi Tower, Panchakki,
              Haldwani 263139
            </p>
            <p>
              <strong>Second Branch:</strong> Om Sai Tower, 2nd floor, Near
              Kurmanchal Bank Uncha Pul, Haldwani 263139
            </p>
          </div>
          <p className="text-xs text-gray-400">© 2021, Adgroovs.com</p>
        </div>

        {/* Middle Section */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-lg font-bold uppercase">Indulgence</h3>
          <p className="text-sm">
            <strong>Phone:</strong> +91-7464927777
          </p>
          <p className="text-sm">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:contactus@unlaxspa.com"
              className="hover:underline text-blue-400"
            >
              contactus@unlaxspa.com
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="space-y-6 text-center md:text-left">
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-200 transition"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-[#004d40]" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-200 transition"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-[#004d40]" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-200 transition"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-[#004d40]" />
            </a>
          </div>
          <h3 className="text-lg font-bold uppercase">
            Subscribe for exclusive offers
          </h3>
          <form className="space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Your email for updates"
                className="w-full py-3 px-4 bg-white text-gray-800 rounded-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md shadow-md"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
