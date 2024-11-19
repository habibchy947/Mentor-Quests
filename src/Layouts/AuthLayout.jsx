import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className=' bg-[#9b9999cc] bg-blend-overlay'>
            <div className='w-10/12 mx-auto py-10'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayout;