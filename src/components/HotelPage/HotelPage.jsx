import React from "react";
import HotelCarosel from "./HotelCarousel";
import HotelServices from "./HotelServices";
import HotelRooms from "./HotelRooms";
import BookingForm from "../BookingForm";

const HotelPage = () => {
  return (
    <div>
      <HotelCarosel />
      <HotelServices />
      <HotelRooms />
      <BookingForm/>
    </div>
  );
};

export default HotelPage;
