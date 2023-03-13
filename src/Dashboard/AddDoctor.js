import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AddDoctor = () => {
    const { register, handleSubmit, reset } = useForm();
    const imageHostingKey = process.env.REACT_APP_imagebb_key;
    // console.log(imageHostingKey);

    const { data: specilities, isLoading } = useQuery({
        queryKey: ["specility"],
        queryFn: async () => {
            const res = await fetch('https://medicare-server-ivory.vercel.app/slotSpeciality')
            const data = await res.json();
            return data;

        }
    })

    const handleAddDoctor = data => {
        // console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        image: imgData.data.url,
                        speciality: data.speciality
                    }
                    fetch('https://medicare-server-ivory.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('medicareToken')}`
                        },
                        body: JSON.stringify(doctor)

                    })
                        .then(res => res.json())
                        .then(doctor => {
                            console.log(doctor);
                            if (doctor.acknowledged) {
                                toast.success('Doctor added successfully')
                                reset();
                            }
                        })
                }

            })
    }
    return (
        <div className='text-center my-20 w-full'>
            <h2 className='mb-5 text-2xl text-slate-500 font-semibold'>Add Doctor</h2>
            <form className='border-4 border-accent rounded-lg lg:w-1/3 md:w-1/2 m-auto p-5 sm:mx-5' onSubmit={handleSubmit(handleAddDoctor)}>
                <input className='border-b-2 border-gray-300 focus:outline-none mb-3 w-full' {...register("name")} placeholder={'Name'} />
                <br />
                <input className='border-b-2 border-gray-300 focus:outline-none mb-3 w-full' {...register("email", { required: true })} placeholder={'Email'} />
                <br />
                <input type='file' className='border-b-2 border-gray-300 focus:outline-none mb-3 w-full' {...register("image", { required: true })} placeholder={'Image'} />
                <br />
                <select className="select select-bordered w-full mb-3"
                    {...register("speciality")}
                >
                    <option disabled selected>Selet one</option>
                    {
                        specilities?.map(specility => <option
                            key={specility._id}
                        >{specility.name}</option>)
                    }

                </select>
                <br />
                <button className="bg-red-500 text-white py-2 px-6 font-semebold rounded-full hover:text-red-500 hover:font-semibold hover:bg-white border-2 hover:border-red-500">Add Doctor</button>
            </form>
        </div>
    );
};

export default AddDoctor;