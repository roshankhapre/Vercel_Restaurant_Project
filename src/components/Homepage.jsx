import React from "react";
import Carousel from "./Carousel";
import About from "./About/About";
import BookingCard from "./BookingCard";
import ChooseUs from "./ChooseUs";
import Menu from "./Restaurant/Menu";
import HomeReview from "./HomeReview";
import WhyUs from "./WhyUs";
import Timing from "./Timing";

const Homepage = () => {
  return (
    <div>
      <Carousel />
      <About />
      <BookingCard />

      <ChooseUs />
      <Menu />
      <HomeReview />
      <WhyUs />
      <Timing />
    </div>
  );
};

export default Homepage;
