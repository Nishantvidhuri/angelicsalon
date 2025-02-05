import React from 'react'
import FirstSectionService from '../components/services/FirstSectionSercive'
import Navbar from './Navbar'
import SecondSection from '../components/services/SecondSection'
import ThirdSection from '../components/services/ThirdSection'
import FourthSection from '../components/services/FourthSection'
import Pricing from '../components/services/Pricing'
import Packages from '../components/services/Packages'
import ImageCarousel from '../components/contact/ImageCarousel'
import Footer from '../components/Footer'

function Services() {
  return (
    <div>
        <Navbar/>
        <FirstSectionService/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
        <Pricing />
        <Packages/>
        <div className="translate-y-40 sm:translate-y-[50%]">
        <ImageCarousel />
      </div>
        <Footer/>
    </div>
  )
}

export default Services