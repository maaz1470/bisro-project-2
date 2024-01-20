import React, { useContext } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Auth = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    if(user){
        return <Navigate to={'/'} replace />
    }
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Auth;