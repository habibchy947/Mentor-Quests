import React from 'react';
import Service from './Service';

const Services = ({services}) => {
    return (
        <div className='w-11/12 mx-auto py-9'>
        <div className='text-center md:w-3/5 mx-auto space-y-3 mb-9 '>
            <h3 className='text-4xl font-semibold'>Our Popular<span className='text-cyan-600'> Services</span></h3>
            <p>Joi session on career growth, skill building and professional development.Create actionable plans to achieve
                your long-term career objectives</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-7 gap-6'>
            {
                services.map((service,idx)=><Service key={idx} service={service}></Service>)
            }
        </div>
        </div>
    );
};

export default Services;