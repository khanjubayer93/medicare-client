// import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../Components/Loading';
import { AuthContext } from './Context/AuthProvider';

const AllUser = () => {
    const { loading } = useContext(AuthContext)
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://medicare-server-ivory.vercel.app/users')
            const data = res.json();
            return data;
        }
    });
    if (loading) {
        return <Loading></Loading>
    }
    const handleMakeAdmin = (id) => {
        console.log(id);
        fetch(`https://medicare-server-ivory.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('medicareToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Making admin successfully done');
                    refetch()
                }
            })
    }

    return (
        <div>
            <h1>all user</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) =>
                                <tr key={user._id}>
                                    <th>{i}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{
                                        user.role !== 'admin' ? <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-success btn-sm'>Make Admin</button>
                                            : <p className='font-bold'>Admin</p>
                                    }</td>
                                    <td><button className='btn btn-error btn-sm'>Delete</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;