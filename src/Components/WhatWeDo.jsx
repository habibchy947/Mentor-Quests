import React from 'react';
import { GiTeacher } from "react-icons/gi";
import consultation from '../assets/clarification (1).png'
import exploring from '../assets/discover.png'
import realize from '../assets/health.png'
import mentor from '../assets/online-mentoring.png'
const WhatWeDo = () => {
    return (
        <div className='w-11/12 mx-auto py-14 flex flex-col gap-10 md:gap-0 items-center md:flex-row'>
            <div className='md:w-2/5 space-y-3 animate__animated animate__fadeInUp animate animate__slower'>
                <p className='text-cyan-600'>Discover how we transform your future</p>
                <h2 className='md:text-5xl text-3xl font-semibold leading-tight '>The right coach <br /> empowers you to trust in your abilities</h2>
                <p>The right coach provides guidance, support, and encouragement,
                    helping you recognize your strengths and build confidence in your abilities.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 md:w-3/5 gap-6 animate__animated animate__fadeInRight animate animate__slower'>
                <div className='bg-mentor bg-cover bg-center bg-[#463f3fcc]  hover:bg-stone-700 hover:scale-110 space-y-2 bg-blend-overlay px-2 py-4 rounded-lg text-white text-center flex flex-col items-center'>
                    <span className='text-white text-3xl font-semibold'><img className='h-16 w-16' src={mentor} alt="" /></span>
                    <h2 className='text-white text-2xl font-bold'>Mentoring</h2>
                    <p className='text-white'>We provide personalized mentoring to help you unlock your potential, gain clarity, and achieve your goals with confidence.</p>
                </div>
                <div className='bg-consultation bg-cover bg-center bg-[#463f3fcc] hover:bg-stone-700 hover:scale-110 space-y-2 bg-blend-overlay px-2 py-4 rounded-lg text-white text-center flex flex-col items-center'>
                    <span className='text-white text-3xl font-semibold'><img className='h-16 w-16' src={consultation} alt="" /></span>
                    <h2 className='text-white text-2xl font-bold'>Consultation</h2>
                    <p className='text-white'>We provide personalized mentoring to help you unlock your potential, gain clarity, and achieve your goals with confidence.</p>
                </div>
                <div className='bg-explore bg-cover bg-center bg-[#463f3fcc]   hover:bg-stone-700 hover:scale-110 space-y-2 bg-blend-overlay px-2 py-4 rounded-lg text-white text-center flex flex-col items-center'>
                    <span className='text-white text-3xl font-semibold'><img className='h-16 w-16' src={exploring} alt="" /></span>
                    <h2 className='text-white text-2xl font-bold'>Explore</h2>
                    <p className='text-white'>We provide personalized mentoring to help you unlock your potential, gain clarity, and achieve your goals with confidence.</p>
                </div>
                <div className='bg-realization bg-cover bg-center bg-[#463f3fcc]  hover:bg-stone-700 hover:scale-110 space-y-2 bg-blend-overlay px-2 py-4 rounded-lg text-white text-center flex flex-col items-center'>
                    <span className='text-white text-3xl font-semibold'><img className='h-16 w-16' src={realize} alt="" /></span>
                    <h2 className='text-white text-2xl font-bold'>Realization</h2>
                    <p className='text-white'>We provide personalized mentoring to help you unlock your potential, gain clarity, and achieve your goals with confidence.</p>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;