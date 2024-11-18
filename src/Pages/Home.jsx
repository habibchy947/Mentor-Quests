import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router-dom';
import Services from '../Components/Services';
import Reviews from '../Components/Reviews';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <section className='bg-yellow-50 mt-10 mb-8'>
            <Services services={data}></Services>
            </section>
            <section>
                <Reviews></Reviews>
            </section>
        </div>
    );
};

export default Home;