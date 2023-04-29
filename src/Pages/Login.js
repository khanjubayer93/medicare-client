import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading';
import useToken from '../CustomHooks/useToken';
import { AuthContext } from './Context/AuthProvider';
// import { AuthContext } from '../Context/AuthProvider';

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const { loginUser, user, loading } = useContext(AuthContext);
    const [loggedUserEmail, setLoggedUserEmail] = useState('');
    const [token] = useToken(loggedUserEmail)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    
   
    if (token) {
        navigate(from, { replace: true });

    }

    const handleLoginForm = data => {
        loginUser(data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                setLoggedUserEmail(data.email)

                console.log(user);

                toast.success('User signed id successfully')
                reset()

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage)
            });
    };
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='text-center lg:my-40 mx-5 my-5'>
            <h2 className='mb-5 text-2xl text-slate-500 font-semibold'>Login Form</h2>
            <form className='border-4 border-accent rounded-md lg:w-1/3 m-auto py-16 px-5' onSubmit={handleSubmit(handleLoginForm)}>

                <input className='border-b-2 border-gray-300 focus:outline-none mb-3 w-full' {...register("email", { required: true })} placeholder={'Email'} />
                <br />
                <input type={'password'} className='border-b-2 border-gray-300 focus:outline-none mb-3 w-full' {...register("password", { required: true })} placeholder={'Password'} />
                <br />
                <button className="bg-red-500 text-white py-2 px-6 font-semebold rounded-full hover:text-red-500 hover:font-semibold hover:bg-white border-2 hover:border-red-500">Login</button>
            </form>
        </div>
    );
};

export default Login;