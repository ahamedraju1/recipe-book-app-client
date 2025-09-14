import React from 'react';
import Headers from './Headers';
import { Outlet } from 'react-router';
import Slider from './Slider';
import TopRecipes from './TopRecipes';

const Home = () => {
    return (
        <div>
            <div>
                <Headers></Headers>
            </div>
            <div>
                <Outlet></Outlet>
                <Slider></Slider>
                <TopRecipes></TopRecipes>
            </div>
        </div>
    );
};

export default Home;