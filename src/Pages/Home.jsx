import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router-dom';
import Services from '../Components/Services';
import Reviews from '../Components/Reviews';
import WhatWeDo from '../Components/WhatWeDo';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Helmet>
                <title>Mentor Quest | Home</title>
            </Helmet>
            <Banner></Banner>
            <section className='bg-slate-100'>
                <WhatWeDo></WhatWeDo>
            </section>
            <section className='bg-yellow-50 mb-8'>
                <Services services={data}></Services>
            </section>
            <section>
                <Reviews></Reviews>
            </section>
        </div>
    );
};

export default Home;