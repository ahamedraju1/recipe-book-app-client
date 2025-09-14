import React from 'react';
import slider_1 from '../assets/slider_1.jpg'
import slider_2 from '../assets/slider_2.jpg'
import slider_3 from '../assets/slider_3.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
 

const Slider = () => {

    return (

        <div className='w-full pt-20'>
        <Swiper 
        modules={[Navigation,Pagination,Autoplay]}
         spaceBetween={30}
          slidesPerView={1}
          
          pagination={{clickable: true}}
          autoplay ={{delay: 3000, disableOnInteraction: false}}
          loop={true}
          className='w-full h-[400px] md:h-[500px] lg:h-[600px]'>

            <SwiperSlide>
                <img src={slider_1} alt="slider_1" className='w-full h-full object-cover rounded-xl'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slider_2} alt="slider_2" className='w-full h-full object-cover rounded-xl' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slider_3} alt="slider_3" className='w-full h-full object-cover rounded-xl'/>
            </SwiperSlide>
            <div className="swiper-button-prev !w-8 !h-8 text-white after:!text-sm"></div>
            <div className="swiper-button-next !w-8 !h-8 text-white after:!text-sm"></div>
        </Swiper>
        </div>
    );
};

export default Slider;