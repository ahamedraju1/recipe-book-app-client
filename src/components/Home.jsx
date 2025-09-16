import { useLoaderData } from 'react-router';
import RecipeCard from './RecipeCard';
import TopRecipes from './TopRecipes';
 

const Home = () => {
    const recipes = useLoaderData();
    console.log(recipes);

    return (

        <div className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-5 space-y-2'>
             {
                recipes.map((recipe)=> 
                <TopRecipes key={recipe._id}  recipe={recipe}>
                </TopRecipes> )
             }
        </div>
    );
};

export default Home;