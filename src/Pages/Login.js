import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './Context/AuthProvider';
// import { AuthContext } from '../Context/AuthProvider';

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const { loginUser, user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";


    const handleLoginForm = data => {
        loginUser(data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;

                // const currentUser = {
                //     email: user.email
                // }
                // fetch('http://localhost:5000/jwt', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(currentUser)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log(data);
                //         // localStorage.setItem('baking-token', data.token)
                //     })
                console.log(user);
                navigate(from, { replace: true });
                toast.success('User signed id successfully')
                reset()
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage)
            });
    };

    return (
        <div className='text-center my-40'>
            <h2 className='mb-5 text-2xl text-slate-500 font-semibold'>Login Form</h2>
            <form className='border-4 border-accent rounded-md w-1/3 m-auto py-16 px-5' onSubmit={handleSubmit(handleLoginForm)}>
                
                <input className='border-b-2 border-gray-300 focus:outline-none mb-3 w-full' {...register("email", { required: true })} placeholder={'Email'} />
                <br />
                <input type={'password'} className='border-b-2 border-gray-300 focus:outline-none mb-3 w-full' {...register("password", { required: true })} placeholder={'Password'} />
                <br />
                <button className="bg-red-500 text-white py-2 px-6 font-semebold rounded-full hover:text-red-500 hover:font-semibold hover:bg-white border-2 hover:border-red-500">Register</button>
            </form>
        </div>
    );
};

export default Login;