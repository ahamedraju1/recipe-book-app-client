import React from 'react';
import Headers from './Headers';
import { Outlet } from 'react-router';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <div>
                <Headers></Headers>
            </div>
            <div>
                <Outlet></Outlet>
                <Slider></Slider>
            </div>
        </div>
    );
};

export default Home;