import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import '../slider2.css'
import 'swiper/css/pagination';
import Image from 'react-bootstrap/Image';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

function Mainslider() {
    return (
        <div>
            <Swiper
                modules={[Pagination,Autoplay]}
                pagination={true}
                loop={true}
                autoplay={true}
                Autoplay={{
                    delay: 2000,
                }}
            // className="mySwiper"
            >
                <SwiperSlide><Image src="https://www.snitch.co.in/cdn/shop/files/2_WebBanner_1920x1080_2_1400x.jpg?v=1726647527"></Image></SwiperSlide>
                <SwiperSlide><Image src="https://www.snitch.co.in/cdn/shop/files/3_WebBanner_1920x1080_2_fdc87bd5-d293-45ab-a6cb-6ffb3ad9f6ff_1400x.jpg?v=1726647795"></Image></SwiperSlide>
                <SwiperSlide><Image src="https://www.snitch.co.in/cdn/shop/files/5_WebBanner_1920x1080_4eacfb85-fcb6-4205-9741-ed79d7545780_1400x.jpg?v=1723909020"></Image></SwiperSlide>
                <SwiperSlide><Image src="https://www.snitch.co.in/cdn/shop/files/3_WebBanner_1920x1080_76a24f61-cdd7-482b-ab80-52a350547e6b_1400x.jpg?v=1723909020"></Image></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Mainslider