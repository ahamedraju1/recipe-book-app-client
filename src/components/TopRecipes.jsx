import React, { } from 'react';
import { Link } from 'react-router';

const TopRecipes = ({ recipes = [] }) => {
console.log(recipes);

    return (
        <>
            
            <div className=' grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-5 space-y-2'>
                {
                    recipes.map(recipe => (
                        <div key={recipe._id} className="card bg-base-100 shadow-sm space-y-5">
                            <figure>
                                <img
                                    src={recipe.photo}
                                    alt="Shoes"
                                    className='w-full' />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-gray-500">
                                    {recipe.title}
                                </h2>
                                <p className='text-gray-500'>{recipe.cuisine}</p>
                                <p className='text-gray-500'>{recipe.like}</p>

                                <div className="card-actions justify-end">
                                    <Link to={`/recipeDetails/${recipe._id}`} className='btn btn-secondary'>View more</Link>
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