import { useEffect, useState, } from 'react';
import Headers from './Headers';
import { Link, useParams } from 'react-router';

const recipeDetails = () => {
    const [recipe, setRecipe] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        fetch('/public/recipes.json')
            .then(res => res.json())
            .then(data => {
                const selectedRecipe = data.find((item) => item.id === Number(id));
                setRecipe(selectedRecipe);
            })

    }, [id])

 
    return (
        <>
            <Headers />
            <div>
                {

                    <div key={recipe.id} className="card bg-base-100 shadow-sm">
                        <figure>
                            <img
                                src={recipe.image}
                                alt="recipe images"
                                className='w-full' />
                        </figure>
                        <div className="card-body">
                            
                            <h2 className="card-title text-2xl">
                                 {recipe.title}
                            </h2>
                            <p className='text-lg'><span className='font-semibold text-xl'>Cuisine-type: </span>{recipe.cuisine_type}</p>
                            <p className='text-lg'><span className='font-semibold text-xl'>Like-count: </span>{recipe.like_count}</p>
                            <p className='text-lg'><span className='font-semibold text-xl'>Ingredients: </span>{recipe.ingredients}</p>
                            <p className='text-lg'><span className='font-semibold text-xl'>Instruction: </span>{recipe.instructions}</p>
                            <div className="card-actions justify-end">
                             
                              <Link to={`/allRecipes/${recipe.id}`} className='btn btn-secondary'>See All Recipes</Link>
                            </div>
                        </div>
                    </div>

                }
            </div>
        </>
    );
};

export default recipeDetails;