import React from 'react';

const Mentor = ({ mentor }) => {
    const {counselor,goal,topic,duration,image} = mentor
    return (
        <div className="card relative bg-white rounded-xl shadow-md">
            <figure className="px-3 pt-3">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl h-44 overflow-hidden w-full object-cover " />
            </figure>
            <div className="card-body px-3 py-2">
                <h2 className=" text-lg font-semibold text-black">{topic}</h2>
                <p><span className='font-semibold'>Counselor :</span> <span>{counselor}</span></p>
                <p><span className='font-semibold'>Goal :</span> <span>{goal}</span></p>
                <div className=" flex justify-between items-center">
                    <p className='font-semibold'>Duration  :</p>
                    <p className='text-right'>{duration}</p>
                </div>
                <button className='btn btn-sm text-white bg-cyan-600'>Consult</button>
            </div>
        </div>
    );
};

export default Mentor;