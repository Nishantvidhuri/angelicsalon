import React from "react";
import card1 from "../../assets/card_inner_01.jpg";
import card2 from "../../assets/card_inner_02.jpg";
import card3 from "../../assets/card_inner_03.jpg";
import card4 from "../../assets/card_inner_04.jpg";

const services = [
  {
    title: "Cut & Color",
    description:
      "We are happy to be offering our full range of services in the salon, wash and blow drys included!",
    letter: "H",
    bg: "bg-gray-300",
    image: card1,
  },
  {
    title: "Natural Products",
    description:
      "Specializing in: precision cutting, balayage, creative hair colour and keratin smoothing treatments.",
    letter: "A",
    bg: "bg-orange-300",
    image: card2,
  },
  {
    title: "Highlight Styles",
    description:
      "We are looking forward to providing you with a fun, relaxing and safe appointment experience.",
    letter: "I",
    bg: "bg-gray-200",
    image: card3,
  },
  {
    title: "Hair Experts",
    description:
      "From barely there pink to balayage blonde, our colour experts will nail any tone you can imagine.",
    letter: "R",
    bg: "bg-green-300",
    image: card4,
  },
];

function ThirdSection() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 h-[150vh] w-full">
      {services.map((service, index) => (
        <div
          key={index}
          className={`relative flex flex-col items-center justify-center ${service.bg} transition-all duration-500 group`}
        >
          {/* Background Image on Hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Content */}
          <h1 className="text-black text-[300px] -translate-y-20  font-jakarta  transition-all font-thin
          duration-500 group-hover:text-white relative z-10">
            {service.letter}
          </h1>
          <h2 className="text-black text-3xl -translate-y-32 font-semibold transition-all duration-500 group-hover:text-white relative z-10">
            {service.title}
          </h2>
          <p className="text-black text-lg max-w-[80%] text-center mt-2 -translate-y-20 transition-all duration-500 group-hover:text-white relative z-10">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ThirdSection;
