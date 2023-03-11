import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from './Context/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const { logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <p className='text-red-500 font-bold'>Something went wrong!!!</p>
            <p className='text-red-500 font-bold'>{error.statusText}{error.message}</p>
            <button onClick={handleLogout} className='btn btn-ghost'>Logout</button>
        </div>
    );
};

export default DisplayError;