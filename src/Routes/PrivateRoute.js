import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Pages/Context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user,loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        <button className="btn loading">loading</button>
    }

    if (user.uid) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;