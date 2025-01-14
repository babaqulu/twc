import Image from 'next/image'

import PhotoTextStyle from './PhotoText.module.scss'

function PhotoText({PTimg,PTtext}) {
  return (
    <div className={PhotoTextStyle.container}>
    <Image
    className={PhotoTextStyle.img}
    src={PTimg}
    alt={PTtext}/>
    <p className={PhotoTextStyle.text}>{PTtext}</p>
  </div>
  )
}

export default PhotoText
