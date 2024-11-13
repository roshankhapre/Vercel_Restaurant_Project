import React from "react";
import { assets } from "../../assets/assets";

const AboutRoofTop2 = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 md:gap-10">
      <div className="m-5 md:m-10 wow animate__fadeInLeft animate__animated">
        <img
          src={assets.roofexperice}
          alt="roofexperience"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="mx-5 md:mx-10 flex flex-col justify-center wow animate__fadeInRight animate__animated">
        <div className="bg-red-700 w-32 text-center rounded-xl mb-5 text-2xl md:text-3xl font-bold text-white">
          Explore
        </div>
        <div className="text-3xl md:text-4xl font-bold mb-5 md:mb-10">
          More Than Just a Meal—It’s a Journey
        </div>
        <ul className="space-y-5 text-lg md:text-xl">
          <li>
            <span className="font-bold">Brunch with a View:</span> Start your
            day with a refreshing rooftop brunch as you soak in the morning
            sun.
          </li>
          <li>
            <span className="font-bold">Dinner Under the Stars:</span>{" "}
            Experience the magic of dining al fresco with the stars overhead
            and the city at your feet.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutRoofTop2;
