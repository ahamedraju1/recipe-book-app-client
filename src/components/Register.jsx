import React, { use } from 'react';
import Headers from './Headers';
import { AuthContext } from '../Context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";


const Register = () => {
    const { createUser, googleSignIn } = use(AuthContext);
    console.log(createUser);
    // const location = useLocation();
    // const navigate = useNavigate();

    const handleGoogleSignUp = () =>{
        googleSignIn()
        .then(result=>{
            console.log(result)
            
        })
        .catch(error=>{
            console.log(error)
        })

    }

    const handleRegister = e => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...restFormData } = Object.fromEntries(formData.entries());
        console.log(restFormData); 

        //create a user
        createUser(email, password)
            .then(result => {
                console.log(result)
                // navigate("/login");

            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            {/* <Headers/> */}
            <div className="card bg-base-100 w-full mx-auto max-w-md mt-16 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center my-5">Register now </h1>
                    <form onSubmit={handleRegister} className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Enter Name" />
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Photo</label>
                        <input type="text" name='photo' className="input" placeholder="photoURL" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />

                        <button className="btn btn-neutral mt-4">Register</button>
                        <p className='text-center'>Already have an account? Please <Link to='/login' className='text-blue-400 underline'>Login</Link></p>
                    </form>
                    <button onClick={handleGoogleSignUp} className="btn bg-white text-black border-[#e5e5e5]">
                       <FcGoogle />
                        Login with Google
                    </button>
                </div>
            </div>
        </>
    );
};

export default Register;