import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
 
    const { user, loading} = use(AuthContext);
    const location = useLocation();
   

    if(loading){
        return <span className="loading loading-infinity loading-xl"></span>

    }

    if(!user){
        return <Navigate state={location.pathname} to="/login"/>
    }

    return children
};

export default PrivateRoute;