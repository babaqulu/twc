"use client"

import MemberStyle from './memberCard.module.scss'
import Image from 'next/image' 
import Link from 'next/link'

import LinkedinIcon from '../../../public/icons/linkedin-dark.png'
import FacebookinIcon from '../../../public/icons/facebook-dark.png'
import InstagramIcon from '../../../public/icons/instagram-dark.png'




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


