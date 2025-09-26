import React, { useEffect, useState } from 'react';
import Headers from './Headers';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';


const MyRecipes = () => {
    // const  recipes = useLoaderData();
    // console.log(recipes);
    const [recipes, setRecipes] = useState([]);
    const userId = localStorage.getItem("userId");
    console.log(userId);
    // Example: temporary "user123" for testing
    // localStorage.setItem("userId", "user123");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/myRecipes?userId=${userId}`)
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [userId])


    const handleUpdateSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const updatedRecipe = Object.fromEntries(formData.entries());
        // console.log(updatedRecipe);

        const res = await fetch(`http://localhost:3000/recipes/${selectedRecipe._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedRecipe),
        })
            .then(res => res.json())
            .then(data => console.log("updated recipe", data))

        if (!res.ok) {
            console.error("Failed to update recipe")
        }
        const data = await res.json();

        setRecipes(recipes.map(r => r._id === data._id ? data : r));
        setIsModalOpen(false);
    }


    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })

        if (!result.isConfirmed) return;

        const res = await fetch(`http://localhost:3000/recipes/${id}`, {
            method: "DELETE",
        });

        if (!res.ok) {
            console.error("Failed to delete recipe");
            return;
        }

        setRecipes(recipes.filter(recipe => recipe._id !== id));

        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your Recipe has been deleted.",
                icon: "success"
            });
        }

    }


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
                                    className='w-full h-56 object-cover' />
                            </figure>
                            <div>
                                <h2>{recipe.title}</h2>
                                <p>Ingredients: {recipe.ingredients}</p>
                                <p>Instruction: {recipe.instruction}</p>
                                <p>Cuisine Type: {recipe.cuisine}</p>
                                <p>Preparation Time: {recipe.time}</p>
                                <p>Category: {recipe.category}</p>
                                <p>Like: {recipe.like}</p>

                            </div>
                            <div>
                                <div className="join join-vertical lg:join-horizontal gap-3">
                                    <button className="btn join-item" onClick={() => {
                                        setSelectedRecipe(recipe);
                                        setIsModalOpen(true);
                                    }}>Update</button>
                                    <button onClick={() => handleDelete(recipe._id)} className="btn join-item">Delete</button>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* modal */}

            {
                isModalOpen && selectedRecipe && (
                    <div className='fixed inset-0 bg-white bg-opacity-50 flex justify-center items-start mt-3 z-50 shadow-2xl'>
                        <div className='bg-gray-300 p-6 rounded-lg w-11/12 sm:w-96 md:w-[28rem] lg:w-[32rem] max-h-[90vh] overflow-y-auto shadow-2xl'>
                            <h2 className='text-xl font-semibold mb-4'> Updated Recipe </h2>

                            <form onSubmit={handleUpdateSubmit} className='space-y-3'>
                                <label htmlFor="title" className="block font-medium">Title:</label>
                                <input type="text"
                                    name='title'
                                    defaultValue={selectedRecipe.title}
                                    required
                                    className='w-full border px-2 py-1 rounded'
                                />
                                <label htmlFor="ingredients" className="block font-medium">Ingredients:</label>
                                <input type="text"
                                    name='ingredients'
                                    defaultValue={selectedRecipe.ingredients}
                                    required
                                    className='w-full border px-2 py-1 rounded'
                                />
                                <label htmlFor="title" className="block font-medium">Instructions:</label>
                                <input type="text"
                                    name='instructions'
                                    defaultValue={selectedRecipe.instruction}
                                    required
                                    className='w-full border px-2 py-1 rounded'
                                />
                                <label htmlFor="title" className="block font-medium">Cuisine Type:</label>
                                <input type="text"
                                    name='cuisine'
                                    defaultValue={selectedRecipe.cuisine}
                                    required
                                    className='w-full border px-2 py-1 rounded'
                                />
                                <label htmlFor="title" className="block font-medium">Preparation Time:</label>
                                <input type="number"
                                    name='time'
                                    defaultValue={selectedRecipe.time}
                                    required
                                    className='w-full border px-2 py-1 rounded'
                                />

                                <label className="block font-medium">Category:</label>
                                <input
                                    type="text"
                                    name='category'
                                    defaultValue={selectedRecipe.category}
                                    required
                                    className='w-full border px-2 py-1 rounded'
                                />
                                <label className="block font-medium">Like:</label>
                                <input
                                    type="text"
                                    name='like'
                                    defaultValue={selectedRecipe.like}
                                    required
                                    className='w-full border px-2 py-1 rounded'
                                />
                                <label className="block font-medium">Photo:</label>
                                <input
                                    type="text"
                                    name='photo'
                                    defaultValue={selectedRecipe.photo}
                                    required
                                    className='w-full border px-2 py-1 rounded' />

                                <div className='flex justify-end gap-3'>
                                    <button
                                        type='button'
                                        onClick={() => setIsModalOpen(false)}
                                        className='px-4 py-1 border rounded'>
                                        Cancel
                                    </button>
                                    <button
                                        type='submit'
                                        className='px-4 py-1 bg-blue-500 text-white rounded'>
                                        Save
                                    </button>

                                </div>
                            </form>

                        </div>
                    </div>

                )
            }
        </>
    );
};

export default MyRecipes;