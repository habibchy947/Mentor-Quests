import React, { useContext } from 'react';
import { AuthContext } from '../Components/AuthProvider';
import Booked from '../Components/Booked';
import live from '../assets/streaming.png'
import livePic from '../assets/live-stream.png'

const Dashboard = () => {
    const { selectedServices, user, services } = useContext(AuthContext)
    return (
        <div className='w-11/12 mx-auto py-10'>
            <h2 className='text-4xl font-semibold text-center py-4'>Dashboard</h2>
            <p><span className='text-2xl font-semibold'>Welcome</span>  <span className='text-xl text-cyan-600'>{user?.displayName}</span></p>
            <p className='text-2xl font-semibold pt-3'>Your booking course :</p>
            <div className="divider"></div>
            {
                selectedServices.length
                    ?
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {
                            selectedServices.map((selected, idx) => <Booked key={idx} selected={selected}></Booked>)
                        }
                    </div>
                    :
                    <h2 className='text-lg text-cyan-600 pb-5 font-semibold'>For enrolling , please booking your course</h2>
            }
            <div className='grid grid-cols-1  md:grid-cols-2 gap-4'>
                <div className='flex flex-col justify-center text-center items-center py-3 px-2 rounded-lg space-y-2 bg-gradient-to-b from-slate-100 to-gray-300'>
                    <p className='flex gap-2 bg-slate-200 px-3 rounded-md'><span><img className='h-6 w-6' src={live} alt="" /></span><span>Live</span></p>
                    <h2 className='text-xl font-semibold'>Live session ongoing</h2>
                    <img className='w-24 h-24' src={livePic} alt="" />
                    <p className='text-lg font-semibold'>Topic : Self discovery and assessment</p>
                    <p>Duration : 2 hour</p>
                    <button className='btn btn-sm text-white bg-cyan-600'>Join Now</button>
                </div>
                <div className='flex flex-col justify-center text-center items-center py-3 px-2 rounded-lg space-y-2 bg-gradient-to-b from-gray-300 to-slate-100'>
                    <p className='flex gap-2 bg-slate-200 px-3 rounded-md'><span><img className='h-6 w-6' src={live} alt="" /></span><span>Live</span></p>
                    <h2 className='text-xl font-semibold'>UpComing session</h2>
                    <img className='w-24 h-24' src={livePic} alt="" />
                    <p className='text-lg font-semibold'>Topic : Exploring career options</p>
                    <p>Duration : 3 hour</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;