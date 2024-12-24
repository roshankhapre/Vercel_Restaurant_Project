import React from 'react';
import { assets } from '../../assets/assets';
import CallIcon from '@mui/icons-material/Call';

const About = () => {
  return (
    <div className='p-4 '>
      <div className=' flex flex-col md:flex-row items-center lg:items-center lg:justify-center gap-6'>
        <div className='justify-center w-96 lg:w-1/2 md:hidden lg:flex animate__backInLeft wow animate__animated'>
          <img
            src={assets.chef}
            alt="chef "
            className='  '
          />
        </div>
        <div className='flex flex-col justify-center  lg:w-1/2 animate__backInRight wow animate__animated'>
          <div className='bg-red-700 text-white rounded-lg font-bold text-center  py-2 px-4 mb-4 w-64'>
            ABOUT K'S Darshan Cafe
          </div>
          <div className='text-3xl md:text-6xl font-bold my-2 sm:my-4 '>
            Welcome to our Luxury Building.
          </div>
          <div className='text-base md:text-lg mb-5 text-gray-500 my-2 sm:my-5'>
          Perfectly seared scallops, tender and flavorful, were paired with a velvety risotto and crisp seasonal veggies, making for a delightful culinary experience
          </div>
          <div className='flex items-center'>
          <a href="tel:+9516997144">
            <span className='rounded-full bg-red-700 p-2 mr-3 text-white'>
              <CallIcon />
            </span>
            <span className='text-lg font-medium'> Phone: 93020 10771</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
