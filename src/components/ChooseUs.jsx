import React from 'react';
import { assets } from '../assets/assets';

const ChooseUs = () => {
  return (
    <div className="px-4 py-10">
      <div className="text-4xl md:text-5xl font-bold text-center my-5 text-red-700">
        Why People Choose Us?
      </div>
      <div className="text-gray-500 text-lg md:text-xl text-center max-w-3xl mx-auto mt-6 md:mt-10 font-serif">
        People choose us for our exceptional service, diverse menu crafted for every taste, and commitment to using fresh ingredients, all delivered in a welcoming atmosphere by our experienced chefs.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto mt-10 max-w-6xl">
        <div className="text-center">
          <div className="w-24 md:w-40 mx-auto mb-4">
            <img src={assets.restaurant} alt="Menu for every taste" />
          </div>
          <div className="text-xl md:text-2xl font-bold">Menu for every taste</div>
          <div className="text-gray-500 mt-2">
            Our menu is crafted to satisfy every palate, offering a diverse selection of dishes that cater to all tastes and preferences.
          </div>
        </div>
        <div className="text-center">
          <div className="w-24 md:w-40 mx-auto mb-4">
            <img src={assets.fresh} alt="Always fresh ingredients" />
          </div>
          <div className="text-xl md:text-2xl font-bold">Always fresh ingredients</div>
          <div className="text-gray-500 mt-2">
            We pride ourselves on using only the freshest ingredients, ensuring every dish is packed with flavor and quality you can taste.
          </div>
        </div>
        <div className="text-center">
          <div className="w-24 md:w-40 mx-auto mb-4">
            <img src={assets.cheficon} alt="Experienced chefs" />
          </div>
          <div className="text-xl md:text-2xl font-bold">Experienced chefs</div>
          <div className="text-gray-500 mt-2">
            Our experienced chefs bring expertise and creativity to every dish, ensuring a memorable dining experience with every bite.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
