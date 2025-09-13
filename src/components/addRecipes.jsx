import React from 'react';

const addRecipes = () => {

    const handleAddRecipe = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const recipes = Object.fromEntries(formData.entries());
        console.log(recipes);

        //create a recipe
        fetch('http://localhost:3000/recipes',{
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(recipes)
        })
        .then(res => res.json())
        .then(data => {
            console.log('created data from db', data);
        })
    }

    return (
        <>
            <div className='p-14 space-y-6'>
                <h1 className='text-6xl  text-center'>Add Recipes </h1>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolore consectetur doloribus?</p>
            </div>
            <form onSubmit={handleAddRecipe}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Title</label>
                        <input type="text" name='title' className="input w-full" placeholder="Recipe Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Ingredients</label>
                        <input type="text" name='ingredients' className="input w-full" placeholder="Ingredients" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Instructions</label>
                        <input type="text" name='instruction' className="input w-full" placeholder="Instructions" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Cuisine Type</label>
                        <select name="cuisine" className="select select-bordered w-full">
                            <option value="" disabled selected>Select a Cuisine</option>
                            <option value="Italian">Italian</option>
                            <option value="Mexican">Mexican</option>
                            <option value="Indian">Indian</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Others">Others</option>
                        </select>
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Preparation Time</label>
                        <input type="number" name='preparation-time' className="input w-full" placeholder="Preparation Time" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Categories</label>
                        <div className="flex flex-wrap gap-4">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" name="categories" value="Breakfast" className="checkbox checkbox-primary" />
                                Breakfast
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" name="categories" value="Lunch" className="checkbox checkbox-primary" />
                                Lunch
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" name="categories" value="Dinner" className="checkbox checkbox-primary" />
                                Dinner
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" name="categories" value="Dessert" className="checkbox checkbox-primary" />
                                Dessert
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" name="categories" value="Vegan" className="checkbox checkbox-primary" />
                                Vegan
                            </label>
                        </div>
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Like count</label>
                        <input type="number" name='like' className="input w-full" placeholder="Like count" 
                        defaultValue={0}
                        min={0}
                        />
                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mt-5">
                    <label className="label">Photo</label>
                    <input type="text" name='photo' className="input w-full" placeholder="PhotoURL" />
                </fieldset>
                <button className="btn btn-block my-5">Add Recipe</button>
            </form>
        </>
    );
};

export default addRecipes;