import React, { useEffect, useState } from 'react';
import Headers from './Headers';
import { useLoaderData } from 'react-router';

const MyRecipes = () => {
    // const  recipes = useLoaderData();
    // console.log(recipes);
    const [recipes, setRecipes] = useState([]);
    const userId = localStorage.getItem("userId");
    console.log(userId);
    // Example: temporary "user123" for testing
    // localStorage.setItem("userId", "user123");


    useEffect(() => {
        fetch(`http://localhost:3000/myRecipes?userId=${userId}`)
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [userId])


    return ( 
        <>
            <Headers />
            <div className='mt-32 grid grid-cols-1 md:grid-cols-4 gap-5'>
                {
                    recipes.map(recipe => (
                        <div key={recipe._id} className="card bg-base-100 shadow-sm space-y-5">
                            <figure>
                                <img
                                    src={recipe.photo}
                                    alt="recipe"
                                    className='w-full' />
                            </figure>
                            <div>
                                <h2>{recipe.title}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default MyRecipes;