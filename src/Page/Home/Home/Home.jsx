import React from 'react';
import Gallery from '../Gallery/Gallery';
import Banner from '../Banner/Banner';

import ShopByCategory from '../../category/ShopByCategory';
import CustomerSay from '../CustomerSay/CustomerSay';
import SpecialOffers from '../SpecialOffer/SpecialOffers';
import useTitle from '../../../hooks/UseTitle';
const Home = () => {
    useTitle('Home')
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
            <section>
                <SpecialOffers></SpecialOffers>
            </section>
            <section>
                <CustomerSay></CustomerSay>
            </section>
        </div>
    );
};

export default Home;