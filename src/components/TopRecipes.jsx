import React from 'react';
import { Link } from 'react-router';

const TopRecipes = ({ recipe }) => {
    if (!recipe) return null;
    const { photo, title, cuisine, like } = recipe;

    return (

        <div>
            <div className="card bg-base-100 shadow-sm space-y-5">
                <figure>
                    <img
                        src={photo}
                        alt="Shoes"
                        className='w-full' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <p>{cuisine}</p>
                    <p>{like}</p>
                    
                    <div className="card-actions justify-end">
                        <Link to={`/recipeDetails/${recipe._id}`} className='btn btn-secondary'>View more</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopRecipes;