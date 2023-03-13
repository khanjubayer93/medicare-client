import React from 'react';
import Team from './Team';

const OurTeam = () => {
    return (
        <div className='bg-base-200'>
            <div className='lg:flex justify-center items-center'>
                <div className='lg:w-1/2 sm:mb-3'>
                    <img src="https://medicare.bold-themes.com/clinic-rtl/wp-content/uploads/sites/24/2015/12/doktorka.png" alt="" />
                </div>
                <div className='lg:w-1/2'>
                    <p className='border-b-4 border-accent lg:w-1/2 pb-1'>Dr. Nur Alom</p>
                    <h1 className='text-5xl my-5'>Our <span className='font-bold text-accent'>Team</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quae fuga error asperiores esse earum assumenda reiciendis repellendus saepe iste est aliquam repudiandae velit cumque quasi at eius voluptatem, sint, veritatis iure provident maxime! Doloribus debitis impedit totam ratione nesciunt iste quibusdam magni quasi aliquid error at, atque, quam dicta.</p>
                </div>
            </div>
            <div className='lg:mx-40 lg:my-20'>
                <Team></Team>
            </div>
        </div>
    );
};

export default OurTeam;