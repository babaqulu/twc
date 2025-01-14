import Image from 'next/image'
import eventStyle from './eventStyle.module.scss'

import MainMore_btn from '../../Buttons/MainMore_btn/MainMore_btn'


  function event({eventHero, header, desc, link}) {
  return (
    <div className={eventStyle.eventContainer}>
      <Image
      width={600}
      height={400}
      className={eventStyle.eventHero}
      src={eventHero}/>
      

      <div>
      <h3 className={eventStyle.header}>{header}</h3>
      <div className={eventStyle.desc} dangerouslySetInnerHTML={{ __html: `${desc}` }}></div>

      <MainMore_btn link={link}/>
      </div>
    </div>
  )
}

export default event