import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from './Context/AuthProvider';

const BookingModal = ({ bookingSlot, selectedDate, setBookingSlot, refetch }) => {
    const { user } = useContext(AuthContext)
    const { name, slots, price } = bookingSlot;
    const date = format(selectedDate, 'PP');
    const { register, handleSubmit } = useForm();


    const handleBookingForm = (data) => {
        console.log(data);
        const slot = data.slot;
        const patient = data.name;
        const email = data.email;
        const phone = data.phone;
        console.log(date, slot, name, email, phone);

        const myBooking = {
            appointmentTime: slot,
            appointmentDate: date,
            patient,
            serviceName: name,
            email,
            phone,
            price

        }
        // console.log(myBooking);
        fetch('https://medicare-server-ivory.vercel.app/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myBooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Booking confirmed")
                    setBookingSlot(null);
                    refetch();
                }
                else {
                    toast.error(data.message)
                }
            })
    }

    return (
        <div>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleSubmit(handleBookingForm)} className="modal-box relative grid grid-cols-1 gap-3">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <input {...register("date")} value={date} disabled type="text" className="input input-bordered w-full" />
                    <select {...register("slot")} className="select select-bordered w-full">
                        {
                            slots &&
                            slots.map((slot, i) => <option
                                key={i}
                                value={slot}
                            >{slot}</option>)

                        }
                    </select>
                    <input  {...register("name")} defaultValue={user?.displayName} type="text" placeholder="Name" className="input input-bordered w-full" />
                    <input  {...register("email")} defaultValue={user?.email} type="text" placeholder="Email" className="input input-bordered w-full" />
                    <input  {...register("phone")} type="text" placeholder="Phone" className="input input-bordered w-full" />
                    <button className='btn btn-ghost'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;