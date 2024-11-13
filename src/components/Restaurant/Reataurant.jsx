import React from 'react'
import CarousalReasturant from './CarousalReasturant'
import Gather from './Gather';
import BookingForm from '../BookingForm'
import RestaurantMenuCard from './RestaurantMenuCard';


const Reataurant = () => {
  return (
    <div>
      <CarousalReasturant/>
      <Gather/>
      <RestaurantMenuCard/>
      <BookingForm/>
     
    </div>
  )
}

export default Reataurant