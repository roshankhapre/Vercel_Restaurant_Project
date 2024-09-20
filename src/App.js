import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Cafepage from "./components/CafePage/Cafepage";
import Reataurant from "./components/Restaurant/Reataurant";
import HotelPage from "./components/HotelPage/HotelPage";
import RooftopPage from "./components/RoofTop/RooftopPage";
import AboutUsPage from "./components/About Us/AboutUsPage";
import MenuCards from "./components/MenuCards/MenuCards";
import BookingTable from "./components/BookingTable/BookingTable";
import CafeMenuCard from "./components/CafePage/CafeMenuCard";
import RestaurantMenuCard from "./components/Restaurant/RestaurantMenuCard";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="cafe" element={<Cafepage />} />
          <Route path="restaurant" element={<Reataurant />} />
          <Route path="hotel" element={<HotelPage />} />
          <Route path="rooftop" element={<RooftopPage />} />
          <Route path="menu" element={<MenuCards />} />
          <Route path="aboutus" element={<AboutUsPage />} />
          <Route path="bookingTable" element={<BookingTable />} />
          <Route path="/CafeMenuCard" element={<CafeMenuCard/>}/>
          <Route path="/RestaurantMenuCard" element={<RestaurantMenuCard/>}/>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
