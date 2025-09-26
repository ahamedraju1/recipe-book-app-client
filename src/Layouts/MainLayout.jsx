import React from 'react';
import { Outlet } from 'react-router';
import Headers from '../components/Headers';
import Slider from '../components/Slider';
import TopRecipes from '../components/TopRecipes';
import RecipeCard from '../components/RecipeCard';
import Footer from '../Footer/Footer';
import RecipeBook from '../components/RecipeBook';
import Blogs from '../components/Blogs';


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
                <Blogs></Blogs>
            </div>
             <Footer></Footer>
        </div>
    );
};

export default MainLayout;