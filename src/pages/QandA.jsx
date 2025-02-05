import React, { useState, useEffect } from "react";
import Navbar from "./Navbar"; 
import ReviewCard from "../components/qanda/ReviewCard"; 

const faqData = [
  { question: "What services do you offer?", answer: "We specialize in precision cutting, balayage, creative hair coloring, and keratin smoothing treatments." },
  { question: "Do you use natural products?", answer: "Yes! We use 100% natural, cruelty-free, and non-GMO products for all treatments." },
  { question: "How can I book an appointment?", answer: "You can book an appointment through our website or by calling our salon." },
  { question: "Do you provide hair consultations?", answer: "Yes, our experts discuss your hair goals and recommend the best treatments." },
  { question: "What are your salon hours?", answer: "Monday to Saturday: 10 AM - 7 PM. Closed on Sundays." },
  { question: "Do you offer bridal or special event styling?", answer: "Absolutely! We offer bridal, prom, and special event hairstyling. Contact us for details." },
  { question: "What is your cancellation policy?", answer: "Appointments canceled within 24 hours will be charged a 50% fee." },
  { question: "Can I bring my own hair products?", answer: "Yes, but we recommend using our salon-tested professional products for best results." },
];

function QandA() {
  const [openIndex, setOpenIndex] = useState(null);
  const [reviewImages, setReviewImages] = useState([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  
  useEffect(() => {
    const fetchReviewImages = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=9");
        const data = await response.json();
        setReviewImages(data.results.map(user => user.picture.large)); 
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchReviewImages();
  }, []);

  const reviews = [
    { comment: "Absolutely love my new balayage! The stylists are so professional!", rating: 5 },
    { comment: "Best haircut I’ve ever had. Highly recommended!", rating: 4 },
    { comment: "Great service, friendly staff, and relaxing ambiance.", rating: 4 },
    { comment: "The styling was beyond my expectations!", rating: 5 },
    { comment: "The products they use are amazing. My hair feels healthier!", rating: 4.8 },
    { comment: "They really listen to what you want and deliver!", rating: 5 },
    { comment: "The best salon in town! I keep coming back!", rating: 4 },
    { comment: "Absolutely wonderful experience. Highly recommend.", rating: 4 },
    { comment: "They transformed my hair! Love it so much.", rating: 4.9 },
  ];

  return (
    <div className="w-full font-jakarta">
      <Navbar />

      <div className="w-full flex flex-col items-center px-6 sm:px-10 py-20 bg-gray-400">
        <h3 className="text-sm md:text-lg uppercase tracking-widest text-gray-600 text-center">Frequently Asked Questions</h3>
        <h2 className="text-2xl md:text-4xl font-semibold mt-3 text-center">Have Questions? We’ve Got Answers!</h2>

        <div className="w-full max-w-3xl mt-10">
          {faqData.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)} // Clicking anywhere toggles answer
              className="cursor-pointer border-b border-gray-300 py-4 px-6 bg-white rounded-md shadow-sm transition-all duration-300 mb-4"
            >
              <div className="w-full flex justify-between items-center text-left text-lg md:text-xl font-semibold text-gray-800">
                {faq.question}
                <span className={`text-2xl transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>▼</span>
              </div>
              <div className={`mt-2 text-gray-700 text-md overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-gray-50 py-20 px-6 sm:px-10">
        <h2 className="text-2xl md:text-4xl font-semibold text-center">What Our Clients Say</h2>
        <p className="text-lg text-gray-600 text-center mt-2">Rated <span className="text-black font-bold">4.9/5</span> by 100+ happy clients</p>

        {/* Grid of Reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              image={reviewImages[index] } 
              rating={review.rating}
              comment={review.comment}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default QandA;
