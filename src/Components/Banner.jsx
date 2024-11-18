// import Swiper JS
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../assets/slid1.avif'
import slide2 from '../assets/slid-2.avif'
import slide3 from '../assets/slid-3.jpeg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, EffectCube, Navigation, Pagination } from 'swiper/modules';


const Banner = () => {
    return (
        <div className=''>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                    shadow: false,
                    slideShadows: false,
                    shadowOffset: 0,
                    shadowScale: 0,
                  }}
                pagination={true}
                modules={[EffectCube, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=''>
                        <div className='w-11/12 mx-auto flex flex-col gap-5  md:flex-row md:py-16 py-9'>
                            <div
                                className='flex-1 md:pl-6 space-y-3 animate__animated animate__fadeInLeft'>
                                <h1 className='  md:text-5xl lg:text-6xl text-4xl font-bold lg:w-4/5 md:w-full  text-cyan-600'>
                                    Personalized Career Solutions for Your Unique Goals</h1>
                                <p className='lg:w-2/3 '>Guiding you toward a fulfilling career with personalized advice,
                                    expert insights, and proven strategies for success.</p>
                            </div>
                            <div className='md:h-80 w-full md:w-[50%] lg:w-[40%] md:pr-6'><img className='rounded-md object-cover w-full md:w-full h-full lg:w-full' src={slide1} alt="" /></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <div className='w-11/12 mx-auto flex flex-col gap-5  md:flex-row md:py-16 py-9'>
                            <div
                                className='flex-1 md:pl-6 space-y-3 animate__animated animate__fadeInLeft'>
                                <h1 className='md:text-5xl  lg:text-6xl text-4xl font-bold lg:w-4/5 md:w-full  text-cyan-600'>
                                    Empowering Your Career Aspirations,One step at a time</h1>
                                <p className='lg:w-2/3'>Discover your potential, explore opportunities,
                                 and achieve career success with expert guidance and personalized support.</p>
                            </div>
                            <div className='md:h-80 md:w-[50%] w-full lg:w-[40%] md:pr-6'><img className='rounded-md w-full object-cover  md:w-full h-full lg:w-full' src={slide2} alt="" /></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <div className='w-11/12 mx-auto flex flex-col gap-5  md:flex-row md:py-16 py-9'>
                            <div
                                className='flex-1 md:pl-6 space-y-3 animate__animated animate__fadeInLeft'>
                                <h1 className='md:text-5xl   lg:text-6xl text-4xl font-bold lg:w-4/5 md:w-full  text-cyan-600'>
                                    Navigate Your Career with Confidence and Clarity</h1>
                                <p className='lg:w-2/3'>Unlock your career potential with
                                 expert advice, personalized guidance, and proven strategies for success</p>
                            </div>
                            <div className='md:h-80 md:w-[50%] w-full lg:w-[40%] md:pr-6'><img className='w-full rounded-md object-cover md:w-full h-full lg:w-full' src={slide3} alt="" /></div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;