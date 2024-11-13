import React, { useState, useEffect } from "react";
import { selectedImages } from "../../assets/assets"; // Import only the selectedAssets object
import WOW from "wowjs";
import "animate.css";
import { Link } from "react-router-dom";

// Texts array for each image
const texts = [
  {
    title: "We’re happy to welcome you to our restaurant!",
    subtitle: "Where Every Bite Tells a Story",
    description:
      "Savor gourmet dishes crafted with the freshest ingredients in an elegant, warm ambiance.",
    button1: "Book Your Table",
    button2: "Explore Our Menu",
  },
  {
    title: "Step in and enjoy a wonderful meal with us!",
    subtitle: "Delicious, Exquisite, and Memorable",
    description:
      "Discover a fusion of traditional and contemporary cuisines, masterfully prepared to excite your palate.",
    button1: "Reserve Now",
    button2: "Explore Meal",
  },
  {
    title: "The Ideal Spot to Dine and Unwind",
    subtitle: "Eat, Relax, and Enjoy",
    description:
      "Whether for a special occasion or casual dining, our cozy and inviting atmosphere sets the perfect scene.",
    button1: "Reserve Table",
    button2: "Explore Menu",
  },
  {
    title: "An Unforgettable Dining Experience",
    subtitle: "Delicious, Exquisite, and Memorable",
    description:
      "Discover a fusion of traditional and contemporary cuisines, masterfully prepared to excite your palate.",
    button1: "Book a Table",
    button2: "Discover Menu",
  },
];

const CarousalReasturant = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numVisibleIndicators = 3;

  const imagesArray = Object.values(selectedImages);

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, [imagesArray.length]);

  const visibleIndicatorsStart = Math.max(0, currentIndex - 1);
  const visibleIndicatorsEnd = Math.min(
    visibleIndicatorsStart + numVisibleIndicators,
    imagesArray.length
  );

  return (
    <div className="relative w-full h-screen overflow-hidden ">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {imagesArray.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-[2000ms] ease-in-out ${
              index === currentIndex
                ? "opacity-100 scale-105 z-20"
                : "opacity-0 scale-100"
            }`}
          >
            {/* Carousel Image */}
            <img
              src={image}
              alt={texts[index]?.title || `Carousel slide ${index + 1}`} // Updated alt attribute
              className="w-full h-full object-cover"
            />
            {index === currentIndex && texts[index] && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-50 z-30">
                <h1 className="animate__animated animate__fadeInDown wow text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                  {texts[index].title}
                </h1>
                <div className=" font-merienda text-lg sm:text-xl md:text-2xl animate__animated animate__fadeInDown wow lg:text-3xl text-white mb-4 shadow-md shadow-red-700">
                  {texts[index].subtitle}
                </div>
                <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 animate__animated animate__fadeInDown wow mb-8 px-6 sm:px-10 lg:px-20 shadow-md shadow-gray-700 max-w-2xl leading-relaxed">
                  {texts[index].description}
                </div>
                <div className="flex space-x-4 z-40 mt-4">
                 <Link to='/bookingtable'>
                 <button className=" px-4 py-2 sm:px-6 wow animate__backInLeft animate__animated sm:py-2 text-base sm:text-xl lg:text-2xl rounded-xl bg-red-700 hover:bg-red-800 transition duration-300">
                    {texts[index].button1}
                  </button>
                 </Link>
                 <Link to='/RestaurantMenuCard'>
                 <button
                    className=" px-4 py-2 sm:px-6 sm:py-2 wow animate__backInRight animate__animated text-base sm:text-xl lg:text-2xl rounded-xl bg-red-700 hover:bg-red-800 transition duration-300"
                   
                  >
                    {texts[index].button2}
                  </button>
                 </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Indicator images */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20 mb-20">
        {imagesArray
          .slice(visibleIndicatorsStart, visibleIndicatorsEnd)
          .map((image, index) => (
            <button
              key={index + visibleIndicatorsStart}
              onClick={() => setCurrentIndex(index + visibleIndicatorsStart)}
              className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden ${
                currentIndex === index + visibleIndicatorsStart
                  ? "border-4 border-pink-500"
                  : "border-2 border-gray-400"
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + visibleIndicatorsStart + 1} indicator`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
      </div>
    </div>
  );
};

export default CarousalReasturant;
