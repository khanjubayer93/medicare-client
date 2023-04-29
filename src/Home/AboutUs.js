import React from 'react';
import { BsRecordCircle } from 'react-icons/bs';

const options = [
    {
        title: 'Searchable Directory'
    },
    {
        title: 'Detailed provider profiles'
    },
    {
        title: 'Appointment scheduling'
    },
    {
        title: 'Online consultations'
    },
    {
        title: 'Patient resources'
    },
]

const AboutUs = () => {
    return (
        <div className='flex'>
            <div className='w-1/2'>
                <img src="https://th.bing.com/th/id/R.43a53e7dff8b29eae5e9a7d232d7e001?rik=K%2bOovrgQeM5U9Q&pid=ImgRaw&r=0" alt="" />
            </div>
            <div className='w-[550px]'>
                <h2 className='text-sky-500 uppercase mb-5 font-bold'>About medicare</h2>
                <h1 className='text-5xl font-bold text-slate-500'>Bring care to your home with one click</h1>
                <p className='my-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ratione deserunt, perferendis corporis unde vero praesentium similique ex quibusdam hic eligendi velit nisi vitae maxime consequuntur at, iure quod natus</p>
                <div className='grid grid-cols-2'>
                    {
                        options.map((option, i) =>
                            <div
                            key={i}
                            className='flex items-center gap-2 mb-2'
                            >
                                <BsRecordCircle className='text-sky-500'/>
                                <p>{option.title}</p>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AboutUs;