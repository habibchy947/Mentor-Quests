import React from 'react';
import { AwesomeButton } from "react-awesome-button";
import { useNavigate } from 'react-router-dom';
const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className='min-h-screen font-poppins flex flex-col justify-center items-center space-y-3'>
            <h1 className='text-9xl bg-clip-text inline-block text-transparent font-bold bg-gradient-to-r from-purple-600 via-green-500 to-indigo-400'>404</h1>
            <p className='text-4xl font-bold'>PAGES NOT FOUND</p>
            <p className='w-2/6 text-gray-800 text-center'>The page you are looking for might have been removed had its name changed or temporarily unavailable</p>
            <button onClick={()=> navigate('/')}><AwesomeButton type="secondary" onPress={AnimationEffect}>Home Page</AwesomeButton></button>
        </div>
    );
};

export default ErrorPage;