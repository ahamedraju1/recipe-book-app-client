import { Link, useLoaderData } from 'react-router';
import TopRecipes from './TopRecipes';
import RecipeCard from './RecipeCard';
import { useState } from 'react';
import Headers from './Headers';


const Home = () => {
    const [darkMode, setDarkMode] = useState(false);
    const recipes = useLoaderData();
    console.log(recipes);

    const containerClass = darkMode
        ? 'min-h-screen bg-gray-900 text-white transition-colors duration-300'
        : 'min-h-screen bg-white text-gray-900 transition-colors duration-300';


    return (
        <>

            <div className={containerClass}>
                <div className="flex justify-end p-4">
                    <button
                        className={darkMode ? 'px-4 py-2 bg-gray-700 text-white rounded' : 'px-4 py-2 bg-gray-200 text-black rounded'}
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>

                <div className='mt-24'>
                    {
                        recipes.map((recipe) =>
                            <RecipeCard key={recipe._id} recipe={recipe}>
                            </RecipeCard>)
                    }
                    <div className='my-10 shadow-gray-200'>
                        <h2 className='text-2xl text-center font-semibold'>Our Top Recipes Cuisines </h2>
                    </div>
                    <TopRecipes recipes={recipes} />
                    <div className='flex justify-center items-center mt-10'>
                        <Link to='/allRecipes' className='btn btn-secondary w-lg'>See All Recipe</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;