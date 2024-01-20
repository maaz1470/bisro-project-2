import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if(loading){
        return 'Loading...'
    }
    if(user){
        return children;
    }else{
        return <Navigate to={'/auth/login'} replace />
    }
};

export default ProtectedRoutes;