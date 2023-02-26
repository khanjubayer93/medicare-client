import React, { useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner';
import AvilableAppoinment from './AvilableAppoinment';
import SwiperCard from './SwiperCard';

const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            >
            </AppoinmentBanner>
            <AvilableAppoinment
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AvilableAppoinment>
        </div>
    );
};

export default Appoinment;