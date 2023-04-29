import React from 'react';
import Banner from './Banner';
import OurTeam from './OurTeam';
import OurService from './OurService';
import OurWork from './OurWork';
import AboutUs from './AboutUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurTeam></OurTeam>
            <OurService></OurService>
            <OurWork></OurWork>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;