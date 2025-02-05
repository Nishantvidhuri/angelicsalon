import React from "react";

function ReviewCard({ image, rating, comment }) {
  return (
    <div className="relative bg-gray-200 shadow-lg rounded-lg overflow-hidden p-6 flex flex-col items-center">
      <img
        src={image}
        alt="Client Review"
        className="w-24 h-24 object-cover rounded-full border-4 border-gray-300"
      />

      <div className="relative mt-4 bg-white shadow-md px-4 py-3 rounded-lg max-w-[90%] text-center">
        <p className="text-gray-700 italic">"{comment}"</p>
      </div>

      <div className="flex mt-3 text-yellow-500 text-2xl">
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index}>{index < rating ? "★" : "☆"}</span>
        ))}
      </div>
    </div>
  );
}

export default ReviewCard;
