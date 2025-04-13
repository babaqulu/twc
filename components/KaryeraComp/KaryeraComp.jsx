import Image from 'next/image'
import BG from '@/public/img/BG.png'
import KaryeraHero from '@/public/img/karyeraComponentHero.png'

import KaryeraStyle from "./karyeraCompstyle.module.scss"

import BlueMore_btn from "../Buttons/BlueMore_btn/MoreBtn";

function Karyera({ locale }) {

  return (
    <div
    className={KaryeraStyle.karyeraMainContainer}>
      <div className={KaryeraStyle.headerContainer}>
        <h3 className={KaryeraStyle.karyeraHeader}>
        {locale === 'az' ? "KARYERANIZA BİZİMLƏ BAŞLAYIN" : "START YOUR CAREER WITH US"}
        </h3>
        <BlueMore_btn  locale={locale} link={'karyera'}/>
      </div>
      <div className={KaryeraStyle.heroContainer}>
        <Image
        width={282}
        height={282}
        className={KaryeraStyle.hero}
        src={KaryeraHero}/>
      </div>
      <Image
      className={KaryeraStyle.bg}
      src={BG}/>
    </div>
  )
}

export default Karyera
