import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from './Context/AuthProvider';

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr
                                key={i}
                            >
                                <th>{i + 1}</th>
                                <td>{user?.displayName}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.appointmentTime}</td>
                                <td>{booking.serviceName}</td>
                                <td>{booking.phone}</td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyBookings;