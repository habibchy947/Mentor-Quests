import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router-dom';
import Services from '../Components/Services';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <section className='w-11/12 mx-auto mt-10 mb-8'>
            <Services services={data}></Services>
            </section>
        </div>
    );
};

export default Home;