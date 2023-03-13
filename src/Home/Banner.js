import React, { useState } from 'react';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const Banner = () => {
    const slides =
        [
            {
                url: 'https://hher24.com/wp-content/uploads/2018/07/shutterstock_680298211.jpg'
            },
            {
                url: 'https://sa1s3optim.patientpop.com/assets/images/provider/photos/2463393.jpg'
            },
            {
                url: 'https://cdn.cdnparenting.com/articles/2018/07/340094927-H.webp'
            }
        ]

    const [currentSlide, setCurrentSlide] = useState(0);

    const preveSlide = () => {
        const isFirstSlide = currentSlide === 0;
        const newSlide = isFirstSlide ? slides.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide)
    }
    const nextSlide = () => {
        const isLastSlide = currentSlide === slides.length - 1;
        const newSlide = isLastSlide ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide)
    }


    return (
        <div className='max-w-[1350px] h-[780px] w-full m-auto pt-1 pb-16 px-4 relative group'>
            <div style={{ backgroundImage: `url(${slides[currentSlide].url})` }} className='w-full h-full rounded-md bg-center bg-cover duration-500'>
            </div>
            {/* Left arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-4 text-2xl  py-5 px-2 bg-slate-100  cursor-pointer opacity-60'>
                <MdArrowBackIos onClick={preveSlide} size={30} />
            </div>
            {/* Right arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-4 text-2xl  py-5 px-2 bg-slate-100  cursor-pointer opacity-60'>
                < MdArrowForwardIos onClick={nextSlide} size={30} />
            </div>
        </div>
    );
};

export default Banner;