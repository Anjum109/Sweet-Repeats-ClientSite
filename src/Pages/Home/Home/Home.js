import React from 'react';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import DiscountBanner from './DiscountBanner/DiscountBanner';
import HomePart2 from './HomePart2/HomePart2';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <HomePart2></HomePart2>

            <DiscountBanner></DiscountBanner>
        </div>
    );
};

export default Home;