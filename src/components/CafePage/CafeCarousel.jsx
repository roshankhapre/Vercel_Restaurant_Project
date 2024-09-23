import React, { useEffect, useState } from "react";
import {
  cafeCarousalImage,cafeImages,} from "../../assets/assets";
import WOW from "wowjs";
import { Link } from "react-router-dom";

const cafeImage = [
  {
    id: 1,
    title: "Welcome to Our K's Darshan",
    subtitle: "Where Every Sip Brings Joy",
    description:
      "Indulge in the finest handcrafted coffee and delightful treats in a cozy, pink-themed ambiance.",
    cafeImg: cafeImages.cafeImg,
    button1: "Book Your Table",
    button2: "Explore Our Menu",
  },
  {
    id: 2,
    title: "A Culinary Experience Like No Other",
    subtitle: "Delicious, Creative, and Satisfying",
    description:
      "Explore a variety of cuisines and beverages carefully curated to satisfy your cravings.",
    cafeImg: cafeImages.cafeImg1,
    button1: "Reserve Now",
    button2: "View Our Dishes",
  },
  {
    id: 3,
    title: "The Perfect Place to Unwind",
    subtitle: "Relax, Sip, and Savor",
    description:
      "Whether you're working or socializing, our cozy pink-hued interiors provide the perfect backdrop.",
    cafeImg: cafeImages.cafeImg2,
    button1: "Book Now",
    button2: "Visit Our Meal",
  },
];

const CafeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const numVisibleIndicators = 3;

  const imagesArray = Object.values(cafeCarousalImage);

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
    <div className="relative w-full h-screen md:h-[90vh] bg-pink-100 overflow-hidden">
      <div className="relative w-full h-full flex justify-center items-center">
        {cafeImage.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out transform ${
              index === currentIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            {/* Background Image */}
            <img
              src={item.cafeImg}
              alt={item.title}
              className="w-full h-full object-cover brightness-75"
              onError={(e) => {
                console.error(`Failed to load image: ${item.cafeImg}`);
                e.target.src = "fallback-image-url"; // Optional fallback
              }}
            />
            {/* Overlay Text Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-8">
              <h2 className="font-caveat text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 drop-shadow-lg">
                {item.title}
              </h2>
              <p className="font-merienda text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-4 shadow-md shadow-pink-400">
                {item.subtitle}
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-8 px-6 sm:px-10 lg:px-20 shadow-md shadow-gray-700 max-w-2xl leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
               <Link to='/bookingtable'>
               <button className="bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-600 hover:to-pink-400 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition duration-300 ease-in-out shadow-xl shadow-pink-600/50 transform hover:scale-110">
                  {item.button1}
                </button>
               </Link>
               <Link to='/CafeMenuCard'>
               <button className="bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-600 hover:to-teal-400 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition duration-300 ease-in-out shadow-xl shadow-teal-600/50 transform hover:scale-110">
                  {item.button2}
                </button>
               </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Carousel Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50 mb-20">
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
                alt={`Slide ${index + visibleIndicatorsStart + 1} indicator`} // Updated alt attribute
                className="w-full h-full object-cover"
              />
            </button>
          ))}
      </div>
    </div>
  );
};

export default CafeCarousel;
