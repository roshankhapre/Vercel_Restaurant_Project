import React from "react";
import { hotelRoomImages } from "../../assets/assets";
import { Link } from "react-router-dom";
const hotelRooms = [
  {
    id: 1,
    img: hotelRoomImages.hotelroom1,

    title: "Welcome to Our Deluxe Hotel Rooms",
    description: "Luxury comfort and style await you.",
    button1: "Book Now",
    button2: "Explore Rooms",
  },
];

const HotelCarousel = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-pink-50">
      <div className="relative w-full h-full">
        {hotelRooms.map((room) => (
          <div key={room.id} className="relative w-full h-full">
            {/* Background image */}
            <img
              src={room.img}
              alt={room.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />

            {/* Overlay container for text and buttons */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white text-center p-4">
              <h1 className="font-caveat text-3xl sm:text-3xl md:text-4xl lg:text-5xl animate__animated animate__fadeInDown wow xl:text-6xl font-bold text-white mb-2 drop-shadow-lg">
                {room.title}
              </h1>
              <p className="font-merienda text-lg sm:text-xl md:text-2xl lg:text-3xl animate__animated animate__fadeInDown wow text-white mb-4 shadow-md shadow-green-800">{room.description}</p>
              <div className="flex space-x-4">
               <Link to='/bookingtable'>
               <button className="px-6 animate__bounceIn wow animate__animated py-3 bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-700 transition-all duration-300 rounded-full shadow-lg text-white font-semibold">
                  {room.button1}
                </button>
               </Link>
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelCarousel;
