import BottomStyle from './KaryeraBottomCardStyle.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function KaryeraBottomCard({link, img, title, BottomBg}) {
  return (
    <Link className={BottomStyle.mainContainer}
    href={`/${link}`}>
      <div className={BottomStyle.imagesContainer}>
      <Image
      width={350}
      height={215}
      src={img}
      className={BottomStyle.img}/>
      <Image
      width={406}
      height={271}
      src={BottomBg}
      className={BottomStyle.bgImg}/>
      </div>
      <p className={BottomStyle.title}>{title}</p>
    </Link>
  )
}

export default KaryeraBottomCard
