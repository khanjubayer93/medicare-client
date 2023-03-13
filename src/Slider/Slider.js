import { Swiper, SwiperSlide } from "swiper/react";
import AppoinmentCard from "../Pages/AppoinmentCard";
import { Navigation, Pagination, Mousewheel, Keyboard, EffectFlip } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Slider = ({ slots, setBookingSlot }) => {
    return (
        <Swiper
            className="lg:w-3/4"
            // effect={"flip"}

            spaceBetween={0}
            slidesPerView={2}
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            breakpoints={{
                "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                "@1.50": {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        >
            {
                slots.map(slot => <SwiperSlide
                    className="px-10 mb-10"
                    key={slot._id}
                >
                    <AppoinmentCard
                        setBookingSlot={setBookingSlot}
                        slot={slot}
                    ></AppoinmentCard>
                </SwiperSlide>)
            }
        </Swiper>
    )
}