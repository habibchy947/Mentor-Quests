import React from 'react';
import { IoIosTime } from "react-icons/io";
const Service = ({ service }) => {
    const { image, serviceName, category, pricing, duration, counselor, rating } = service
    console.log(service)
    return (
        <div className="card relative bg-white rounded-3xl shadow-md outline-2 border-2  border-cyan-100 hover:border-none">
            <figure className="px-3 pt-3">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl h-52 w-full object-cover " />
            </figure>
            <div className="card-body px-3 py-3 space-y-2">
                <div className='flex justify-between items-center'>
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

                <h2 className="card-title text-2xl font-medium text-black">{serviceName}</h2>
                <p><span className='font-semibold'>Counselor :</span> {counselor}</p>
                <div className="card-actions flex justify-between items-center">
                    <button className="btn btn-outline outline-zinc-500 hover:bg-cyan-600 text-black rounded-2xl">Learn More</button>
                    <div className='flex items-center gap-1'><span className='text-xl font-semibold text-orange-400'><IoIosTime></IoIosTime></span>{duration}</div>
                </div>
            </div>
            <div className='h-20 -top-8 md:-right-5 -right-1 w-20 text-xl font-bold absolute text-white rounded-full text-center bg-orange-400 flex items-center justify-center'>{pricing}</div>
        </div>
    );
};

export default Service;