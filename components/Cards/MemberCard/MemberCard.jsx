"use client"

import MemberStyle from './memberCard.module.scss'
import Image from 'next/image' 





export default function memberCard ({img,name,position}){




  return (
    <div className={MemberStyle.cardContainer}>
      <Image
      width={312}
      height={312}
      className={MemberStyle.cardImg}
      priority={false}
      src={img}
      alt='Member image'/>

      <div className={MemberStyle.userInfo}>
        <h1 className={MemberStyle.userName}>{name}</h1>
        <p className={MemberStyle.userDesc}>{position}</p>

      </div>

    </div>
  )
}


