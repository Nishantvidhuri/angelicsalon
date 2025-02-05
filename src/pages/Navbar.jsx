import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/angelic salon.png";
import "../css/style.css";
import "@fontsource/playfair-display"; // All weights and styles

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsScrolled(window.scrollY > window.innerHeight * 0.2);
  }, [location.pathname]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/Location", label: "Location" },
    { to: "/services", label: "Services" },
    { to: "/q-a", label: "Q/A" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".mobile-menu")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`flex justify-between items-center px-5 sm:px-10 fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="pt-3">
        <Link to="/">
          <img className="w-20 sm:w-24 h-20 sm:h-24" src={logo} alt="Logo" />
        </Link>
      </div>

      <div className="sm:hidden">
        <button
          className="text-3xl focus:outline-none transition-transform transform hover:scale-110"
          onClick={(e) => {
            e.stopPropagation(); // Prevent immediate closing
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          ☰
        </button>
      </div>

      <div
        className={`fixed top-0 right-0  h-[12%] w-full bg-white  shadow-md flex items-center justify-center font-jakarta transition-all duration-500 ease-in-out mobile-menu ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Menu Links (Displayed in X-axis) */}
        <div className="flex justify-between w-full px-4 sm:px-10 text-black">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="flex-1 text-center px-2 sm:px-4 py-2 text-base sm:text-lg md:text-xl font-medium transition-all duration-200 hover:bg-gray-700 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="hidden sm:flex gap-10 text-xl">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className="relative pb-2 transition-all duration-300 hover:text-gray-600"
          >
            {link.label}
            <span
              className="absolute left-0 bottom-[-6px] w-0 h-[3px] transition-all duration-500 ease-in-out hover:w-full"
              style={{
                background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30'%3E%3Cpath fill='none' stroke='${
                  isScrolled ? "black" : "white"
                }' stroke-width='4' d='M0 15 Q 25 0 50 15 T 100 15'/%3E%3C/svg%3E") repeat-x`,
                height: "12px",
              }}
            ></span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
