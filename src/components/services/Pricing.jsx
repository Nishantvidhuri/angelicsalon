import React, { useState } from "react";

const pricingData = {
  Cuts: [
    { service: "Clippershort", price: "₹2900", extra: "Long", extraPrice: "₹5000" },
    { service: "Short", price: "₹3300", extra: "Boys", extraPrice: "₹2500" },
    { service: "Medium", price: "₹3700", extra: "Girls", extraPrice: "₹2500" },
  ],
  Styles: [
    { service: "Wash & style", price: "₹4200", extra: "Curls", extraPrice: "₹3800" },
    { service: "Express blowdry", price: "₹3300", extra: "Braids", extraPrice: "₹2500" },
    { service: "Updo", price: "₹5000", extra: "Extensions", extraPrice: "₹6300" },
  ],
  Coloring: [
    { service: "Highlights", price: "₹3800", extra: "Full color", extraPrice: "₹4600" },
    { service: "Balayage", price: "₹5800", extra: "Bleach & tone", extraPrice: "₹3300" },
    { service: "Root touch up", price: "₹2500", extra: "Toner", extraPrice: "₹2100" },
  ],
  Packages: [
    { service: "Olaplex", price: "₹3300", extra: "Anti-frizz treatment", extraPrice: "₹4600" },
    { service: "Eyebrow lamination", price: "₹5000", extra: "Rainbow colors", extraPrice: "₹2500" },
    { service: "Keratin smoothing", price: "₹6700", extra: "Color & foils", extraPrice: "₹5000" },
  ],
};

function Pricing() {
  const [activeTab, setActiveTab] = useState("Cuts");

  return (
    <div className="w-screen max-w-6xl mx-auto my-20 h-full mb-40 px-6">
      {/* Header with Title and Get Quote Button */}
      <div className="flex justify-between items-center font-jakarta w-full mb-10">
        <h2 className="text-5xl">Pricing list</h2>
        <button className="bg-black text-white w-40 h-16 text-lg font-semibold">
          Get quote
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-between w-full md:w-[1200px] border-b mb-12">
        {Object.keys(pricingData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-lg md:text-2xl font-jakarta border-b-2 font-medium 
              ${activeTab === tab ? "text-black border-black" : "text-gray-400 border-transparent"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Pricing Table */}
      <div className="w-full">
        {pricingData[activeTab].map((item, index) => (
          <div
            key={index}
            className="flex flex-wrap md:flex-nowrap justify-between items-center py-4 border-b border-gray-300 font-jakarta"
          >
            <span className="w-1/2 md:w-[15%] text-lg md:text-2xl text-center  font-medium ">
              {item.service}
            </span>

            {/* Wavy Line */}
            <span className="hidden md:block w-[35%]">
              <svg className="w-full h-6 md:h-8" viewBox="0 0 600 40" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M 0 20 Q 30 0, 60 20 T 120 20 T 180 20 T 240 20 T 300 20 T 360 20 T 420 20 T 480 20 T 540 20 T 600 20"
                  fill="transparent"
                  stroke="black"
                  strokeWidth="3"
                />
              </svg>
            </span>

            <span className="w-1/2 md:w-[10%] text-lg md:text-xl font-semibold text-center">
              {item.price}
            </span>

            <span className="w-1/2 md:w-[15%] text-lg md:text-2xl text-center font-medium ">
              {item.extra}
            </span>

            {/* Wavy Line */}
            <span className="hidden md:block w-[35%]">
              <svg className="w-full h-6 md:h-8" viewBox="0 0 600 40" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M 0 20 Q 30 0, 60 20 T 120 20 T 180 20 T 240 20 T 300 20 T 360 20 T 420 20 T 480 20 T 540 20 T 600 20"
                  fill="transparent"
                  stroke="black"
                  strokeWidth="3"
                />
              </svg>
            </span>

            <span className="w-1/2 md:w-[10%] text-lg md:text-xl font-semibold text-center">
              {item.extraPrice}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
