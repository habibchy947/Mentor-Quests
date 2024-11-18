import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayouts = () => {
    return (
        <div className='font-poppins bg-white'>
            {/* navbar */}
            <section className=' bg-gray-200 sticky top-0'>
                <Navbar></Navbar>
            </section>
            {/* dynamic section */}
            <section className='min-h-screen'>
                <Outlet></Outlet>
            </section>
            {/* footer */}
            <section className='bg-slate-100'>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default MainLayouts;