import React from 'react';
import { Link } from 'react-router';
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const handleGoogleSignIn = () =>{

    }

    const handleLogIn = e =>{
        e.preventDefault()

    }


    return (
         <div className="card bg-base-100 w-full mx-auto max-w-md mt-16 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center my-5">Please Login </h1>
                    <form onSubmit={handleLogIn} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                       <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Register</button>
                        <p className='text-center'>New to this website? Please <Link to='/register' className='text-blue-400 underline'>Register</Link></p>
                    </form>
                    <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                       <FcGoogle />
                        Login with Google
                    </button>
                </div>
            </div>
    );
};

export default Login;