import { Link, useLoaderData } from 'react-router';
import TopRecipes from './TopRecipes';
import RecipeCard from './RecipeCard';


const Home = () => {
    const recipes = useLoaderData();
    console.log(recipes);

    return ( 

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
            <div>
                <Link to='/allRecipes' className='btn btn-secondary'>See All Recipe</Link>
            </div>
        </div>
    );
};

export default Home;