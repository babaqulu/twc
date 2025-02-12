'use client'

import React from 'react'
import BlogCard from '../Cards/BlogCard/BlogCard'
import blogSwiperStyle from './blogSwiperStyle.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {Autoplay, Pagination, FreeMode } from 'swiper/modules';

function blogCardSwiper({blogsData}) {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };


  return (
    <div className={blogSwiperStyle.homeBlogs}>

        <Swiper
      pagination={pagination}
      modules={[Autoplay, FreeMode,Pagination]}
      className='mySwiperBlogCards'
      slidesPerView={3}
      loop={true}
      speed={6000}
      autoplay={{
        delay: 0,
        disableOnInteraction: true,
      }}
      breakpoints={{
        1920 : {
          slidesPerView: 5 

        },
        1470 : {
          slidesPerView: 4 

        },
        723 : {
          slidesPerView: 3 

        },
        480 : {
          slidesPerView: 2 

        },
        240 : {
          slidesPerView: 1 

        },

      }}
    >
      
    {blogsData.map(blog=>
      (
      <SwiperSlide key={blog.id}>

        <BlogCard key={blog.id} link={`blogs/${blog.id}`} img={blog.image} title={blog.name}
        desc={blog.title}/>
      </SwiperSlide>
    ))}
    </Swiper>


</div>
  )
}

export default blogCardSwiper
