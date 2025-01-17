import React, { useState, useEffect } from 'react';
import bgImage from './assets/bgImage.png';
import ImageCarousel from './components/ImageCarousel';
import { Link, NavLink } from 'react-router-dom';
import logo from './assets/angelic salon.png';
import './css/style.css';
import '@fontsource/playfair-display'; // All weights and styles
import organic from './assets/organic.png'
import angelic from './assets/angelic.png'

import heart from './assets/heart.png'
import natural from './assets/natural.png'
import Footer from './components/Footer';
function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

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
    { to: '/', label: 'Home' },
    { to: '/Location', label: 'Location' },
    { to: '/services', label: 'Services' },
    { to: '/q-a', label: 'Q/A' },
    { to: '/packages', label: 'Packages' },
  ];

  return (
    <div className="w-screen overflow-x-hidden ">
      {/* Navbar */}
      <nav
        className={`flex  justify-between items-center px-10 fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white shadow-md text-black translate-y-0' // Transition into view
            : 'bg-transparent text-white translate-y-0' // Default state (scrolls with page)
        }`}
      >
        {/* Logo */}
        <div className='pt-5'>
          <Link to="/">
            <img className="w-24  h-24" src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-10 text-xl">
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
                `squiggleEffect ${isActive ? 'font-semibold ' : ''}`
              }
              onMouseEnter={() => handleMouseEnter(link.label)}
              onMouseLeave={handleMouseLeave}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* First Section with the image */}
      <div className="relative ">
        <img src={bgImage} alt="Background" className="w-full h-auto" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start pt-40 gap-5 px-[10%]">
          <div className="text-8xl text-white">
            Ancient Wisdom,
            <br />
            modern hair.
          </div>
          <div className="flex gap-5">
            {/* First Button */}
            <button class="learn-more">
  <span aria-hidden="true" class="circle">
  <span class="icon arrow"></span>
  </span>
  <span class="button-text">Learn More</span>
</button>

            {/* Second Button */}
            <button
              className="relative text-xl text-white"
              style={{ textDecoration: 'none' }}
            >
              Book an appointment
              
              <span
                className="absolute left-0 bottom-[-6px] w-full h-[3px]"
                style={{
                  background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30'%3E%3Cpath fill='none' stroke='white' stroke-width='4' d='M0 15 Q 25 0 50 15 T 100 15'/%3E%3C/svg%3E") repeat-x`,
                  height: '12px',
                }}
              ></span>
            </button>
          </div>
          <ImageCarousel />
        </div>
       {/* Wavy Divider */}
<svg
  className="absolute  bottom-0 w-full"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1440 120" /* Adjust height to 120 for less vertical size */
>
  <path
    fill="#BFDBFE" /* Adjust to match the next section’s background color */
    fillOpacity="1"
    d="
      M0,60 
      Q72,100,144,60 
      T288,60 
      T432,60 
      T576,60 
      T720,60 
      T864,60 
      T1008,60 
      T1152,60 
      T1296,60 
      T1440,60 
      L1440,120 
      L0,120 
      Z"
  ></path>
</svg>

      </div>



      {/* Second Section */}
      <div className="h-screen flex items-center  justify-center bg-blue-200 text-black">
  <div className="flex flex-wrap max-w-7xl mx-auto">
    {/* Left Column */}
    <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
  <header>
    <div className="flex">
      
      
    </div>
    <h1 className="text-5xl pt-serif-bold text-black mb-6">
      Natural cuts &amp; styling
    </h1>
  </header>
  <p className="text-gray-600 leading-relaxed text-2xl mb-8 pt-serif-regular">
    Designed to maintain your current colour, blend out a growing root or
    balance your blonde while providing full and demi-permanent coverage.
    Our custom kit can disguise grey-white hair.
  </p>
  <button className="animated-button  w-1/2">
  <svg xmlns="http://www.w3.org/2000/svg" className="arr-2 " viewBox="0 0 24 24">
    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
  </svg>
  <span className="text">Book an Appointment</span>
  <span className="circle"></span>
  <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
  </svg>
</button>

</div>


    {/* Right Column */}
    <div className="w-full lg:w-1/2 p-8 space-y-10 mt-[%]">
  {/* Service 1 */}
  <div className="flex items-start">
    <div className=" flex items-center justify-center">
      <img src={organic} alt="100% Natural Products" className=" w-24 mt-5" />
    </div>
    <div className="ml-4">
      <h4 className="text-2xl font-bold text-gray-800 font-[Playfair Display]">
        100% natural products
      </h4>
      <p className="text-gray-600 text-lg font-[Poppins] leading-relaxed">
        We are well equipped with years of hair know-how, and ready to create
        your best look with natural products.
      </p>
    </div>
  </div>

  {/* Service 2 */}
  <div className="flex items-start">
    <div className="rounded-full flex items-center justify-center">
      <img src={heart} alt="Cruelty Free" className="w-24 " />
    </div>
    <div className="ml-4">
      <h4 className="text-2xl font-bold text-gray-800 font-[Playfair Display]">
        Cruelty free
      </h4>
      <p className="text-gray-600 text-lg font-[Poppins] leading-relaxed">
        Hair is our passion, and our passion shows on every client that walks
        out of our doors full of confidence.
      </p>
    </div>
  </div>

  {/* Service 3 */}
  <div className="flex items-start">
    <div className=" rounded-full flex items-center justify-center">
      <img src={natural} alt="Non GMO" className="w-24 " />
    </div>
    <div className="ml-4">
      <h4 className="text-2xl font-bold text-gray-800 font-[Playfair Display]">
        Non GMO
      </h4>
      <p className="text-gray-600 text-lg font-[Poppins] leading-relaxed">
        If you have a look you want but don't know how to achieve, we can work
        together to form a plan for your hair.
      </p>
    </div>
  </div>
</div>
  </div>

</div>

           {/* Wavy Divider */}
<svg
  className=" bg-blue-200 ans w-full"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1440 120" /* Adjust height to 120 for less vertical size */
>
  <path
    fill="#004d40" /* Adjust to match the next section’s background color */
    fillOpacity="1"
    d="
      M0,60 
      Q72,100,144,60 
      T288,60 
      T432,60 
      T576,60 
      T720,60 
      T864,60 
      T1008,60 
      T1152,60 
      T1296,60 
      T1440,60 
      L1440,120 
      L0,120 
      A"
  ></path>
</svg>
  <Footer />

    </div>
  );
}

export default App;
