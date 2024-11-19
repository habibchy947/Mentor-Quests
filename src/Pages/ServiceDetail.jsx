import React, { useEffect, useRef, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { idx } = useParams()
    const data = useLoaderData()
    const [serviceSingle, setServiceSingle] = useState({})
    const [feedback,setFeedBack] =useState('')
    const nameRef = useRef()
    useEffect(() => {
        const singleService = [...data].find(service => service.id === parseInt(idx))
        setServiceSingle(singleService)
    }, [data, idx])
    const handleFeedChange = () => {
        setFeedBack(nameRef.current.value)
    }
    const { image, serviceName, category, description, pricing, duration, counselor, rating } = serviceSingle
    return (
        <div className='mb-2'>
            <div className='bg-serviceBanner bg-[#5f5959cc] bg-blend-overlay bg-no-repeat bg-cover bg-center'>
                <div className='w-11/12 mx-auto flex flex-col text-white justify-center items-center py-20 space-y-4'>
                    <h2 className='text-5xl font-semibold '>Service Details</h2>
                    <p className='md:w-2/3 text-center font-semibold'>Explore our service in detail! Discover how we provide tailored solutions to meet your needs, with a focus on quality, reliability, and customer satisfaction.</p>
                </div>
            </div>
            <div className='md:w-10/12 shadow-xl rounded-lg w-11/12 mx-auto flex md:flex-row flex-col-reverse  my-5'>
                <div className='flex-1 lg:p-10 md:p-5 p-3 space-y-2'>
                    <h2 className='text-3xl text-[#271e1ecc] font-semibold'>{serviceName}</h2>
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
                    <p className='font-semibold'>More about this course : </p>
                    <p>{description}</p>
                </div>
                <div className='flex-1 lg:p-10 md:p-5 p-3'>
                    <img className='rounded-md h-full' src={image} alt="" />
                </div>
            </div>
            <div className='md:w-10/12 w-11/12 mx-auto flex flex-col md:flex-row'>
            <div className='border-red-500 flex flex-1 flex-col join join-vertical'>
                <textarea  ref={nameRef} className="textarea textarea-bordered md:w-[400px] w-full h-28 join-item" placeholder="Submit your feedback"></textarea>
                <button onClick={handleFeedChange} className='btn btn-sm bg-cyan-600 text-white w-32 join-item'>Feedback</button>
            </div>
            <div className='flex-1'><p>{feedback && feedback}</p></div>
            </div>
        </div>
    );
};

export default ServiceDetail;