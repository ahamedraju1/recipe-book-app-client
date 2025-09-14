import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const TopRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("/public/recipes.json")
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(error => console.log("fetching error", error));

    }, [])


    return (
        <>
            <div className='mt-32'>
                <h2 className='text-3xl text-center font-medium'>Top Recipes of our Cuisines </h2>
            </div>
            <div className='my-12 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7 '>
                {
                    recipes.map((recipe) => (
                        <div key={recipe.id} className="card bg-base-100 w-full h-full shadow-sm">
                            <figure>
                                <img
                                    src={recipe.image}
                                    alt="recipe" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                  {recipe.title}
                                </h2>
                                <p>{recipe.cuisine_type}</p>
                                <p>{recipe.like_count}</p>
                                <div className="card-actions justify-end">
                                   <Link to={`/recipeDetails/${recipe.id}`} className='btn btn-secondary'>View more</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    );
};

export default TopRecipes;