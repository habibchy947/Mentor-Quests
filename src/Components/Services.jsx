import React from 'react';
import Service from './Service';

const Services = ({services}) => {
    return (
        <>
        <div className='text-center w-3/5 mx-auto space-y-3 mb-9'>
            <h3 className='text-3xl font-semibold'>Our Popular<span className='text-cyan-600'> Services</span></h3>
            <p>Joi session on career growth, skill building and professional development.Create actionable plans to achieve
                your long-term career objectives</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                services.map((service,idx)=><Service key={idx} service={service}></Service>)
            }
        </div>
        </>
    );
};

export default Services;