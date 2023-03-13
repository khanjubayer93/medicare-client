import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppoinmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <div style={{
            backgroundImage: "url('')",
        }} className='lg:flex lg:w-[1200px] lg:h-[500px] m-auto'>
            <div className='lg:w-1/2 lg:mt-5'>
                <img src="https://cloudfront-us-east-1.images.arcpublishing.com/gray/FIJQXNDBKZPUBJWDOJ27CL4WCQ.jpg" alt="" />
            </div>
            <div className='lg:w-1/2 flex justify-center'>
                <div className='text-center'>
                    <DayPicker
                        className='text-center'
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                    <p className='hidden lg:block'>You have chooced {format(selectedDate, 'PP')}</p>
                </div>
            </div>


        </div>
    );
};

export default AppoinmentBanner;