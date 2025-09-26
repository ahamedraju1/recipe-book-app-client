import React, { useEffect, useState } from 'react';
import Headers from './Headers';
import { Link, useLoaderData } from 'react-router';

const AllRecipes = () => {
    const addedRecipes = useLoaderData();
    const [recipes, setRecipe] = useState(addedRecipes )
    console.log(addedRecipes);

    // const { photo, title, cuisine, like } = recipes;

    useEffect(()=>{
        fetch("http://localhost:3000/recipes")
        .then(res => res.json())
        .then(data => setRecipe(data));

    },[])


    return (
        <>
            <div>
                <Headers />
            </div>
            <div key={recipes._id} className='mt-32 grid grid-cols-1 md:grid-cols-4 gap-5'>
                {
                 recipes.map(recipe => (
                <div className=''>
                    <div key={recipe._id} className="card bg-base-100 shadow-sm space-y-5">
                        <figure>
                            <img
                                src={recipe.photo}
                                alt="recipe"
                                className='w-full h-48 object-cover' />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {recipe.title}
                            </h2>
                            <p>{recipe.cuisine}</p>
                            <p>{recipe.like}</p>

                            <div className="card-actions justify-end">
                                <Link to={`/recipeDetails/${recipe._id}`} className='px-4 py-2 rounded bg-secondary text-white hover:bg-primary"'>See Details</Link>
                            </div>
                        </div>
                    </div>
                </div>

                 ))
                }
            </div>
        </>
    );
};

export default AllRecipes;