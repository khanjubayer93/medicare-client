import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { Slider } from '../Slider/Slider';
import BookingModal from './BookingModal';





const AvilableAppoinment = ({ selectedDate }) => {
    const [bookingSlot, setBookingSlot] = useState([]);
    const date = format(selectedDate, "PP")

    const { data: slots = [], refetch } = useQuery({
        queryKey: ['slots', date],
        queryFn: async () => {
            const res = await fetch(`https://medicare-server-ivory.vercel.app/slots?date=${date}`)
            const data = await res.json();
            return data;
        }
    })

    // useEffect(() => {
    //     fetch(`https://medicare-server-ivory.vercel.app/slots`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setSlots(data)
    //             // setSlides(data)
    //         })
    // }, [])

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
                    refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AvilableAppoinment;