import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppoinmentCard from './AppoinmentCard';
import BookingModal from './BookingModal';

const AvilableAppoinment = ({ selectedDate }) => {
    const [slots, setSlots] = useState([]);
    const [bookingSlot, setBookingSlot] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/slots`)
            .then(res => res.json())
            .then(data => {
                setSlots(data)
            })
    }, [])

    return (
        <div>
            <div>
                <p className='text-center'>You have chooced <span className='font-bold'>{format(selectedDate, 'PP')}</span></p>
            </div>
            <div className='grid grid-cols-3 gap-10 mx-20'>
                {
                    slots.map(slot => <AppoinmentCard
                        key={slot._id}
                        slot={slot}
                        setBookingSlot={setBookingSlot}
                    ></AppoinmentCard>)
                }
            </div>
            {
                bookingSlot &&
                <BookingModal
                    slots={slots}
                    selectedDate={selectedDate}
                    bookingSlot={bookingSlot}
                    setBookingSlot={setBookingSlot}

                ></BookingModal>
            }
        </div>
    );
};

export default AvilableAppoinment;