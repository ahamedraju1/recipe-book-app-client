import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import {auth} from '../firebase/firebase.init'
 
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);


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
       return signOut(auth)
    }

    const userInfo = {
        user,
        setUser,
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