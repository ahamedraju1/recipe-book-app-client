import React, { } from 'react';
import { Link } from 'react-router';

const TopRecipes = ({ recipes = [] }) => {


    return (
        <>
            {/* <div className='my-10 shadow-gray-200'>
                <h2 className='text-2xl text-center font-semibold'>Our Top Recipes Cuisines </h2>
            </div> */}

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
                                <h2 className="card-title">
                                    {recipe.title}
                                </h2>
                                <p>{recipe.cuisine}</p>
                                <p>{recipe.like}</p>

                                <div className="card-actions justify-end">
                                    <Link to={`/recipeDetails/${recipe._id}`} className='btn btn-secondary'>View more</Link>
                                </div>
                            </div>
                        </div>

                    ))
                }
                {/* <div>
                    <Link to='/allRecipes' className='btn btn-secondary'>See All Recipe</Link>
                </div> */}
            </div>

        </>
    );


};

export default TopRecipes;