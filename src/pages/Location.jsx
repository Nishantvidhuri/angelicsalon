import React from 'react';

import SecondSection from '../components/contact/SecondSection';
import FirstSection from '../components/contact/FirstSection';
import ThirdSection from '../components/contact/ThirdSection';
import ForthSection from '../components/contact/ForthSection';
import MapSection from '../components/contact/MapSection';
import Footer from '../components/Footer';
import { Navigate } from 'react-router-dom';
import Navbar from './Navbar';

function Location() {
  return (
    <div className="relative w-full h-screen">
      <Navbar/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <ForthSection/>
      <div className='bg-white w-screen h-10 -translate-y-[20%]'>

      </div>
      <MapSection/>
      <svg
        className="absolute  -translate-y-20  w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
      >
        <path
  fill="#004d40"
  fillOpacity="1"
  d="M0,60 Q72,100 144,60 T288,60 T432,60 T576,60 T720,60 T864,60 T1008,60 T1152,60 T1296,60 T1440,60 L1440,120 L0,120 Z"
/>


      </svg>
      <Footer/>
    </div>

   
  );
}

export default Location;
