"use client"
import clientSlideStyle from './clientsSlideStyle.module.scss'
import React from 'react'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
// import required modules
import { Pagination, FreeMode } from 'swiper/modules';
import Image from 'next/image';

function clientsSlide({clientsData}) {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };
  return (
    <div className={clientSlideStyle.clientsLogos}>

      <Swiper
        pagination={pagination}
        modules={[FreeMode,Pagination]}
        className='mySwiperClients'
        spaceBetween={10}
        slidesPerView={4}
        >
  
    {
      clientsData.map((logo)=>(
        <SwiperSlide key={logo.id} className={clientSlideStyle.swiperSlide}>
        <Image
        width={400}
        height={400}
        key={logo.id}
        className={clientSlideStyle.clientsLogo}
        src={logo.logo}
        alt='Clients logo'
        />
        </SwiperSlide>
      ))
    }
  
</Swiper>
        
      </div>
  )
}

export default clientsSlide
