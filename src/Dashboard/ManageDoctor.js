import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfirModal from './ConfirModal';

const ManageDoctor = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)
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
    const cancelModal = () => {
        setDeletingDoctor(null)
    }
    return (
        <div>
            <h1 className='text-4xl font-bold'>Manage Doctor</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Speciality</th>
                            <th>Delete doctor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) =>
                                <tr
                                    key={doctor._id}
                                >
                                    <th>{i}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="rounded-full w-12 h-12">
                                                    <img src={doctor?.image} alt="" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{doctor.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{doctor.email}</td>
                                    <th>
                                        {doctor.speciality}
                                    </th>
                                    <th>
                                        <label
                                            htmlFor="my-modal-6"
                                            onClick={() => setDeletingDoctor(doctor)}
                                            className="btn bg-red-500 border-none btn-sm text-white"
                                        >Delete</label>
                                    </th>
                                </tr>)
                        }


                    </tbody>
                </table>
                {
                    deletingDoctor &&
                    <ConfirModal
                        title={`do you want to delete this doctor?`}
                        message={`if you delete ${deletingDoctor.name} then you can not bring him back `}
                        handleDeleteDoctor={handleDeleteDoctor}
                        deletingDoctor={deletingDoctor}
                        cancelModal={cancelModal}
                    ></ConfirModal>
                }
            </div>
        </div>
    );
};

export default ManageDoctor;