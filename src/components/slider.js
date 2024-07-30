// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../styles.css';

// import required modules
import {Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
    <div className='pb-[6rem] hidden lg:block'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        loop={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: -40,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
            clickable: true,
          }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='lg:rounded-2xl lg:h-96'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='lg:rounded-2xl lg:h-96'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='lg:rounded-2xl lg:h-96'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='lg:rounded-2xl lg:h-96'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='lg:rounded-2xl lg:h-96'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='lg:rounded-2xl lg:h-96'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='lg:rounded-2xl lg:h-96'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='lg:rounded-2xl lg:h-96'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='lg:rounded-2xl lg:h-96'></div>
        </SwiperSlide>
      </Swiper>
      </div>

      <div className='pb-[6rem] hidden md:block lg:hidden'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        spaceBetween={-160}
        centeredSlides={true}
        autoplay={{
            delay: 2250,
            disableOnInteraction: false,
          }}
        loop={true}
        slidesPerView={1.3}
        coverflowEffect={{
          rotate: 50,
          stretch: -300,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
            clickable: true,
          }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='rounded-xl h-[48vw]'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-xl h-[48vw]'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-xl h-[48vw]'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-xl h-[48vw]'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-xl h-[48vw]'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-xl h-[48vw]'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-xl h-[48vw]'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-xl h-[48vw]'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-xl h-[48vw]'></div>
        </SwiperSlide>
      </Swiper>
      </div>

      <div className='pb-[6rem] block md:hidden'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
            delay: 2250,
            disableOnInteraction: false,
          }}
        loop={true}
        slidesPerView={1.24}
        coverflowEffect={{
          rotate: 50,
          stretch: -30,
          depth: 400,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
            clickable: true,
          }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='rounded-xl h-[48vw]'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-xl h-[48vw]'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-xl h-[48vw]'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-xl h-[48vw]'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-xl h-[48vw]'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-xl h-[48vw]'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-xl h-[48vw]'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-xl h-[48vw]'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-xl h-[48vw]'></div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
