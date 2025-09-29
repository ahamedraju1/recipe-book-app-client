import React from 'react';
import Headers from './Headers';
import Swal from 'sweetalert2';
import {} from 'react-router';
// import banner from '../assets/slider_2.jpg'

const AddRecipes = () => {
 

    const handleAddRecipe = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const recipes = Object.fromEntries(formData.entries());
        console.log(recipes);
        recipes.userId = localStorage.getItem("userId");

        
        //send data to the db
        fetch('https://recipe-book-app-flax.vercel.app/recipes', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(recipes)
        })
            .then(res => res.json())
            .then(data => {
                if(data.user){
                    localStorage.setItem("userId", data.user._id);
                }
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your recipe added Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    console.log("recipe added a successfully.",data);
                    form.reset()
                }
            })
    }

    return (
        <>
            <Headers />
         
            <div className='p-14 space-y-6 mt-32'>
                <h1 className='text-6xl  text-center'>Add Recipes </h1>
                <p className='text-center'>Add your favorite recipes to our collection! Include the ingredients, step-by-step instructions, and a photo to share your culinary creations with others. Inspire fellow food lovers and make cooking fun!Submit your recipe and let others enjoy your culinary creations!Create and share recipes that bring flavor and joy to the kitchen!</p>
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

export default AddRecipes;