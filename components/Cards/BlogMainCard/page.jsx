import Image from 'next/image'

import BlogMainCardStyle from './BlogMainCardStyle.module.scss' 

import MainMore_btn from '../../Buttons/MainMore_btn/MainMore_btn'

import Arrow from "../../public/icons/longRightDark.png"

function BlogMainCard({img, title, header, desc ,link}) {
  return (
    <div  className={BlogMainCardStyle.wrapper}>
      <Image
      width={2000}
      height={2000}
      className={BlogMainCardStyle.img}
      src={img}
      alt={`${title} blog image`}/>

      <div className={BlogMainCardStyle.infoContainer}>

      <h5 className={BlogMainCardStyle.navigation}>
        <span className={BlogMainCardStyle.title}>
          {title}
        </span>
        | MƏQALƏ
      </h5>
        <h5 className={BlogMainCardStyle.header}>{header}</h5>
        <div className={BlogMainCardStyle.desc} dangerouslySetInnerHTML={{ __html: desc }}></div>
        <MainMore_btn arrow={Arrow} btn_style={'hero_btnDarkBorder'} link={link} label={'Daha çox'}/>
        
      </div>
    </div>
  )
}

export default BlogMainCard
