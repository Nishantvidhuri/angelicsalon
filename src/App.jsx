import React, { useState, useEffect } from 'react';


import './css/style.css';
import '@fontsource/playfair-display'; // All weights and styles
import Footer from './components/Footer';
import Navbar from './pages/Navbar';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
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
    <div className="w-screen bg-[#4B5563] overflow-x-hidden ">
      <Navbar/>
     

      {/* First Section with the image */}
   <FirstSection/>



      {/* Second Section */}
      <SecondSection/>

           {/* Wavy Divider */}
           <svg
  className="bg-[#4B5563] translate-y-2 ans w-full"
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
      Z"
  ></path>
</svg>

  <Footer />

    </div>
  );
}

export default App;
