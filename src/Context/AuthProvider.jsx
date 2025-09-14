import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import {auth} from '../firebase/firebase.init'
 
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const googleSignIn = () =>{
        return signInWithPopup(auth, provider)
    } 



    const userSignIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const userSignOut = () =>{
       
    }

    const userInfo = {
        createUser,
        userSignIn,
        googleSignIn,
        userSignOut
    }


    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;