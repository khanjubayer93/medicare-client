import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useToken from '../CustomHooks/useToken';
import { AuthContext } from './Context/AuthProvider';

const Register = () => {
    const { register, handleSubmit, reset } = useForm();
    const { createUser, user, updateUserProfile } = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate();
    console.log(token);

    if (token) {
        navigate('/')
    }

    const handleRegisterForm = data => {
        createUser(data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                const profile = {
                    displayName: data.firstName,
                    photoURL: data.photoURL
                }
                updateUserProfile(profile)
                    .then(() => {
                        storeUser(data.firstName, data.email)
                        toast.success('User signed id successfully')
                        reset();
                    })
                    .catch(err => console.error(err))


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage)
            });
    };

    const storeUser = (name, email) => {
        const user = { name, email }
        fetch('https://medicare-server-ivory.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email)
                console.log(data);
            })
    };

    return (
        <div className='text-center my-20'>
            <h2 className='mb-5 text-2xl text-slate-500 font-semibold'>Register Form</h2>
            <form className='border-4 border-accent rounded-lg w-1/3 m-auto p-5' onSubmit={handleSubmit(handleRegisterForm)}>
                <input className='border-b-2 border-gray-300 focus:outline-none mb-3 w-full' {...register("firstName")} placeholder={'First name'} />
                <br />
                <input className='border-b-2 border-gray-300 focus:outline-none mb-3 w-full' {...register("lastName")} placeholder={'Last name'} />
                <br />
                <input className='border-b-2 border-gray-300 focus:outline-none mb-3 w-full' {...register("text")} placeholder={'Address'} />
                <br />
                <input className='border-b-2 border-gray-300 focus:outline-none mb-3 w-full' {...register("email", { required: true })} placeholder={'Email'} />
                <br />
                <input type={'password'} className='border-b-2 border-gray-300 focus:outline-none mb-3 w-full' {...register("password", { required: true })} placeholder={'Password'} />
                <br />
                <input className='border-b-2 border-gray-300 focus:outline-none mb-3 w-full' {...register("photoURL")} placeholder={'Photo URL'} />
                <br />
                <button className="bg-red-500 text-white py-2 px-6 font-semebold rounded-full hover:text-red-500 hover:font-semibold hover:bg-white border-2 hover:border-red-500">Register</button>
            </form>
        </div>
    );
};

export default Register;