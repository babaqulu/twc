'use client'

import React, { useState } from 'react'

//image
import Arrow from "@/public/icons/longRight.png"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {Autoplay, Pagination, FreeMode } from 'swiper/modules';

import Image from 'next/image'
import MainProjectsStyle from './MainProjectsStyle.module.scss'
import MainMore_btn from '../Buttons/MainMore_btn/MainMore_btn'

function MainProjects({mainProjectData, locale}) {
  const [activeDesc, setActiveDesc] = useState(false)
    
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };

  return (
    
          <Swiper
        pagination={pagination}
        modules={[Autoplay, FreeMode,Pagination]}
        className='mySwiperProjects'
        slidesPerView={1}
        loop={true}
        speed={6000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >


          {
            mainProjectData.map((project)=>{
              return(
                <SwiperSlide key={project.id}>

                <div key={project.id} className={MainProjectsStyle.mainContainer}>

                  <Image
                width={543}
                height={570}
                className={MainProjectsStyle.hero}
                src={project.image}/>

                <div className={MainProjectsStyle.rightContainer}>

                  <div className={MainProjectsStyle.smWrapper}> 

                  <h3 className={MainProjectsStyle.header}>{locale === 'az' ? "Əsas Layihələrimiz" : "Main Projects"}</h3>
                  <Image
                  width={500}
                  height={500}
                  className={MainProjectsStyle.logo}
                  src={project.logo}
                  alt='Project logo'/>
                  
                  </div>

                  <div className={MainProjectsStyle.rightInsideContainer}>
                    <div className={MainProjectsStyle.points}>
                      <h3 className={MainProjectsStyle.secondaryHeader}>
                      {locale === 'az' ? "Bizim Yanaşmamız:" : "Our Approach:"}
                      </h3>
                      {activeDesc ? <p className={MainProjectsStyle.pointsDescActive}>{project.our_point}</p>  :
                      <p className={MainProjectsStyle.pointsDesc}>{project.our_point.slice(0,90)+'...'}</p>}

                      <p className={MainProjectsStyle.pointsDescActiveSm}>{project.our_point}</p>

                      <button 
                      onClick={()=>setActiveDesc(!activeDesc)}
                      className={MainProjectsStyle.moreBtn}>
                      <Image
                      className={MainProjectsStyle.moreIcon}
                      src={Arrow}
                      alt="More"
                      />
                              {locale === 'az' ? "Daha çox" : "More"}
                              
                        </button>
                    </div>
                    <div className={MainProjectsStyle.steps}>
                      <h3 className={MainProjectsStyle.secondaryHeader}>
                      {locale==='az' ? "Layihənin mərhələləri" : "Project stages"}
                      </h3>
                      <div className={MainProjectsStyle.stepsDesc} dangerouslySetInnerHTML={{ __html: `${project.project_steps}` }}></div>
                    </div>
                  </div>

                </div>

                </div>
                </SwiperSlide>
              )
            })
          }



      </Swiper>

    
  )
}

export default MainProjects
