import { useEffect, useState, } from 'react';
import Headers from './Headers';
import { Link, useLoaderData, useParams, } from 'react-router';
import { AiOutlineLike } from "react-icons/ai";

const RecipeDetails = () => {
    const { id } = useParams();
    const recipes = useLoaderData();
    const [likeCount, setLikeCount] = useState(recipes);
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch('https://recipe-book-app-flax.vercel.app/recipes')
            .then(res => res.json())
            .then(data => {
                const selectedRecipe = data.find((item) => item._id === id);
                setRecipe(selectedRecipe || null);
            })
            .catch(error => console.log(error));

    }, [id])
    if (!recipe) {
        return <p className='text-center mt-10'>Loading recipe ...</p>
    }


    const handleLikeCount = () => {
        const newCount = likeCount + 1;
        setLikeCount(newCount);

        fetch(`https://recipe-book-app-flax.vercel.app/recipes/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCount)
        })
            .then(res => res.json())
            .then(data => {
                console.log("updated like count", data);
            })
    }


    return (
        <>
            <Headers />
            <div className='mt-20'>
                {
                    <>


                        <div key={recipe._id} className="card bg-base-100 shadow-sm">
                            <figure>
                                <img
                                    src={recipe.photo}
                                    alt="recipe images"
                                    className='w-11/12 rounded-xl' />
                            </figure>
                            <div className="card-body">

                                <h2 className="card-title text-2xl">
                                    {recipe.title}
                                </h2>
                                <p className='text-lg'><span className='font-semibold text-xl'>Cuisine-type: </span>{recipe.cuisine}</p>
                                <p className='text-lg'><span className='font-semibold text-xl'>Like-count: </span>{recipe.like}</p>
                                <p className='text-lg'><span className='font-semibold text-xl'>Ingredients: </span>{recipe.ingredients}</p>
                                <p className='text-lg'><span className='font-semibold text-xl'>Instruction: </span>{recipe.instruction}</p>

                                <button onClick={handleLikeCount} className="btn btn-accent w-24">
                                    Like <AiOutlineLike />

                                </button>

                                <div className="card-actions justify-end">
                                    <Link to={'/allRecipes'} className='btn btn-secondary'>See All Recipes</Link>
                                </div>
                            </div>
                        </div>

                    </>
                }

            </div>
        </>
    );
};

export default RecipeDetails;