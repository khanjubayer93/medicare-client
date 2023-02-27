import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Slider } from '../Slider/Slider';
import AppoinmentCard from './AppoinmentCard';
import BookingModal from './BookingModal';





const AvilableAppoinment = ({ selectedDate }) => {
    const [slots, setSlots] = useState([]);
    const [bookingSlot, setBookingSlot] = useState('')
    // const [slides, setSlides] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/slots`)
            .then(res => res.json())
            .then(data => {
                setSlots(data)
                // setSlides(data)
            })
    }, [])

    return (
        <div className=''>
            <div>
                <p className='text-center'>You have booked <span className='font-bold'>{format(selectedDate, 'PP')}</span></p>
            </div>
            <div className=''>

                <Slider
                    slots={slots}
                    setBookingSlot={setBookingSlot}
                ></Slider>

                {/* {
                    slots.map(slot => <AppoinmentCard
                        key={slot._id}
                        slot={slot}
                        setBookingSlot={setBookingSlot}
                    ></AppoinmentCard>)
                } */}

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