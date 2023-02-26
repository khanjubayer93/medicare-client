import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppoinmentBanner = ({ selectedDate, setSelectedDate }) => {
    
    return (
        <div style={{
            backgroundImage: "url('')",
        }} className='lg:flex lg:w-[1200px] lg:h-[500px] m-auto'>
            <div className='w-1/2'>
                <DayPicker
                    mode='single'
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                />
                <p>You have chooced {format(selectedDate, 'PP')}</p>
            </div>
            <div className='w-1/2'>
                <img src="https://cloudfront-us-east-1.images.arcpublishing.com/gray/FIJQXNDBKZPUBJWDOJ27CL4WCQ.jpg" alt="" />
            </div>
            
        </div>
    );
};

export default AppoinmentBanner;