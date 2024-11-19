import React, { useContext } from 'react';
import { AuthContext } from '../Components/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loadings from '../Components/Loadings';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const {pathname} = useLocation()
    if(loading){
        return <Loadings/>
    }
    if(user){
        return children
    }
    return (
        <Navigate state={pathname} to='/authLayout/login'>
            
        </Navigate>
    );
};

export default PrivateRoute;