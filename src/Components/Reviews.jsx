import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'
import Review from './Review';
// import client1 from '../assets/client-1.jpeg'
// import client2 from '../assets/client-2.jpeg'
// import client3 from '../assets/client-3.jpg'
// import client4 from '../assets/client-4.avif'
// import client5 from '../assets/client-5.avif'

const Reviews = () => {
    const [reviews,setReviews] = useState([])
useEffect(()=>{
    fetch('reviews.json')
    .then(res => res.json())
    .then(data => setReviews(data))
},[])
    return (

        <div className='w-11/12 mx-auto pt-10 pb-20'>
            <div className='text-center '>
                <h2 className='text-4xl font-semibold leading-tight pb-5'>
                    <span className='text-cyan-600 '>Transforming Lives,</span> <br /> Stories of Success from Our Clients.
                </h2>
            </div>
            <Swiper
            spaceBetween={20}
            centeredSlides={true}
            slidesPerView={2}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {
                reviews.map((review,idx)=> <SwiperSlide><Review key={idx} singleReview={review}></Review></SwiperSlide>)
            }
        </Swiper>
        </div>

    );
};

export default Reviews;