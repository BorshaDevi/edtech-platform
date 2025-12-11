'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
const Bannar=()=>{
    return(
        <div className='mt-10 md:ml-10'>
            <h1 className='text-center font-semibold text-2xl text-cyan-700'> Course Discount</h1>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img  src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1764839121/programming-background-with-person-working-with-codes-computer_dg5zi6.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1764839121/programming-background-with-person-working-with-codes-computer_dg5zi6.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1764839121/programming-background-with-person-working-with-codes-computer_dg5zi6.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1764839121/programming-background-with-person-working-with-codes-computer_dg5zi6.jpg'></img></SwiperSlide>
      </Swiper>

        </div>
    )
}
export default Bannar;