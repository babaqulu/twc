'use client'

import React from 'react'
import SliderStyle from './Slider.module.scss'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {Autoplay, Pagination, FreeMode } from 'swiper/modules';

import MemberCard from "@/components/Cards/MemberCard/MemberCard"


function MembersSlider({workersData}) {

  const pagination = {
    clickable: true,
    renderBullet: function (className) {
      return '<span class="' + className + '"></span>';
    },
  };

  return (
    <div className={SliderStyle.members}>

    <Swiper
  pagination={pagination}
  modules={[Autoplay,FreeMode,Pagination]}
  className='mySwiperMembers'
  slidesPerView={4}
  loop={true}
  speed={6000}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
  }}
  // speed={6000}
  breakpoints={{
    1024 : {
      slidesPerView: 3

    },
    550 : {
      slidesPerView: 2 

    },
    240 : {
      slidesPerView: 1 

    }

  }}
>
  {
    workersData.map((worker)=>{
      return(
        
        <SwiperSlide key={worker.id}>
        <MemberCard
        key={worker.id}
        img={worker.image}
        name={worker.name}
        position={worker.position}
        />
        </SwiperSlide>
      )
    })
  }

</Swiper>

</div>
  )
}

export default MembersSlider
