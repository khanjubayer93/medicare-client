import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Pages/Context/AuthProvider';

const MyBookings = () => {
    const { user, loading } = useContext(AuthContext);
    const url = `https://medicare-server-ivory.vercel.app/bookings?email=${user?.email}`;
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('medicareToken')}`
                }
            })
            const data = await res.json();
            return data;

        }
    })

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Appointment Date</th>
                            <th>Appointment Time</th>
                            <th>Service Name</th>
                            <th>Phone</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, i) => <tr
                                key={i}
                            >
                                <th>{i + 1}</th>
                                <td>{user?.displayName}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.appointmentTime}</td>
                                <td>{booking.serviceName}</td>
                                <td>{booking.phone}</td>
                                <td className='font-bold text-slate-500'>${booking.price}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                                            <button

                                                className='bg-green-500 font-bold py-1 px-3 text-white rounded-md'
                                            >Pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.price && booking.paid && <p className='text-green-500 font-bold'>Paid</p>
                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyBookings;