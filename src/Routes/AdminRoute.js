import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../CustomHooks/useAdmin';
import { AuthContext } from '../Pages/Context/AuthProvider';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <p>Loading...</p>
    }

    if (user && isAdmin) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;