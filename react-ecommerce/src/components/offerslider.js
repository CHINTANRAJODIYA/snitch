import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import '../slider1.css'
import { Autoplay } from "swiper/modules";
import { FaUnderline } from "react-icons/fa6";


function Offerslider() {
  return (
    <div  className="fix mySwiper slide-text">
  
    <Swiper
    modules={[Autoplay]}
    loop={true}
    autoplay={true}
    Autoplay={{
        delay: 500,
    }}
    >
    <SwiperSlide>GET FLAT 20% OFF ON 3999/- USE CODE: FLAT20</SwiperSlide>
    <SwiperSlide>FLAT 10% OFF ON YOUR 1ST APP PURCHASE <underline> DOWNLOAD APP</underline></SwiperSlide>
    <SwiperSlide>FLAT 50% OFF ON SELECT COLLECTION USE CODE: WOW50</SwiperSlide>

  </Swiper>
        </div>
  )
}

export default Offerslider