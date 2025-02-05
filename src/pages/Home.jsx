import React from 'react'
import FirstSection from '../components/FirstSection'
import Navbar from './Navbar'
import SecondSection from '../components/SecondSection'
import Footer from '../components/Footer'
import ThirdSection from '../components/services/ThirdSection'

function Home() {
  return (
    <div>
     <Navbar/>

{/* First Section with the image */}
<FirstSection/>

<ThirdSection/>

{/* Second Section */}
<SecondSection/>

     {/* Wavy Divider */}
     <svg
className="bg-[#4B5563]  ans w-full"
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
  )
}

export default Home