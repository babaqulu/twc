import BlogCardStyle from './BlogCardStyle.module.scss'

import Image from 'next/image'
import Arrow from '../../../public/icons/longRightDark.png'
import HeroImg from "../../../public/img/hero_img.jpg"

import MainMore_btn from '../../Buttons/MainMore_btn/MainMore_btn'

function BlogCard({locale, img, alt, title, desc, link}) {
  return (
    <div className={BlogCardStyle.wrapper}>
      <Image
      width={500}
      height={500}
      className={BlogCardStyle.img}
      src={img}
      alt={alt}
      />
      
      <h5 className={BlogCardStyle.navigation}>
        <span className={BlogCardStyle.title}>
          {title}
        </span>
        {locale === 'az' ?
        "| MƏQALƏ" 
        : "| BLOGS"}
      </h5>
      <p className={BlogCardStyle.desc}>
        {desc}
      </p>

      <MainMore_btn link={link} arrow={Arrow} btn_style={'hero_btnDarkBorder'} label={'Daha çox'}/>
    </div>
  )
}

export default BlogCard
