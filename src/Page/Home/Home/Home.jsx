import React from 'react';
import Gallery from '../Gallery/Gallery';
import Banner from '../Banner/Banner';

import ShopByCategory from '../../category/ShopByCategory';

const Home = () => {
    return (
        <div>

            <section>
                <Banner></Banner>
            </section>

            <section>
                <Gallery></Gallery>
            </section>
            <section>
              <ShopByCategory></ShopByCategory>
            </section>
        </div>
    );
};

export default Home;