import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const Booked = ({ selected }) => {
    const { handleCancel } = useContext(AuthContext)
    const { image, id, serviceName, category, description, pricing, duration, counselor, rating } = selected
    return (
        <div className='p-3 flex flex-col md:flex-row gap-3 bg-slate-50 shadow-lg'>
            <div className='md:w-2/5'><img className='md:h-full h-40 object-cover  w-full' src={image} alt="" /></div>
            <div>
                <h1 className='text-xl font-semibold'>{serviceName}</h1>
                <div className='flex gap-10 items-center'>
                    <div className="badge bg-slate-200 text-cyan-700 px-5 py-3">{category}</div>
                    <div className='flex items-center gap-1'>
                        <p>{rating}</p>
                        <div className="rating rating-xs">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-5"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
                <p><span className='font-semibold'>Price : </span><span className='text-orange-400'>{pricing}</span></p>
                <p><span className='font-semibold'>Duration : </span><span>{duration}</span></p>
                <p><span className='font-semibold'>Counselor : </span><span>{counselor}</span></p>
                <div className='flex justify-end'>
                    <button onClick={() => handleCancel(id)} className='btn-sm btn text-white bg-cyan-600'>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Booked;