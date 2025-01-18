import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHome, FaMapMarkerAlt, FaConciergeBell, FaQuestionCircle, FaGift } from 'react-icons/fa';
import logo from '../assets/angelic salon.png';
import '../css/style.css';
import '@fontsource/playfair-display'; // All weights and styles

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.2) {
        setIsScrolled(true); // Navbar appears with transition
      } else {
        setIsScrolled(false); // Navbar scrolls with the page
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup listener
    };
  }, []);

  const handleMouseEnter = (link) => setHoveredLink(link);
  const handleMouseLeave = () => setHoveredLink(null);

  const navLinks = [
    { to: '/', label: 'Home', icon: <FaHome /> },
    { to: '/Location', label: 'Location', icon: <FaMapMarkerAlt /> },
    { to: '/services', label: 'Services', icon: <FaConciergeBell /> },
    { to: '/q-a', label: 'Q/A', icon: <FaQuestionCircle /> },
    { to: '/packages', label: 'Packages', icon: <FaGift /> },
  ];

  return (
    <>
      <nav
        className={`flex justify-between items-center px-5 sm:px-10 fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white shadow-md text-black translate-y-0'
            : 'bg-transparent text-white translate-y-0'
        }`}
      >
        {/* Logo */}
        <div className="pt-3">
          <Link to="/">
            <img className="w-20 sm:w-24 h-20 sm:h-24" src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <div className="sm:hidden">
          <button
            className="text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`sm:flex gap-10 text-xl fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } sm:relative sm:bg-transparent sm:shadow-none sm:translate-x-0 sm:w-auto sm:h-auto transition-transform duration-300`}
        >
          <div className="sm:hidden flex justify-end p-5">
            <button onClick={() => setIsMenuOpen(false)} className="text-2xl">
              ✖
            </button>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-10 items-center text-black sm:text-current">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                style={{
                  borderBottom: 'none',
                  paddingBottom: '2px',
                  backgroundRepeat: 'repeat',
                  backgroundImage:
                    hoveredLink === link.label
                      ? `url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 10 18'%3E%3Cstyle type='text/css'%3E.squiggle%7Banimation:shift .5s linear infinite;%7D@keyframes shift %7Bfrom %7Btransform:translateX(-10px);%7Dto %7Btransform:translateX(0);%7D%7D%3C/style%3E%3Cpath fill='none' stroke='${
                          isScrolled ? 'black' : 'white'
                        }' stroke-width='1' class='squiggle' d='M0,17.5 c 2.5,0,2.5,-1.5,5,-1.5 s 2.5,1.5,5,1.5 c 2.5,0,2.5,-1.5,5,-1.5 s 2.5,1.5,5,1.5' /%3E%3C/svg%3E")`
                      : '',
                }}
                className={({ isActive }) =>
                  `squiggleEffect ${isActive ? 'font-semibold ' : ''} ${
                    isMenuOpen ? 'flex items-center gap-2' : ''
                  }`
                }
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                {isMenuOpen && link.icon} {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
