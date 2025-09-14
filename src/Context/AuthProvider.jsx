import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {auth} from '../firebase/firebase.init'
 
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const googleSignIn = () =>{
        return signInWithPopup(auth, provider)
    } 

    const userSignOut = () =>{
       
    }

    const userInfo = {
        createUser,
        googleSignIn,
        userSignOut
    }


    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;