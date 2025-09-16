import React from 'react';
import { Outlet } from 'react-router';
import Headers from '../components/Headers';
import Slider from '../components/Slider';
import TopRecipes from '../components/TopRecipes';
import RecipeCard from '../components/RecipeCard';

const MainLayout = () => {

    return (
        <div>
            <div>
                 <Headers></Headers>
            </div>
            <div className='max-w-7xl mx-auto'>
                 <Slider></Slider>
                <Outlet></Outlet>
                <TopRecipes></TopRecipes>
                <RecipeCard></RecipeCard>
            </div>
        </div>
    );
};

export default MainLayout;