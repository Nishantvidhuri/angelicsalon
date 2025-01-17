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

  useEffect(() => {
    const interval = setInterval(() => {
      slideImages();
    }, 1000); // Change every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentImages]);

  const slideImages = () => {
    setIsSliding(true); // Start the sliding animation
    setTimeout(() => {
      // After the animation, rearrange the images
      setCurrentImages((prevImages) => {
        const [first, ...rest] = prevImages;
        return [...rest, first]; // Move the first image to the end
      });
      setIsSliding(false); // Reset sliding state
    }, 500); // Match the animation duration
  };

  return (
    <div className="overflow-hidden w-screen pt-28  flex justify-center">
      {/* Carousel wrapper */}
      <div
        className={`flex gap-4 ${
          isSliding ? 'transition-transform duration-500 ease-in-out' : ''
        }`}
        style={{
          transform: isSliding ? 'translateX(-22%)' : 'translateX(0)', // Slide left
        }}
      >
        {currentImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`brand-${index}`}
            className="h-40 w-[25%] object-contain"
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
