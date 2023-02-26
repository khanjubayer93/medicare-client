import React from 'react';
import { SwiperSlide } from 'swiper/react';

const AppoinmentCard = ({ slot, setBookingSlot }) => {
    const { image, name, slots } = slot;
    return (
        <SwiperSlide>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl relative" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Please try another day'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} avilable</p>
                    <div className="card-actions">
                        <label
                            disabled={slots === 0}
                            onClick={() => setBookingSlot(slot)}
                            htmlFor="booking-modal"
                            className="btn">Book Now</label>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    );
};

export default AppoinmentCard;