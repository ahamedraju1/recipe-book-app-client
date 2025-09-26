import React from 'react';
import { Outlet } from 'react-router';
import Headers from '../components/Headers';
import Slider from '../components/Slider';
import TopRecipes from '../components/TopRecipes';
import RecipeCard from '../components/RecipeCard';
import Footer from '../Footer/Footer';
import RecipeBook from '../components/RecipeBook';


const MainLayout = () => {

    return (
        <div>
            <div>
                 <Headers></Headers>
                 <Slider></Slider>
            </div>
            
            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
                <TopRecipes></TopRecipes>
                <RecipeCard></RecipeCard>
                <RecipeBook></RecipeBook>
            </div>
             <Footer></Footer>
        </div>
    );
};

export default MainLayout;