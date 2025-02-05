import React from "react";
import vertical1 from "../../assets/vertical1.jpg";
import vertical2 from "../../assets/vertical2.jpg";
import vertical3 from "../../assets/vertical3.jpg";
import vertical4 from "../../assets/vertical4.jpg";

const services = [
  {
    title: "Best treatments",
    description:
      "We are happy to be offering our full range of services in the salon, wash and blow drys included!",
    letter: "S",
    bg: "bg-orange-300",
    image: vertical1,
  },
  {
    title: "Shop products",
    description:
      "Specializing in: precision cutting, balayage, creative hair colour and keratin smoothing treatments.",
    letter: "K",
    bg: "bg-green-300",
    image: vertical2,
  },
  {
    title: "Face & body",
    description:
      "We are looking forward to providing you with a fun, relaxing and safe appointment experience.",
    letter: "I",
    bg: "bg-gray-300",
    image: vertical3,
  },
  {
    title: "Skin experts",
    description:
      "From barely there pink to balayage blonde, our colour experts will nail any tone you can imagine.",
    letter: "N",
    bg: "bg-gray-400",
    image: vertical4,
  },
];

function FourthSection() {
  return (
    <div className="grid grid-cols-4 h-screen font-jakarta   w-full">
      {services.map((service, index) => (
        <div
          key={index}
          className={`relative flex flex-col items-center justify-center ${service.bg} transition-all duration-500 group overflow-hidden`}
        >
          {/* Background Image on Hover */}
          <div
            className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-all duration-500"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Content */}
          <h1 className="text-black text-[200px]   font-jakarta -translate-y-10 transition-all duration-500 group-hover:text-white relative z-10">
            {service.letter}
          </h1>
          <h2 className="text-black text-2xl font-semibold -translate-y-10 mt-2 transition-all duration-500 group-hover:text-white relative z-10">
            {service.title}
          </h2>
          <p className="text-black text-lg max-w-[80%] text-center mt-2 -translate-y-10 transition-all duration-500 group-hover:text-white relative z-10">
            {service.description}
          </p>

          
        </div>
        
      ))}
     <div className=" w-screen">
    
     </div>
    </div>
  );
}

export default FourthSection;
