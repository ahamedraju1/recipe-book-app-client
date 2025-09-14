import React, { useEffect, useState } from 'react';
import logo from '../assets/logo_4.jpg'
import { NavLink } from 'react-router';

const Headers = () => {

    const [menu, setMenu] = useState(false);
    useEffect(() => {
        if (menu) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [menu])

    return (

        <nav>
            <div className="navbar bg-base-100 w-full">
                <div className="navbar-start">
                    <img className='w-10 h-10 rounded-full' src={logo} alt="" />
                    <a className="text-lg md:text-xl lg:text-3xl pl-1 font-medium">RECIPE BOOK</a>
                </div>
                <div className="navbar-center md:flex items-center gap-5 hidden md:text-xl lg:text-3xl font-medium md:ml-7">

                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/allRecipes'>All Recipes</NavLink>
                    <NavLink to='/addRecipes'>Add Recipes</NavLink>
                    <NavLink to='myRecipes'>My Recipes</NavLink>


                </div>
                <div className='md:hidden flex items-center gap-3 '>
                <button className='text-xl' onClick={() => setMenu(!menu)}>&#9776; </button>

                {
                    menu && (
                        <div className=' flex flex-col gap-3 px-4 bg-gray-50 py-2 absolute mt-42'>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/allRecipes'>All Recipes</NavLink>
                            <NavLink to='/addRecipes'>Add Recipes</NavLink>
                            <NavLink to='myRecipes'>My Recipes</NavLink>
                        </div>
                    )
                }
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </nav>
    );
};

export default Headers;