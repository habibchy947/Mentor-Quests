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
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (

        <div className='w-11/12 mx-auto pt-10 pb-20 grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='md:text-left text-center'>
                <h2 className='text-3xl px-2 md:w-4/5  md:px-0 md:text-4xl font-semibold leading-tight pb-5'>
                    <span className='text-cyan-600 '>Transforming Lives, <br /></span>Stories of Success from Our Clients.
                </h2>
                <p className='md:w-2/3'>Real stories of growth and transformation from clients who have achieved success through our counseling.</p>
            </div>
            <div>
                <Swiper
                    spaceBetween={20}
                    centeredSlides={true}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        reviews.map((review, idx) => <SwiperSlide><Review key={idx} singleReview={review}></Review></SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>

    );
};

export default Reviews;