import Image from 'next/image'

import PartnersStyle from './PartnersStyle.module.scss'

import MainMore_btn from '../Buttons/MainMore_btn/MainMore_btn'

  function Partners({link, title, desc, img}) {

  return (
    <div className={PartnersStyle.partnersWrapper}>

    <div className={PartnersStyle.partnersTextWrapper}>
    <h1 className={PartnersStyle.partnersTitle}>{title}</h1>
      <div
        className={PartnersStyle.partnersDesc}
        dangerouslySetInnerHTML={{ __html: `${desc}` }}
        ></div>
      <MainMore_btn link={link}/>
    </div>
      
      <Image
      src={img}
      className={PartnersStyle.partnersImg}
      width={544}
      height={288}/>
    </div>
  )
}

export default Partners