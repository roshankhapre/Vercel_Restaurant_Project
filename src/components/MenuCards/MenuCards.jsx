import React from "react";
import CafeMenuCard from "../CafePage/CafeMenuCard";
import RestaurantMenuCard from "../Restaurant/RestaurantMenuCard";

const MenuCards = () => {
  return (
    <div>
      <CafeMenuCard />
      <RestaurantMenuCard />
    </div>
  );
};

export default MenuCards;
