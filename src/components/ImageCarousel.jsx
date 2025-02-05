import React, { useState, useEffect } from 'react';
import br1 from '../assets/BRAND1.png';
import br2 from '../assets/Brand2.png';
import br3 from '../assets/Brand3.png';
import br4 from '../assets/Brand5.png';
import br5 from '../assets/Brand4.png';

function ImageCarousel() {
  const images = [br1, br2, br3, br4, br5];
  const [currentImages, setCurrentImages] = useState(images);
  const [isSliding, setIsSliding] = useState(false);
  const isLargeScreen = window.innerWidth >= 1024;
  useEffect(() => {
    const interval = setInterval(() => {
      slideImages();
    }, 1000); 

    return () => clearInterval(interval); 
  }, [currentImages]);

  const slideImages = () => {
    setIsSliding(true);
    setTimeout(() => {
      
      setCurrentImages((prevImages) => {
        const [first, ...rest] = prevImages;
        return [...rest, first]; 
      });
      setIsSliding(false); 
    }, 500); 
  };

  return (
    <div className="overflow-hidden w-full sm:pt-16 flex justify-center">
  {/* Carousel Wrapper */}
  <div
    className={`flex gap-4 ${
      isSliding ? 'transition-transform duration-500 ease-in-out' : ''
    }`}
    style={{
    transform: isSliding
      ? `translateX(${isLargeScreen ? '-21.2%' : '-55%'})`
      : 'translateX(0)', // Conditional transform value
  }}
  >
    {currentImages.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`brand-${index}`}
        className="h-20  sm:h-24 lg:h-32 w-1/2 sm:w-1/5 object-contain"
      />
    ))}
  </div>
</div>

  );
}

export default ImageCarousel;
