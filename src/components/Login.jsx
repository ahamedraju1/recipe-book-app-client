import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../Context/AuthContext';
import Headers from './Headers';

const Login = () => {
    const {userSignIn, googleSignIn} = use(AuthContext);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
         googleSignIn()
         .then(result=>{
            console.log(result)
            navigate(location?.state || "/");
         })
         .catch(error=>{
            console.log(error)
         })

    }

    const handleLogIn = e =>{
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        //login user
        userSignIn(email, password)
        .then(result=>{
            console.log(result)
            navigate(location?.state  ||  "/");
        })
        .catch(error=>{
            console.log(error)
            const errorCode = error.code;
            setError(errorCode);
        })
    }


    return (
 <>
    
        <Headers/>
         <div className="card bg-base-100 w-full mx-auto max-w-md mt-30 md:mt-16 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center my-5">Please Login </h1>
                    <form onSubmit={handleLogIn} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                       <div><a className="link link-hover">Forgot password?</a></div>

                       {error && <p className='text-red-400'>{error}</p> }
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p className='text-center'>New to this website? Please <Link to='/register' className='text-blue-400 underline'>Register</Link></p>
                    </form>
                    <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                       <FcGoogle />
                        Login with Google
                    </button>
                </div>
            </div>
</>
    );
};

export default Login;