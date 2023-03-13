import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaFacebook, FaFacebookF, FaGoogle, FaGooglePlusG, FaTwitter } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Team = () => {
    // const [deletingDoctor, setDeletingDoctor] = useState(null)
    const { data: doctors = [], refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('https://medicare-server-ivory.vercel.app/doctors', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('medicareToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    });
    const handleDeleteDoctor = doctor => {
        console.log(doctor);
        fetch(`https://medicare-server-ivory.vercel.app/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('medicareToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log(data);
                    refetch();
                    toast.success('Deleted successfully')
                }
            })
    }
    return (
        <Swiper
            className=''
            spaceBetween={20}
            slidesPerView={4}
            // cssMode={true}
            // navigation={true}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                "@0.75": {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                "@1.00": {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                "@1.50": {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            }}
            mousewheel={true}
            keyboard={true}
            modules={[Pagination, Keyboard]}
        >
            {
                doctors?.map(doctor => <SwiperSlide className="my-24 bg-white">
                    <figure><img className='' src={doctor.image} alt="doctor" /></figure>
                    <div className="p-5">
                        <h2 className="card-title mb-2">{doctor.name}</h2>
                        <p>{doctor.speciality}</p>
                        <p className='my-3'><small>Inventore dignissimos  velit itaque omnis! Cum earum laborum molestiae?</small></p>
                        <div className='flex justify-between items-center'>

                            <div className="card-actions">
                                <Link className='border-2 border-slate-400 rounded-full p-1 hover:bg-slate-700 hover:text-white text-sm'>
                                    <FaFacebookF></FaFacebookF>
                                </Link>
                                <Link className='border-2 border-slate-400 rounded-full p-1 hover:bg-slate-700 hover:text-white text-sm'>
                                    <FaTwitter></FaTwitter>
                                </Link>
                                <Link className='border-2 border-slate-400 rounded-full p-1 hover:bg-slate-700 hover:text-white text-sm'>
                                    <FaGoogle></FaGoogle>
                                </Link>
                            </div>
                            <div>
                                <button
                                    onClick={() => handleDeleteDoctor(doctor)}
                                    className='bg-red-500 px-2 py-1 rounded-md text-white hover:border-2 border-red-500 hover:bg-white hover:text-red-500 uppercase font-medium'><small>Delete</small></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>)

            }
        </Swiper>
    );
};

export default Team;