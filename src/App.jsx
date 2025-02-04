import React, { useState, useEffect } from 'react';


import './css/style.css';
import '@fontsource/playfair-display'; // All weights and styles
import Footer from './components/Footer';
import Navbar from './pages/Navbar';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import Routes from './pages/Routes';
import AppRoutes from './pages/Routes';
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
     <AppRoutes/>

      

    </div>

  );
}

export default App;
