import React from "react";
import CafeMenuCard from "../CafePage/CafeMenuCard";
import RestaurantMenuCard from "../Restaurant/RestaurantMenuCard";
import BookingForm from "../BookingForm";

const MenuCards = () => {
  return (
    <div>
      <CafeMenuCard />
      <RestaurantMenuCard />
      <BookingForm/>
    </div>
  );
};

export default MenuCards;
