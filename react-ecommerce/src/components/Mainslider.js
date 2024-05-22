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
                <SwiperSlide><Image src="https://www.snitch.co.in/cdn/shop/files/denim-banner_1400x.webp?v=1713529216"></Image></SwiperSlide>
                <SwiperSlide><Image src="https://www.snitch.co.in/cdn/shop/files/Summer-2-blue-web_1400x.webp?v=1712295900"></Image></SwiperSlide>
                <SwiperSlide><Image src="https://www.snitch.co.in/cdn/shop/files/Suits-new-banner-web_1400x.webp?v=1712758060"></Image></SwiperSlide>
                <SwiperSlide><Image src="https://www.snitch.co.in/cdn/shop/files/new-in-summers_1400x.webp?v=1713529199"></Image></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Mainslider