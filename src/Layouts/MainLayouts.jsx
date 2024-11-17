import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const MainLayouts = () => {
    return (
        <div className='font-poppins'>
            {/* navbar */}
            <section className='bg-slate-100 sticky top-0'>
            <Navbar></Navbar>
            </section>
            {/* dynamic section */}
            <section>
            <Outlet></Outlet>
            </section>
            {/* footer */}
        </div>
    );
};

export default MainLayouts;