import React from "react";
import ImageCarousel from "../contact/ImageCarousel";

const packages = [
  {
    title: "Hair Plus",
    price: "₹16,500", // $200 converted
    features: ["Cutting", "Coloring", "Styling"],
    bgColor: "bg-[#D99874]",
    height: "h-[450px]",
    zIndex: "z-10",
    position: "lg:-translate-x-20", // Moves left on large screens
  },
  {
    title: "Premium",
    price: "₹41,500", // $500 converted
    features: ["Hair Pack", "Cutting", "Coloring"],
    bgColor: "bg-[#EAE3D2]",
    height: "h-[500px]",
    zIndex: "z-20",
    position: "lg:-translate-y-12", // Centered
  },
  {
    title: "Supreme",
    price: "₹24,900", // $300 converted
    features: ["Hair Pack", "Cutting", "Styling"],
    bgColor: "bg-[#C4C3C3]",
    height: "h-[450px]",
    zIndex: "z-10",
    position: "lg:translate-x-20", // Moves right on large screens
  },
];

function Packages() {
  return (
    <div className="w-full flex flex-col items-center font-jakarta px-4 md:px-8">
      {/* Title */}
      <h3 className="text-sm md:text-lg uppercase tracking-widest text-gray-600 text-center">
        Specialized Hair Care
      </h3>
      <h2 className="text-2xl md:text-4xl font-semibold mt-3 text-center">
        You will love these packages
      </h2>

      {/* Package Cards */}
      <div className="relative w-full max-w-7xl flex justify-center mt-16">
        <div className="flex flex-col md:flex-row md:gap-8 items-center justify-center">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center justify-center p-8 text-center text-black 
              ${pkg.bgColor} ${pkg.height} w-[300px] md:w-[340px] lg:w-[400px] rounded-lg shadow-2xl 
              transition-all duration-500 ${pkg.zIndex} ${pkg.position}`}
            >
              {/* Title & Price */}
              <h2 className="text-2xl md:text-3xl font-semibold">{pkg.title}</h2>
              <p className="text-3xl md:text-4xl font-bold mt-3">{pkg.price}</p>

              {/* Vertical Line or Wavy Line */}
              <div className="my-6 flex justify-center">
                {index === 0 ? (
                  <div className="w-[2px] h-12 md:h-16 bg-black"></div>
                ) : (
                  <svg className="h-12 md:h-16" viewBox="0 0 20 50">
                    <path
                      d="M 10 0 Q 15 15, 10 30 Q 5 45, 10 50"
                      stroke="black"
                      strokeWidth="2"
                      fill="transparent"
                    />
                  </svg>
                )}
              </div>

              {/* Features List */}
              <ul className="text-lg md:text-xl font-medium space-y-2 md:space-y-3">
                {pkg.features.map((feature, i) => (
                  <li key={i}>{feature.toUpperCase()}</li>
                ))}
              </ul>

              {/* Buy Now Button */}
              <button className="mt-6 bg-black text-white py-3 px-6 md:py-4 md:px-8 text-lg md:text-xl rounded-md shadow-lg hover:bg-gray-800 transition">
                Buy now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Image Carousel (Moved Responsively) */}
      <div className="mt-16 md:mt-24 w-full max-w-7xl">
        <ImageCarousel />
      </div>
    </div>
  );
}

export default Packages;
