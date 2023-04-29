import React from 'react';
import { FaAmbulance, FaLeaf, FaRegClock, FaUserMd } from 'react-icons/fa';

const OurService = () => {
    return (
        <div>
            <div className='text-center mt-14 mb-10'>
                <div className='text-4xl font-bold'>Our Services</div>
                <p>You will get 24/7 hours our services</p>
            </div>
            <div className='grid lg:grid-cols-4 mb-20'>
                <div className='text-center bg-red-500 text-white p-8'>
                    <FaUserMd className='text-5xl inline'/>
                    <h2 className='text-3xl font-bold my-4'>Qualified Doctors</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                </div>
                <div className='text-center bg-red-400 text-white p-8'>
                    <FaAmbulance className='text-5xl inline'/>
                    <h2 className='text-3xl font-bold my-4'>Emergency Services</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                </div>
                <div className='text-center bg-red-500 text-white p-8'>
                    <FaLeaf className='text-5xl inline'/>
                    <h2 className='text-3xl font-bold my-4'>Transplant Services</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                </div>
                <div className='text-center bg-red-400 text-white p-8'>
                    <FaRegClock className='text-5xl inline'/>
                    <h2 className='text-3xl font-bold my-4'>24/7 Services</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                </div>
            </div>
        </div>
    );
};

export default OurService;