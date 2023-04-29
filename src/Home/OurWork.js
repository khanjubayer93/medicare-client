import React from 'react';
import { BsFillHeartFill, } from "react-icons/bs";
import { FaBriefcaseMedical, FaEye, FaWheelchair } from 'react-icons/fa';


const OurWork = () => {
    return (
        <div className='lg:mx-40'>
            <div className='text-center my-20'>
                <h1 className='text-4xl font-semibold'>What we do?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ut explicabo expedita ipsam rerum repellat?</p>
            </div>
            <div className='grid lg:grid-cols-3 mb-10'>
                <div>
                    <div>
                        <div className='flex items-center gap-3 text-sky-500 hover:text-slate-500'>
                            <BsFillHeartFill className='text-5xl' />
                            <h2 className='text-xl uppercase font-semibold'>CARDIAC CLINIC</h2>
                        </div>
                        <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quaerat laudantium consectetur maxime fuga architecto accusamus provident, perspiciatis, ex, illum nulla vitae quod impedit unde.</p>
                        <span className='font-semibold text-sky-500'>Read More</span>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <div className='flex items-center gap-3 text-sky-500 hover:text-slate-500'>
                            <FaEye className='text-5xl' />
                            <h2 className='text-xl uppercase font-semibold'>EYE CARE & SURGERY</h2>
                        </div>
                        <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quaerat laudantium consectetur maxime fuga architecto accusamus provident, perspiciatis, ex, illum nulla vitae quod impedit unde.</p>
                        <span className='font-semibold text-sky-500' >Read More</span>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <img src="https://i.pinimg.com/736x/2c/2e/80/2c2e8058097a471dc48821cf86096962.jpg" alt="" />
                </div>
                <div>
                    <div>
                        <div className='flex items-center gap-3 text-sky-500 hover:text-slate-500'>
                            <FaBriefcaseMedical className='text-5xl' />
                            <h2 className='text-xl uppercase font-semibold'>DIABETES TREATMENT</h2>
                        </div>
                        <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quaerat laudantium consectetur maxime fuga architecto accusamus provident, perspiciatis, ex, illum nulla vitae quod impedit unde.</p>
                        <span className='font-semibold text-sky-500'>Read More</span>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <div className='flex items-center gap-3 text-sky-500 hover:text-slate-500'>
                            <FaWheelchair className='text-5xl' />
                            <h2 className='text-xl uppercase font-semibold'>EMERGENCY SERVICES</h2>
                        </div>
                        <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quaerat laudantium consectetur maxime fuga architecto accusamus provident, perspiciatis, ex, illum nulla vitae quod impedit unde.</p>
                        <span className='font-semibold text-sky-500' >Read More</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWork;