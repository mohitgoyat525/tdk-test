import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import { CARS_IMG_LIST } from '../../utils/helper';

// Component
function CharcterSwiper() {
    return (
        <>
            <h2 className="text-center font-medium text-3xl pt-5">Swiper Slider</h2>
            <div className="container flex justify-center items-center my-10 max-lg:my-5">
                <Swiper
                    slidesPerView={1} 
                    spaceBetween={20} 
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1, 
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3, 
                            spaceBetween: 40,
                        },
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {CARS_IMG_LIST.map((item, i) => (
                        <SwiperSlide key={i} className='pb-10'>
                            <img
                                src={item.img}
                                alt='cars'
                                className="w-full max-w-[375px] h-[571px] rounded-xl object-cover pointer-events-none max-sm:mx-auto"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default CharcterSwiper;
