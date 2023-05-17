import React from 'react';
import Gallery from '../Gallery/Gallery';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>

            <section>
                <Banner></Banner>
            </section>

            <section>
                <Gallery></Gallery>
            </section>
        </div>
    );
};

export default Home;