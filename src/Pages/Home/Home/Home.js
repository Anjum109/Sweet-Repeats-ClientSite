import React from 'react';
import useTitle from '../../../hooks/useTitle.js/useTitle';
import Advertise from '../../../Others/Advertise/Advertise';
import Contact from '../Contact/Contact';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import DiscountBanner from './DiscountBanner/DiscountBanner';
import HomePart2 from './HomePart2/HomePart2';
import Homepart3 from './HomePart2/Homepart3';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Advertise></Advertise>
            <Categories></Categories>
            <HomePart2></HomePart2>

            <Homepart3></Homepart3>
            <Contact></Contact>
        </div>
    );
};

export default Home;