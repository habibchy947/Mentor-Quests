import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";
const Review = ({singleReview}) => {
    const {name,review,image} = singleReview
    return (
        <div className="flex rounded-lg  flex-col h-[500px] md:h-full  md:flex-row bg-base-100 shadow-lg">
        <figure className='md:w-[40%] rounded-lg'>
          <img
          className='h-60 object-cover rounded-lg w-full'
            src={image}
            alt="Movie" />
        </figure>
        <div className=" px-4 md:w-[60%]  py-5">
            <p><FaQuoteLeft></FaQuoteLeft></p>
        <p className='md:mt-3'>{review}</p>
          <h2 className="card-title text-cyan-600 md:mt-2">{name}</h2>
          <p>Client</p>
        </div>
      </div>
    );
};

export default Review;